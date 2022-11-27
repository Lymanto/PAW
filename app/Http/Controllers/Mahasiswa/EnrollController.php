<?php

namespace App\Http\Controllers\Mahasiswa;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\Member;
use Illuminate\Http\Request;

class EnrollController extends Controller
{
    public function index(Request $request)
    {
        $member = Member::where("user_id",auth()->user()->id)
                ->where("class_id",$request->id)
                ->whereIsApproved(true)
                ->first();
        if($member){
            return redirect()->route('mahasiswa.class.detail',[$request->id]);
        }else{
            $classes = Classes::where("id",$request->id)
                                ->with("user:id,name")
                                ->first();
        
            return inertia('Mahasiswa/Enroll/Index',["classes"=>$classes]);
        }
    }

    public function enroll(Request $request)
    {
        $enroll = Classes::where("id" ,'=',$request->id)
                            ->where('class_code','=',$request->class_code)
                            ->get();
        if($enroll->count() > 0){
                                
            $member = Member::where("user_id" ,'=',auth()->user()->id)
                                ->where('class_id','=',$request->id)
                                ->get();
            if($member->count() == 0){
                $member = Member::create([
                    "user_id" => auth()->user()->id,
                    "class_id" => $request->id
                ]);
                return response()->json(["message"=>"Berhasil bergabung menunggu untuk di approve"],201);
            }else{
                return response()->json(["message"=>"Anda sudah terdaftar tetapi belum di approve"],201);
            }
        }else{
            return response()->json(["message"=>"Kode Kelas Salah"],400);
        }
    }
}
