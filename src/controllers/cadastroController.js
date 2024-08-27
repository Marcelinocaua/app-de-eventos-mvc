const usuarioModel = require("../models/usuarioModels");


function exibirPaginaCadastro(request, response) {
    response.render('cadastro');
}

function adicionarUsuario(request, response){
   console.log (request.body); 


   const {nome, email, senha} = request.body;

   //adicionar usuario
   usuarioModel.adicionarUsuario(nome, email, senha);

   //readicionar para a pagina de login
   response.redirect("/")
}

module.exports = {
    exibirPaginaCadastro,
    adicionarUsuario
}