import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColchonComponent } from './colchon/colchon.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel vive aqui

@NgModule({
  declarations: [
    AppComponent,
    ColchonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
