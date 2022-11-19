<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Classes;
class ClassesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $classes = [
            [
                'user_id' => 2,
                'major_id' => 7,
                'title' => "Kecerdasan Buatan",
                'description' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                'class_code' => "XubSaX",
                'photo' => "https://pawpradita.blob.core.windows.net/photo/Screenshot 2022-11-17 at 01.10.15.jpeg"
            ],
            [
                'user_id' => 2,
                'major_id' => 7,
                'title' => "Machine Learning",
                'description' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                'class_code' => "XXsbas",
                'photo' => "https://pawpradita.blob.core.windows.net/photo/Screenshot 2022-11-17 at 01.10.15.jpeg"
            ],
            [
                'user_id' => 2,
                'major_id' => 2,
                'title' => "Desain Rumah",
                'description' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                'class_code' => "ASswaQ",
                'photo' => "https://pawpradita.blob.core.windows.net/photo/Screenshot 2022-11-17 at 01.10.15.jpeg"
            ],
            [
                'user_id' => 2,
                'major_id' => 3,
                'title' => "Desain Gedung",
                'description' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                'class_code' => "PaswWa",
                'photo' => "https://pawpradita.blob.core.windows.net/photo/Screenshot 2022-11-17 at 01.10.15.jpeg"
            ],
        ];
        Classes::insert($classes);
    }
}
