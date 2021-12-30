import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarcadorComponent } from './marcador/marcador.component';
import { EquipoComponent } from './equipo/equipo.component';
import { TopScoreComponent } from './top-score/top-score.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcadorComponent,
    EquipoComponent,
    TopScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
