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
            path: /\/desafio-apx\/home/,
            component: initHomePage,
        },
        {
            path: /\/desafio-apx\/rules/,
            component: initRules, /* initRulesPage */
        },
        {
            path: /\/desafio-apx\/ingame/,
            component: initGamePage, /* initGamePage */
        },
        {
            path: /\/desafio-apx\/choices/,
            component: initChoices,
        },
        {
            path: /\/desafio-apx\/result/,
            component: initResultPage,  /* initResultPage */
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

    if (location.host.includes("github.io") || "/") {
        goTo("/desafio-apx/home");
    } else {
        handleRoute(location.pathname);
    };
    window.onpopstate = function () {
        handleRoute(location.pathname);
    };

}
