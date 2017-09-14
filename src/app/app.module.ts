import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { WrapperComponent } from './dashboard/wrapper/wrapper.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WrapperComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
