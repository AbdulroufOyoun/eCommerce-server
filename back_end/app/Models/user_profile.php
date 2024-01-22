<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'profile_image',
        'user_id',
    ];

    public function User()
    {
        return $this->belongsTo(User::class);
    }
}