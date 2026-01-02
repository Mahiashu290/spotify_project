import { Component, effect, OnInit, signal } from '@angular/core';
import { Sponnculerservices } from '../../../core/services/sponnculer/sponnculerservices';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AuthService } from '../../../core/services/authservices';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyItem {
  id: string;
  name: string;
  images: SpotifyImage[];
}

@Component({
  selector: 'app-recipes',
  imports: [ScrollingModule, CommonModule],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes implements OnInit{
  constructor(public sponerservices:Sponnculerservices,private Auth:AuthService){
  effect(() => {
    console.log('Updated recipes:', this.sponerservices.recipes());
    this.sponerservices.Albums()
    this.userDetailes()
  });



  }

  selectedTab:string|null=null
  iSTabActive=false
  ngOnInit():void{
      this.Auth.handleRedirectCallback()
      this.allabums()
      this.laodData()
      this.recentlyplayed()

  // this.sponerservices.fetchAllrecipes().subscribe()
 
  //   console.log(this.sponerservices.recipes());
  // this.loadRecipes()
  }

  //   loadRecipes() {
  //   this.sponerservices.fetchAllrecipes().subscribe();
  // }

  //  onScroll(index: number) {
  //   const total = this.sponerservices.recipes().length;
  //   console.log(index);
  //   if (index +30> total - 5) {
  //     this.loadRecipes();
  //   }
  // }


  allabums(){
    this.sponerservices.fetchUserAlbums().subscribe()
    console.log(this.sponerservices.Albums());
    this.fetchUserData()
  }

  selectedTabs(tab:string){
    this.selectedTab=tab
    
    
  }

  clearSelection(){
    this.selectedTab=null
  }

userDetailes=signal([])
  fetchUserData(){
    this.sponerservices.currentUser().subscribe((data:any)=>{
      console.log(data);
     this.userDetailes.set(data)

    })
  }

  artist=signal<any>([])
  albums=signal<any>([])
  playlist=signal<any>([])
  allData=signal<any>([])

 laodData():any{
   forkJoin({
    artist:this.sponerservices.fetchCurrentUserArtist(),
    albums:this.sponerservices.fetchUserAlbums(),
    playlist:this.sponerservices.fetchUserPlaylist()
  }).subscribe((data:any)=>{
    console.log(data.albums?.items);
    this.allData.set(data)
    this.artist.set(data.artist?.artists?.items??[])
    this.albums.set(data.albums?.items ??[])
    this.playlist.set(data.playlist?.items ??[])
  })
 }

 recentlyplayed(){
  this.sponerservices.recentlyPlayed().subscribe((data)=>{
    console.log(data,"recently");
  })
 }
}
