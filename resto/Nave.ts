import {SpaceCraft, ContainerShip } from "./Classe";

export class MilleniumFalcon extends SpaceCraft implements ContainerShip {
    // Obrigatoriamente precisamos da variavcel da interface
    cargoContainer: number

    constructor(){
        super('Propulsor Hipersónico') // Chama o constructor da SuperClass
        this.cargoContainer = 3
    }
    // Anular o método que era usado
    jumpIntoHyperspace(): void{
        if(Math.random() >= 0.50){ // Entra no HyperSpace 50% das vezes
            super.jumpIntoHyperspace()
        }
        else {
            console.log('Falha ao entrar no HperSpace')
        }
    }
}

//let obj1 = new MilleniumFalcon()
//obj1.jumpIntoHyperspace()