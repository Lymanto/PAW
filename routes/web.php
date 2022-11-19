<?php

use Illuminate\Foundation\Application;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Mahasiswa\HomepageController;
use App\Http\Controllers\Mahasiswa\AllCoursesController;
use App\Http\Controllers\Mahasiswa\EnrollController;
use App\Http\Controllers\Mahasiswa\YourClassController;

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

Route::middleware(['auth','role:mahasiswa'])->prefix('class')->name('mahasiswa.class')->group(function(){
    Route::get('/',[YourClassController::class,'index'])->name('index');    
    Route::get('detail/{id}',[YourClassController::class,'detail'])->name('detail');    
});


Route::get('/profile',function(){
    return Inertia::render('YourProfile');
});



Route::get('/dosen/home',function(){
    return Inertia::render('Dosen/Homepage');
});

Route::get('/dosen/notification',function(){
    return Inertia::render('Dosen/Notification');
});

Route::get('/dosen/class/detail/{id}',function(){
    return Inertia::render('Dosen/ClassDetail');
});

Route::get('/dosen/class/detail/{id}/upload',function(){
    return Inertia::render('Dosen/Upload');
});



require __DIR__.'/auth.php';
