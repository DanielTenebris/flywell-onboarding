import {getRandomInt} from "@/features/repo/utils.js";
import {faker} from "@faker-js/faker";

const data = []
// for (let i = 0; i < 10 + getRandomInt(20); i++) {
//   data.push({
//     questions: [
//       {
//         question: faker.lorem.words(4) + '?',
//         options: ['42', ...faker.lorem.words().split(' ')],
//         correctI: 0,
//       },
//     ]
//   });
// }
data.push({
    title:"Первичный тест на знание html",
    questions: [
        {
            question: 'Какой элемент в html отвечает за загаловок?',
            options: ['h1-h6', 'body', 'div'],
            correctI: 0,
        },
        {
            question: 'Использование тэга … позволяет добавлять одну строку текста без начала нового абзаца.',
            options: ['line', 'br', 'td'],
            correctI: 1,
        },
        {
            question: 'Что содержит в себе атрибут href?',
            options: [' URL страницы, на которую произойдет перенаправление',
                ' Имя страницы, на которую произойдет перенаправление',
                ' Указание на то, где будет открываться новая страница: в том же или новом окне'],
            correctI: 0,
        },
        {
            question: 'Укажите тэг, который соответствует элементу списка:',
            options: ['<li>','<ul>','<ol>'],
            correctI: 0,
        },
        {
            question:  'Для задания размеров тэгу <frameset> требуются следующие атрибуты:',
            options: ['- Высока и ширина','Площадь и толщина границ','Строки и столбцы'],
            correctI: 2,
        },

    ]
});
data.push({
    title:"Дополнительный тест по верстке сайтов",
    questions: [
        {
            question:'Укажите, какой элемент HTML 5 отвечает за воспроизведение видео:',
            options: [' <video>','<media>' ,'<movie>'],
            correctI: 0,
        },
        {
            question:" Какой атрибут позволяет объединить ячейки таблицы по вертикали?",
            options: ['Union','Colspan','Rowspan'],
            correctI: 2,
        },
    ]
});
data.push({
    title:"Первичный тест по теории в дизайне",
    questions: [
        {
            question: "Эргономика изучает",
            options: ["Функциональное состояние", " Деятельность человека или группы людей в условиях современного производства, быта, досуга",
           " Все ответы правильные"],
            correctI: 2,
        },
        {
            question: "Технологическая инновация —",
            options: ["Создает новую продукцию", "Создает новую модификацию продукта"," Внедряет новую технологию"],
            correctI: 1,
        },
    ]
});

export const repoTest = () => {
    return {
        getAll: () => {
            return data
        },

        save: (obj) => {
            data.push(obj);
        }
    }
}
