import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public activity = [
    {title: 'New Person added'},
    {title: 'New Game added'},
    {title: 'Place XX modified'},
    {title: 'New Person added'},
    {title: 'New Game added'},
    {title: 'Place XX modified'},
    {title: 'Place XX modified'},
  ]

  people = []

  constructor ( private peopleService: PeopleService) {
      
   }

  ngOnInit() {
    this.people = this.peopleService.getPersons();
  }

}
