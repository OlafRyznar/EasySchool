<?php

namespace App\Models;

use PDO;

class Grade
{
    protected $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function getAll()
    {
        $stmt = $this->pdo->query("SELECT * FROM grade");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
