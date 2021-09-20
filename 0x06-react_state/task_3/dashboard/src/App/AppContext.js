import React from "react";

const user = {
    email: "atef@atef.com",
    password: "atef",
    isLoggedIn: false,
}

const logOut = () => {};

const AppContext = React.createContext({
    user,
    logOut
});

export default AppContext;