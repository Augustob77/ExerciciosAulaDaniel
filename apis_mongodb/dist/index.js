"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importa todas as classes do Express
const express = require("express");
// Importa todas as classes do Body-Parser
//import * as bosyParser from 'body-parser'
// Importa o Mongoose
const mongoose = require("mongoose");
// Importa as Rotas
const index_1 = require("./routes/index");
// Cria uma instância do Express
const server = express();
// Configura o Servidor com middleware para trabsformar em JSON
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// Configura o Servidor com as Rotas
server.use(index_1.default);
// Define a Porta
const porta = 3003;
const uriDB = 'mongodb://localhost:27017';
// Conecta no MongoDB e sobre o Servidor
mongoose
    .connect(uriDB)
    .then(() => server.listen(porta, () => {
    console.log(`Servidor rodando na Porta ${porta}`);
}))
    .catch(error => {
    throw error;
});
