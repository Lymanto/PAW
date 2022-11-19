<?php

namespace App\Http\Controllers\Mahasiswa;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\Classes;
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
        $detail = Classes::where('id',$request->id)->first();
        $videoList = Video::where('class_id',$request->id)->get();
        
        return inertia('Mahasiswa/ClassDetail/Index',["detail"=>$detail,"videoList"=>$videoList]);
    }
}