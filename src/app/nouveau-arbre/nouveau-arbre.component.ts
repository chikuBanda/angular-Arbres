import { Component, OnInit } from '@angular/core';
import { Arbre } from '../Models/abre.model';
import { ArbreService } from '../list-arbres/arbre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-arbre',
  templateUrl: './nouveau-arbre.component.html',
  styleUrls: ['./nouveau-arbre.component.css']
})
export class NouveauArbreComponent implements OnInit {
  arbre: Arbre = new Arbre();
  nombreArbre: number;

  constructor(private arbreService: ArbreService, private router: Router) { }

  ngOnInit() {
      this.arbreService.findAll().subscribe(
          (arbres: Arbre[]) => {
              this.nombreArbre = arbres.length;
              if(arbres.length == 0){
                  this.arbre.id = "id" + (this.nombreArbre + 1);
              }
              else{
                  let idnumber = arbres[arbres.length -1].id.replace('id', '');
                  this.arbre.id = "id" + ((+idnumber) + 1);
              }
          }
      );
  }

  onClickCancel(){
      this.router.navigate(['']);
  }

  onClickSave(){
      this.arbreService.add(this.arbre).subscribe();
      this.router.navigate(['']);
  }

  onFileSelected(event){
    console.log(event.target.files[0].name);
    this.arbre.photos.push('../../../assets/' + event.target.files[0].name);
    for(let i = 0; i < this.arbre.photos.length; i++){
        if(this.arbre.photos[i] == "../../../assets/placeholder.png"){
            this.arbre.photos.splice(i, 1);
        }
    }
    console.log(this.arbre);
  }

  onClickRemovePhoto(event, photoLink){
    this.arbre.photos.splice(this.arbre.photos.indexOf(photoLink), 1);
    if(this.arbre.photos.length == 0){
        this.arbre.photos.push('../../../assets/placeholder.png');
    }
  }

}
