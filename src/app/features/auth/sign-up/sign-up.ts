import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../../core/services/authservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp implements OnInit {
  signIn!: FormGroup;

  constructor(private fb: FormBuilder, private authservices: AuthService, private router: Router) {
    this.signIn = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    });
  }
  ngOnInit(): void {}

  get f(): any {
    return this.signIn.controls;
  }

  // submitData() {
  //   if (this.signIn.valid) {
  //     this.authservices.register(this.signIn.value).subscribe({
  //       next: (data) => {
  //         console.log(data);
  //         alert('registration succesfully');
  //         this.router.navigateByUrl('/');
  //       },
  //       // error: (error) => {
  //       //   console.log(error);
  //       //   if (error.status === 400) {
  //       //     alert('plese fill all');
  //       //   } else if (error.status === 409) {
  //       //     alert('Email already registered.');
  //       //   } else {
  //       //     alert('Something went wrong. Please try again later.');
  //       //   }
  //       // },
  //     });
  //   } else {
  //     this.router.navigateByUrl('/signup');
  //   }
  // }
}
