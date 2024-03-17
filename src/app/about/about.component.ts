import { Component } from '@angular/core';
import { MiembrosComponent } from './miembros/miembros.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MiembrosComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}


