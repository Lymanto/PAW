<?php

namespace App\Http\Controllers\Mahasiswa;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\Classes;
use App\Models\History;
use App\Models\Video;
use Illuminate\Http\Request;

class YourClassController extends Controller
{
    public function index()
    {
        $member = Member::where("user_id" ,'=',auth()->user()->id)
                ->whereIsApproved(true)
                ->with('classes:id,user_id,title,photo','classes.user:id,name')
                ->get();

        return inertia('Mahasiswa/YourClass/Index',["member"=>$member]);
    }

    public function detail(Request $request)
    {   
        $history = History::where("user_id",auth()->user()->id)
                ->where('class_id',$request->id)
                ->first();
        $videoList = Video::where('class_id',$request->id)->first();
        if($history){
            return redirect()->route('mahasiswa.class.detail.video',[$request->id,$history->video_id]);
        }else{
            if($videoList){
                History::create([
                    'user_id' => auth()->user()->id,
                    'class_id' => $request->id,
                    'video_id' => $videoList->id,
                ]);
                return redirect()->route('mahasiswa.class.detail.video',[$request->id,$videoList->id]);
            }
            return abort(404);
        }
    }

    public function video(Request $request)
    {   
        $detail = Classes::where('id',$request->id)->with('user:id,name')->first();
        $videoList = Video::where('class_id',$request->id)->get();
        $active = Video::where('id',$request->videoId)->first();
        return inertia('Mahasiswa/ClassDetail/Index',["detail"=>$detail,"videoList"=>$videoList,'active'=>$active]);
    }

    public function history(Request $request)
    {
        $history = History::where("user_id",auth()->user()->id)
                ->where('class_id',$request->class_id)
                ->first();
        if($history){
            $history->video_id = $request->video_id;
            $history->save();
            return redirect()->route('mahasiswa.class.detail.video',[$request->class_id,$request->video_id]);
        }else{
            History::create([
                'user_id' => auth()->user()->id,
                'class_id' => $request->class_id,
                'video_id' => $request->video_id,
            ]);
            return redirect()->route('mahasiswa.class.detail.video',[$request->class_id,$request->video_id]);
        }
    }
}