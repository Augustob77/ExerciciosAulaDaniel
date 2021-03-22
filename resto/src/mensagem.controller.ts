// Importar as Classes do Express
// Router: Rotas - Request: Dados do Usuario - Response: Do Server para o Usuário
import {Router, Request, Response} from 'express'
import { ReplOptions } from 'repl'

// Criar objeto 
const router: Router = Router()

// Criar uma Rota GET com BARRA(/)
router.get('/', (req: Request, res: Response) => {
    // Responder o Usuário com uma mensagem
    res.send("Seja bem-vindo a nossa aplicação de teste")
})

// Criar uma Rota de GET com NOME
router.get('/:nome', (req: Request, res: Response) => {
    // Obtem o calor passado na URL
    let {nome} =  req.params // Vai retornar o valor passado do Parâmetro
    // Responder ao usuário
    res.send(`Seja bem-vindo a nossa aplicação de teste  ${nome}`)
})

// Exportar o objeto Router
export const MensagemController: Router = router