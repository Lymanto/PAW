<?php

use App\Http\Controllers\Dosen\DetailpageController;
use Illuminate\Foundation\Application;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Dosen\HomepageController as DosenHomepageController;
use App\Http\Controllers\Dosen\NotificationController;
use App\Http\Controllers\Dosen\UploadController;
use App\Http\Controllers\Dosen\VideoController;
use App\Http\Controllers\Mahasiswa\HomepageController;
use App\Http\Controllers\Mahasiswa\AllCoursesController;
use App\Http\Controllers\Mahasiswa\EnrollController;
use App\Http\Controllers\Mahasiswa\YourClassController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::redirect('/', '/login');

Route::middleware(['auth','role:mahasiswa'])->prefix('home')->name('mahasiswa.home')->group(function(){
    Route::get('/',[HomepageController::class,'index'])->name('index');
});

Route::middleware(['auth','role:mahasiswa'])->prefix('courses')->name('mahasiswa.courses')->group(function(){
    Route::get('/',[AllCoursesController::class,'index'])->name('index');
    Route::post('/filter/major',[AllCoursesController::class,'getByMajor'])->name('filter.major');
    Route::post('/all',[AllCoursesController::class,'getAll'])->name('all');
});

Route::middleware(['auth','role:mahasiswa'])->prefix('enroll')->name('mahasiswa.enroll')->group(function(){
    Route::get('{id}',[EnrollController::class,'index'])->name('index');
    Route::post('check',[EnrollController::class,'enroll'])->name('enroll');
});

Route::middleware(['auth','role:mahasiswa'])->prefix('class')->name('mahasiswa.class.')->group(function(){
    Route::get('/',[YourClassController::class,'index'])->name('index');    
    
    Route::get('detail/{id}',[YourClassController::class,'detail'])->name('detail');    
    Route::get('detail/{id}/video/{videoId}',[YourClassController::class,'video'])->name('detail.video');    
    
    Route::post('history',[YourClassController::class,'history'])->name('history');    
});

Route::middleware(['auth','role:mahasiswa'])->prefix('profile')->name('profile')->group(function(){
    Route::get('/',[ProfileController::class,'index'])->name('index');
});

Route::middleware(['auth','role:dosen'])->prefix('dosen')->name('dosen.home.')->group(function(){
    Route::get('home',[DosenHomepageController::class,'index'])->name('index');
    
    Route::get('class/detail/{id}',[DetailpageController::class,'index'])->name('detail');
    Route::post('class/detail/reject',[DetailpageController::class,'reject'])->name('detail.reject');
    Route::post('class/detail/accept',[DetailpageController::class,'accept'])->name('detail.accept');
    
    Route::get('class/detail/{id}/upload',[UploadController::class,'index'])->name('upload');
    Route::post('class/detail/{id}/upload/store', [UploadController::class, 'store'])->name('upload.store');
    
    Route::get('notification',[NotificationController::class,'index'])->name('notification');
    
    Route::get('class/detail/{id}/video/{videoId}',[VideoController::class,'index'])->name('video');
    
    Route::get('profile',[ProfileController::class,'index'])->name('profile');
});





require __DIR__.'/auth.php';
