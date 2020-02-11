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
      this.router.navigate(['/', 'details', this.arbre.id]);
  }

  onClickModifier() {
      this.router.navigate(['/', 'modifier', this.arbre.id]);
  }

}
