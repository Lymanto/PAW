<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class History extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','class_id','video_id'];
    
    /**
     * Get the classes associated with the History
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function classes(): HasOne
    {
        return $this->hasOne(Classes::class, 'id', 'class_id');
    }

    /**
     * Get the video associated with the History
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function video(): HasOne
    {
        return $this->hasOne(Video::class, 'id', 'video_id');
    }
}
