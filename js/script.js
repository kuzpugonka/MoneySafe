import { convertStringNumber } from "./convertStringNumber.js"; // обязательно дописать ручками .js
import { OverlayScrollbars } from "./overlayscrollbars_2.4.4.min.js";

const API_URL = "https://melon-grizzly-beaufort.glitch.me/api";

const financeForm = document.querySelector(".finance__form");
const financeAmount = document.querySelector(".finance__amount");
const report = document.querySelector(".report");
const financeReport = document.querySelector(".finance__report");
const reportOperationList = document.querySelector(".report__operation-list");
console.log("reportOperationList: ", reportOperationList);

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

const getData = async (url) => {
  try {
    const response = await fetch(`${API_URL}${url}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Ошибка при получении данных: ", error);
    throw error;
  }
};

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

const renderReport = (data) => {
  reportOperationList.innerHTML = `
  <div class="wrapper">
  <div class="line line1">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line2">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line3">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line4">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line5">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line6">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line7">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line8">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line9">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line10">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line11">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
</div>
  `;
};

financeReport.addEventListener("click", async () => {
  openReport();
  const data = await getData("/test");
  renderReport(data);
});
