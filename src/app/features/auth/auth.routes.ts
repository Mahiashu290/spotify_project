import { Routes } from "@angular/router";

export const auth_routes:Routes=[
    {
        path:'signin',
        loadComponent:()=>import('./sign-up/sign-up').then((c)=>c.SignUp)
    },
    {
        path:'',
        loadComponent:()=>import('./login/login').then((c)=>c.Login)

    }
]