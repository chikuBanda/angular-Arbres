import { Component, OnInit } from '@angular/core';
import { ArbreService } from 'src/app/list-arbres/arbre.service';
import { Router } from '@angular/router';
import { Arbre } from 'src/app/Models/abre.model';

@Component({
  selector: 'app-modifier-arbre',
  templateUrl: './modifier-arbre.component.html',
  styleUrls: ['./modifier-arbre.component.css']
})
export class ModifierArbreComponent implements OnInit {
  var1 = 'test';
  testArbre: Arbre = new Arbre('blah', {x: 1, y: 2}, 'essence', 'variete');
  arbre: Arbre;

  constructor(private arbreService: ArbreService) {}

  ngOnInit() {
      this.arbre = this.testArbre;
      this.arbreService.selectedArbre.subscribe(
        (arbre: Arbre) => {
          console.log(arbre);
        }
      );
      //console.log(this.arbreService.arbres);
  }

}
