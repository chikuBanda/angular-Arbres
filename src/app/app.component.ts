import { Component } from '@angular/core';
import { Arbre } from './Models/abre.model';
import { ArbreService } from './list-arbres/arbre.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArbreService]
})
export class AppComponent {
  title = 'myProject';

  constructor (private arbreService: ArbreService) {}

}
