import {AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

declare var VANTA: any;

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule, HomeComponent, ButtonModule, AboutComponent, ContactComponent]
})

export class AppComponent implements AfterViewInit{

  constructor(){}

  ngAfterViewInit(): void {
    VANTA.NET({
      el: '#vanta', // element selector string or DOM object reference
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      points: 14.00,
      color: 0xffffff,
      backgroundColor: 0xBE3144,
    })
  }

  title = 'csc';

  showHome = false;
  showAbout = true;
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
