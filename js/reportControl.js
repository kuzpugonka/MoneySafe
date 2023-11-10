import { reformatDate } from "./helper.js";
import { OverlayScrollbars } from "./overlayscrollbars_2.4.4.min.js";
import { getData } from "./service.js";
import { storoge } from "./storoge.js";

const typesOperation = {
  income: "доход",
  expenses: "расход",
};
const report = document.querySelector(".report");
const financeReport = document.querySelector(".finance__report");
const reportOperationList = document.querySelector(".report__operation-list");
const reportTable = document.querySelector(".report__table");
const reportDates = document.querySelector(".report__dates");

OverlayScrollbars(report, {});

const closeReport = ({ target }) => {
  if (
    target.closest(".report__close") ||
    (!target.closest(".report") && target !== financeReport) //закроет окно вне модалки
  ) {
    gsap.to(report, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete() {
        report.style.visibility = "hidden";
      },
    });

    document.removeEventListener("click", closeReport); //удалит слушателя при закрытой модалке
  }
};

const openReport = () => {
  report.style.visibility = "visible";

  gsap.to(report, {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "power2.out",
  });

  document.addEventListener("click", closeReport);
};

const renderReport = (data) => {
  reportOperationList.textContent = "";

  const reportRows = data.map(
    ({ category, amount, description, date, type, id }) => {
      const reportRow = document.createElement("tr");
      reportRow.classList.add("report__row");

      reportRow.innerHTML = `
      <td class="report__cell">${category}</td>
      <td class="report__cell" style="text-align: right">${amount.toLocaleString()}&nbsp;₽</td>
      <td class="report__cell">${description}</td>
      <td class="report__cell">${reformatDate(date)}</td>
      <td class="report__cell">${typesOperation[type]}</td>
      <td class="report__action-cell">
        <button class="report__button report__button_table" data-del=${id}>
          &#10006;
        </button>
      </td>
    `;

      return reportRow;
    }
  );

  reportOperationList.append(...reportRows);
};

export const reportControl = () => {
  reportTable.addEventListener("click", ({ target }) => {
    const targetSort = target.closest("[data-sort]");

    if (targetSort) {
      const sortField = targetSort.dataset.sort; //dz

      renderReport(
        [...storoge.data].sort((a, b) => {
          if (targetSort.dataset.dir === "up") {
            [a, b] = [b, a];
          }

          if (sortField === "amount") {
            return parseFloat(a[sortField]) < parseFloat(b[sortField]) ? -1 : 1;
          }
          return a[sortField] < b[sortField] ? -1 : 1;
        })
      );
      if (targetSort.dataset.dir === "up") {
        targetSort.dataset.dir = "down";
      } else {
        targetSort.dataset.dir = "up";
      }
    }

    const targetDel = target.closest("[data-del]");
    if (targetDel) {
      console.log("targetDel: ", targetDel.dataset.del); //dz
    }

    console.log("targetSort: ", targetSort);
  });

  financeReport.addEventListener("click", async () => {
    const textContent = financeReport.textContent;
    financeReport.textContent = "Загрузка"; //надпись на кнопке при клике
    financeReport.disabled = true;
    // анимация ожидания загрузки контента
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
    const data = await getData("/finance");
    storoge.data = data;
    financeReport.textContent = textContent; // отключает надпись на кнопке
    financeReport.disabled = false;
    renderReport(data);
    openReport();
  });

  reportDates.addEventListener("submit", async (e) => {
    e.preventDefault(); //убирает перезагрузку страницы

    const formData = Object.fromEntries(new FormData(reportDates));
    // console.log("formData: ", formData); //вынимает данные

    const searchParams = new URLSearchParams();

    if (formData.startDate) {
      searchParams.append("startDate", formData.startDate);
    }

    if (formData.endDate) {
      searchParams.append("endDate", formData.endDate);
    }

    const queryString = searchParams.toString();

    const url = queryString ? `/finance?${queryString}` : "/finance";

    const data = await getData(url);
    renderReport(data);
  });
};
