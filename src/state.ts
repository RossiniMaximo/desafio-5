type Move = "tijeras" | "papel" | "piedra"
type Game = ""

const state = {
    data: {
        currentGame: {
            playerMove: "",
            computerMove: ""
        },
        winner: ""
    },
    listeners: []
    ,
    playerScore: 0
    ,
    computerScore: 0
    ,
    getState() {
        return this.data
    },
    setState(newState) {
        const currentState = this.getState();
        currentState.data = newState;
        for (const cb of this.listeners) {
            cb(newState);
        }
        console.log("Soy el state he cambiado", this.data);
    },
    suscribe(callback: (any) => any) {
        this.listeners.push(callback);
    },
    pushToHistory(game: Game) {
        const currentState = this.getState();
        currentState.history(game)
    },
    setMove(move: Move) {
        const currentState = this.getState();
        currentState.currentGame.playerMove = move;
    },
    Result(playerMove: Move, botMove: Move) {
        const ganePiedra = playerMove == "piedra" && botMove == "tijeras";
        const ganePapel = playerMove == "papel" && botMove == "piedra";
        const ganeTijeras = playerMove == "tijeras" && botMove == "papel";
        const gano = [ganePiedra, ganePapel, ganeTijeras].includes(true)
        if (gano == true) {
            state.setState({
                ...state.getState(),
                winner: "player"
            })
        };
        const botPiedra = botMove == "piedra" && playerMove == "tijeras";
        const botPapel = botMove == "papel" && playerMove == "piedra";
        const botTijeras = botMove == "tijeras" && playerMove == "papel";
        const botGana = [botPiedra, botPapel, botTijeras].includes(true)
        if (botGana == true) {
            state.setState({
                ...state,
                winner: "computadora"
            })
        };
    },
    setComputerMove(move) {
        const currentState = this.getState();
        const moves = ["piedra", "papel", "tijeras"];
        move = moves[Math.floor(Math.random() * moves.length)];
        currentState.currentGame.computerMove = move;
    }
}
export { state }