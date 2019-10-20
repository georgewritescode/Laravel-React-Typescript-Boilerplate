<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class BaseModel extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];
	protected $primaryKey = 'id';
	protected $keyType = 'string';
    protected $casts = [];
    protected $guarded = [];
    public $incrementing = false;

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = (string) Str::uuid();
            }
        });
    }
}
