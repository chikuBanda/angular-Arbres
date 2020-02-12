import { Component, OnInit } from '@angular/core';
import { ArbreService } from './arbre.service';
import { Arbre } from '../Models/abre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-arbres',
  templateUrl: './list-arbres.component.html',
  styleUrls: ['./list-arbres.component.css']
})
export class ListArbresComponent implements OnInit {

  arbres: Arbre[];
  arbreString: string[];

  constructor(private abreService: ArbreService, private router: Router) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
      this.abreService.findAll().subscribe(
          (arbres: Arbre[]) => {
              this.arbres = arbres;
          }
      );
  }

  onClickNouveaArbre(){
      this.router.navigate(['nouveau']);
  }

}
