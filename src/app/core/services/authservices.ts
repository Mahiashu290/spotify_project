// // // import { HttpClient } from '@angular/common/http';
// // // import { Injectable } from '@angular/core';

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

// @Injectable({
//   providedIn: 'root',
// })
// export class Authservices {
  
//   constructor(private http:HttpClient){

//   }

//   Url="http://localhost:2000"


//   register(payload:{}){
//     return this.http.post(`${this.Url}/register`,payload)
//   }

//   login(info:any){
//      return this.http.post(`${this.Url}/login`,info)
//   }
// }



// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private clientId = '01f22053bb24456f94fac33d069df7e6';
  private redirectUri ='https://localhost:4200/callback';
  private scopes = [
    'user-read-private',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-read',
    'user-follow-read', 
    'user-top-read',  
    'user-read-recently-played',
    'user-modify-playback-state',
    'user-read-playback-state', 
  ].join(' ');

  constructor(private router: Router) {}

  login() {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${encodeURIComponent(this.scopes)}`;
    console.log(authUrl);
    console.log("hi");
    window.location.href = authUrl;
    
 
  }

handleRedirectCallback(): void {
  // Get hash part from Spotify redirect
  const hash = window.location.hash;
  console.log(hash);
  if (!hash) return;

  const params = new URLSearchParams(hash.substring(1)); // remove #
  console.log(params);
  const token = params.get('access_token');

  console.log('Access token from URL:', token); // 👀 check console

  if (token) {
    console.log(token,"token");
    localStorage.setItem('spotify_token', token);
    console.log('Token saved to localStorage:', token);
    this.router.navigateByUrl('/callback');
  } else {
    console.warn('No token found in redirect URL');
  }
}
  getToken() {
    return localStorage.getItem('spotify_token');
  }

    isAuthenticated(): boolean {
    return !!localStorage.getItem('spotify_token');
  }
}


// // @Injectable({ providedIn: 'root' })
// // export class AuthService {
// //   private clientId = '01f22053bb24456f94fac33d069df7e6';
// //   private redirectUri = 'https://localhost:4200/callback';

// //   private scopes = [
// //     'user-read-private',
// //     'playlist-read-private',
// //     'playlist-modify-private',
// //     'user-library-read',
// //     'user-follow-read',
// //     'user-top-read',
// //     'user-read-recently-played',
// //     'user-modify-playback-state',
// //     'user-read-playback-state',
// //   ].join(' ');

// //   constructor(private router: Router) {}

// //   login() {
// //     const authUrl =
// //       `https://accounts.spotify.com/authorize?client_id=${this.clientId}` +
// //       `&response_type=token` +
// //       `&redirect_uri=${encodeURIComponent(this.redirectUri)}` +
// //       `&scope=${encodeURIComponent(this.scopes)}`;

// //     window.location.href = authUrl;
// //   }

// //   handleRedirectCallback(): void {
// //     const hash = window.location.hash;
// //     if (!hash) return;

// //     const params = new URLSearchParams(hash.substring(1));
// //     const token = params.get('access_token');

// //     if (token) {
// //       localStorage.setItem('spotify_token', token);
// //       this.router.navigate(['/callback/default']);  // 👈 GO TO DASHBOARD
// //     }
// //   }

// //   getToken() {
// //     return localStorage.getItem('spotify_token');
// //   }

// //   isAuthenticated(): boolean {
// //     return !!localStorage.getItem('spotify_token');
// //   }
// // }


// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   private clientId = '01f22053bb24456f94fac33d069df7e6';
//   private redirectUri = 'https://localhost:4200/callback';

//   private scopes = [
//     'user-read-private',
//     'playlist-read-private',
//     'playlist-modify-private',
//     'user-library-read',
//     'user-follow-read',
//     'user-top-read',
//     'user-read-recently-played',
//     'user-modify-playback-state',
//     'user-read-playback-state',
//   ].join(' ');

//   constructor(private router: Router) {}

//   login() {
//     const authUrl =
//       `https://accounts.spotify.com/authorize` +
//       `?client_id=${this.clientId}` +
//       `&response_type=token` +
//       `&redirect_uri=${encodeURIComponent(this.redirectUri)}` +   // ✔ MUST encode
//       `&scope=${encodeURIComponent(this.scopes)}`;

//     window.location.href = authUrl;
//   }

//   handleRedirectCallback(): void {
//     const hash = window.location.hash;

//     if (!hash) return;

//     const params = new URLSearchParams(hash.substring(1));
//     const token = params.get('access_token');

//     if (token) {
//       localStorage.setItem('spotify_token', token);

//       // 🔥 Navigate to dashboard default page
//       this.router.navigate(['']);
//     }
//   }

//   getToken() {
//     return localStorage.getItem('spotify_token');
//   }

//   isAuthenticated(): boolean {
//     return !!localStorage.getItem('spotify_token');
//   }
// }
