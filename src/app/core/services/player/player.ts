import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sponnculerservices } from '../sponnculer/sponnculerservices';
import {environment} from '../../../../environment/environment'

@Injectable({
  providedIn: 'root',
})
export class Player {
  
  constructor(private http:HttpClient,private spotifyServices:Sponnculerservices) {
    this.fetchDevices()
  }

  url=environment.Url
 
  // player methods
  

fetchDevices(){
  return this.http.get(`${this.url}/me/player/devices`).subscribe((data:any)=>{
    localStorage.setItem("DeviceId",data.devices[0].id)
    
    console.log(data.devices[0].id,"datafromplayerservices");
  })
}

}
