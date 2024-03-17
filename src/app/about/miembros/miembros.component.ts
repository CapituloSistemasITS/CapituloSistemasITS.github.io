import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-miembros',
  standalone: true,
  imports: [],
  templateUrl: './miembros.component.html',
  styleUrl: './miembros.component.scss',
  template: `
  `,
  styles: [`
  .card {
    width: 190px;
    height: 254px;
    background: #f5f5f5;
    padding: 2rem 1.5rem;
    transition: box-shadow .3s ease, transform .2s ease;
   }
   
   .card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform .2s ease, opacity .2s ease;
   }
   
   /*Image*/
   .card-avatar {
    --size: 60px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    transition: transform .2s ease;
    margin-bottom: 1rem;
   }
   
   
   /*Card footer*/
   .card-social {
    transform: translateY(200%);
    display: flex;
    justify-content: space-around;
    width: 100%;
    opacity: 0;
    transition: transform .2s ease, opacity .2s ease;
   }
   
   .card-social__item {
    list-style: none;
   }
   
   .card-social__item svg {
    display: block;
    height: 18px;
    width: 18px;
    fill: #515F65;
    cursor: pointer;
    transition: fill 0.2s ease ,transform 0.2s ease;
   }
   
   /*Text*/
   .card-title {
    color: #333;
    font-size: 1.5em;
    font-weight: 600;
    line-height: 2rem;
   }
   
   .card-subtitle {
    color: #859ba8;
    font-size: 0.8em;
   }
   
   /*Hover*/
   .card:hover {
    box-shadow: 0 8px 50px #23232333;
   }
   
   .card:hover .card-info {
    transform: translateY(-5%);
   }
   
   .card:hover .card-social {
    transform: translateY(100%);
    opacity: 1;
   }
   
   .card-social__item svg:hover {
    fill: #232323;
    transform: scale(1.1);
   }
   
   .card-avatar:hover {
    transform: scale(1.1);
   }
  `]
})
export class MiembrosComponent {
  @Input() name!: string;
  @Input() rol!: string;
  @Input() imageUrl!: string;
}
