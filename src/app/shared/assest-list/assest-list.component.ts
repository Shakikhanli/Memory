import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/services/people.service';

@Component({
  selector: 'app-assest-list',
  templateUrl: './assest-list.component.html',
  styleUrls: ['./assest-list.component.css']
})
export class AssestListComponent implements OnInit {

  people = []

  constructor ( private peopleService: PeopleService) {
      
  }

 ngOnInit() {
   this.people = this.peopleService.getPersons();
 }


}
