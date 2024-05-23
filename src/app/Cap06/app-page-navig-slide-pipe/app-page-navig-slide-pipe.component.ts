import { Component } from '@angular/core';

@Component({
  selector: 'app-app-page-navig-slide-pipe',
  templateUrl: './app-page-navig-slide-pipe.component.html',
  styleUrl: './app-page-navig-slide-pipe.component.css'
})
export class AppPageNavigSlidePipeComponent {
  products: { name: string; imageUrl: string }[] = [
    {
      name: 'HTML, CSS, Sass, Bootstrap - Beginner to Expert + Bootcamp',
      imageUrl: './assets/html-css-tutorials.jpg',
    },
    {
      name: 'JavaScript - Marathon Interview Questions Series',
      imageUrl: './assets/JS_Course.png',
    },
    {
      name: 'Mastering TypeScript with Marathon Interview Questions',
      imageUrl: './assets/TypeScript_Course.jpg',
    },
    {
      name: 'Mastering React with Interview Questions, eStore Project',
      imageUrl: './assets/React_Course.png',
    },
    {
      name: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
      imageUrl: './assets/RDBMS.png',
    },
    {
      name: 'Mastering Angular with Marathon Interview Quesitons',
      imageUrl: './assets/Angular_Course.jpg',
    },
    {
      name: 'NodeJS - Marathon Interview Questions Series',
      imageUrl: './assets/NodeJS_Course.jpg',
    },
    {
      name: 'Python - Marathon Interview Questions Series',
      imageUrl: './assets/Python_Course.jpg',
    }
  ];

  // paginazione
  pageSize: number = 4;
  startIndex: number = 0;
  endIndex: number = this.pageSize;

  previousPage() {
    this.startIndex -= this.pageSize;
    this.endIndex -= this.pageSize;
  }

  nextPage() {
    this.startIndex += this.pageSize;
    this.endIndex += this.pageSize;
  }

}
