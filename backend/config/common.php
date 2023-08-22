<?php

return [
    'service_domain' => [
        'local' => env('APP_URL') .':'. env('FRONTEND_PORT'),
    ],
    'url' => [
        'login' => '/login'
    ],
    'forntend' => [
        'port' => env('FRONTEND_PORT'),
    ],
];
