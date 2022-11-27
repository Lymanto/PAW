<?php

namespace App\Http\Controllers\Dosen;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\Video;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class UploadController extends Controller
{
    

    public function index(Request $request)
    {
        $classes = Classes::where("id", $request->id)->first();
        
        return inertia("Dosen/Upload/Index",["classes"=>$classes]);
        
    }
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:100',
            'description' => 'required|max:255',
            'video_url' => 'required|mimetypes:video/mp4,video/quicktime',
        ],[
            "title.required" => 'Judul video tidak boleh kosong',
            "title.max" => 'Judul video tidak boleh lebih dari 100 huruf',
            "description.required" => 'Description video tidak boleh kosong',
            "description.max" => 'Description video tidak boleh lebih dari 255 huruf',
            "video_url.required" => 'Tidak ada video yang diupload',
            "video_url.mimetypes" => 'Format video tidak didukung',
        ]);

        
        //get the base-64 from data
        $base64_str = substr($request->thumbnail, strpos($request->thumbnail, ",")+1);

        //decode base64 string
        $thumbnail = base64_decode($base64_str);

        $thumbnailName = time().'.'.'png';
        Storage::disk('public')->put('images/'.$thumbnailName, $thumbnail);
        
        
        $videoPath = $request->file('video_url')->store('videos', ['disk' =>'public']);
        Video::create([
            'class_id' => $request->id,
            'title' => $request->title,
            'description' => $request->description,
            'thumbnail' => $thumbnailName,
            'video_url' => $videoPath
        ]);
    
        return redirect()->route('dosen.home.upload',["id" => $request->id])->with('success','You have successfully upload video.');
    }
    
}
