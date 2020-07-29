/* 
    Organização, padronização e escrita
    - Remover comentarios desnecessários
    - Remover codigos que não são usados
    - Padronizar as virgulas dos objetos
    - Padronizar os ';'
    - Identar o codigo corretamente
    - Adicionar espaço entre os blocos
    - Deixar a execução do codigo distante da implementação
    - Utilizar padronizar a linguagem utilizada para as namenclaturas
*/

const classroomA = [
    {
        name: "Mayk",
        grade: 9.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2.3
    }
];

const classroomB = [
    {
        name: "André",
        grade: 10
    },
    {
        name: "Pedro",
        grade: 8
    },
    {
        name: "Adriano",
        grade: 9.5
    }
];

function calculateAverage(students) {
    let sum = 0;
    
    for (let student of students) {
        sum += student.grade;
    }
    return (sum / students.length);
}

function sendMessage(average, classroom) {
    if (average > 5) {
        console.log(`Class: ${classroom} average: ${average}. Congratulations!`);
    } else {
        console.log(`Class: ${classroom} average: ${average}. Is not good enought!`);
    }
}

function markAsFailed(student) {
    student.failed = false;
    
    if (student.grade < 5) {
        student.failed = true;
    }
}

function failedStudents(students) {
    for (let student of students) {
        markAsFailed(student);
        sendMessageFailed(student);
    }
}

function sendMessageFailed(student) {
    if (student.failed) {
        console.log(`The student ${student.name} failed!`);
    }
}

const averageA = calculateAverage(classroomA);
const averageB = calculateAverage(classroomB);

sendMessage(averageA, "A");
sendMessage(averageB, "B");

failedStudents(classroomA);
failedStudents(classroomB);