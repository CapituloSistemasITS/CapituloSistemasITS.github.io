import { Component } from '@angular/core';
import { RedesComponent } from './redes/redes.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RedesComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
