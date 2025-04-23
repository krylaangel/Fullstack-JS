# Проект на Gulp

Цей проект використовує Gulp для автоматизації завдань. Ось покрокова інструкція для налаштування та виконання основних команд.

## Потрібні версії

Перед початком роботи перевірте, чи встановлені потрібні версії програм:

1. Перевірте версію Node.js:

    ```bash
    node --version
    ```

2. Перевірте версію npm:

    ```bash
    npm --version
    ```

3. Перевірте версію npx:

    ```bash
    npx --version
    ```

## Налаштування проекту

1. Встановіть Gulp CLI глобально:

    ```bash
    npm install --global gulp-cli
    ```

2. Перейдіть в папку вашого проекту:

    ```bash
    cd <папка_проекту>
    ```

3. Ініціалізуйте проект, створивши файл `package.json`:

    ```bash
    npm init
    ```

4. Встановіть Gulp як dev-залежність:

    ```bash
    npm install --save-dev gulp
    ```

5. Перевірте версію Gulp:

    ```bash
    gulp --version
    ```

## Створення `gulpfile.mjs`

1. У кореневій директорії вашого проекту створіть файл `gulpfile.mjs` з таким вмістом:

    ```javascript
    function defaultTask(cb) {
      // place code for your default task here
      cb();
    }

    exports.default = defaultTask;
    ```

2. Виконайте команду Gulp для запуску завдання за замовчуванням:

    ```bash
    gulp
    ```

## Виконання кількох завдань
Для запису потрібних завдань знадобляться наступні пакети:
gulp-sass — для компіляції SCSS у CSS.
gulp-autoprefixer — для додавання вендорних префіксів.
gulp-browser-sync — для автоматичного оновлення сторінки.
gulp-clean-css — для мінімізації CSS.
gulp-stylelint — для форматування та перевірки стилів (необов'язково).

```bash
npm install --save-dev gulp-sass gulp-autoprefixer browser-sync gulp-clean-css
```

```bash
npm install --save-dev sass
```

Перейменувати файл gulpfile.js на gulpfile.mjs і добавте в package.json поле   "type": "module",
