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


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'movies',component: MovieComponent},
  {path: 'movie-details/:id',component: MovieDetailsComponent},
  {path: 'movie-show/:id',component: MovieShowComponent},
  {path: 'theatre1',component: Theatre1Component},
  {path: 'theatre2',component: Theatre2Component},
  {path: 'theatre/:showId',component: MovieTheatreComponent}
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
