import { state } from "../../state"
export function initGamePage(params) {
    const div = document.createElement("div");
    div.className = "container"
    div.innerHTML = `
    <h2 class="title"> ¡Elige una opción!</h2>
    <div class="timer-container">
    <the-timer id="timer"></the-timer> 
    </div>
    <p class="your-move">tu jugada :</p>
    <p class="move-receptor">${state.getState().playerMove}</p>
    <div class="hands-container">
    <rps-hands></rps-hands>
    <div>
    `;
    console.log(state.data.winner);
    function goToResultsPage() {
        setTimeout(() => {
            params.goTo("/result")
        }, 4500)
    }
    /* goToResultsPage(); */
    return div
}