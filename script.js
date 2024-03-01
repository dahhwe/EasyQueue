const students = [
    {id: 1, name: "Абишев Артем Владимирович"},
    {id: 2, name: "Биликтуев Батор Эрдэмович"},
    {id: 3, name: "Гарманов Константин Витальевич"},
    {id: 4, name: "Демченко Артем Денисович"},
    {id: 5, name: "Добросердова Анастасия Андреевна"},
    {id: 6, name: "Исаев Руслан Саххатович"},
    {id: 7, name: "Ковалев Игорь Евгеньевич"},
    {id: 8, name: "Королевич Андрей Александрович"},
    {id: 9, name: "Луговкин Егор Константинович"},
    {id: 10, name: "Магеров Оскар Евгеньевич"},
    {id: 11, name: "Мартышов Евгений Денисович"},
    {id: 12, name: "Миллер Эрик Станиславович"},
    {id: 13, name: "Михайлов Алексей Николаевич"},
    {id: 14, name: "Надобных Дмитрий Николаевич"},
    {id: 15, name: "Новиков Владимир Владимирович"},
    {id: 16, name: "Периянина Ксения Олеговна"},
    {id: 17, name: "Поярков Денис Дмитриевич"},
    {id: 18, name: "Рус София Дмитриевна"},
    {id: 19, name: "Смолянинов Ярослав Евгеньевич"},
    {id: 20, name: "Терентьев Никита Александрович"},
    {id: 21, name: "Удалов Егор Сергеевич"},
    {id: 22, name: "Устинов Данил Егорович"},
    {id: 23, name: "Фонград Анастасия Андреевна"},
    {id: 24, name: "Шестера Дмитрий Данилович"},
    {id: 25, name: "Шинкаренко Даниил Дмитриевич"},
    {id: 26, name: "Якимович Владимир Максимович"}
];

function updateCurrentTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toLocaleString('ru-RU', {hour12: false});
}


function loadStudents() {
    fetch('https://raw.githubusercontent.com/dahhwe/EasyQueue/main/sequence.json')
        .then(response => response.json())
        .then(data => {
            const sequence = data.result.random.data[0];
            document.getElementById('studentsQueue');
            sequence.forEach((number, index) => {
                const student = students.find(s => s.id === number);
                if (student) {
                    const row = document.createElement('tr');
                    const cellNumber = document.createElement('td');
                    cellNumber.textContent = index + 1;
                    const cellName = document.createElement('td');
                    cellName.textContent = student.name;

                    row.appendChild(cellNumber);
                    row.appendChild(cellName);
                    document.getElementById('studentsQueue').querySelector('tbody').appendChild(row);
                }
            });


        })
        .catch(error => {
            console.error('Ошибка при загрузке последовательности: ', error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    updateCurrentTime();
    // Обновление времени каждую секунду
    setInterval(updateCurrentTime, 1000);
    loadStudents();
});
