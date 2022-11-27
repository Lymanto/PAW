<?php

namespace App\Http\Controllers\Dosen;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Video;
class VideoController extends Controller
{
    public function index(Request $request)
    {
        $video = Video::where('id',$request->videoId)->with("classes:id,title")->first();
        return inertia("Dosen/Video/Index",[
            "video" => $video
        ]);
    }
}
