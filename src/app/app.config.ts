import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import {NgxSpinnerModule, NgxSpinnerService  } from 'ngx-spinner'
import { loaderInterceptor } from './core/interceptors/loder-interceptor';
import { handleerrorInterceptor } from './core/interceptors/handleerror-interceptor';
import { authInterceptor } from './core/interceptors/spooneculer-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loaderInterceptor,handleerrorInterceptor,authInterceptor])),
    importProvidersFrom(NgxSpinnerModule)
  ]
};
