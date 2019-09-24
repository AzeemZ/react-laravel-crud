<?php

/** @var Factory $factory */

use App\Employee;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Employee::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->companyEmail,
        'company' => $faker->company,
        'designation' => $faker->jobTitle,
        'phone' => $faker->phoneNumber,
        'salary' => $faker->numberBetween(10000, 500000)
    ];
});
