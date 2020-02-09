import { Component, OnInit } from '@angular/core';
import { ArbreService } from './arbre.service';
import { Arbre } from '../Models/abre.model';

@Component({
  selector: 'app-list-arbres',
  templateUrl: './list-arbres.component.html',
  styleUrls: ['./list-arbres.component.css']
})
export class ListArbresComponent implements OnInit {

  arbres: Arbre[];

  constructor(private abreService: ArbreService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
      this.arbres = this.abreService.getAbres();
  }

}
