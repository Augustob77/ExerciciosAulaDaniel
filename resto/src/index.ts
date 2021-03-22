// Importar as Bibliotecas
// Express. Body-Parser e Controller
import * as express from 'express'
import * as bodyParser from 'body-parser'
import {MensagemController} from './mensagem.controller'

// Criar uma instância do Server Express
const server: express.Application = express()

// Server suportando o body-parser
server.use(bodyParser.json())
server.use(bodyParser.urlencoded( {extended: false} ))

// Montar a Rota
server.use('/mensagem', MensagemController)

// Sobe o Server
server.listen(3000, () => {
    console.log('Subindo na Porta 3000')
})