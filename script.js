// Datas fictícias para demonstração

const recursos = [
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
    }
];

function atualizarTimer(id, dataFinal){

    const agora = new Date().getTime();
    const fim = new Date(dataFinal).getTime();

    const diferenca = fim - agora;

    if(diferenca <= 0){
        document.getElementById(id).innerHTML = "ESGOTADO";
        return;
    }

    const dias = Math.floor(diferenca / (1000*60*60*24));

    const horas = Math.floor((diferenca % (1000*60*60*24)) / (1000*60*60));

    const minutos = Math.floor((diferenca % (1000*60*60)) / (1000*60));

    const segundos = Math.floor((diferenca % (1000*60)) / 1000);

    document.getElementById(id).innerHTML =
        dias + " dias<br>" +
        horas + " horas<br>" +
        minutos + " min " +
        segundos + " s";
}

function atualizarTodos(){

    recursos.forEach(function(recurso){
        atualizarTimer(recurso.id, recurso.data);
    });

}

atualizarTodos();

setInterval(atualizarTodos,1000);
