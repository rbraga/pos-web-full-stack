<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Despesa extends Model
{
    protected $fillable = ['descricao', 'data', 'valor'];
    protected $guarded = ['id', 'created_at', 'updated_at'];
    protected $table = 'despesas';

    public function categorias() {
        return $this->hasMany(Categoria::class);
    }
}
