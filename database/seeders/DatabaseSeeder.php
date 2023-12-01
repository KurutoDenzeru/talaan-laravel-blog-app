<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        DB::table('posts')->insert([
            'user_id' => 1,
            'title' => 'Test Post',
            'content' => 'This is a test post.',
            'image' => 'https://placehold.co/600x400',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 1,
            'post_id' => 1,
            'content' => 'This is a test comment.',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
