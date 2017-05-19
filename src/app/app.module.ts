import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MusicModule } from './music/music.module';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
