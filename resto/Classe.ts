class SpaceCraft {
    // Definido os construtor e as variaveis
    constructor(public propulsor: string){

    }

    // Método de instancia
    jumpIntoHyperspace(): void{
        console.log(`Entrando no HyperSpace whith${this.propulsor}`);
    }
}

// Criando obj no SpaceCraft
//let obj = new SpaceCraft("A todo Vapor");
//obj.jumpIntoHyperspace()

// Criando uma classe interface
interface ContainerShip{
    cargoContainer: number;

}

// Exportar classe e interface
export {SpaceCraft, ContainerShip}