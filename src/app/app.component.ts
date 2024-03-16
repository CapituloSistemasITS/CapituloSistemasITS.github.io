import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from './about/about.component';
import * as THREE from 'three';
import DOTS from 'vanta/dist/vanta.dots.min';
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

  vantaEffect : any;

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

  ngOnInit() {
    this.vantaEffect = DOTS({
      el: "#vanta",
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x333333,
      color2: 0x222222,
      size: 1.50,
      spacing: 20.00,
      backgroundAlpha: 0.00
    });
  }
  
  ngOnDestroy() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  
}
