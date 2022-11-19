<?php

namespace App\Http\Controllers\Mahasiswa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Major;
use App\Models\Classes;

class AllCoursesController extends Controller
{
    public function index()
    {
        
        $major = Major::all();
        
        $courses = Classes::with('user:id,name')->get();

        return inertia('Mahasiswa/AllCourses/Index',[
            "major" => $major,
            "courses" => $courses,
        ]);
    }
    public function getAll(){
        $courses = Classes::with('user:id,name')->get();
        return $courses;
    }
    public function getByMajor(Request $request){
        $courses = Classes::where('major_id','=',$request->major_id)->with('user:id,name')->get();
        return $courses;
    }
}
