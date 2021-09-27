import { initGamePage } from "./pages/ingamePage";
import { initResultPage } from "./pages/result";

type Move = "tijeras" | "papel" | "piedra"
type Game = ""

const state = {
    data: {
        currentGame: {
            playerMove: "",
            computerMove: ""
        },
        winner: "",
        playerScore: 0,
        computerScore: 0
    },
    listeners: []
    ,
    initStorage() {
        const localData = localStorage.getItem("user-state");
        const parsedData = JSON.parse(localData)
        this.setState(parsedData);
    },
    scoreCounter(winner) {

        if (winner == "player") {
            state.data.playerScore++
        };
        if (winner == "computer") {
            state.data.computerScore++
        };

    }
    ,
    getState() {
        return this.data
    },
    setState(newState) {
        this.data = newState
        for (const cb of this.listeners) {
            cb(newState);
        }
        localStorage.setItem("user-state", JSON.stringify(newState))
        console.log("Soy el state he cambiado", this.data);
    },
    suscribe(callback: (any) => any) {
        this.listeners.push(callback);
    },
    setMove(move: Move) {
        const currentState = this.getState();
        currentState.currentGame.playerMove = "";
        currentState.currentGame.playerMove = move;
    },
    result(playerMove, botMove) {
        /* playerMove = state.data.currentGame.playerMove
        botMove = state.data.currentGame.computerMove || alternativa mas corta ||*/
        const ganePiedra = state.data.currentGame.playerMove == "piedra" && state.data.currentGame.computerMove == "tijeras";
        const ganePapel = state.data.currentGame.playerMove == "papel" && state.data.currentGame.computerMove == "piedra";
        const ganeTijeras = state.data.currentGame.playerMove == "tijeras" && state.data.currentGame.computerMove == "papel";
        const gano = [ganePiedra, ganePapel, ganeTijeras].includes(true)
        if (gano == true) {
            state.data.winner = ""
            state.data.winner = "player"
            this.scoreCounter(state.data.winner);

        }
        const botPiedra = state.data.currentGame.computerMove == "piedra" && state.data.currentGame.playerMove == "tijeras";
        const botPapel = state.data.currentGame.computerMove == "papel" && state.data.currentGame.playerMove == "piedra";
        const botTijeras = state.data.currentGame.computerMove == "tijeras" && state.data.currentGame.playerMove == "papel";
        const botGana = [botPiedra, botPapel, botTijeras].includes(true)
        if (botGana == true) {
            state.data.winner = ""
            state.data.winner = "computer"
            this.scoreCounter(state.data.winner)
        }
        if (gano == false && botGana == false) {
            state.data.winner = ""
        }
    },
    setComputerMove(botMove) {
        const currentState = this.getState();
        currentState.currentGame.computerMove = "";
        currentState.currentGame.computerMove = botMove
    }
}
export { state }