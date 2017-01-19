import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';

import { CommonLayoutModule } from './common-layout.module';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		CommonLayoutModule,
		HomeModule,
	],
	declarations: [
		AppComponent,
	],
	bootstrap:    [ AppComponent ],
})
export class AppModule { }
