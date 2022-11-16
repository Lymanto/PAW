<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Waiting extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'class_id',
        'is_approved',
    ];

    /**
     * Get the classes that owns the Member
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function classes(): BelongsTo
    {
        return $this->belongsTo(Classes::class);
    }
}
