import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule, TabsModule, PaginationModule, CarouselModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { routing } from './app.router';

@NgModule({
  declarations: [
    AppComponent, UserComponent, AboutComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing,
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
