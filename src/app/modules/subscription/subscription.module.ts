import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';


@NgModule({
  declarations: [SubscriptionComponent, SubscriptionPageComponent],
  imports: [
    CommonModule,
    SubscriptionRoutingModule
  ]
})
export class SubscriptionModule { }
