
#  React Videocasts
Материал для серии подкастов посвящённых библиотеке **ReactJS**. В данных подкастах рассматриваются новые версии библиотеки, обновлённые и добавленные возможности. А так же функциональности которые устаревают. Держите руку на пульсе последних обновлений и подписывайтесь на [YouTube канал](https://youtube.com/c/YauhenKavalchuk)!

### Быстрый старт
- Клонируйте репозиторий: `git clone https://github.com/YauhenKavalchuk/react-podcasts.git`
- Установите зависимости: `yarn install` или `npm install`
- Перейдите в нужную ветку соответствующую подкасту: `git checkout <branch name>`
- Запустите проект: `yarn start`

## Автор курса в социальных сетях:
Social network | Link to Profile
-----|-----
**LinkedIn:** | [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" height="20" />](http://www.linkedin.com/in/YauhenKavalchuk)
**YouTube:** | [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" height="27" />](https://youtube.com/c/YauhenKavalchuk)
**VK:** | [<img src="http://pngimg.com/uploads/vkontakte/vkontakte_PNG27.png" height="25" />](http://vk.com/YauhenKavalchuk)
**Twitter:** | [<img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" height="50" />](https://twitter.com/YauhenKavalchuk)

## React Videocast #1: React 16.6 New Features (Новые возможности):
В этом подкасте мы с вами поговорим о том что нового появилось в представленной версии реакта 16.6.0.
В данном обновлении можно отметить 3 очень интересные фичи, которые мы с вами рассмотрим:
- **static contextType** - Статическое свойство для работы с контекстом.
- **React.memo()** - Метод, который помогает увеличить перфоманс функциональных компонентов.
- **React.lazy()** - Метод из нового API - React suspense, который помогает грузить компоненты асинхронно.

Так же, в не большое дополнение, мы рассмотрим ещё один статический метод:
- **getDerivedStateFromError** - Это улучшенная функциональность метода *componentDidCatch* для отлавливания ошибок рендеринга в дочерних компонентах.

### Ветки Подкаста:
- `git checkout podcast_01_context_start`
- `git checkout podcast_01_context_end`
- `git checkout podcast_01_memo_start`
- `git checkout podcast_01_memo_end`
- `git checkout podcast_01_lazy_start`
- `git checkout podcast_01_lazy_end`
- `git checkout podcast_01_getDerivedStateFromError_end`

### Интересные статьи:
- [React v16.6.0: lazy, memo and contextType](https://reactjs.org/blog/2018/10/23/react-v-16-6.html)
- [Understanding React “Suspense”](https://medium.com/@baphemot/understanding-react-suspense-1c73b4b0b1e6)
- [Sneak Peek: Beyond React 16](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html)


## React Videocast #2: React Hooks A Complete Introduction (Полное введение в Хуки):
В этом подкасте мы с вами рассмотрим такое понятие как **React Hook (Хук)**. Разберёмся зачем они нужны, синтаксис их создания, использования, а так же их особенности. Рассмотрим каким образом они расширяют функциональность и возможности функциональных Реакт-компонентов. Представленные хуки делятся на базовые и дополнительные, но мы с вами рассмотрим только базовые. Так как именно базовые хуки с большей вероятностью могут появится в ближайших обновлениях библиотеки React.
К базовым хукам можно отнести:
- **useContext** - Хук для использования контекста.
- **useState** - Хук для использования стейта внутри функционального компонента.
- **useEffect** - Хук, аналог методов жизненного цикла.

А так же в небольшое дополнение мы рассмотрим создание пользовательских хуков.

### Ветки Подкаста:
- `git checkout podcast_02_useContext`
- `git checkout podcast_02_useState`
- `git checkout podcast_02_useEffect`
- `git checkout podcast_02_customHooks`

### Интересные статьи:
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Collection of React Hooks](https://nikgraf.github.io/react-hooks/)
- [useHooks](https://usehooks.com/)
- [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)


## React Videocast #3: React 16.8 Hooks RELEASE! (Реакт Хуки. Официальный релиз):
В этом подкасте мы с вами рассмотрим все хуки, которые были добавлены в новый релиз библиотеки React 16.8. Рассмотрим каким образом их использование полностью сравнивает в использовании Классовые и Функциональные React-компонентов. А так же разберём их возможности, особенности и использование на реальных примерах.

Описанные хуки:
- **useContext** - Использование контекста.
- **useState** - Использование стейта.
- **useEffect** - Использование методов жизненного цикла.
- **useRef** - Использование ссылок.
- **useReducer** - Использование редьюсера.
- **useLayoutEffect** - Аналог useEffect, который запускается синхронно, после всех изменений в DOM дереве.
- **useCallback** - Используется для возврата мемоизованного коллбека. Повышение перфоманса (аналог shouldComponentUpdate).
- **useMemo** - Используется для возврата сохраненного значения. Повышение перфоманса (аналог shouldComponentUpdate).
- **useImperativeHandle** - Кастомизирует значение инстанса, которое предоставляется родителем при использовании ref.
- **useDebugValue** - Создаёт лейбл для пользовательских Хуков.

### Ветки Подкаста:
- `git checkout podcast_03_hooks`

### Интересные статьи:
- [React Hooks A Complete Introduction (Полное введение в Хуки)](https://youtu.be/X6j7Y7tp3_c)
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React v16.8: The One With Hooks](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)
- [Hooks API](https://reactjs.org/docs/hooks-reference.html)
- [useHooks](https://usehooks.com/)
- [Collection of React Hooks](https://nikgraf.github.io/react-hooks/)
- [Awesome React Hooks](https://github.com/rehooks/awesome-react-hooks)


## React Videocast #4: React Patterns (Реакт Паттерны):
В этом 4-м выпуск видео-каста, посвящённого библиотеки ReactJS, мы с вами рассмотрим самые распространённые и используемые паттерны этой библиотеки. Паттерн - это архитектурная конструкция, представляющая собой решение проблемы в рамкам определенного контекста. Паттерн спокойно можно называть Best Practice - поскольку это самое оптимальное, универсальное и довольно узнаваемое решение.

Описанные паттерны:
- **Function component** - Функциональные комопненты.
- **Destructuring prop** - Деструктуризация пропсов.
- **JSX spread attributes** - REST оператор в компонентах.
- **Merge destructured props with other values** - Смерживание пропсов и атрибутов элементов.
- **Conditional rendering** - Условный рендеринг.
- **Component as Props** - Использование компонентов в виде пропсов.
- **Modern Class syntax** - Оптимальный синтаксис класса.
- **Array as children** - Рендеинг массивов.
- **Fragment** - Использование фрагментов.
- **Return Array** - Возврат массива корневых элементов.
- **propTypes & defaultProps** - propTypes и defaultProps - для описания компонента.
- **setState and 2nd argument** - 2-й аргумент в setState.
- **Proxy component** - Прокси компонент.
- **Event switch** - Переключатель событий.
- **Higher-order component** - Компоненты высшего порядка.

### Ветки Подкаста:
- `git checkout podcast_04_patterns`

### Интересные статьи:
- [React Patterns](https://reactpatterns.com)
