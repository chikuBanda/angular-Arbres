export class Arbre {
    id: string;
    positionArbre: {
        x: number,
        y: number
    };
    essence: string;
    variete: string;
    circonference: number;
    hauter: number;
    surface: number;
    distanceAuBati: number;
    contraintesBatiment: string;
    incedentRacine: string;
    etatPhysiologique: string;
    atteintesPhysiologique: string;
    defautsMecaniques: string;
    pathogene: string;
    alignement: string;

    constructor(
      id: string,
      positionArbre: {x: number, y: number},
      essence: string,
      variete: string
      ) {
        this.id = id;
        this.positionArbre = positionArbre;
        this.essence = essence;
        this.variete = variete;
    }
}
