import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Users09Component } from './users09/users09.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home09',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Users09Component,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './home09.component.html',
  styleUrl: './home09.component.css'
})
export class Home09Component {

}
