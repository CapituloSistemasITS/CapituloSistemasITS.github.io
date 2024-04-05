import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Output() close = new EventEmitter<void>();

  onClose(){
    this.close.emit();
  }

}
