import {Router} from 'express'
import {getPacientes, addPaciente} from '../controllers/PacienteController'

const router: Router = Router()

router.get("/pacientes", getPacientes)
router.post("add-paciente", addPaciente)

export default router