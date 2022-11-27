<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
// use Illuminate\Database\Eloquent\Casts\Attribute;
class Video extends Model
{
    use HasFactory;

    protected $fillable = ['class_id','title','description','thumbnail','video_url'];

    /**
     * Get the classes that owns the Video
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function classes(): BelongsTo
    {
        return $this->belongsTo(Classes::class,'class_id','id');
    }
    
    // protected function video_url(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($value) => url($value),
    //     );
    // }

    // protected function thumbnail(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($value) => url('images/'.$value),
    //     );
    // }
}

