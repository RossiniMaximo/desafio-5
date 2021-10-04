
type Move = "tijeras" | "papel" | "piedra"
type Game = {
    playerMove: Move,
    computerMove: Move
}

const state = {
    data: {
        currentGame: {
            playerMove: "",
            computerMove: ""
        },
        winner: "",
        playerScore: 0,
        computerScore: 0,
    },
    listeners: [],
    scoreCounter(winner) {
        const newState = state.getState();
        if (winner === "player") {
            newState.playerScore++
        } else {
            if (winner === "computer") {
                newState.computerScore++
            }
        }
        state.setState(newState)
    },
    getState() {
        return this.data
    },
    setState(newState) {
        localStorage.setItem("user-data", JSON.stringify(newState))
        this.data = newState
        for (const cb of this.listeners) {
            cb();
        }
        console.log("soy el state he cambiado", newState);

    },
    initStorage() {
        const localdata = localStorage.getItem("user-data");
        if (localdata == "null" || null) {
            return this.setState({
                data: {
                    currentGame: {
                        playerMove: "",
                        computerMove: ""
                    },
                    winner: "",
                    playerScore: 0,
                    computerScore: 0,
                }
            })
        } else {
            return state.setState(JSON.parse(localdata))
        }
    },
    suscribe(callback: (any) => any) {
        this.listeners.push(callback);
    },
    setMove(move: Move) {
        const currentState = this.getState();
        currentState.currentGame.playerMove = move;
        state.setState(currentState)
    },
    result(playerMove, botMove) {
        /* playerMove = state.data.currentGame.playerMove
        botMove = state.data.currentGame.computerMove || alternativa mas corta ||*/
        const ganePiedra = state.data.currentGame.playerMove == "piedra" && state.data.currentGame.computerMove == "tijeras";
        const ganePapel = state.data.currentGame.playerMove == "papel" && state.data.currentGame.computerMove == "piedra";
        const ganeTijeras = state.data.currentGame.playerMove == "tijeras" && state.data.currentGame.computerMove == "papel";
        const gano = [ganePiedra, ganePapel, ganeTijeras].includes(true)
        if (gano == true) {
            state.data.winner = "player"

        }
        const botPiedra = state.data.currentGame.computerMove == "piedra" && state.data.currentGame.playerMove == "tijeras";
        const botPiedraContraNada = state.data.currentGame.computerMove == "piedra" && state.data.currentGame.playerMove == "";
        const botPapel = state.data.currentGame.computerMove == "papel" && state.data.currentGame.playerMove == "piedra";
        const botPapelContraNada = state.data.currentGame.computerMove == "papel" && state.data.currentGame.playerMove == "";
        const botTijeras = state.data.currentGame.computerMove == "tijeras" && state.data.currentGame.playerMove == "papel";
        const botTijerasContraNada = state.data.currentGame.computerMove == "tijeras" && state.data.currentGame.playerMove == "";
        const botGana = [botPiedra, botPapel, botTijeras, botPiedraContraNada, botPapelContraNada, botTijerasContraNada].includes(true)
        if (botGana == true) {
            state.data.winner = "computer"
        }
        if (gano == false && botGana == false) {
            state.data.winner = ""

        }

    },
    setComputerMove(botMove) {
        const currentState = this.getState();
        currentState.currentGame.computerMove = botMove
        state.setState(currentState)
    }

};

/* (function () {

    const localState = localStorage.getItem("user-data");
    const parsedLocal = JSON.parse(localState)
    console.log("parsed local : ", parsedLocal);

    if (localState == null || "null") {
        return state.setState({
            currentGame: {
                playerMove: "",
                computerMove: ""
            },
            playerScore: 0,
            computerScore: 0,
            winner: ""
        })
    } else {
        return state.setState(JSON.parse(localState))
    }

})() */



export { state }