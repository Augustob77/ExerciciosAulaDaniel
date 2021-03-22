// Importar a interface IPaciente
import {IPaciente} from '../types/IPaciente'
// Importar as Classes do MongoDB - Mongoose
import {model, Schema} from 'mongoose'
// Vamos criar um Esquema do Mongoose para o Paciente
const pacienteShcema: Schema = new Schema(
    {
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
    }
)

// Exportar o Esquema
export default model<IPaciente>("Paciente", pacienteShcema)