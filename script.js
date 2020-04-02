const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const transactions = [
  { id: 1, text: 'Flower', amount: 20 },
  { id: 2, text: 'Salary', amount: 2000 },
  { id: 3, text: 'Book', amount: -300 },
  { id: 4, text: 'Camera', amount: -50 }
];

console.log(transactions);

// Add transaction into the DOM
function addTransactionDOM(transaction) {
  // Get sign + or -
  const sign = transaction.amount < 0 ? '-' : '+';
  // Add item
  const item = document.createElement('li');
  // Add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  // content on li
  item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn">x</button>`;
  // Append Child to the ul
  list.appendChild(item);
}

// Init App
function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
}

init();
