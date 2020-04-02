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

// Add transaction into the DOM
function addTransactionDOM(transaction) {
  // Add sign - or +
  const sign = transaction.amount < 0 ? '-' : '+';
  // 1. Create li element
  const item = document.createElement('li');
  // 2. Add class minus or plus
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  // 3. Fill content
  item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn">x</button>`;
  // 4. Append to ul
  list.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
  //   const amounts = transactions.map(transaction => {
  //     return transaction.amount;
  //   });
  const amounts = transactions.map(transaction => transaction.amount);
  // console.log(amounts);

  // Total
  const total = amounts
    .reduce((accumulator, item) => (accumulator += item), 0)
    .toFixed(2);
  // console.log(total);
  // Add DOM
  balance.innerHTML = `${total}`;

  // Income
  const income = amounts
    .filter(item => item > 0)
    .reduce((accumulator, item) => (accumulator += item), 0)
    .toFixed(2);
  // console.log(income);
  // Add DOM
  moneyPlus.innerHTML = `${income}€`;

  // Expense
  const expense = (
    amounts
      .filter(item => item < 0)
      .reduce((accumulator, item) => (accumulator += item), 0) * -1
  ).toFixed(2);
  //   console.log(expense);
  // Add DOM
  moneyMinus.innerHTML = `${expense}€`;
}

// Init App
function init() {
  // Clear all items
  list.innerHTML = '';
  // Loop though the list items
  transactions.forEach(addTransactionDOM);
  updateValues();
}
init();

// Add transaction
form.addEventListener('submit', addTransaction);
