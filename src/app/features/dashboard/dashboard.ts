import { Component } from '@angular/core';
import { AuthService } from '../../core/services/authservices';
import { Topnav } from "../../shared/topnav/topnav";
import { Recipes } from "./recipes/recipes";
import { Player } from "./player/player";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Topnav, Recipes, Player,RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
constructor(private Auth:AuthService){

}
ngOnInit():void{
  

}

}
