import { Component, OnInit } from '@angular/core';
import { ArbreService } from 'src/app/list-arbres/arbre.service';
import { Router } from '@angular/router';
import { Arbre } from 'src/app/Models/abre.model';

@Component({
  selector: 'app-detail-arbre',
  templateUrl: './detail-arbre.component.html',
  styleUrls: ['./detail-arbre.component.css']
})
export class DetailArbreComponent implements OnInit {
  arbre: Arbre;

  constructor(private arbreService: ArbreService, private router: Router) { }

  ngOnInit() {
      this.arbreService.selectedArbre.subscribe(
        (arbre: Arbre) => {
            this.arbre = arbre;
        }
      );
  }

}
