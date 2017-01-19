import { NgModule } from '@angular/core';

import { SharedModule } from '../myshared/shared.module';

import { SubscriptionsComponent } from './subscriptions.component';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';

@NgModule({
	imports: [
		SharedModule,
		SubscriptionsRoutingModule,
	],
	declarations: [
		SubscriptionsComponent,
	],
	exports: [
		SubscriptionsComponent,
	],
})

export class SubscriptionsModule {}
