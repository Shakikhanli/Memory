import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person/person.component';
import { AssestListComponent } from './shared/assest-list/assest-list.component';
import { ActivityListComponent } from './shared/activity-list/activity-list.component';
import { PlacesComponent } from './places/places.component';
import { BooksComponent } from './books/books.component';
import { GamesComponent } from './games/games.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PeopleComponent,
    PersonComponent,
    AssestListComponent,
    ActivityListComponent,
    PlacesComponent,
    BooksComponent,
    GamesComponent,
    StatisticsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
