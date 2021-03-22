"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importar as Bibliotecas
// Express. Body-Parser e Controller
const express = require("express");
const bodyParser = require("body-parser");
const mensagem_controller_1 = require("./mensagem.controller");
// Criar uma instância do Server Express
const server = express();
// Server suportando o body-parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
// Montar a Rota
server.use('/mensagem', mensagem_controller_1.MensagemController);
// Sobe o Server
server.listen(3000, () => {
    console.log('Subindo na Porta 3000');
});
