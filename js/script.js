import { convertStringNumber } from "./convertStringNumber.js"; // обязательно дописать ручками .js

const financeForm = document.querySelector(".finance__form");
const financeAmount = document.querySelector(".finance__amount");

let amount = 0;
// кусочек кода со стрима
const foo = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, 5000);
  });

const resultFoo = await foo()
console.log('resultFoo: ', resultFoo);

financeAmount.textContent = amount;

financeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const typeOperation = e.submitter.dataset.typeOperation;

  const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));
  // console.log("changeAmount: ", typeof changeAmount); // typeof определяет тип данных

  if (typeOperation === "income") {
    amount += changeAmount;
  }

  if (typeOperation === "expenses") {
    amount -= changeAmount;
  }

  financeAmount.textContent = `${amount.toLocaleString()} ₽`;
  // .toLocaleString() - выводит числа с пробелом-разделителем
});

const financeReport = document.querySelector(".finance__report");
financeReport.addEventListener("click", () => {
  const report = document.querySelector(".report");
  report.classList.add("report__open");
});

const close = document.querySelector(".report__close");
close.addEventListener("click", () => {
  const report = document.querySelector(".report");
  report.classList.remove("report__open");
});
