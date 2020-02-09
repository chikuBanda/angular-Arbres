import { Arbre } from '../Models/abre.model';
import { Subject } from 'rxjs';

export class ArbreService {
    selectedArbre = new Subject<Arbre>();
    arbres: Arbre[] = [
        new Arbre('id1', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        new Arbre('id2', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        new Arbre('id3', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        new Arbre('id4', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        new Arbre('id1', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        new Arbre('id2', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        new Arbre('id3', {x: 2, y: 5}, 'eucalyptus', 'some variety'),
        new Arbre('id4', {x: 2, y: 5}, 'eucalyptus', 'some variety')

    ];

    getAbres() {
        return this.arbres.slice();
    }
}
