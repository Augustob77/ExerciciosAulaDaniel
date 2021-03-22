"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attPaciente = exports.delPaciente = exports.addPaciente = exports.getPacientes = void 0;
// Importar o Esquema Paciente
const Paciente_1 = require("../models/Paciente");
// Função para retornar todos os pacientes
const getPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { // Tratando a exceção
        // Recupera os Pacientes
        const pacientes = yield Paciente_1.default.find();
        res.status(200).json({ pacientes }); // Retorna os pacientes recuperados em formato JSON
    }
    catch (error) {
        console.log(error);
        throw error; // Lançar a exceção
    }
});
exports.getPacientes = getPacientes;
// Função para adicionar um Paciente
const addPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { // Tratando a exceção
        // Recupera os valores informados pelo usuário
        const corpo = req.body;
        // Montar o objeto
        const pacientes = new Paciente_1.default({
            nome: corpo.nome,
            rg: corpo.rg,
            idade: corpo.idade,
            peso: corpo.peso,
            altura: corpo.altura
        });
        // Inserir no Banco de Dados
        const novoCliente = yield pacientes.save();
        res.status(200).json({ novoCliente });
    }
    catch (error) {
        console.log(error);
        throw error; // Lançar a exceção
    }
});
exports.addPaciente = addPaciente;
// Função para remover um Paciente
const delPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { // Tratando a exceção
    }
    catch (error) {
        console.log(error);
        throw error; // Lançar a exceção
    }
});
exports.delPaciente = delPaciente;
// Função para atualizar um Paciente
const attPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { // Tratando a exceção
    }
    catch (error) {
        console.log(error);
        throw error; // Lançar a exceção
    }
});
exports.attPaciente = attPaciente;
