<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    protected $fillable = [
        'owner_id',
        'title',
        'price',
        'description',
        'category',
        'images',
        'poster',
    ];

    public function User()
    {
        return $this->belongsTo(profile::class);
    }
    public function Category()
    {
        return $this->belongsTo(category::class);
    }
    // Functions
    public static function product($id)
    {
        return Product::find($id)->first();
    }
    public static function pagination($id, $index)
    {
        $categories = category::select('id')->where('parent_id', $id)->get();
        $categoryIds = $categories->pluck('id')->toArray();
        return product::whereIn('category', $categoryIds)->limit(20)->skip($index)->get();
    }

    public static function count_pagination($id)
    {
        $categories = category::select('id')->where('parent_id', $id)->get();
        $categoryIds = $categories->pluck('id')->toArray();
        return product::whereIn('category', $categoryIds)->count() / 20;
    }


    public static function filter_pagination($id, $index, $filter)
    {
        if ($filter->price == null) {
            $filter->price = 9999999999;
        };
        // $filter->ids = json_decode($filter->ids);
        if ($filter->ids == null) {
            $categories = category::select('id')->where('parent_id', $id)->get();
            $categoryIds = $categories->pluck('id')->toArray();
            return product::whereIn('category', $categoryIds)->where('price', '<=', $filter->price)->limit(20)->skip($index)->get();
        } else {
            $ids = [];
            foreach ($filter->ids as $id) {
                $ids[] = $id;
            }
            return product::whereIn('category', $ids)->where('price', '<=', $filter->price)->limit(20)->skip($index)->get();
        }
    }

    public static function count_filter_pagination($id,  $filter)
    {
        if ($filter->price == null) {
            $filter->price = 9999999999;
        };
        if ($filter->ids == null) {
            $categories = category::select('id')->where('parent_id', $id)->get();
            $categoryIds = $categories->pluck('id')->toArray();
            return product::whereIn('category', $categoryIds)->where('price', '<=', $filter->price)->count();
        } else {
            $ids = [];
            foreach ($filter->ids as $id) {
                $ids[] = $id;
            }
            return product::whereIn('category', $ids)->where('price', '<=', $filter->price)->count() / 20;
        }
    }
}