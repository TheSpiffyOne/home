const express = require("express");
const app = express();

// Объявили middleware-функцию loggingMiddleware
function loggingMiddleware(req, res, next) {
  console.log("Внутри loggingMiddleware");
}

// Контроллер для маршрута /
function homeController(req, res) {
    console.log("Внутри homeController");
    res.send("Home Page");
}

// Контроллер для маршрута /users
function usersController(req, res) {
    console.log("Внутри usersController");
    res.send("Users Page");
}

// Обрабатываем запросы методом GET по маршруту "/"
app.get("/", homeController);

// Обрабатываем запросы методом GET по маршруту "/users"
app.get("/users", usersController);

app.listen(3000, () => console.log("Server Started"));