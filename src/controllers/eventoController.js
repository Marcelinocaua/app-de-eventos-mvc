const eventoModel = require("../models/eventoModel");

function exibirPaginaEventos(request, response) {
    response.render('eventos');
}

function exibirPaginaCriarEventos(request, response) {
    response.render('criarEventos');
}



function adicionarEvento (request, response){
    console.log (request.body); 

    const {nome, data, local} = request.body;

   //adicionar usuario
   eventoModel.adicionarEvento(nome, data, local);

   //readicionar para a pagina de login
   response.redirect("eventos")
}




module.exports = {
    exibirPaginaEventos,
    exibirPaginaCriarEventos,
    adicionarEvento
}




