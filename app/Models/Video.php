<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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
        return $this->belongsTo(Classes::class);
    }
}
