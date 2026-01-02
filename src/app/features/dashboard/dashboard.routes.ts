import { Routes } from "@angular/router";
import { Dashboard } from "./dashboard";

export const dashboard_routes:Routes=[
      {
        path:"",
        component:Dashboard,
        children:[
       {
                  
        path:'',
        loadComponent:()=>import('../dashboard/tracks-all/tracks-all').then(c=>c.TracksAll)
        },
       {
        path:'playlist',
        loadComponent:()=>import('./recipes/recipes').then(c=>c.Recipes)
       },
       {
        path:'top-artist/:type',
        loadComponent:()=>import('../../shared/top-artist/top-artist').then(c=>c.TopArtist)
       }

]
    },
 
  
  
]