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
