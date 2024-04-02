'use strict';

// --------- Установка имени и электронной почты ---------

// git config --global user.name "Your Name"
// git config --global user.email "your_email@whatever.com"



// --------- Имя ветки по умолчанию ----------

// git config --global init.defaultBranch main



// --------- Корректная обработка окончаний строк ----------

// Для пользователей Unix/Mac:
// git config --global core.autocrlf input
// git config --global core.safecrlf warn

// Для пользователей Windows:
// git config --global core.autocrlf true
// git config --global core.safecrlf warn


// --------- Команды терминала ---------

// mkdir <folder name> - создаст папку
// touch <file name> - создаст файл
// ls - отобразит все файлы и папки в данной директории
// cd <folder name> - перейти в указанную директорию
// cd .. - выйти из директории на уровень выше
// cd - выйти на самый верх


// -------- Создание проекта ----------

// git init - создаст репозиторий
// git add <file name> проиндексирует файл перед отправкой в коммит
// git add . - добавит все файлы и папки
// git add -A - тоже самое
// git commit -m'message' - закоммитит
// git status - проверить текущее состояние репозитория
// git branch -m master main - переименовать ветку master в main