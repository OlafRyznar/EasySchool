<?php

use DI\Container;
use DI\Bridge\Slim\Bridge;
use Slim\Factory\AppFactory;
use Psr\Container\ContainerInterface;
use App\Controllers\StudentController;

// Włączenie autoloadera Composer
require __DIR__ . '/../vendor/autoload.php';

// Utworzenie kontenera DI
$container = new Container();

// Ustawienia aplikacji
$container->set('settings', function () {
    return [
        'displayErrorDetails' => true, // Ustaw false na produkcji
    ];
});

// Konfiguracja PDO (połączenie z bazą danych)
$container->set(PDO::class, function(ContainerInterface $container) {
    $settings = $container->get('settings');
    $pdo = new PDO('mysql:host=localhost;dbname=easyschool', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
});

// Rejestracja modelu Student
$container->set(App\Models\Student::class, function(ContainerInterface $container) {
    return new App\Models\Student($container->get(PDO::class));
});

// Rejestracja kontrolera StudentController
$container->set(StudentController::class, function(ContainerInterface $container) {
    return new StudentController($container->get(App\Models\Student::class));
});

// Tworzenie aplikacji Slim z użyciem kontenera DI
AppFactory::setContainer($container);
$app = Bridge::create($container);

// Rejestracja tras
(require __DIR__ . '/../routes/web.php')($app);

// Uruchomienie aplikacji
$app->run();
