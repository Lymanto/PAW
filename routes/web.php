<?php

use Illuminate\Foundation\Application;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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




Route::get('/',function(){
    return Inertia::render('Login');
});

Route::get('/home',function(){
    return Inertia::render('Mahasiswa/Homepage');
});

Route::get('/courses',function(){
    return Inertia::render('Mahasiswa/AllCourses');
});

Route::get('/class',function(){
    return Inertia::render('Mahasiswa/YourClass');
});
Route::get('/profile',function(){
    return Inertia::render('YourProfile');
});
Route::get('/enroll/{id}',function(){
    return Inertia::render('Mahasiswa/Enroll');
});
Route::get('/class/detail/{id}',function(){
    return Inertia::render('Mahasiswa/ClassDetail');
});

Route::get('/dosen/home',function(){
    return Inertia::render('Dosen/Homepage');
});

Route::get('/dosen/notification',function(){
    return Inertia::render('Dosen/Notification');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/auth.php';
