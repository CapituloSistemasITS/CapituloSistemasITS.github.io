import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-redes',
  standalone: true,
  imports: [],
  templateUrl: './redes.component.html',
  styleUrl: './redes.component.scss'
})
export class RedesComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.icon);
  }
  safeIcon: SafeHtml | undefined;
  
  @Input() red!: string;
  @Input() link!: string;
  @Input() set icon(icon: string) {
    this.safeIcon = this.sanitizer.bypassSecurityTrustHtml(icon);
  }
  constructor(private sanitizer: DomSanitizer) {
  }

  goTo(){
    window.open(this.link, '_blank');
  }
}
