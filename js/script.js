import { financeControl } from "./financeControl.js";
import { reportControl } from "./reportControl.js";

const init = () => {
  financeControl();
  reportControl();
}

init()