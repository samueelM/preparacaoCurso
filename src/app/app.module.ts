import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentifiersComponent } from './identifiers/identifiers.component';
import { ColecoesComponent } from './colecoes/colecoes.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentifiersComponent,
    ColecoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
