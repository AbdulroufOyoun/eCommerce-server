<?php

namespace App\Http\Controllers;

use App\Http\Requests\categoryRequest;
use App\Models\category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a new Category.
     */
    public function store(categoryRequest $request)
    {
        if (!is_admin()) {
            return response()->json('You do not have promotion', '501');
        } else {
            $parent_id = category::parent_id($request->parent_id);
            $image = $this->handle_image($request->image);
            if ($request->parent_id != null && $parent_id != null) {
                $category = category::create([
                    'category' => $request->category,
                    'parent_id' => $parent_id,
                    'image' => $image
                ]);
            } else {
                $category = category::create([
                    'category' => $request->category,
                    'image' => $image
                ]);
            }
            return response()->json($category, 201);
        }
    }

    /**
     * Display the specified resource.
     */
    public function simple_show()
    {
        $parent_category = category::simple_parent_category();
        foreach ($parent_category as $category) {
            $child_category = category::simple_child_category($category->id);
            $category['child_category'] = $child_category;
        }
        return response()->json($parent_category, 200);
    }

    public function show()
    {
        $parent_categories = category::parent_categories(Null);
        foreach ($parent_categories as $category) {
            $child_category =  category::parent_categories($category->id);
            $category['child_category'] = $child_category;
        }
        return response()->json($parent_categories, 200);
    }

    public function show_child($category_id)
    {
        $category = category::category_name($category_id);
        $child_categories = category::parent_categories($category_id);
        $category['child_category'] = $child_categories;
        return response()->json($category, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(category $category)
    {
        //
    }

    public function handle_image($img)
    {
        $image = $img->getClientOriginalName();
        $img->move(public_path() . '/images/', $image);
        return $image;
    }
}