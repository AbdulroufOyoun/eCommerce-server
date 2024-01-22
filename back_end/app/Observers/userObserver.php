<?php

namespace App\Observers;

use App\Models\User;
use App\Models\user_profile;

class userObserver
{
    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {
        user_profile::create([
            'user_id' => $user->id,
        ]);
        auth()->login($user);
    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {
        //
    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        //
    }

    /**
     * Handle the User "restored" event.
     */
    public function restored(User $user): void
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     */
    public function forceDeleted(User $user): void
    {
        //
    }
}
