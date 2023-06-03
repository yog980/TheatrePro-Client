import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './layouts/carousel/carousel.component';
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

import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminMovieShowComponent } from './admin/admin-movie-show/admin-movie-show.component';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminBookingDetailsComponent } from './admin/admin-booking-details/admin-booking-details.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    LoginComponent,
    Theatre1Component,
    Theatre2Component,
    HomeComponent,
    MovieComponent,
    MovieShowComponent,
    MovieDetailsComponent,
    MovieTheatreComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminMovieShowComponent,
    AdminMovieComponent,
    AdminProfileComponent,
    AdminBookingDetailsComponent,
    AdminUserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    NgbDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
