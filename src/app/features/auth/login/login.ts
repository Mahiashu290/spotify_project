import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, } from '../../../core/services/authservices';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {



  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private Auth:AuthService,private router:Router) {}

  ngOnInit(): void {
    // this.loginForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [
    //     Validators.required,
    //     Validators.minLength(6),
    //     Validators.maxLength(10)
    //   ]]
    // });

 }

  // Getter for cleaner template code
  // get f() :any{
  //   return this.loginForm.controls;
  // }

  // onSubmit() {
  //   if (!this.loginForm.valid) {
      
  //     return ;
  //   }
  //  else{
  //    this.authservices.login(this.loginForm.value).subscribe((data)=>{
  //     console.log(data);
  //     this.router.navigateByUrl('/dashboard')

  //   })
  //  }


    login() {
    this.Auth.login();
  
  }

   
  }
// }

