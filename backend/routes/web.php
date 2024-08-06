<?php

use Slim\App;
use App\Controllers\StudentController;
use App\Controllers\BookController;

return function (App $app) {
    // Trasy dla studentów
    $app->get('/student', [StudentController::class, 'getAllStudents']);
    
    // Trasy dla książek
    $app->get('/book', [BookController::class, 'getAllBooks']);
    $app->post('/book', [BookController::class, 'createBook']);
    $app->put('/book/{id}', [BookController::class, 'updateBook']);
    $app->delete('/book/{id}', [BookController::class, 'deleteBook']);

    //////////////////////
    $app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function ($request, $response) {
        throw new HttpNotFoundException($request);
    });

    //////////////////////
};