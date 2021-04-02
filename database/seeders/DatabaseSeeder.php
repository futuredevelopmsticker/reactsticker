<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\User::factory()->create([
            'name' => 'John Doe',
            'email' => 'johndoe@mail.com',
            'password' => \bcrypt('password'),
        ]);


            \App\Models\Sticker::factory(10)->create([
            'is_active' => 1,
        ]);

    }
}
