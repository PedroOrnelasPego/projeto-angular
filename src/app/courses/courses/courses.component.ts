import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name','category','time','number'];

  constructor(private coursesService: CoursesService) {
    //da para inicializar dentro do construtor usando: this.courses = [];
    this.courses$ = this.coursesService.list()
  }

  ngOnInit(): void {

  }

}
