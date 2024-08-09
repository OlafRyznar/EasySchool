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

    // Pobieranie wszystkich ocen
    public function getAll()
    {
        $stmt = $this->pdo->query("SELECT * FROM grade");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Pobieranie ocen dla konkretnego ucznia
    public function getByStudent($studentId)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM grade WHERE student_id = ?");
        $stmt->execute([$studentId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
