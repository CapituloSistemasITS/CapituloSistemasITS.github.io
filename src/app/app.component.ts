import {AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { PopupComponent } from './popup/popup.component';

declare var VANTA: any;

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule,
       HomeComponent, ButtonModule, AboutComponent, ContactComponent, FormComponent, PopupComponent, RouterLink],
})

export class AppComponent implements AfterViewInit, OnInit{

  constructor(private route: ActivatedRoute, private router:Router){ }

  /*
    This onInit just navigates to the home page once the page is loead or refreshed,
    this is to prevent the page from going to the about or any other page when the user refreshes the page.
  */
  ngOnInit(){
    this.router.navigate(['home']);
  }


  vantaEffect: any;
  ngAfterViewInit(): void {
    const overlay = document.getElementById('overlay');
    if(overlay){
      overlay.style.display = 'none';
    }
    this.vantaEffect = VANTA.NET({
      el: '#vanta', // element selector string or DOM object reference
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      scale: 1.00,
      scaleMobile: 1.00,
      points: 14.00,
      color: 0xffffff,
      backgroundColor: 0xBE3144,
    })
    if(this.isMobileOrTablet()){
      this.vantaEffect.destroy();
    }
  }

  showPopup = true;

  closePopup(){
    console.log("closePopup");
    this.showPopup = false;
  }

  title = 'csc';

  resizeVanta() {
    this.vantaEffect.resize();
  }

  /*
    This function handles the change of the page,
    it gets the page name from the header component through emit
    and then navigates to the page.
    The timeout function I'm not entirely sure if it still works but there was a bug with apple devices where the vanta effect would not resize properly
    so fuck apple
  */


  isMobileOrTablet() {
    return /Mobi|Android|iPad|iPhone|iPod/i.test(navigator.userAgent);
  }

  handlePageChange(page: string){
    this.router.navigate([page]);
    setTimeout(() => {
      this.resizeVanta();
    }, 5);
  }

}
