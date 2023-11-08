import { convertStringNumber } from "./convertStringNumber.js"; // обязательно дописать ручками .js
import { OverlayScrollbars } from "./overlayscrollbars_2.4.4.min.js";
console.log("OverlayScrollbars: ", OverlayScrollbars);

const financeForm = document.querySelector(".finance__form");
const financeAmount = document.querySelector(".finance__amount");
const report = document.querySelector(".report");
const financeReport = document.querySelector(".finance__report");

let amount = 0;

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

OverlayScrollbars(report, {});

// мое решение открытия-закрытия модалки
// const financeReport = document.querySelector(".finance__report");
// const report = document.querySelector(".report");
// financeReport.addEventListener("click", () => {
//   report.classList.add("report__open");
// });
// const close = document.querySelector(".report__close");
// close.addEventListener("click", () => {
//   report.classList.remove("report__open");
// });

const closeReport = ({ target }) => {
  if (
    target.closest(".report__close") ||
    (!target.closest(".report") && target !== financeReport) //закроет окно вне модалки
  ) {
    report.classList.remove("report__open");
    document.removeEventListener("click", closeReport); //удалит слушателя при закрытой модалке
  }
};

const openReport = () => {
  report.classList.add("report__open");
  document.addEventListener("click", closeReport);
};

financeReport.addEventListener("click", openReport);

// кусочек кода со стрима
// const people = {
//   name: "sofi",
//   age: 43,
//   city: "Tambov",
// };

// people[Symbol.iterator] = function () {
//   const entries = Object.entries(this);
//   let i = 0;

//   return {
//     next() {
//       if (i < entries.length) {
//         return {
//           done: false,
//           value: entries[i++],
//         };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// };

// for (const key of people) {
//   console.log("key: ", key);
// }
