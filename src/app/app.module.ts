import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretSantaBoardComponent } from './secret-santa-board/secret-santa-board.component';
import { SecretSantaCardComponent } from './secret-santa-card/secret-santa-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretSantaBoardComponent,
    SecretSantaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
