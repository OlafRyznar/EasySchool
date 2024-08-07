<?php

use Slim\App;
use App\Controllers\StudentController;
use App\Controllers\BookController;
use App\Controllers\GradeController;
use App\Controllers\SubjectController;

return function (App $app) {
    // Trasy dla studentów
    $app->get('/student', [StudentController::class, 'getAllStudents']);

    // Trasy dla książek
    $app->get('/book', [BookController::class, 'getAllBooks']);
    $app->post('/book', [BookController::class, 'createBook']);
    $app->put('/book/{id}', [BookController::class, 'updateBook']);
    $app->delete('/book/{id}', [BookController::class, 'deleteBook']);

    // Trasy dla ocen
    $app->get('/grade', [GradeController::class, 'getAllGrades']);

    // Trasy dla przedmiotów
    $app->get('/subject', [SubjectController::class, 'getAllSubjects']);

    // Obsługa nieznanych tras
    $app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function ($request, $response) {
        throw new HttpNotFoundException($request);
    });
};
