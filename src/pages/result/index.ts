import { state } from "../../state";
const winURL = require("url:../../images/youWin.png");
const loseURL = require("url:../../images/youLose.png");
const tieURL = require("url:../../images/tie-game.jpg");

export function initResultPage(params) {
    /*  const imgAtt = imgEl.getAttribute("src");
     const imgEl = div.querySelector(".win-img");
     if (state.data.winner = "player") {
          = winURL;
         console.log("hola");
     }
     if (state.data.winner = "computer") {
         imgAtt = loseURL;
     }
     if (state.data.winner = '') {
         imgAtt = tieURL;
     } */
    const currentState = state.getState();
    console.log(
        currentState
    );

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="result-container">
    <img class="win-img" src="${winURL}">
    </div>
    <div class="content">
    <div class="scoreboard-container">
    <h4 class="scoreboard__title">Puntaje</h4>
    <p class="scoreboard__player">Vos :${currentState.playerScore}</p>
    <p class="scoreboard__computer">Máquina:${currentState.computerScore}</p>
    </div>
    <div class="butt-container">
    <my-button id="play-again-button">Volver a jugar</my-button>
    </div>
    </div>
    `;
    /* Esto no se si es necesario */
    state.suscribe(() => {
        const playerScore = div.querySelector(".scoreboard__player");
        playerScore.textContent = state.data.toString();
        const computerScore = div.querySelector(".scoreboard__computer");
        computerScore.textContent = state.data.computerScore.toString();
    })
    const buttonEl = div.querySelector("#play-again-button")
    buttonEl.addEventListener("click", () => {
        params.goTo("/ingame")
    })

    return div
}