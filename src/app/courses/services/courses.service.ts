import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({  //injeção de dependencias
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[]{
    return [
      {_id: '1', name:'Angular', category:'Front-end', time: 40, number: 25},
      {_id: '1', name:'Java', category:'Back-end', time: 70, number: 35},
      {_id: '1', name:'React', category:'Front-end', time: 30, number: 10},
      {_id: '1', name:'SQL', category:'Data', time: 15, number: 10}
    ];
  }
}
