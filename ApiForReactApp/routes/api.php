<?php

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControllerApiTest;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post("/login", [ControllerApiTest::class, "create"]);
Route::post("/register", [ControllerApiTest::class, "index"]);
Route::get("/email/{id}", [ControllerApiTest::class, "get"]);
Route::post("/add", [ControllerApiTest::class, "add"]);
Route::post("/data", [ControllerApiTest::class, "data"]);
Route::post("/item", [ControllerApiTest::class, "item"]);
Route::post("/delete", [ControllerApiTest::class, "delete"]);
Route::post("/data/day", [ControllerApiTest::class, "data"]);



Route::post("/add-out", [ControllerApiTest::class, "addOut"]);
Route::post("/data-out", [ControllerApiTest::class, "dataOut"]);
Route::post("/delete-out", [ControllerApiTest::class, "deleteOut"]);
Route::post("/list-user", [ControllerApiTest::class, "getListUser"]);



