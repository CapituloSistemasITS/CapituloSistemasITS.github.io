import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { MiembrosComponent } from './miembros/miembros.component';
declare var AOS: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MiembrosComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChildren('aosElement') aosElements!: QueryList<ElementRef>;
  private observer: MutationObserver | undefined;

  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit() {
    this.observer = new MutationObserver(() => {
      this.resizeContainer();
    });

    this.aosElements.forEach(element => {
      if (this.observer) {
        this.observer.observe(element.nativeElement, { attributes: true, childList: true, subtree: true });
      }
    });
  }

  resizeContainer() {
    const container: HTMLElement | null = document.querySelector('.wrapper');

    if (container) {
      let totalHeight = 0;
      this.aosElements.forEach(element => {
        totalHeight += element.nativeElement.offsetHeight;
      });
      console.log(totalHeight);
      container.style.minHeight = `${totalHeight}px`;
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}