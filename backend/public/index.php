<?php

use DI\Container;
use DI\Bridge\Slim\Bridge;
use Psr\Container\ContainerInterface;
use App\Controllers\StudentController;
use Nyholm\Psr7\Factory\Psr17Factory;
use Nyholm\Psr7Server\ServerRequestCreator;
use Slim\Factory\AppFactory;

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
$psr17Factory = new Psr17Factory();
AppFactory::setResponseFactory($psr17Factory);
$app = Bridge::create($container);

// Rejestracja tras
(require __DIR__ . '/../routes/web.php')($app);

// Tworzenie ServerRequest za pomocą Nyholm PSR-7 Server
$creator = new ServerRequestCreator(
    $psr17Factory, // ServerRequestFactory
    $psr17Factory, // UriFactory
    $psr17Factory, // UploadedFileFactory
    $psr17Factory  // StreamFactory
);
$request = $creator->fromGlobals();

// Uruchomienie aplikacji
$app->run($request);
