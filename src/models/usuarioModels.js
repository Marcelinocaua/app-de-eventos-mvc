const md5 = require('md5');

//importando a conexão com o banco de dados 
const pool = require("../config/banco-de-dados")

const usuarios = []

function adicionarUsuario(nome, email, senha){
   // usuarios.push({
      //  id: Date.now(),
       // nome: nome,
     //   email: email,
       // senha: md5 (senha),
       // criadoEm: new Date()
 //   })


   // console.log(usuarios)

   // criptografando senha
   const senhaCriptografada = md5(senha);

   //adicionar um novo usuario no banco de dados 
   pool.query(`INSERT INTO usuarios (nome, email, senha, criadoEm) VALUES ('${nome}', '${email}', '${senhaCriptografada}', now())`

   ).then(() => {
    console.log('DEU CERTO');
   
   })


   .catch((error) =>{
    console.error("ERRO AO INSERIR NO BANCO DE DADOS", error);
   })
}

module.exports = {
    adicionarUsuario
}


