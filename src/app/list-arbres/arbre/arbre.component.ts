import { Component, OnInit, Input } from '@angular/core';
import { Arbre } from 'src/app/Models/abre.model';
import { ArbreService } from 'src/app/list-arbres/arbre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arbre',
  templateUrl: './arbre.component.html',
  styleUrls: ['./arbre.component.css']
})
export class ArbreComponent implements OnInit {
  @Input() arbre: Arbre;

  constructor(private arbreService: ArbreService, private router: Router) { }

  ngOnInit() {
  }

  onClickConsulter() {
      this.arbreService.selectedArbre.next(this.arbre);
      this.router.navigate(['/', this.arbre.id, 'details']);
  }

  onClickModifier() {
      console.log(this.arbre.id);
      this.arbreService.selectedArbre.next(this.arbre);
      this.router.navigate(['/', this.arbre.id, 'modifier'], {state: this.arbre});
  }

}
