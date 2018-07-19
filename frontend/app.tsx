import "./globals";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useStrict } from "mobx";
import { Provider } from "mobx-react";
import {RouterComponent} from "./router";
import RootStore from "./stores/RootStore";
import "app/css/style.pcss"
useStrict(true); // enable MobX strict mode

ReactDOM.render(
    <Provider RootStore={RootStore}>
        <RouterComponent />
    </Provider>,
    document.getElementById("app")
);
