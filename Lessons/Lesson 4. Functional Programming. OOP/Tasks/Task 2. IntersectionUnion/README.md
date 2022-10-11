### Задание

Создайте функцию `getIntersectionUnion`, принимающую в качестве аргументов два массива
чисел<br>
Необходимо вернуть из функции объект в следующем виде:

```
{
    intersection: [],   // массив пересекающихся значений
    union: [],          // массив значений, присутствующих хотя бы в одном массиве
}
```

### Примеры использования

```
getIntersectionUnion([5, 6, 6, 6, 8, 9], [3, 3, 4, 4, 5, 5, 8]);
Вывод:
{
    intersection: [5, 8],
    union: [5, 6, 8, 9, 3, 4]
}

getIntersectionUnion([1, 10, 25, 31, 42], [10, 20, 32, 42]);
Вывод:
{
    intersection: [10, 42],
    union: [1, 20, 25, 31, 32]
}

getIntersectionUnion([], []);
Вывод:
{
    intersection: [],
    union: []
}
```