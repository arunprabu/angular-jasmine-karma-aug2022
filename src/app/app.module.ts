import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/components/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';
import { ColorizerDirective } from './home/directives/colorizer.directive';
@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    HomeComponent,
    AboutComponent,
    UsersComponent,
    ContactComponent,
    BlogComponent,
    EllipsisPipe,
    ColorizerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
