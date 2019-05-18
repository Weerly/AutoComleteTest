<?php

namespace App\Providers;

use App\Services\AutoCompleteService;
use Illuminate\Support\ServiceProvider;

class AutoCompleteServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(AutoCompleteService::class, function ($app) {
            return new AutoCompleteService();
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
