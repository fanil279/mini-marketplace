Имя: Фаниль Рамакаев.

Сколько времени заняло: В целом задание заняло у меня 7 часов и 30 минут.

Что было сложным:
    Одним из вызовов для меня была интеграция Vanilla JS с React через кастомные события. Ранее я работал с событиями только в Node.js, где концепция EventEmitter отличается от браузерных событий.

    ```js
        card.querySelector('button').addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('add-to-cart', { detail: product }));
        });
    ```

    С чем я ошибся в начале, было то, что я думал, что вместо свойства detail в объекте опций можно использовать любое имя, однако для корректной передачи данных через CustomEvent в браузере обязательно нужно использовать именно detail.

Скриншоты интерфейса:
    ![desktop 1](./public/Screenshot%20(75).png)
    ![desktop 2](./public/Screenshot%20(76).png)
    ![desktop 3](./public/Screenshot%20(77).png)
    ![tablet 1](./public/Screenshot%20(80).png)
    ![tablet 2](./public/Screenshot%20(81).png)
    ![mobile 1](./public/Screenshot%20(78).png)
    ![mobile 2](./public/Screenshot%20(79).png)

Ссылка на демо: https://mini-marketplace-9erv4ttke-fanil-ramakaevs-projects.vercel.app


Запуск проекта локально:

    1. Склонируйте репозиторий:
        git clone https://github.com/fanil279/mini-marketplace
    
    2. Перейдите в папку проекта:
        cd mini-marketplace        

    3. Установите зависимости:
        yarn install

    4. Создайте .env file со следующим значением:
        VITE_BACKEND_URL=https://fakestoreapi.com

    4. Запустите проект:
        yarn dev
