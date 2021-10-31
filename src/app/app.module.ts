import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomCreatorComponent } from './components/room-creator/room-creator.component';
import { JustOneComponent } from './pages/just-one/just-one.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RoomsService } from './services/rooms.service';

@NgModule({
  declarations: [
    AppComponent,
    JustOneComponent,
    WelcomeComponent,
    RoomCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RoomsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
