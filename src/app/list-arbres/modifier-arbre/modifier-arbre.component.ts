import { Component, OnInit, Inject } from '@angular/core';
import { ArbreService } from 'src/app/list-arbres/arbre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Arbre } from 'src/app/Models/abre.model';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-modifier-arbre',
  templateUrl: './modifier-arbre.component.html',
  styleUrls: ['./modifier-arbre.component.css']
})
export class ModifierArbreComponent implements OnInit {
  temp: Arbre;
  arbre: Arbre;
  id: string;

  constructor(
    private arbreService: ArbreService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) {}

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
      const dialogRef = this.dialog.open(SaveDialogComponent, {
        width: '250px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.arbreService.update(this.arbre).subscribe();
    });
  }

  onClickReset() {
      this.arbreService.findArbre(this.arbre.id).subscribe(
          (arbre: Arbre) => {
              this.arbre = arbre;
          }
      );
  }

  onDelete() {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
          width: '250px',
        });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.arbreService.delete(this.arbre.id).subscribe();
          this.router.navigate(['']);
      });
  }

  onFileSelected(event){
    console.log(event);
  }
}

@Component({
  selector: 'app-save-dialog',
  templateUrl: 'save-dialog.html',
})
export class SaveDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SaveDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: 'delete-dialog.html',
})
export class DeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
  animal: string;
  name: string;
}
