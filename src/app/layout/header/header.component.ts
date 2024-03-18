import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[] = [];
  activeItem: MenuItem = {};
  @Output() changePage = new EventEmitter<string>();

    ngOnInit() {

      this.items = [
        { label: 'Inicio', icon: 'pi pi-fw pi-home', command: () => this.reloadPage()},
        { label: 'Conocenos!', icon: 'pi pi-fw pi-info', command : () => this.changePage.emit('about')},
        { label: 'Contacto', icon: 'pi pi-fw pi-envelope', command : () => this.changePage.emit('contact')},
        {label: 'Forma parte del capitulo', icon: 'pi pi-fw pi-user-plus', command : () => this.changePage.emit('form')},
      ];
      this.activeItem = this.items[0];
    }

    reloadPage(){
      window.location.reload();
    }
}
