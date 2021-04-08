import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public people = [
    {name: 'Mamed Ahmedov'},
    {name: 'Kamil Memmedov'},
    {name: 'Zinyet Mahir'},
    {name: 'Konul Muradova'},
    {name: 'Mamed Ahmedov'},
    {name: 'Kamil Memmedov'},
    {name: 'Zinyet Mahir'},
    {name: 'Konul Muradova'},
    {name: 'Mamed Ahmedov'},
    {name: 'Kamil Memmedov'},
    {name: 'Zinyet Mahir'},
    {name: 'Konul Muradova'},
  ]

  public activity = [
    {title: 'New Person added'},
    {title: 'New Game added'},
    {title: 'Place XX modified'},
    {title: 'New Person added'},
    {title: 'New Game added'},
    {title: 'Place XX modified'},
    {title: 'Place XX modified'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
