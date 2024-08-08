<?php

use Slim\App;
use App\Controllers\StudentController;
use App\Controllers\BookController;
use App\Controllers\GradeController;
use App\Controllers\SubjectController;
use App\Controllers\TeacherController;
use App\Controllers\GuardianController; // Add this line

return function (App $app) {
    // Routes for students
    $app->get('/student', [StudentController::class, 'getAllStudents']);
    $app->post('/student', [StudentController::class, 'createStudent']); // Route for creating a student

    // Routes for teachers
    $app->get('/teacher', [TeacherController::class, 'getAllTeachers']);
    $app->post('/teacher', [TeacherController::class, 'createTeacher']); // Route for creating a teacher

    // Routes for guardians
    $app->get('/guardian', [GuardianController::class, 'getAllGuardians']); // Route to get all guardians
    $app->post('/guardian', [GuardianController::class, 'createGuardian']); // Route for creating a guardian

    // Routes for books
    $app->get('/book', [BookController::class, 'getAllBooks']);
    $app->post('/book', [BookController::class, 'createBook']);
    $app->put('/book/{id}', [BookController::class, 'updateBook']);
    $app->delete('/book/{id}', [BookController::class, 'deleteBook']);

    // Routes for grades
    $app->get('/grade', [GradeController::class, 'getAllGrades']);

    // Routes for subjects
    $app->get('/subject', [SubjectController::class, 'getAllSubjects']);

    // Handle unknown routes
    $app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function ($request, $response) {
        throw new HttpNotFoundException($request);
    });
};
