export interface Arbre {
    id: string;
    position: {
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
    surplomb: string;
}
