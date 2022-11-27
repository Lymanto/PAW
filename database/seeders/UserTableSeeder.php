<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name'=>'admin',
            'email'=>'admin@pradita.ac.id',
            'password'=>bcrypt('admin123'),
        ]);
        $admin->assignRole('admin');
        
        $dosen = User::create([
            'name'=>'Handri Santoso',
            'email'=>'handri.santoso@pradita.ac.id',
            'password'=>bcrypt('dosen123'),
        ]);
        $dosen->assignRole('dosen');
        
        $mahasiswa = User::create([
            'name'=>'Lymanto Hadibrata',
            'nim'=>'2010101022',
            'email'=>'lymanto.hadibrata@student.pradita.ac.id',
            'password'=>bcrypt('mahasiswa123'),
            'major'=>"Informatika",
        ]);
        $mahasiswa->assignRole('mahasiswa');
        
    }
}
