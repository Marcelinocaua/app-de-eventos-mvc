const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const enableHotReload = require("./hot-reload");

var loginController = require("./controllers/loginController");
var cadastroController  = require("./controllers/cadastroController");
var eventoController = require("./controllers/eventoController")

const app = express();

// configurando o body-parser
app.use(bodyparser.urlencoded({ extended: false}));

// Configurações do seu app Express

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública

app.use(express.static(path.join(__dirname, "public")));
console.log("Static files path set to:", path.join(__dirname, "public"));

// Habilitar hot-reload

enableHotReload(app);

// Rotas inicial
app.get("/", loginController.exibirPaginaLogin);

// rota para a pagina de cadastro
app.get("/criar-conta",  cadastroController.exibirPaginaCadastro);

//rota para criar  um novo usuario
app.post("/criar-conta", cadastroController.adicionarUsuario);

//rota para a pagina de lista de eventos 
app.get("/eventos", eventoController.exibirPaginaEventos);

//rota para pagina para criar eventos
app.get("/criarEventos", eventoController.exibirPaginaCriarEventos);



// Inicie o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);});