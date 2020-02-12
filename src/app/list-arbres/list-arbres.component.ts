import { Component, OnInit } from '@angular/core';
import { ArbreService } from './arbre.service';
import { Arbre } from '../Models/abre.model';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-arbres',
  templateUrl: './list-arbres.component.html',
  styleUrls: ['./list-arbres.component.css']
})
export class ListArbresComponent implements OnInit {

  arbres: Arbre[];
  arbreString: string[];
  displayedColumns: string[] = ['id', 'essence', 'variete', 'position', 'action'];
  dataSource;

  constructor(private abreService: ArbreService, private router: Router) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {

      this.abreService.findAll().subscribe(
          (arbres: Arbre[]) => {
              this.arbres = arbres;
              this.dataSource = new MatTableDataSource(this.arbres);
          }
      );
      console.log(this.arbres);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClickNouveaArbre(){
      this.router.navigate(['nouveau']);
  }

  onClickConsulter(event, id) {
      this.router.navigate(['/', 'details', id]);
  }

  onClickModifier(event, id) {
      this.router.navigate(['/', 'modifier', id]);
  }

}
