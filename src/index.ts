import "./components/button"
import "./components/logo"
import "./components/hands"
import "./components/timer"
import { initRouter } from "./router";
import "./prueba"

function main() {
    const rootEl = document.querySelector(".root");
    initRouter(rootEl)
}
main();
