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

// ============================================================================
// Завдання 4. Функції
logHeader(4, "Функції");

// Три способи оголошення (Площа прямокутника)
// Function Declaration
function areaDec(width, height) {
    return width * height;
}

// Function Expression
const areaExp = function(width, height) {
    return width * height;
};

// Arrow Function
const areaArrow = (width, height) => width * height;

// Демонстрація:
console.log(`Declaration (5x4): ${areaDec(5, 4)}`);
console.log(`Expression (6x3): ${areaExp(6, 3)}`);
console.log(`Arrow (10x10): ${areaArrow(10, 10)}`);

// Замикання (createCounter з об'єктом методів)
function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
            return count; // повертаємо для зручності виводу
        },
        decrement() {
            count--;
            return count;
        },
        getValue() {
            return count;
        }
    };
}

const counter = createCounter();

// Параметри за замовчуванням
function createUser(name, role = "student", isActive = true) {
    return `Користувач: ${name}, Роль: ${role}, Активний: ${isActive ? "Так" : "Ні"}`;
}

// Rest-параметри (Стрілочна функція)
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

// Деструктуризація в параметрах
function printStudentInfo({ name, grade, courses }) {
    return `${name} має оцінку ${grade}\nКурси: ${courses.join(", ")}`;
}

// Виклик кожної функції
logResult(`Різні види функцій:
Результати обчислення площі (5х4):
Declaration: ${areaDec(5, 4)}
Expression: ${areaExp(5, 4)}
Arrow: ${areaArrow(5, 4)}

Замикання (createCounter):
counter.increment() -> ${counter.increment()}
counter.increment() -> ${counter.increment()}
counter.decrement() -> ${counter.decrement()}
counter.getValue()  -> ${counter.getValue()}

Параметри за замовчуванням (createUser):
Тільки ім'я: ${createUser("Олег")}
Зміна ролі: ${createUser("Олена", "admin")}
Всі параметри: ${createUser("Ігор", "teacher", false)}

Rest-параметри (sum):
sum(1, 2, 3) -> ${sum(1, 2, 3)}
sum(10, 20)  -> ${sum(10, 20)}

Деструктуризація в параметрах (для students[0] - ${students[0].name}):
${printStudentInfo(students[0])}`);

// ============================================================================
// Завдання 5. Обʼєкти
logHeader(5, "Об'єкти");

// Створення об'єкта
const studentProfile = {
    firstName: "Ярослав",
    lastName: "Подолянчик",
    age: 20,
    university: "ХАІ",
    grades: { math: 85, physics: 92, web: 96 },
    isActive: true,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    getAverageGrade() {
        const gradesValues = Object.values(this.grades);
        if (gradesValues.length === 0) return 0;
        const sum = gradesValues.reduce((acc, grade) => acc + grade, 0);
        return (sum / gradesValues.length).toFixed(1); // Округлення до 1 знаку
    }
};

// Доступ
const dotNotationAge = studentProfile.age;
const dynamicKey = "lastName";
const bracketNotationLastName = studentProfile[dynamicKey]; // необхідна для динамічних ключів

// Ітерація за допомогою Object.keys(), Object.values(), Object.entries()
const keysExample = Object.keys(studentProfile.grades).join(", "); // [math, physics, web]
const valuesExample = Object.values(studentProfile.grades).join(", "); // 85, 92, 96

// Для entries вивід масиву підмасивів
const entriesExample = Object.entries(studentProfile.grades)
    .map(([subject, grade]) => `${subject}: ${grade}`)
    .join("; ");

// Копіювання через Spread та перевірка, що оригінал не змінився
const updatedProfile = { ...studentProfile, firstName: "Андрій" };

// Optional chaining
const labScore = studentProfile.grades?.lab ?? "Немає оцінки за лабу";
const mentorName = studentProfile.mentor?.name ?? "Не призначено";

// Вивід результатів
logResult(`Робота з об'єктами:
Повне ім'я (метод): ${studentProfile.getFullName()}
Середня оцінка (метод): ${studentProfile.getAverageGrade()}
Доступ через крапку (вік): ${dotNotationAge}
Динамічний доступ [${dynamicKey}]: ${bracketNotationLastName}
Object.keys(): ${keysExample}
Object.values(): ${valuesExample}
Object.entries(): ${entriesExample}
Копія (оригінал ім'я: ${studentProfile.firstName} | копія ім'я: ${updatedProfile.firstName})
Optional chaining (labScore): ${labScore}
Optional chaining (mentorName): ${mentorName}`);

// ============================================================================
// Завдання 6. Ланцюжки методів масивів
logHeader(6, "Ланцюжки методів масивів");

// Масив товарів
const products = [
    { name: "Ноутбук", price: 25000, category: "electronics", inStock: true, quantity: 5 },
    { name: "Мишка", price: 600, category: "electronics", inStock: true, quantity: 10 },
    { name: "Клавіатура", price: 1500, category: "electronics", inStock: false, quantity: 3 },
    { name: "Смартфон", price: 18000, category: "electronics", inStock: true, quantity: 4 },
    { name: "Футболка", price: 450, category: "clothes", inStock: true, quantity: 20 },
    { name: "Куртка", price: 2500, category: "clothes", inStock: true, quantity: 2 },
    { name: "Книга", price: 350, category: "books", inStock: true, quantity: 15 },
    { name: "Настільна гра", price: 1200, category: "books", inStock: false, quantity: 0 }
];

// виведення масиву
logResult(`Масив товарів:
    ${products.map((p, index) => `${index + 1}. ${p.name} (Ціна: ${p.price} грн, Категорія: ${p.category}, К-сть: ${p.quantity}, В наявності: ${p.inStock ? "Так" : "Ні"})`).join("\n")}`);

// Загальна вартість товарів у наявності (filter -> map -> reduce)
const totalInStockCost = products
    .filter(p => p.inStock)
    .map(p => p.price * p.quantity)
    .reduce((sum, itemCost) => sum + itemCost, 0);

// Назви електроніки від дешевої до дорогої (filter -> sort -> map)
const sortedElectronicsNames = products
    .filter(p => p.category === "electronics")
    .sort((a, b) => a.price - b.price)
    .map(p => p.name);

// Кількість товарів у кожній категорії (reduce)
const categoryCounts = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
}, {});

logResult(`Робота з масивом
Загальна вартість товарів у наявності: ${totalInStockCost} грн
Електроніка (від дешевої до дорогої): ${sortedElectronicsNames.join(", ")}
Кількість товарів за категоріями: ${JSON.stringify(categoryCounts)}`);

// Виіедення масиву
logResult(`Масив студентів:
    ${students.map((s, index) => `${index + 1}. ${s.name} (Бал: ${s.grade}, Курси: ${s.courses.join(", ")})`).join("\n")}`);

const sortByGradeDesc = [...students].sort((a, b) => b.grade - a.grade);
const sortByNameAsc = [...students].sort((a, b) => a.name.localeCompare(b.name));

// Перетворюємо масиви об'єктів на читабельний вигляд
const gradeDescText = sortByGradeDesc.map(s => `${s.name} (${s.grade})`).join(", ");
const nameAscText = sortByNameAsc.map(s => s.name).join(", ");

logResult(`Сортування:
Студенти за оцінкою: ${gradeDescText}
Студенти за алфавітом: ${nameAscText}`);

