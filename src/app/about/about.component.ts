import { Component, OnInit } from '@angular/core';
import { MiembrosComponent } from './miembros/miembros.component';
declare var AOS: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MiembrosComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}


