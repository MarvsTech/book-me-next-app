<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens,
        HasFactory,
        Notifiable,
        SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'role_id',
        'gender_id',
        'firstname',
        'lastname',
        'middlename',
        'specialization',
        'contact_number',
        'address',
        'email',
        'password',
        'room_number',
        'birthday',
        'profile',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function role() {
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function hasAnyRole(...$role)
    {
        return $this->role()->whereIn('role_name', $role)->exists();
    }

    public function gender() {
        return $this->belongsTo(Gender::class, 'gender_id');
    }

    public function hasAnyGender(...$gender)
    {
        return $this->role()->whereIn('gender', $gender)->exists();
    }
}
