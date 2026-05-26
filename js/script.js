function logResult(message) {
    // Вивід у консоль браузера
    console.log(message);

    // Вивід на сторінку
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        const p = document.createElement('p');
        p.className = 'result-item';
        p.innerHTML = message.replace(/\n/g, '<br>');
        outputDiv.appendChild(p);
    }
}

// Функція для створення  заголовків завдань
function logHeader(taskNumber, taskName) {
    logResult(`\n<strong>=== ЗАВДАННЯ ${taskNumber}. ${taskName.toUpperCase()} ===</strong>`);
}

// ============================================================================
// Завдання 1. Змінні та типи даних
logHeader(1, "Змінні та типи даних");

const strVar = "Привіт Світ!";
const numVar = 2026;
const boolVar = true;
const nullVar = null;
const undefVar = undefined;
const symVar = Symbol("id");
const bigIntVar = 9007199254740991n;

logResult(`Примітиви та їх типи:
    "${strVar}" — тип: ${typeof strVar}
    ${numVar} — тип: ${typeof numVar}
    ${boolVar} — тип: ${typeof boolVar}
    ${nullVar} — тип: ${typeof nullVar}
    ${undefVar} — тип: ${typeof undefVar}
    ${symVar.toString()} — тип: ${typeof symVar}
    ${bigIntVar} — тип: ${typeof bigIntVar}`);
// Явне перетворення
logResult(`Явне перетворення типів:
    String(100): ${String(100)} (${typeof String(100)})
    Number("555"): ${Number("555")} (${typeof Number("555")})
    Number("abc"): ${Number("abc")} (${typeof Number("abc")})
    Boolean(0): ${Boolean(0)} | Boolean(1): ${Boolean(1)}`);

// Шаблонний рядок
const name = "Ярослав";
const age = 20;
const university = "ХАІ";
logResult(`Шаблонний рядок: Студент ${name}, вік: ${age} років, університет: ${university}`);

// Порівняння
logResult(`Різниця між == та ===:
    10 == "10" : ${10 == "10"} (порівняння значень із приведенням типів)
    10 === "10": ${10 === "10"} (строге порівняння з урахуванням типу)

    null == undefined  : ${null == undefined} (вони рівні один одному)
    null === undefined : ${null === undefined} (різні типи: об'єкт/null та undefined)

    0 == ""  : ${0 == ""} (порожня строка до числа 0)
    0 === "" : ${0 === ""} (Number проти String)`);

// ============================================================================
// Завдання 2. Умови та логіка
logHeader(2, "Умови та логіка");

// if / else if / else
function getGrade(score) {
    if (typeof score !== 'number' || isNaN(score)) {
        return "невалідний бал";
    }
    if (score < 0 || score > 100) {
        return "невалідний бал";
    }
    if (score >= 90) {
        return "відмінно";
    } else if (score >= 75) {
        return "добре";
    } else if (score >= 60) {
        return "задовільно";
    } else {
        return "незадовільно";
    }
}

// switch
function getSeasonUA(month) {
    if (typeof month !== 'number' || isNaN(month) || month < 1 || month > 12) {
        return "невідомий місяць";
    }
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "Зима";
        case 3:
        case 4:
        case 5:
            return "Весна";
        case 6:
        case 7:
        case 8:
            return "Літо";
        case 9:
        case 10:
        case 11:
            return "Осінь";
        default:
            return "невідомий місяць";
    }
}

// Тернарний оператор
const status = age >= 18 ? "повнолітній" : "неповнолітній";
const score = 85;
const isPassed = score >= 60 ? "Складено" : "Не складено";

logResult(`Перевірка логіки:
Оцінка за 95 балів: ${getGrade(95)}
Оцінка за 80 балів: ${getGrade(80)}
Оцінка за 65 балів: ${getGrade(65)}
Оцінка за 45 балів: ${getGrade(45)}
Оцінка за 120 балів: ${getGrade(120)}
Оцінка за -10 балів: ${getGrade(-10)}
Оцінка за "45" балів: ${getGrade("45")}

Місяць 1 (січень) - це сезон: ${getSeasonUA(1)}
Місяць 4 (квітень) - це сезон: ${getSeasonUA(4)}
Місяць 7 (липень) - це сезон: ${getSeasonUA(7)}
Місяць 10 (жовтень) - це сезон: ${getSeasonUA(10)}
Місяць 13 (помилка) - це сезон: ${getSeasonUA(13)}
Місяць 0 (помилка) - це сезон: ${getSeasonUA(0)}
Місяць "6" (рядок) - це сезон: ${getSeasonUA("6")}

Студент... ${status}
Статус іспиту (${score}): ${isPassed}`);

// ============================================================================
// Завдання 3. Масиви
logHeader(3, "Масиви");

// Створення масиву об'єктів (студенти)
let students = [
    { name: "Анна", grade: 95, courses: ["JS", "HTML"] },
    { name: "Богдан", grade: 72, courses: ["JS", "CSS"] },
    { name: "Віталій", grade: 58, courses: ["HTML"] },
    { name: "Дар'я", grade: 88, courses: ["JS", "React"] },
    { name: "Євген", grade: 91, courses: ["Python", "JS"] },
    { name: "Ірина", grade: 64, courses: ["CSS"] }
];
logResult(`Вхідний масив:
    ${students.map((s, index) => `${index + 1}. ${s.name} (Бал: ${s.grade}, Курси: ${s.courses.join(", ")})`).join("\n")}`);

// Модифікація (push, pop, splice)
students.push({ name: "Олег", grade: 79, courses: ["JS"] });
logResult(`Додано Олега через push:
    ${students.map((s, index) => `${index + 1}. ${s.name} (Бал: ${s.grade}, Курси: ${s.courses.join(", ")})`).join("\n")}`);

    const removed = students.pop();
logResult(`Видалено Олега через pop:
    ${students.map((s, index) => `${index + 1}. ${s.name} (Бал: ${s.grade}, Курси: ${s.courses.join(", ")})`).join("\n")}`);

students.splice(2, 1);
logResult(`Видалено Віталія через splice:
    ${students.map((s, index) => `${index + 1}. ${s.name} (Бал: ${s.grade}, Курси: ${s.courses.join(", ")})`).join("\n")}`);

students.splice(2, 0, { name: "Максим", grade: 83, courses: ["HTML", "CSS"] });
logResult(`Додано Максима через splice:
    ${students.map((s, index) => `${index + 1}. ${s.name} (Бал: ${s.grade}, Курси: ${s.courses.join(", ")})`).join("\n")}`);

// find
const topStudent = students.find(s => s.grade > 90);
// filter
const jsStudents = students.filter(s => s.courses.includes("JS"));
// reduce
const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;

logResult(`Робота з масивом студентів, остаточний масив:
${students.map((s, index) => `${index + 1}. ${s.name} (Бал: ${s.grade}, Курси: ${s.courses.join(", ")})`).join("\n")}

Перший відмінник (find): ${topStudent.name} (${topStudent.grade} балів)
Кількість студентів на курсі JS (filter): ${jsStudents.length}
Середній бал групи (reduce): ${avgGrade.toFixed(1)}`);