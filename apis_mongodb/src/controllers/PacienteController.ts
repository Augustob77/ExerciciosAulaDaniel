// Importar o express
import {Request, Response} from 'express'
// Importar o tipo de dado IPaciente
import {IPaciente} from '../types/IPaciente'
// Importar o Esquema Paciente
import Paciente from '../models/Paciente'

// Função para retornar todos os pacientes
const getPacientes = async(req: Request, res: Response): Promise<void> => {
    try{ // Tratando a exceção
        // Recupera os Pacientes
        const pacientes: IPaciente[] = await Paciente.find()
        res.status(200).json({pacientes}) // Retorna os pacientes recuperados em formato JSON
    }
    catch(error){
        console.log(error)
        throw error // Lançar a exceção
    }
}

// Função para adicionar um Paciente
const addPaciente = async(req: Request, res: Response): Promise<void> => {
    try{ // Tratando a exceção
         // Recupera os valores informados pelo usuário
        const corpo = req.body as Pick <IPaciente, "nome" | "rg" | "idade" | "peso" | "altura">
        // Montar o objeto
        const pacientes: IPaciente = new Paciente({
            nome: corpo.nome,
            rg: corpo.rg,
            idade: corpo.idade,
            peso: corpo.peso,
            altura: corpo.altura
        })
        // Inserir no Banco de Dados
        const novoCliente = await pacientes.save()
        res.status(200).json({novoCliente})
    }
    catch(error){
        console.log(error)
        throw error // Lançar a exceção
    }
}

// Função para remover um Paciente
const delPaciente = async(req: Request, res: Response): Promise<void> => {
    try{ // Tratando a exceção

    }
    catch(error){
        console.log(error)
        throw error // Lançar a exceção
    }
}

// Função para atualizar um Paciente
const attPaciente = async(req: Request, res: Response): Promise<void> => {
    try{ // Tratando a exceção

    }
    catch(error){
        console.log(error)
        throw error // Lançar a exceção
    }
}

// Exportar os métodos criados
export {getPacientes, addPaciente, delPaciente, attPaciente}

