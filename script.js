// ================================
// MENU
// ================================

const paginas = document.querySelectorAll(".pagina");
const botoes = document.querySelectorAll("nav button");

function mostrarPagina(id) {

    paginas.forEach(pagina => {
        pagina.style.display = "none";
    });

    document.getElementById(id).style.display = "grid";

    botoes.forEach(botao => {
        botao.classList.remove("ativo");
    });

    event.target.classList.add("ativo");

}

// ================================
// DATAS DOS EVENTOS
// ================================

const eventos = [

    // Recursos Naturais

    {
        id: "petroleo",
        data: "2075-01-01T00:00:00"
    },

    {
        id: "gas",
        data: "2085-01-01T00:00:00"
    },

    {
        id: "carvao",
        data: "2150-01-01T00:00:00"
    },

    {
        id: "agua",
        data: "2100-01-01T00:00:00"
    },

    // Ciência

    {
        id: "lua",
        data: "2028-12-01T00:00:00"
    },

    {
        id: "marte",
        data: "2035-01-01T00:00:00"
    },

    {
        id: "espacial",
        data: "2026-10-15T00:00:00"
    },

    {
        id: "cientifico",
        data: "2030-01-01T00:00:00"
    },

    // Meio Ambiente

    {
        id: "florestas",
        data: "2030-12-31T00:00:00"
    },

    {
        id: "carbono",
        data: "2050-01-01T00:00:00"
    },

    {
        id: "biodiversidade",
        data: "2030-12-31T00:00:00"
    },

    {
        id: "plastico",
        data: "2040-01-01T00:00:00"
    },

    // População

    {
        id: "novebilhoes",
        data: "2037-01-01T00:00:00"
    },

    {
        id: "urbana",
        data: "2050-01-01T00:00:00"
    },

    {
        id: "idosos",
        data: "2050-01-01T00:00:00"
    },

    {
        id: "crescimento",
        data: "2100-01-01T00:00:00"
    },

    // Economia

    {
        id: "pib",
        data: "2030-01-01T00:00:00"
    },

    {
        id: "pobreza",
        data: "2030-12-31T00:00:00"
    },

    {
        id: "comercio",
        data: "2035-01-01T00:00:00"
    },

    {
        id: "financeira",
        data: "2030-01-01T00:00:00"
    }

];

// ================================
// TIMER
// ================================

function atualizarTimer(id, dataFinal){

    const agora = new Date().getTime();

    const fim = new Date(dataFinal).getTime();

    const distancia = fim - agora;

    const elemento = document.getElementById(id);

    if(!elemento) return;

    if(distancia <= 0){

        elemento.innerHTML = "Evento encerrado";

        return;

    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    elemento.innerHTML =
        dias + " dias<br>" +
        horas + " horas<br>" +
        minutos + " minutos<br>" +
        segundos + " segundos";

}

// ================================
// ATUALIZA TODOS
// ================================

function atualizarTodos(){

    eventos.forEach(evento =>{

        atualizarTimer(evento.id, evento.data);

    });

}

atualizarTodos();

setInterval(atualizarTodos,1000);

// ================================
// BOTÃO INICIAL
// ================================

botoes[0].classList.add("ativo");
