function exibirPaginaEventos(request, response) {
    response.render('eventos');
}

function exibirPaginaCriarEventos(request, response) {
    response.render('criarEventos');
}


module.exports = {
    exibirPaginaEventos,
    exibirPaginaCriarEventos
}