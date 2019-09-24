<?php

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

Route::view('/', 'welcome');
Route::view('/employees/new', 'welcome');
Route::view('/employees/edit/{id}', 'welcome');
Route::view('/employees/show/{id}', 'welcome');
Route::view('/employees/delete/{id}', 'welcome');
