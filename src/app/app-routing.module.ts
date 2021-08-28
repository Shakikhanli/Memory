import { AboutComponent } from './about/about.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { GamesComponent } from './games/games.component';
import { BooksComponent } from './books/books.component';
import { PlacesComponent } from './places/places.component';
// import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person/person.component';


const routes: Routes = [
  {path: '', redirectTo: '/people', pathMatch: 'full'},
  { path: 'people', component: PeopleComponent },
  {
    path: 'people', 
    children: [
      {
      path:  'person',
      component:  PersonComponent
      }
    ]
  },
  { path: 'places', component: PlacesComponent },
  { path: 'books', component: BooksComponent},
  { path: 'games', component: GamesComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
