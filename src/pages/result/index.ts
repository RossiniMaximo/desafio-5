import { state } from "../../state";
export function initResultPage(params) {
    const currentState = state.getState()
    const winURL = require("url:../../images/youWin.png");
    const loseURL = require("url:../../images/youLose.png");
    const tieURL = require("url:../../images/tie-game.jpg");
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="result-container">
            <img class="win-img" src="${winURL}">
        </div>
        <div class="content">
            <div class="scoreboard-container">
                <h4 class="scoreboard__title">Puntaje</h4>
                <p class="scoreboard__player">Vos :</p>
                <p class="scoreboard__computer">Máquina :</p>
            </div>
            <div class="butt-container">
                <my-button id="play-again-button">Volver a jugar</my-button>
            </div>
        </div>
    `;
    const buttonEl = div.querySelector("#play-again-button")
    buttonEl.addEventListener("click", () => {
        params.goTo("/ingame")
    })
    console.log("current state", currentState);
    const imgEl = div.querySelector(".win-img");
    let imgAtt = imgEl.getAttribute("src");
    console.log(imgAtt);
    if (currentState.winner = "player") {
        imgAtt = winURL;
    }
    if (currentState.winner = "computer") {
        imgAtt = loseURL;
    }
    if (currentState.winner = '') {
        imgAtt = tieURL;
    }


    return div
}