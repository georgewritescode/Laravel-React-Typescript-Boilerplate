import "./globals";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {RouterComponent} from "./router";
import {UserContextProvider} from "contexts/UserContext"
import "app/css/style.pcss"

ReactDOM.render(
    <UserContextProvider>
        <RouterComponent />
    </UserContextProvider>,
    document.getElementById("app")
);
