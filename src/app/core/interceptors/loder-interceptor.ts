import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, delay } from 'rxjs/operators';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = inject(NgxSpinnerService);

  spinner.show();

  return next(req).pipe(
    delay(300), // optional — keeps spinner visible for at least 300ms
    finalize(() => {
      spinner.hide();
    })
  );
};
