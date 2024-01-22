<?php

namespace App\Http\Controllers;

use App\Http\Requests\productRequest;
use App\Models\category;
use App\Models\product;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }
    // Show product pagination
    public function show_products($category_id, $products_index = 1, Request $request)
    {
        if ($request->ids == null && $request->price == null) {
            return $this->products_withOut_filters($category_id, $products_index);
        } else {
            return $this->products_with_filters($category_id, $products_index, $request);
        }
    }

    // Show product pagination
    public function pagination_count($category_id,  Request $request)
    {
        if ($request->ids == null && $request->price == null) {
            return product::count_pagination($category_id);
        } else {
            return product::count_filter_pagination($category_id, $request);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(productRequest $request)
    {
        if (!is_admin()) {
            return response()->json('you do not have promotion', 'status => 404');
        } else {
            $category_id = category::parent_id($request->parent_id);
            if ($category_id == null) {
                return response()->json('The category is undenied', 404);
            } else {
                $images = $this->handle_images($request->images);
                $poster =  $this->handle_poster($request->poster);
                $add_product = product::create([
                    'owner_id' => \Auth::id(),
                    'title' => $request->title,
                    'price' => $request->price,
                    'description' => $request->description,
                    'category' => $category_id,
                    'images' => $images,
                    'poster' => $poster
                ]);
                return response()->json($add_product, 201);
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(product $product)
    {
        //
    }


    public function products_withOut_filters($category_id, $products_index)
    {
        $products_index = json_encode(($products_index - 1) * 20);
        $products = product::pagination($category_id, $products_index);
        foreach ($products as $product) {
            $category = category::category_name($product->category)->category;
            $product['category'] = $category;
        }
        return response()->json($products, 200);
    }

    public function products_with_filters($id, $products_index, $filters)
    {
        $products_index = json_encode(($products_index - 1) * 20);
        $filters->price = $filters->price * 10;
        $products = product::filter_pagination($id, $products_index, $filters);
        foreach ($products as $product) {
            $category = category::category_name($product->category)->category;
            $product['category'] = $category;
        }
        return response()->json($products, 200);
    }

    public function handle_poster($img)
    {
        $image = $img->getClientOriginalName();
        $img->move(public_path() . '/products_posters/', $image);
        return $image;
    }

    public function handle_images($imgs)
    {
        $imgNames = [];
        foreach ($imgs as $image) {
            $imageName = $image->getClientOriginalName();
            $image->move(public_path() . '/products_images/', $imageName);
            $imgNames[] = $imageName;
        }
        return $imgNames[0];
    }
}
