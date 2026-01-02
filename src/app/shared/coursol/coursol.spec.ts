import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursol } from './coursol';

describe('Coursol', () => {
  let component: Coursol;
  let fixture: ComponentFixture<Coursol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coursol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coursol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
