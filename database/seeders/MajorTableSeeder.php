<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Major;
class MajorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $major = [
            [
                "name"=>"All",
            ],
            [
                "name"=>"Architecture",
            ],
            [
                "name"=>"Interior Design",
            ],
            [
                "name"=>"Civil Engineering",
            ],
            [
                "name"=>"Urban Planning",
            ],
            [
                "name"=>"Visual Communication Design",
            ],
            [
                "name"=>"Information Technology",
            ],
            [
                "name"=>"Business Information System",
            ],
            [
                "name"=>"Hospitality and Tourism",
            ],
            [
                "name"=>"Retail Management",
            ],
            [
                "name"=>"Business Management",
            ],
            [
                "name"=>"Accounting",
            ],
            [
                "name"=>"Culinary Arts",
            ],
        ];
        Major::insert($major);
    }
}
