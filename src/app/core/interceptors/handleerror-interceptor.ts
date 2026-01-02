import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

import Swal from 'sweetalert2';

export const handleerrorInterceptor: HttpInterceptorFn = (req, next) => {
  const route=inject(Router)

  return next(req).pipe(
    catchError((error:HttpErrorResponse)=>{
      console.error("error",error);
        if (error.status === 0) {
        Swal.fire('Connection Error', 'Unable to reach the server.', 'error');
      } else if (error.status === 400) {
        Swal.fire('Bad Request', 'Please fill all required fields.', 'warning');
      } else if (error.status === 401) {
        Swal.fire('Unauthorized', 'Invalid credentials, please login again.', 'error');
        route.navigateByUrl('/')
      } else if (error.status === 404) {
        Swal.fire('Not Found', 'The requested resource was not found.', 'info');
      } else if (error.status === 409) {
        Swal.fire('Duplicate', 'Email already registered.', 'warning');
      } else if (error.status >= 500) {
        Swal.fire('Server Error', 'Something went wrong on our side.', 'error');
      } else {
        Swal.fire('Error', error.message, 'error');
      }

      return throwError(()=>error)
    })
  );
};
