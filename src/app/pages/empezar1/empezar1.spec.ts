import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empezar1 } from './empezar1';

describe('Empezar1', () => {
  let component: Empezar1;
  let fixture: ComponentFixture<Empezar1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empezar1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empezar1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
