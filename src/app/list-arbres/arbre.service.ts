import { Arbre } from '../Models/abre.model';
import { Subject } from 'rxjs';

export class ArbreService {
    selectedArbre = new Subject<Arbre[]>();
    arbres = {
        id1: new Arbre('id1', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        id2: new Arbre('id2', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        id3: new Arbre('id3', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        id4: new Arbre('id4', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        id5: new Arbre('id5', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        id6: new Arbre('id6', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        id7: new Arbre('id7', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        id8: new Arbre('id8', {x: 2, y: 5}, 'eucalyptus', 'some variety'),

    };



    getAbres() {
        return Object.values(this.arbres);
    }
}
