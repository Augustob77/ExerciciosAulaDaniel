"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PacienteController_1 = require("../controllers/PacienteController");
const router = express_1.Router();
router.get("/pacientes", PacienteController_1.getPacientes);
router.post("add-paciente", PacienteController_1.addPaciente);
exports.default = router;
