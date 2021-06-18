import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/services/people.service';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities = []

  constructor ( private peopleService: PeopleService) {
      
  }

 ngOnInit() {
   this.activities = this.peopleService.getActivities();
 }

}
