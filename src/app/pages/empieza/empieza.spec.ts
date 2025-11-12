import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empieza } from './empieza';

describe('Empieza', () => {
  let component: Empieza;
  let fixture: ComponentFixture<Empieza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empieza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empieza);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
