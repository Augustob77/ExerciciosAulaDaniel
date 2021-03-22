import { ContainerShip, SpaceCraft } from "./Classe";
import { MilleniumFalcon } from "./Nave";

let ship = new SpaceCraft('driver fraco')
ship.jumpIntoHyperspace()

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperspace()

// criando var do tipo função
let goodForTheJob = (ship: ContainerShip) => ship.cargoContainer > 2

console.log(`A Nave é boa ${goodForTheJob(falcon)? 'Sim': 'Não'}`)
