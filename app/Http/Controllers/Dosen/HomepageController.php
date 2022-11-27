<?php

namespace App\Http\Controllers\Dosen;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use Illuminate\Http\Request;

class HomepageController extends Controller
{
    public function index()
    {
        $classes = Classes::where('user_id',auth()->user()->id)->with("user:id,name")->get();
        return inertia('Dosen/Homepage/Index',["classes"=>$classes]);
    }
    
}
