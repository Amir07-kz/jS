### Задание

Реализуйте часы (в функции `runClocks`)

### Исходные данные

Базовый `DOM` имеет следующую структуру

```
<div class="clocks">
    <div class="clocks__container">
        <span class="clocks__hour"></span>
        <span class="clocks__minute"></span>
        <span class="clocks__second"></span>
        <span class="clocks__dot"></span>
    </div>
</div>
```

### Задачи

1. При запуске функции необходимо **каждую секунду** обновлять время на часах. За поворот
   стрелок отвечает стиль `transform: rotate`

В определенный момент времени часы могут "выглядеть" так:

```
<div class="clocks">
    <div class="clocks__container">
        <span class="clocks__hour" style="transform: rotate(330deg);"></span>
        <span class="clocks__minute" style="transform: rotate(204deg);"></span>
        <span class="clocks__second" style="transform: rotate(6deg);"></span>
        <span class="clocks__dot"></span>
    </div>
</div>
```

### Где посмотреть

1. Для визуального отслеживания изменений необходимо открыть в браузере
   файл `./src/index.html`

### Условия выполнения

1. Все манипуляции выполняются с помощью методов нативного `js` - см. теорию к занятию;
2. Функция не должна ничего возвращать. Результатом ее работы будет только поворот стрелок
   на циферблате