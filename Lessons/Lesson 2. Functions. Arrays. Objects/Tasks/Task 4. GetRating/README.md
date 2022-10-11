### Задание
Реализуйте функцию, которая принимает на вход объект в виде `{ likes: 1, dislikes: 43 }` и возвращает рейтинг (лайки - хорошо, дизлайки - плохо)

Примените в решении деструктуризацию
### Примеры использования
```
getRating({ likes: 1, dislikes: 43 });      // -42
getRating({ likes: 15, dislikes: 5 });      // 10
getRating({ likes: 122, dislikes: 122 });   // 0
```

### Подсказки
Постарайтесь использовать деструктуризацию объектов в решении