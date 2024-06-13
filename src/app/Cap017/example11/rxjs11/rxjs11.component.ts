import { Component, OnInit } from '@angular/core';
import { mergeMap, from, of } from 'rxjs';


@Component({
  selector: 'app-rxjs11',
  templateUrl: './rxjs11.component.html',
  styleUrl: './rxjs11.component.css'
})
export class Rxjs11Component implements OnInit {

  users = [
    { id: 1, name: 'Paolo' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Alex' }
  ]

  courses = [
    {
      courseId: 1,
      title: 'JavaScript - Marathon Interview Questions Series'
    },
    {
      courseId: 2,
      title: 'Mastering React With Interview Questions,eStore Project',
    },
    {
      courseId: 1,
      title: 'Mastering TypeScript with Marathon Interview Questions',
    },
    {
      courseId: 3,
      title: 'Mastering CSS with Sass & Bootstrap + Interview Questions',
    },
    {
      courseId: 3,
      title: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
    },
  ];

  ngOnInit(): void {
    from(this.users).pipe(
      mergeMap((user) => {
        const courseData = this.courses.filter((course) => course.courseId == user.id);
        return of({ user, course: courseData });
      })
    ).subscribe(result=>console.log(result));
  }
}
