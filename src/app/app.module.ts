import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesFavoritesComponent } from './movies-favorites/movies-favorites.component';
import { RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { DetailsPopupComponent } from './details-popup/details-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MoviesFavoritesComponent,
    MoviesListComponent,
    DetailsPopupComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'movies-list', pathMatch: 'full'},
      {path: 'movies-list', component: MoviesListComponent},
      {path: 'movies-favorites', component: MoviesFavoritesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
