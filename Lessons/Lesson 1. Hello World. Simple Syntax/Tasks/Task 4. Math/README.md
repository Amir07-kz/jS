### Задание
Реализуйте функцию, принимающую в качестве аргумента число и возвращающую корень этого числа (в виде строки), округленный в меньшую сторону до 2 знака после запятой
Если передано отрицательное число, то возвращается текст `error`;
### Теория  
Возьмем в качестве примера число `5843`.
Корень из `5843`: `76.43951857`
Округляем в меньшую сторону до 2 знака после запятой: `76.43` 

Примеры использования:
```
roundAndRootNumber(5843);     // 76.43
roundAndRootNumber(18248);    // 42.75
roundAndRootNumber(0);        // 0
roundAndRootNumber(5);        // 2.23
roundAndRootNumber(-100);     // 'error'
```

### Подсказки
Используйте объект `Math`