/* 
    Resolução do desafio 05 
    - Operações bancárias na conta do usuário
*/

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    if (transaction.type == 'credit') {
        user.transactions.push(transaction)
        user.balance += transaction.value
    } else if (transaction.type == 'debit') {
        user.transactions.push(transaction)
        user.balance -= transaction.value
    } else {
        console.log('invalid transaction')
    }
}

function getHigherTransactionByType(transaction) {

    let higherTransaction = {
        type: '',
        value: 0
    }

    if (transaction == 'credit') {
        for (const transaction of user.transactions) {
            if (transaction.type == 'credit' && transaction.value > higherTransaction.value) {
                higherTransaction.value = transaction.value
            }
        }
        higherTransaction.type = transaction
    }

    if (transaction == 'debit') {
        for (const transaction of user.transactions) {
            if (transaction.type == 'debit' && transaction.value > higherTransaction.value) {
                higherTransaction.value = transaction.value
            }
        }
        higherTransaction.type = transaction
    }
    
    console.log(higherTransaction);
    return higherTransaction
}

function getAverageTransactionValue() {

    let averageTransactionValue = 0;

    for (transaction of user.transactions) {
        averageTransactionValue += transaction.value
    }
    console.log(averageTransactionValue / user.transactions.length)
    return averageTransactionValue / user.transactions.length
}

function getTransactionsCount() {

    let transactionCount = {
        credit: 0,
        debit: 0
    }

    for (transaction of user.transactions) {
        if (transaction.type == 'debit') {
            transactionCount.debit++
        } else if (transaction.type == 'credit') {
            transactionCount.credit++
        }
    }
    console.log(transactionCount)
    return transactionCount
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

getHigherTransactionByType("credit");
getHigherTransactionByType("debit");

getAverageTransactionValue();

getTransactionsCount();