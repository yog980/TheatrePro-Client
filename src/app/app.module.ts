import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './layouts/carousel/carousel.component';
import { MoviesComponent } from './layouts/movies/movies.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { Theatre1Component } from './theatre/theatre1/theatre1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Theatre2Component } from './theatre/theatre2/theatre2.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieShowComponent } from './movie-show/movie-show.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieTheatreComponent } from './movie-theatre/movie-theatre.component';

import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './core/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    MoviesComponent,
    FooterComponent,
    LoginComponent,
    Theatre1Component,
    Theatre2Component,
    HomeComponent,
    MoviesComponent,
    MovieComponent,
    MovieShowComponent,
    MovieDetailsComponent,
    MovieTheatreComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
