function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequireca0a;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequireca0a=a),a.register("7PhYn",(function(t,n){var r,a;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>a),(e=>a=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("7PhYn").register(JSON.parse('{"di8mO":"index.32303b3f.js","dLgG1":"playingChildren.eefa2f30.png","3Lfnw":"piedra.3e5be059.png","kZKib":"papel.5dad405c.png","5TSXz":"tijera.c1b7bbd5.png","97Swg":"star.47eecdb3.png","5xtY7":"Star2.dac9bc02.png","dacFo":"tie-game.55a370ac.jpg"}'));class o extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=document.createElement("style");e.innerHTML="\n            .button{\n                padding : 5px;\n                background-color :rgb(128, 0, 128);\n                color : #D8FCFC;\n                font-size : 35px;\n                font-family: 'Gluten', cursive;\n                border : solid 2px black;\n                border-radius : 10px;\n                width : 100%;\n                cursor:pointer;\n            }\n            .button:hover{\n                transform: translate3d(0px, -2px, 0px);\n            }\n        ",this.shadow.innerHTML='\n        <button class="button"></button>\n        ';this.shadow.querySelector("button").textContent=this.textContent,this.shadow.appendChild(e)}}customElements.define("my-button",o),a.register("eRhi8",(function(e,t){e.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("dLgG1")})),a.register("kVZsc",(function(t,n){var r;e(t.exports,"getBundleURL",(()=>r),(e=>r=e));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}}));class s extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=a("eRhi8"),t=document.createElement("div"),n=document.createElement("style");t.innerHTML=`\n                <img class="home-img" src= "${e} ">\n        `,n.innerHTML="\n            .home-img{\n               max-height: 140px;\n            }\n             \n        ",t.appendChild(n),this.shadow.appendChild(t)}}customElements.define("logo-img",s);const i={data:{currentGame:{playerMove:"",computerMove:""},winner:"",playerScore:0,computerScore:0},listeners:[],initStorage(){const e=localStorage.getItem("user-state"),t=JSON.parse(e);this.setState(t)},scoreCounter(e){"player"==e&&i.data.playerScore++,"computer"==e&&i.data.computerScore++},getState(){return this.data},setState(e){this.data=e;for(const t of this.listeners)t(e);localStorage.setItem("user-state",JSON.stringify(e)),console.log("Soy el state he cambiado",this.data)},suscribe(e){this.listeners.push(e)},setMove(e){const t=this.getState();t.currentGame.playerMove="",t.currentGame.playerMove=e},result(e,t){const n=["piedra"==i.data.currentGame.playerMove&&"tijeras"==i.data.currentGame.computerMove,"papel"==i.data.currentGame.playerMove&&"piedra"==i.data.currentGame.computerMove,"tijeras"==i.data.currentGame.playerMove&&"papel"==i.data.currentGame.computerMove].includes(!0);1==n&&(i.data.winner="",i.data.winner="player");const r=["piedra"==i.data.currentGame.computerMove&&"tijeras"==i.data.currentGame.playerMove,"papel"==i.data.currentGame.computerMove&&"piedra"==i.data.currentGame.playerMove,"tijeras"==i.data.currentGame.computerMove&&"papel"==i.data.currentGame.playerMove].includes(!0);1==r&&(i.data.winner="",i.data.winner="computer"),0==n&&0==r&&(i.data.winner="")},setComputerMove(e){const t=this.getState();t.currentGame.computerMove="",t.currentGame.computerMove=e}};a.register("hRGbL",(function(e,t){e.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("3Lfnw")})),a.register("gFVKK",(function(e,t){e.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("kZKib")})),a.register("lrQTD",(function(e,t){e.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("5TSXz")}));class c extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),i.suscribe((()=>{this.handsLogic()})),this.syncWithState(),this.handsLogic()}syncWithState(){this.render()}handsLogic(){const e=i.getState();e.playerMove="",e.computerMove="";const t=this.shadow.querySelector("#piedra");t.addEventListener("click",(()=>{t.classList.remove("blur"),r.classList.add("blur"),n.classList.add("blur"),i.data.currentGame.playerMove="",i.setMove("piedra"),i.setState({...e})}));const n=this.shadow.querySelector("#papel");n.addEventListener("click",(a=>{n.classList.remove("blur"),t.classList.add("blur"),r.classList.add("blur"),i.data.currentGame.playerMove="",i.setMove("papel"),i.setState({...e})}));const r=this.shadow.querySelector("#tijeras");r.addEventListener("click",(()=>{r.classList.remove("blur"),n.classList.add("blur"),t.classList.add("blur"),i.setMove("tijeras"),i.setState({...e})}))}render(){const e=a("hRGbL"),t=a("gFVKK"),n=a("lrQTD"),r=document.createElement("div");r.className="container",r.innerHTML=`\n        <img class="img piedra borde" id="piedra" src="${e}">\n        <img class="img papel" id="papel" src="${t}">\n        <img class="img tijeras" id="tijeras" src="${n}">\n        `;const o=document.createElement("style");o.innerHTML="\n        .container{\n            display : flex;\n            gap : 25px;\n        }\n        .img{\n            height : 150px;\n            display : block;\n        }\n        .blur{filter: blur(4px); transition: all 0.15s;}\n        .blur:hover{\n            transform: translate3d(0px,-2px,0px);\n        }\n        ",r.appendChild(o),this.shadow.appendChild(r)}}customElements.define("rps-hands",c);class d extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.setUp()}setUp(){let e=0;const t=setInterval((()=>{e++;const n=document.createElement("div");n.className="root",n.innerHTML=`\n                <div class="timer-container">\n                    <p id ="timer"class="timer">${4-e}</p>\n                </div>\n            `;n.querySelector("#timer");this.shadow.firstChild&&this.shadow.firstChild.remove(),e>3&&clearInterval(t);const r=document.createElement("style");r.innerHTML="\n                .root{\n                    width :100%;\n                }\n                .timer-container{\n                    border : solid 4px;\n                    border-radius: 50%;\n                    width: 200px;\n                    height : 200px;\n                    display: flex;\n                    flex-direction: column;\n                    align-items: center;\n                }\n                .timer{\n                    font-size : 100px;\n                    margin: auto;\n                }\n            ",n.appendChild(r),this.shadow.appendChild(n)}),1e3)}}function l(e){const t=document.createElement("div");t.className="container-homepage",t.innerHTML='\n        <div  class="title-container">\n            <h1 class="piedra">Piedra</h1>\n            <span class="papel">Papel <span class="o-word">ó</span></span>\n            <span class="tijera">Tijera</span>\n        </div>\n        <div class="b-container">\n            <my-button id="button-id">Comenzar</my-button>\n        </div>\n        <div class="container-hands">\n            <rps-hands class="hola"></rps-hands>\n        </div>\n    ';return t.querySelector("#button-id").addEventListener("click",(t=>{e.goTo("/rules")})),t}function p(e){const t=document.createElement("div");t.className="container",t.innerHTML='\n        <div class="text-container">\n            <p class="text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos .</p>\n        </div>\n        <div class="button-container">\n            <my-button id="button">¡Jugar!</my-button>\n        </div>\n        <div class="img-container">\n            <rps-hands></rps-hands>\n        </div>\n\n    ';return t.querySelector("#button").addEventListener("click",(()=>{e.goTo("/ingame")})),t}function u(e){const t=i.getState(),n=document.createElement("div");return n.className="container",n.innerHTML=`\n    <h2 class="title"> ¡Elige una opción!</h2>\n    <div class="timer-container">\n    <the-timer id="timer"></the-timer> \n    </div>\n    <p class="your-move">tu jugada :</p>\n    <p class="move-receptor">${t.currentGame.playerMove}</p>\n    <div class="hands-container">\n    <rps-hands></rps-hands>\n    </div>\n    `,i.suscribe((()=>{n.querySelector(".move-receptor").textContent=t.currentGame.playerMove;const e=["piedra","papel","tijeras"];let r=e[Math.floor(Math.random()*e.length)];i.data.currentGame.computerMove="",i.setComputerMove(r),i.result(t.playerMove,t.computerMove)})),setTimeout((()=>{e.goTo("/choices")}),5e3),n}customElements.define("the-timer",d);var m;m=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("97Swg");var h;h=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("5xtY7");var v;function g(e){const t=i.getState(),n=document.createElement("div");n.innerHTML=`\n    <div class="result-img">\n        <p id="text" class="result-text">Ganaste!</p>\n        <img src=${m} id="image-id"class="img">\n    </div>\n    <div class="content">\n        <div class="scoreboard-container">\n            <h4 class="scoreboard__title">Puntaje</h4>\n            <p class="scoreboard__player">Vos :${t.playerScore}</p>\n            <p class="scoreboard__computer">Máquina:${t.computerScore}</p>\n        </div>\n        <div class="butt-container">\n            <my-button id="play-again-button">Volver a jugar</my-button>\n        </div>\n    </div>\n    `;const r=n.querySelector("#image-id"),a=n.querySelector("#text");"player"==t.winner&&(r.setAttribute("src",m),a.textContent="¡Ganaste!"),"computer"==t.winner&&(r.setAttribute("src",h),a.textContent="¡Perdiste!"),""==t.winner&&(r.setAttribute("src",v),a.textContent="¡Empate!");return n.querySelector("#play-again-button").addEventListener("click",(()=>{e.goTo("/ingame")})),n}v=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("dacFo");var f=a("hRGbL"),b=a("gFVKK"),y=a("lrQTD");function S(e){const t=document.createElement("div");t.className="container-choices",t.innerHTML='\n        <div class="computer-choice" >\n            <img src= ; class="computer-choice__img" id="computer-move">\n        </div>\n        <div class="player-choice">\n            <img src= ; class="player-choice__img" id="player-move">\n        </div>\n    ';const n=t.querySelector("#player-move");"player"==i.data.winner&&i.scoreCounter(i.data.winner),"computer"==i.data.winner&&i.scoreCounter(i.data.winner),"piedra"==i.data.currentGame.playerMove&&(n.src=f),"papel"==i.data.currentGame.playerMove&&(n.src=b),"tijeras"==i.data.currentGame.playerMove&&(n.src=y,console.log("hola soy tijeras"));const r=t.querySelector("#computer-move");return"piedra"==i.data.currentGame.computerMove&&(r.src=f,r.setAttribute("src",f)),"papel"==i.data.currentGame.computerMove&&(r.src=b),"tijeras"==i.data.currentGame.computerMove&&(r.src=y,console.log("hola soy tijeras")),setTimeout((()=>{e.goTo("/result")}),2e3),t}!function(){localStorage["user-state"],i.setState(i.data),i.initStorage();!function(e){const t=[{path:/\/home/,component:l},{path:/\/desafio-m5/,component:l},{path:/\/rules/,component:p},{path:/\/ingame/,component:u},{path:/\/choices/,component:S},{path:/\/result/,component:g}];function n(e){history.pushState({},"",e),r(e)}function r(r){for(let a of t)if(a.path.test(r)){const t=a.component({goTo:n});e.firstChild&&e.firstChild.remove(),e.appendChild(t)}}"/desafio-apx/"==location.pathname?n("/home"):r(location.pathname),window.onpopstate=function(){r(location.pathname)},location.host.includes("github.io")&&n("/desafio-apx")}(document.querySelector(".root"))}();
//# sourceMappingURL=index.32303b3f.js.map
