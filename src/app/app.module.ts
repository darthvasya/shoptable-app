import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }   from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { WrapperComponent } from './dashboard/wrapper/wrapper.component';
import { ItemsComponent } from './dashboard/items/items.component';

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: AppComponent},
    { path: 'shops', component: WrapperComponent},
    { path: 'shop/:id', component: ItemsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WrapperComponent,
    ItemsComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
