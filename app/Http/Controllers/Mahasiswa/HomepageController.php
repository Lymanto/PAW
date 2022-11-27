<?php

namespace App\Http\Controllers\Mahasiswa;

use App\Http\Controllers\Controller;
use App\Models\History;
use Illuminate\Http\Request;

class HomepageController extends Controller
{
    public function index()
    {
        $history = History::where("user_id",auth()->user()->id)
                ->with('video:id,title,thumbnail','classes:id,user_id,title','classes.user:id,name')
                ->get();
        return inertia('Mahasiswa/Homepage/Index',['history'=>$history]);
    }
    
}
