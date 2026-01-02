import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArtist } from './top-artist';

describe('TopArtist', () => {
  let component: TopArtist;
  let fixture: ComponentFixture<TopArtist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopArtist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopArtist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
