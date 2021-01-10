import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';


@NgModule({
  declarations: [ContactComponent, ContactPageComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
