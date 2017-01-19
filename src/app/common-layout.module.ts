import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './myshared/shared.module';

@NgModule({
	imports: [
		RouterModule.forChild([]),
		SharedModule,
	],
	exports: [
		SharedModule,
	],
})

export class CommonLayoutModule {}
