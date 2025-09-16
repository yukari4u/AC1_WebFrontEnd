import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraMedia } from './calculadora-media';

describe('CalculadoraMedia', () => {
  let component: CalculadoraMedia;
  let fixture: ComponentFixture<CalculadoraMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraMedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
