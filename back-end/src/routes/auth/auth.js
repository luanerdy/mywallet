import { signup } from "./signup.js";
import { login } from "./login.js";
import { logout } from "./logout.js";

const auth = (app, connection) => {
    signup(app, connection);
    login(app, connection);
    logout(app, connection);
};

export { auth };
