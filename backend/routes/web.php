<?php

use Slim\App;
use App\Controllers\StudentController;

return function (App $app) {
    $app->get('/student', [StudentController::class, 'getAllStudents']);
};
