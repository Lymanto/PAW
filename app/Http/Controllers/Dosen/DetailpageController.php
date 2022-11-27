<?php

namespace App\Http\Controllers\Dosen;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\Member;
use App\Models\Video;
use Illuminate\Http\Request;

class DetailpageController extends Controller
{
    public function index(Request $request)
    {
        $classes = Classes::where("id",$request->id)->first();
        $member = Member::where('class_id',$request->id)
                        ->whereIsApproved(true)
                        ->with("user:id,name,nim")->get();
        $waiting = Member::where('class_id',$request->id)
                        ->whereIsApproved(false)
                        ->with("user:id,name,nim")->get();
        $videos = Video::where('class_id',$request->id)->get();
        return inertia("Dosen/ClassDetail/Index",[
            "classes" => $classes,
            "member" => $member,
            "waiting" => $waiting,
            "videos" => $videos,
        ]);
    }
    public function accept(Request $request)
    {
        Member::where("id",$request->id)
                        ->update(["is_approved" => true]);
        return redirect()->back()->with('success', 'Berhasil menerima mahasiswa');
    }
    public function reject(Request $request)
    {
        Member::find($request->id)->delete();
        return redirect()->back()->with('success', 'Berhasil menolak mahasiswa');
    }
}
