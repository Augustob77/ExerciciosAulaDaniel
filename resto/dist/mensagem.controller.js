"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagemController = void 0;
// Importar as Classes do Express
// Router: Rotas - Request: Dados do Usuario - Response: Do Server para o Usuário
const express_1 = require("express");
// Criar objeto 
const router = express_1.Router();
// Criar uma Rota GET com BARRA(/)
router.get('/', (req, res) => {
    // Responder o Usuário com uma mensagem
    res.send("Seja bem-vindo a nossa aplicação de teste");
});
// Criar uma Rota de GET com NOME
router.get('/:nome', (req, res) => {
    // Obtem o calor passado na URL
    let { nome } = req.params; // Vai retornar o valor passado do Parâmetro
    // Responder ao usuário
    res.send(`Seja bem-vindo a nossa aplicação de teste  ${nome}`);
});
// Exportar o objeto Router
exports.MensagemController = router;
