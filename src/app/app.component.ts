import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule, HomeComponent, ButtonModule, AboutComponent, ContactComponent]
})
export class AppComponent {
  title = 'csc';

  showHome = true;
  showAbout = false;
  showContact = false;

  handlePageChange(page: string){
    switch(page){
      case 'home':
        this.showHome = true;
        this.showAbout = false;
        this.showContact = false;
        break;
      case 'about':
        this.showHome = false;
        this.showAbout = true;
        this.showContact = false;
        break;
      case 'contact':
        this.showHome = false;
        this.showAbout = false;
        this.showContact = true;
        break;
    }
  }
}
