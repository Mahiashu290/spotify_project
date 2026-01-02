import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursol',
  imports: [],
  templateUrl: './coursol.html',
  styleUrl: './coursol.css',
})
export class Coursol {

  constructor(private router:Router){

  }
  @Input() title = '';
  @Input() items: any[] = [];
  @Input() itemType: 'artist' | 'track' | 'album' | 'playlist' = 'artist';
  @Input() layout: 'carousel' | 'grid' = 'carousel';


  @ViewChild('scrollArea') scrollArea!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    this.scrollArea.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.scrollArea.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

  navigateToShowAll() {
  if (this.itemType) {
    console.log(this.itemType);
    this.router.navigate([`/callback/top-artist/${this.itemType}`]);
  }
}
}
