import { convertStringNumber } from "./helper.js"; // обязательно дописать ручками .js

const financeForm = document.querySelector(".finance__form");
const financeAmount = document.querySelector(".finance__amount");

let amount = 0;

financeAmount.textContent = amount;

export const financeControl = () => {
  financeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const typeOperation = e.submitter.dataset.typeOperation;

    const changeAmount = Math.abs(
      convertStringNumber(financeForm.amount.value)
    );
    // console.log("changeAmount: ", typeof changeAmount); // typeof определяет тип данных

    if (typeOperation === "income") {
      amount += changeAmount;
    }

    if (typeOperation === "expenses") {
      amount -= changeAmount;
    }

    financeAmount.textContent = `${amount.toLocaleString("RU-ru")} ₽`;
    // .toLocaleString() - выводит числа с пробелом-разделителем
  });
};
