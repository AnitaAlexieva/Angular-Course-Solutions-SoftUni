import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //Standart console log
  console.log('123');

  //Monkey-patched console log
  const originalConsoleLog = console.log;

  console.log = (...args) =>{
    originalConsoleLog(...args);
    //any other logic
    console.warn('This method has been mokey pathed');
  };

  console.log('456')