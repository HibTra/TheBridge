import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  courses! : any[]

  constructor(private service: CoursesService){}
  ngOnInit(): void {
    this.service.getCourses().subscribe(res => this.courses=res)
  }

}
