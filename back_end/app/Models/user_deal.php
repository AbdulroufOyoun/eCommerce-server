<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_deal extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'deal',
        'product_id',

    ];

    public function User()
    {
        return $this->belongsTo(User::class);
    }
    // Functions
    public static function cart()
    {
        return user_deal::where('user_id', \Auth::id())->where('deal', false)->get();
    }

    public static function orders()
    {
        return user_deal::where('user_id', \Auth::id())->where('deal', true)->get();
    }
}
