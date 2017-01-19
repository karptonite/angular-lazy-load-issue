import { NgModule } from '@angular/core';

import { SubscriptionsComponent } from './subscriptions.component';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';

@NgModule({
	imports: [
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
