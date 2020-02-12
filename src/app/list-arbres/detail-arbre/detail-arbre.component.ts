import { Component, OnInit } from '@angular/core';
import { ArbreService } from 'src/app/list-arbres/arbre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Arbre } from 'src/app/Models/abre.model';

@Component({
  selector: 'app-detail-arbre',
  templateUrl: './detail-arbre.component.html',
  styleUrls: ['./detail-arbre.component.css']
})
export class DetailArbreComponent implements OnInit {
  arbre: Arbre;
  id: string;

  constructor(private arbreService: ArbreService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params.id;
      this.arbreService.findArbre(this.id).subscribe(
        (arbre: Arbre) => {
            this.arbre = arbre;
            console.log('params: ' + this.arbre.photos);
        }
      );
  }

  onClickEdit(){
      this.router.navigate(['modifier', this.id]);
  }

}
