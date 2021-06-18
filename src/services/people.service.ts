import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {

  constructor() { }

  getPersons(){

   return [
      {name: 'Firuze Eliyeva'},
      {name: 'Kamil Memmedov'},
      {name: 'Ruqiyye Qurbanov'},
      {name: 'Konul Muradova'},
      {name: 'Fuad Dadasov'},
      {name: 'Kamil Memmedov'},
      {name: 'Eli Ekberov'},
      {name: 'Konul Muradova'},
      {name: 'Mamed Ahmedov'},
      {name: 'Kamil Memmedov'},
      {name: 'Ulvi Shakikhanli'},
      {name: 'Konul Muradova'},
   ];

 }

 getActivities(){

  return [
    {title: 'New Person added'},
    {title: 'New Game added'},
    {title: 'Place XX modified'},
    {title: 'New Person added'},
    {title: 'New Game added'},
    {title: 'Place XX modified'},
    {title: 'Place XX modified'},
  ];
  
}

}


