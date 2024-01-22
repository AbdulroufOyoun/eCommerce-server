<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'parent_id',
        'image',
    ];

    public function Product()
    {
        return $this->hasMany(product::class);
    }

    // Functions
    public static function category_name($id)
    {
        return category::where('id', $id)->first();
    }
    public static function parent_id($id)
    {
        try {
            return category::select('id')->where('id', $id)->where('parent_id', '!=', null)->first()->id;
        } catch (\Throwable $th) {
            return null;
        }
    }
    public static function simple_parent_category()
    {
        return category::select('id', 'category')->where('parent_id', null)->get();
    }
    public static function simple_child_category($id)
    {
        return category::select('id', 'category')->where('parent_id', $id)->get();
    }
    public static function parent_categories($id)
    {
        return category::where('parent_id', $id)->get();
    }
}
