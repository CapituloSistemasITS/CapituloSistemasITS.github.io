import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    AOS.init();
    if(this.isMobileOrTablet()){
      this.changeBottomClass();
      this.showSocialsOnMobile();
    }else{
      console.log('Desktop');
    }
  }

  isMobileOrTablet() {
    return /Mobi|Android|iPad|iPhone|iPod/i.test(navigator.userAgent);
  }

  changeBottomClass() {
    const elements = this.el.nativeElement.querySelectorAll('.-bottom-56');
    elements.forEach((element: any) => {
      this.renderer.removeClass(element, '-bottom-56');
      this.renderer.addClass(element, '-bottom-0');
    });
  }

  showSocialsOnMobile(){
    const socials = this.el.nativeElement.querySelectorAll('.card-social');
    const father = this.el.nativeElement.querySelectorAll('.card');
    socials.forEach((element: any) => {
      this.renderer.addClass(element, 'card-social-mobile');
    });
    father.forEach((element: any) => {
      this.renderer.setStyle(element, 'height', '300px');
    });
  }
}