import { datalistControl } from "./datalistControls.js";
import { financeControl } from "./financeControl.js";
import { reportControl } from "./reportControl.js";

const init = () => {
  financeControl();
  reportControl();
  datalistControl();
};

init();
