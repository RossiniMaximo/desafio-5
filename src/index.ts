import "./components/button"
import "./components/logo"
import "./components/hands"
import "./components/timer"
import "./components/star"
import { initRouter } from "./router";
import { state } from "./state"
(function () {
    state.initStorage();
    if (localStorage["user-state"] == null || "null") {
        state.setState(state.data);
    }
    const rootEl = document.querySelector(".root");
    initRouter(rootEl)
})();
