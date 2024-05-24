import { Component } from '@angular/core';

@Component({
  selector: 'app-app-build-pipes',
  templateUrl: './app-build-pipes.component.html',
  styleUrl: './app-build-pipes.component.css'
})
export class AppBuildPipesComponent {
  employees = [
    { name: 'paolo paci', regione: 'marche', stipendio: 78000 },
    { name: 'gabriele rossi', regione: 'marche', stipendio: 82000 },
    { name: 'carlo carli', regione: 'toscana', stipendio: 49000 },
    { name: 'alberto piegiovanni', regione: 'lombardia', stipendio: 98000 },
  ]
}
