<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Models\Student;

class StudentController
{
    private $student;

    public function __construct(Student $student)
    {
        $this->student = $student;
    }

    public function getAllStudents(Request $request, Response $response, $args)
    {
        $students = $this->student->getAll();
        $response->getBody()->write(json_encode($students));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
