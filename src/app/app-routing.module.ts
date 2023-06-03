import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Theatre1Component } from './theatre/theatre1/theatre1.component';
import { Theatre2Component } from './theatre/theatre2/theatre2.component';
import { MovieComponent } from './movie/movie.component';
import { MovieShowComponent } from './movie-show/movie-show.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieTheatreComponent } from './movie-theatre/movie-theatre.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie.component';
import { AdminMovieShowComponent } from './admin/admin-movie-show/admin-movie-show.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminBookingDetailsComponent } from './admin/admin-booking-details/admin-booking-details.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';



const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'movies',component: MovieComponent},
  {path: 'movie-details/:id',component: MovieDetailsComponent},
  {path: 'movie-show/:id',component: MovieShowComponent},
  {path: 'theatre1',component: Theatre1Component},
  {path: 'theatre2',component: Theatre2Component},
  {path: 'theatre/:showId',component: MovieTheatreComponent},
  {path:'admin/movies',component:AdminMovieComponent},
  {path:'admin/movie-shows/:id',component:AdminMovieShowComponent},
  {path:'admin/profile',component:AdminProfileComponent},
  {path:'admin/booking-details',component:AdminBookingDetailsComponent},
  {path:'admin/users',component:AdminUserComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

 }
