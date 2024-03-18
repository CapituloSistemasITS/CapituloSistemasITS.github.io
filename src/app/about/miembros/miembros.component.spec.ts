import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosComponent } from './miembros.component';

describe('MiembrosComponent', () => {
  let component: MiembrosComponent;
  let fixture: ComponentFixture<MiembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiembrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
