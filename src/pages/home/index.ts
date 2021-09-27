export function initHomePage(params) {
    const div = document.createElement("div");
    div.className = "container-homepage"
    div.innerHTML = `
        <div  class="title-container">
            <h1 class="piedra">Piedra</h1>
            <span class="papel">Papel <span class="o-word">ó</span></span>
            <span class="tijera">Tijera</span>
        </div>
        <div class="b-container">
            <my-button id="button-id">Comenzar</my-button>
        </div>
        <div class="container-hands">
            <rps-hands class="hola"></rps-hands>
        </div>
    `
    const buttonEl = div.querySelector("#button-id");
    buttonEl.addEventListener("click", (e) => {
        params.goTo("//\/rossinimaximo.github.io\/rules/")
    })

    return div
}