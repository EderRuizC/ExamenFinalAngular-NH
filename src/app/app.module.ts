import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AuthComponent } from './modules/auth/auth.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CourseComponent } from './modules/course/course.component';
import { HomeComponent } from './modules/home/home.component';
import { SubscriptionComponent } from './modules/subscription/subscription.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    ContactComponent,
    CourseComponent,
    HomeComponent,
    SubscriptionComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
