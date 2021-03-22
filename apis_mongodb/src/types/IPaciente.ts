// Vamos explorar o MongoDB
import {Document} from 'mongoose'
// Vamos criar uma Classe Interface, ela representa o doc Paciente no MongoDB
export interface IPaciente extends Document{
    // Variáveis da inteface
    nome: String
    rg: String
    idade: number
    peso: number
    altura: number
}
