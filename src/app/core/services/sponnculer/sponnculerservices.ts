import { HttpClient } from '@angular/common/http';
import { Injectable, signal, Signal } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Sponnculerservices {

  constructor(private http:HttpClient){}

  // private url="https://api.spoonacular.com"

  recipes=signal<any[]>([])
 private offset=0


//  fetchAllrecipes(query: string = '', number: number = 20) {
//     const urls = `${this.url}/recipes/complexSearch?query=${query}&number=${number}&offset=${this.offset}`;
//     console.log('Fetching offset:', this.offset);

//     return this.http.get<any>(urls).pipe(
//       tap((res: any) => {
//         if (res?.results?.length) {
        
//           const updated = [...this.recipes(), ...res.results];
//           this.recipes.set(updated);
//           this.offset += number; 
//           console.log('Total recipes now:', this.recipes().length);
//         }
//       })
//     );
//   }


// spotify apis 

spotify_Url="https://api.spotify.com/v1"
Albums=signal([])

userName=signal('')
currentUser(){
  return this.http.get(`${this.spotify_Url}/me`).pipe(
    tap((data:any)=>{
      // console.log(data);
      this.userName.set(data.display_name)
      // console.log(this.userName());
   
    })
  )
}


//current user album
fetchUserAlbums(){
 return this.http.get(`${this.spotify_Url}/me/albums`).pipe(
    tap((res:any)=>{
    // console.log(res)
     this.Albums.set(res)
})
  )
}
//current user playlist
userPlaylist=signal([])
fetchUserPlaylist(){
  return this.http.get(`${this.spotify_Url}/me/playlists`).pipe(
    tap((res:any)=>{
      // console.log(res);
      this.userPlaylist.set(res)
    })
  )
}

fetchCurrentUserArtist():Observable<any>{
  return this.http.get(`${this.spotify_Url}/me/following?type=artist`)
}

RecentlyPlayedObs:BehaviorSubject<any>=new BehaviorSubject([])
recentlyplayed$=this.RecentlyPlayedObs.asObservable()

recentlyPlayed():Observable<any>{
  return  this.http.get(`${this.spotify_Url}/me/player/recently-played`).pipe(
      tap((data)=>{
        // console.log(data);
         this.RecentlyPlayedObs.next(data)
      })
    )
}


topTrack():Observable<any>{
return this.http.get(`${this.spotify_Url}/me/top/tracks?limit=20`)

}

topArtist(limit:any):Observable<any>{
return this.http.get(`${this.spotify_Url}/me/top/artists?limit=${limit}`)

}

// player services 
}
