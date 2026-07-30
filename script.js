// =====================================
// CONTROLE DAS PÁGINAS
// =====================================


const paginas = document.querySelectorAll(".pagina");
const botoes = document.querySelectorAll("nav button");


function mostrarPagina(id, botao){

    // Esconde todas as páginas

    paginas.forEach(function(pagina){

        pagina.style.display = "none";

    });


    // Mostra a página escolhida

    const paginaSelecionada = document.getElementById(id);


    if(paginaSelecionada){

        paginaSelecionada.style.display = "grid";

    }


    // Remove o efeito ativo dos botões

    botoes.forEach(function(btn){

        btn.classList.remove("ativo");

    });


    // Coloca efeito no botão clicado

    botao.classList.add("ativo");

}



// =====================================
// DATAS DOS CONTADORES
// =====================================


const eventos = [


    // ======================
    // RECURSOS NATURAIS
    // ======================


    {
        id:"petroleo",
        data:"2075-01-01T00:00:00"
    },


    {
        id:"gas",
        data:"2085-01-01T00:00:00"
    },


    {
        id:"carvao",
        data:"2150-01-01T00:00:00"
    },


    {
        id:"agua",
        data:"2100-01-01T00:00:00"
    },


    // ======================
    // CIÊNCIA E TECNOLOGIA
    // ======================


    {
        id:"lua",
        data:"2028-12-01T00:00:00"
    },


    {
        id:"marte",
        data:"2035-01-01T00:00:00"
    },


    {
        id:"espacial",
        data:"2026-10-15T00:00:00"
    },


    {
        id:"cientifico",
        data:"2030-01-01T00:00:00"
    },


    // ======================
    // MEIO AMBIENTE
    // ======================


    {
        id:"florestas",
        data:"2030-12-31T00:00:00"
    },


    {
        id:"carbono",
        data:"2050-01-01T00:00:00"
    },


    {
        id:"biodiversidade",
        data:"2030-12-31T00:00:00"
    },


    {
        id:"plastico",
        data:"2040-01-01T00:00:00"
    },


    // ======================
    // POPULAÇÃO
    // ======================


    {
        id:"novebilhoes",
        data:"2037-01-01T00:00:00"
    },


    {
        id:"urbana",
        data:"2050-01-01T00:00:00"
    },


    {
        id:"idosos",
        data:"2050-01-01T00:00:00"
    },


    {
        id:"crescimento",
        data:"2100-01-01T00:00:00"
    },


    // ======================
    // ECONOMIA
    // ======================


    {
        id:"pib",
        data:"2030-01-01T00:00:00"
    },


    {
        id:"pobreza",
        data:"2030-12-31T00:00:00"
    },


    {
        id:"comercio",
        data:"2035-01-01T00:00:00"
    },


    {
        id:"financeira",
        data:"2030-01-01T00:00:00"
    }


];



// =====================================
// FUNÇÃO DO TIMER
// =====================================


function atualizarTimer(id, dataFinal){


    const elemento = document.getElementById(id);


    // Caso o card ainda não exista no HTML

    if(!elemento){

        return;

    }


    const agora = new Date().getTime();


    const final = new Date(dataFinal).getTime();


    const distancia = final - agora;



    if(distancia <= 0){


        elemento.innerHTML = "Finalizado";


        return;


    }



    const dias = Math.floor(

        distancia / (1000 * 60 * 60 * 24)

    );



    const horas = Math.floor(

        (distancia % (1000 * 60 * 60 * 24)) /

        (1000 * 60 * 60)

    );



    const minutos = Math.floor(

        (distancia % (1000 * 60 * 60)) /

        (1000 * 60)

    );



    const segundos = Math.floor(

        (distancia % (1000 * 60)) /

        1000

    );



    elemento.innerHTML =

    `${dias} dias<br>
     ${horas} horas<br>
     ${minutos} minutos<br>
     ${segundos} segundos`;


}



// =====================================
// ATUALIZA TODOS OS CONTADORES
// =====================================


function atualizarTodos(){


    eventos.forEach(function(evento){


        atualizarTimer(

            evento.id,

            evento.data

        );


    });


}



// inicia imediatamente

atualizarTodos();


// atualiza a cada segundo

setInterval(atualizarTodos,1000);



// deixa o primeiro botão selecionado

if(botoes.length > 0){

    botoes[0].classList.add("ativo");

}
