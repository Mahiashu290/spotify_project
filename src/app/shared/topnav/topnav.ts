import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sponnculerservices } from '../../core/services/sponnculer/sponnculerservices';

@Component({
  selector: 'app-topnav',
  imports: [CommonModule,FormsModule],
  templateUrl: './topnav.html',
  styleUrl: './topnav.css',
})
export class Topnav {
  constructor(private spotify:Sponnculerservices){

  }

  ngOnInit():void{
    this.currentUser()
  }
    searchQuery: any;


    onSearch() {
    console.log('Searching for:', this.searchQuery);
    // You can emit this value or call Spotify API search endpoint later
  }

  user=signal('')
  currentUser(){
    this.spotify.currentUser().subscribe((data:any)=>{
      console.log(data.display_name);
      this.user.set(data.display_name)
      
    })
  }
}
