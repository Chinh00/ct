<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class Cate extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("categories")->insert([
            "name" => "car"
        ]);
        DB::table("categories")->insert([
            "name" => "home"
        ]);
        DB::table("categories")->insert([
            "name" => "heart"
        ]);
        DB::table("categories")->insert([
    "name" => "car",
]);

DB::table("categories")->insert([
            "name" => "gift"
        ]);
        DB::table("categories")->insert([
            "name" => "paperclip"
        ]);
        DB::table("categories")->insert([
    "name" => "question",
]);



    }
}
