import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksAll } from './tracks-all';

describe('TracksAll', () => {
  let component: TracksAll;
  let fixture: ComponentFixture<TracksAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TracksAll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksAll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
