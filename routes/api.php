<?php

use App\Http\Controllers\AnimalController;
use App\Http\Resources\AnimalResource;
use App\Models\Animal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/animals', function () {
    return AnimalResource::collection(Animal::all());
});

Route::get('/animal/{id}', function ($id) {
    return AnimalResource::collection(Animal::findOrFail($id));
});

Route::put('/animal/{id}', [AnimalController::class, 'update']);

Route::post('/animal', [AnimalController::class, 'store']);

Route::delete('/animal/{id}', [AnimalController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
