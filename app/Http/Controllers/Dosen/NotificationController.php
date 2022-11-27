<?php

namespace App\Http\Controllers\Dosen;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\Member;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index()
    {
        $classes = Classes::where('user_id', auth()->user()->id)->get('id');
        $notification = Member::whereIn('class_id',$classes)->whereIsApproved(false)->with("user:id,name,nim","classes:id,title")->get();
        return inertia("Dosen/Notification/Index", [
            "notification" => $notification
        ]);
    }
}
