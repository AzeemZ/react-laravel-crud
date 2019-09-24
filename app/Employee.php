<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @method static find(Employee $employee)
 * @method static findOrFail(Employee $employee)
 * @method static create(array $all)
 */
class Employee extends Model
{
    protected $fillable = [
        'name',
        'email',
        'company',
        'designation',
        'phone',
        'salary'
    ];
}
