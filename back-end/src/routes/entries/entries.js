import { getEntries } from "./getEntries.js";
import { newIncome } from "./newIncome.js";
import { newOutflow } from "./newOutflow.js";

const entries = (app, connection) => {
    getEntries(app, connection);
    newIncome(app, connection);
    newOutflow(app, connection);
};

export { entries };
