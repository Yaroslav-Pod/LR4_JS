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