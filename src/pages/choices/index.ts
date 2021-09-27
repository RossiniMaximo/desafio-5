import { state } from "../../state";
const piedraURL = require("url:../../images/piedra.png");
const papelURL = require("url:../../images/papel.png");
const tijerasURL = require("url:../../images/tijera.png");


export function initChoices(params) {
    const lastState = state.getState();
    console.log("soy el lastState", state.data.currentGame.playerMove);


    const div = document.createElement('div');
    div.className = "container-choices"
    div.innerHTML = `
        <div class="computer-choice" >
            <img src=${""}} class="computer-choice__img" id="computer-move">
        </div>
        <div class="player-choice">
            <img src=${""} class="player-choice__img" id="player-move">
        </div>
    `
    const playerimgEl = div.querySelector("#player-move");
    /* console.log(playerimgEl); */

    function showChoices() {
        if (lastState.playerMove == "tijeras") {
            playerimgEl.setAttribute("src", tijerasURL)
        }
        if (lastState.playerMove = "piedra") {
            playerimgEl.setAttribute("src", piedraURL)
        }
        if (lastState.playerMove = "papel") {
            playerimgEl.setAttribute("src", papelURL);
        }
    }
    showChoices();
    /* console.log("Desp de la funcion", playerimgEl); */


    /* function goToResultsPage() {
        setTimeout(() => {
            params.goTo("/result");
        }, 2000)
    }
    goToResultsPage() */

    return div
}