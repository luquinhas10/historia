function escolherAção() {
    document.getElementById("story").textContent = 
        "Você acorda em um lugar desconhecido, cercado por árvores altas e uma neblina densa. Ao seu lado, uma mochila desgastada e um mapa antigo, com símbolos que você não regular. De repente, você ouve um barulho ao longo .";
    document.querySelector(".choices").innerHTML = `
        <button onclick="Examine o mapa para tentar entender onde está.()">Examine o mapa para tentar entender onde está.</button>
        <button onclick="Segue sem olhar o mapa()">Segue sem olhar o mapa</button>
    `;
}

function escolherCaminho() {
    document.getElementById("story").textContent = 
        "Você seguiu seu caminho e encontrou dois lados para seguir. Você pode seguir pela esquerda ou pela direita.";
    document.querySelector(".choices").innerHTML = `
        <button onclick="escolherEsquerda()">Seguir pela esquerda</button>
        <button onclick="escolherDireita()">Seguir pela direita</button>
    `;
}

function examineMapa() {
    document.getElementById("story").textContent = 
        "Voce obervou no mapa um tesouro perto de voce.o que irá fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="pegarOtesouro()">Pegar o tesouro</button>
        <button onclick="ignorar()">ignorar</button>
    `;
}

function ignorar() {
    document.getElementById("story").textContent = 
        "Você seguiu sem olhar o mapa";
    document.querySelector(".choices").innerHTML = `
        <button onclick="...()">...</button>
        <button onclick="...()">...</button>
    `;
}

function lutarComDragao() {
    document.getElementById("story").textContent = 
        "O tesouro era almadiçoado. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function fugir() {
    document.getElementById("story").textContent = 
        "Você seguiu sua jornada. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function escolherEsquerda() {
    document.getElementById("story").textContent = 
        "Você seguiu pela esquerda e encontrou um vilareijo. O que você faz?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="ficarNoVilareigo()">FicarNoVilareijo</button>
        <button onclick="ignorarVilareijo()">Ignorar o vilareijo</button>
    `;
}

function escolherDireita() {
    document.getElementById("story").textContent = 
        "Você seguiu pela direita e encontrou um castelo em ruínas. A porta está entreaberta. O que você faz?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="entrarNoCastelo()">Entrar no castelo</button>
        <button onclick="ficarFora()">Ficar do lado de fora</button>
    `;
}

// Respostas na floresta
function mergulharNoLago() {
    document.getElementById("story").textContent = 
        "Você ficou no vilareijo e foi acolhido. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function ignorarLago() {
    document.getElementById("story").textContent = 
        "Você ignorou o vilareijo e morreu de fome. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function entrarNoCastelo() {
    document.getElementById("story").textContent = 
        "Você entrou no castelo e encontrou um grande tesouro! Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function ficarFora() {
    document.getElementById("story").textContent = 
        "Você decidiu ficar do lado de fora do e morreu de fome. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function reiniciar() {
    document.getElementById("story").textContent = 
             "Você encontrou um portal para seu mundo de origem. O que você deseja fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="entrarPortal()">Entrar no portal</button>
        <button onclick="ficarNesteMundo()">ficar neste mundo</button>
    `;
}
