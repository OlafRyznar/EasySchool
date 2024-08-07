<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Models\Grade;

class GradeController
{
    private $grade;

    public function __construct(Grade $grade)
    {
        $this->grade = $grade;
    }

    public function getAllGrades(Request $request, Response $response, array $args = []): Response
    {
        $grades = $this->grade->getAll();
        $response->getBody()->write(json_encode($grades));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
