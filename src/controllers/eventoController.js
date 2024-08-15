function exibirPaginaEventos(request, response) {
    response.render('eventos');
}

function exibirPaginaCriarEventos(request, response) {
    response.render('criareventos');
}


module.exports = {
    exibirPaginaEventos,
    exibirPaginaCriarEventos
}