import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Users13Component } from './users13/users13.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home13',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Users13Component,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './home13.component.html',
  styleUrl: './home13.component.css'
})
export class Home13Component {

}
