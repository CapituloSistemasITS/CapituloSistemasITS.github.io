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
    }
  }

  isMobileOrTablet() {
    return /Mobi|Android|iPad|iPhone|iPod/i.test(navigator.userAgent);
  }

  changeBottomClass() {
    const elements = this.el.nativeElement.querySelectorAll('.-bottom-50');
    elements.forEach((element: any) => {
      this.renderer.removeClass(element, '-bottom-50');
      this.renderer.addClass(element, 'bottom-0');
    });
  }
}