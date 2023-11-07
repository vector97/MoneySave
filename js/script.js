import { strToNum } from "./strToNum.js";

const financeReport = document.querySelector(".finance__report");
const reportList = document.querySelector(".report");
const reportClose = document.querySelector(".report__close");

const financeForm = document.querySelector(".finance__form");
const financeAmount = document.querySelector(".finance__amount");

let amount = 0;
financeAmount.textContent = `${amount.toLocaleString()} ₽`;

financeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const typeOperation = e.submitter.dataset.typeOperation;
  const changeAmount = Math.abs(strToNum(financeForm.amount.value));

  if (typeOperation === "income") amount += changeAmount;
  if (typeOperation === "expenses") amount -= changeAmount;

  financeAmount.textContent = `${amount.toLocaleString()} ₽`;
});

financeReport.addEventListener("click", () => {
  reportList.classList.add("report__open");
});

reportClose.addEventListener("click", () => {
  reportList.classList.remove("report__open");
});
