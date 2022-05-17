import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name:'Angular', category:'Front-end', time: 40, number: 25},
    {_id: '1', name:'Java', category:'Back-end', time: 70, number: 35},
    {_id: '1', name:'React', category:'Front-end', time: 30, number: 10},
    {_id: '1', name:'SQL', category:'Data', time: 15, number: 10}
  ];
  displayedColumns = ['name','category','time','number'];

  constructor() {
    //da para inicializar dentro do construtor usando o: this.courses = [];
  }

  ngOnInit(): void {
  }

}
