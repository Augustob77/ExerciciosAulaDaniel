// Importa todas as classes do Express
import * as express from 'express'
// Importa todas as classes do Body-Parser
//import * as bosyParser from 'body-parser'

// Importa o Mongoose
import mongoose = require("mongoose")
// Importa as Rotas
import rotas from './routes/index'

// Cria uma instância do Express
const server: express.Application = express()
// Configura o Servidor com middleware para trabsformar em JSON
server.use(express.json())
server.use(express.urlencoded({extended: false}))

// Configura o Servidor com as Rotas
server.use(rotas)

// Define a Porta
const porta = 3003
const uriDB: string = 'mongodb://localhost:27017'

// Conecta no MongoDB e sobre o Servidor
mongoose
    .connect(uriDB)
    .then(() => 
    server.listen(porta, () => {
        console.log(`Servidor rodando na Porta ${porta}`)
    }
  )
)
    .catch(error => {
        throw error
    })