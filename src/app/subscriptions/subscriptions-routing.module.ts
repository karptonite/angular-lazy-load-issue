import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubscriptionsComponent } from './subscriptions.component';

const subscriptionRoutes: Routes = [
	{ path: '', component: SubscriptionsComponent },
];

@NgModule ({
	imports: [
		RouterModule.forChild( subscriptionRoutes ),
	],
	exports: [
		RouterModule,
	],
})
export class SubscriptionsRoutingModule {}
