'use strict';

// Author: No Mercy (shikaridiazz@gmail.com)

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


// -------- About git log -------------

// git log - Получение списка произведенных изменений
// git log --pretty=oneline - однострочный формат
// git log --pretty=format:"%h %ad | %s%d [%an]" --date=short - норм формат
// git config --global format.pretty '%h %ad | %s%d [%an]' - устанавливаем глобально
// git config --global log.date short - устанавливаем глобально


// -------- Получение старых версий --------

// git log - смотрим хэши
// git checkout <hash> - путешествуем по коммитам через хэш
// git switch main - вернуть к последней версии


// -------- Создание тегов версий --------

// git tag - просмотр существующих тэгов на коммитах
// git tag <tag name> - создание тэга на текущем коммите
// git checkout <tag name> - переключение на версию данного тэга
// git checkout <tag name^> - переключение на версию предшествующего коммита
// git log main --all - посмотреть теги в логе, Кроме того, метка HEAD показывает коммит, на который вы переключились


// --------- Отмена изменений в рабочем каталоге ------------

// git checkout <file name> - отмена изменений в рабочем каталоге


// ------ Отмена проиндексированных изменений (перед коммитом) ------

// git add <file name> - допустим мы что то проиндексировали
// git reset HEAD <file name> - сбрасываем область подготовки
// git checkout <file name> - отменяем измениния в файле до последнего коммита


// ------ Отмена коммитов --------

// git add <file name>
// git commit -m'Oops, we didnt want this commit'
// git revert HEAD
// Так как мы отменили самый последний произведенный коммит, мы смогли использовать метку HEAD в качестве аргумента для отмены коммита. Мы можем отменить любой произвольной коммит в истории, указав его хеш.
// git log
// git revert <hash>


// -------- Удаление коммитов из ветки ---------

// git tag oops - прежде чем удалить коммиты, давайте отметим последний коммит тегом, чтобы потом можно было его найти.

// git reset --hard <tag name or commit hash> - сброс ветки до этой точки
// git log - история с норм коммитами
// git log --all - история со всеми коммитами(в т ч и удаленными)


// -------- Удаление тега  ---------

// git tag -d <tag name> - удаление тега
// git log --all - Тег oops больше не будет отображаться в репозитории


// ------- Внесение изменений в коммиты ----------

// git add <file name>
// git commit -m'message'
// git add <file name>
// git commit --amend -m'new message'

// Мы можем увидеть, что оригинальный коммит заменен новым коммитом. Этого же эффекта можно достичь путем сброса последнего коммита в ветке, и повторного коммита новых изменений.


// ------- Создание ветки ------------

// git switch -c <branch name> - создание новой ветки