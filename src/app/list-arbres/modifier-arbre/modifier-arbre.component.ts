import { Component, OnInit } from '@angular/core';
import { ArbreService } from 'src/app/list-arbres/arbre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Arbre } from 'src/app/Models/abre.model';

@Component({
  selector: 'app-modifier-arbre',
  templateUrl: './modifier-arbre.component.html',
  styleUrls: ['./modifier-arbre.component.css']
})
export class ModifierArbreComponent implements OnInit {
  var1 = 'test';
  testArbre: Arbre = new Arbre('blah', {x: 1, y: 2}, 'essence', 'variete');
  temp: Arbre;
  arbre: Arbre;
  id: string;

  constructor(private arbreService: ArbreService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
      this.arbre = history.state;
      this.temp = this.arbre;
      this.id = this.activatedRoute.snapshot.params["id"];
      //this.arbre = this.arbreService.
      console.log("params"+this.activatedRoute.snapshot.params["id"]);
  }

  onClickSave() {
      this.arbreService.arbres[this.arbre.id] = this.arbre;
      if(this.arbre.id != this.id)
      {
        delete this.arbreService.arbres[this.id];
      }
      console.log(this.arbreService.arbres);
      console.log(this.temp);
      //Object.keys(obj).find(key => obj[key].includes(value));
  }

  onClickReset() {
      //this.arbre = this.temp;
      //console.log(this.arbre);
      //console.log(history.state);
      this.router.navigate(['']);
  }

}
