// import polyfills
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // main entry point

// The app module
import { AppModule } from './app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
