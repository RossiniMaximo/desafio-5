/*  aca se importan las paginas para usarlas en nuestra base de datos 
    sobre nuestras escenas.
*/
import { initHomePage } from "./pages/home"
import { initRules } from "./pages/rules"
import { initGamePage } from "./pages/ingamePage"
import { initResultPage } from "./pages/result"
import { initChoices } from "./pages/choices"

export function initRouter(container: Element) {
    const routes = [
        {
            path: /\/home/,
            component: initHomePage
        },
        {
            path: /\/rossinimaximo.github.io\/rules/,
            component: initRules /* initRulesPage */
        },
        {
            path: /\/rossinimaximo.github.io\/ingame/,
            component: initGamePage  /* initGamePage */
        },
        {
            path: /\/rossinimaximo.github.io\/choices/,
            component: initChoices  /* initGamePage */
        },
        {
            path: /\/rossinimaximo.github.io\/result/,
            component: initResultPage  /* initResultPage */
        }
    ]
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        for (let r of routes) {
            if (r.path.test(route)) {
                const el = r.component({ goTo: goTo });

                if (container.firstChild) {
                    container.firstChild.remove();
                }
                container.appendChild((el as any));
            }
        }
    }

    if (location.host.includes("github.io")) {
        goTo("/desafio-apx/home");
    }
    if (location.pathname == '/') {
        goTo('/home');
    } else {
        handleRoute(location.pathname);
    };
    window.onpopstate = function () {
        handleRoute(location.pathname);
    };
}
