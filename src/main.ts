import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LicenseManager } from 'ag-grid-enterprise';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// tslint:disable-next-line:max-line-length
LicenseManager.setLicenseKey('Evaluation_License-_Not_For_Production_Valid_Until_15_June_2019__MTU2MDU1MzIwMDAwMA==4b46920f094749677e70a024c9dc9415');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
