<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserDealController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpKernel\Profiler\Profile;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Auth
//Sing Up
Route::post('/signUp', [RegisterController::class, 'sign_up']);
//Login
Route::post('/login', [RegisterController::class, 'login']);

Route::middleware(['auth:api'])->group(function () {

    // Products
    Route::post('/add_product', [ProductController::class, 'store']);

    // Category
    Route::post('/store_category', [CategoryController::class, 'store']);

    // Profile
    Route::get('/profile', [UserProfileController::class, 'show']);


    // User Deal
    Route::post('/store_deal', [UserDealController::class, 'store']);
    Route::get('/show_cart', [UserDealController::class, 'show_cart']);
    Route::get('/show_orders', [UserDealController::class, 'show_orders']);
    Route::get('/order_product/{id}', [UserDealController::class, 'edit']);

    // Logout
    Route::post('/logout', [RegisterController::class, 'logout']);
});

// Products
Route::post('/products/{category_id}/{products_index}', [ProductController::class, 'show_products']);
Route::post('/count_products/{category_id}', [ProductController::class, 'pagination_count']);

// Category
Route::get('/dropDown_categories', [CategoryController::class, 'simple_show']);
Route::get('/categories', [CategoryController::class, 'show']);
Route::get('/category/{category_id}', [CategoryController::class, 'show_child']);