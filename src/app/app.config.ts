import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [ importProvidersFrom(FormsModule),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(
    withFetch() // Enables fetch-based HTTP client instead of XHR (modern approach)
  ,)],
};
