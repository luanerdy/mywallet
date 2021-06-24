import { connection } from "../config/connection.js";
import { auth } from "./auth/auth.js";
import { entries } from "./entries/entries.js";

const routes = (app) => {
    auth(app, connection);
    entries(app, connection);
};

export {routes};