"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importar as Classes do MongoDB - Mongoose
const mongoose_1 = require("mongoose");
// Vamos criar um Esquema do Mongoose para o Paciente
const pacienteShcema = new mongoose_1.Schema({
    nome: {
        type: String,
        required: true,
    },
    rg: {
        type: String,
        required: true,
    },
    peso: {
        type: Number,
        required: true,
    },
    altura: {
        type: Number,
        required: true,
    },
    idade: {
        type: Number,
        required: true
    }
});
// Exportar o Esquema
exports.default = mongoose_1.model("Paciente", pacienteShcema);
