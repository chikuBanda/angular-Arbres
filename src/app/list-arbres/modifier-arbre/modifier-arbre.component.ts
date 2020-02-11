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
  temp: Arbre;
  arbre: Arbre;
  id: string;

  constructor(private arbreService: ArbreService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params.id;
      this.arbreService.findArbre(this.id).subscribe(
        (arbre: Arbre) => {
            this.arbre = arbre;
        }
      );
      console.log('params: ' + this.activatedRoute.snapshot.params.id);
  }

  onClickSave() {
      this.arbreService.update(this.arbre).subscribe();
  }

  onClickReset() {
      this.arbreService.findArbre(this.arbre.id).subscribe(
          (arbre: Arbre) => {
              this.arbre = arbre;
          }
      );
  }

  onDelete() {
      this.arbreService.delete(this.arbre.id).subscribe();
  }

}
