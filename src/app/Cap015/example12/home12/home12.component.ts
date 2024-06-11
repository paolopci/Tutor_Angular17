import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Users12Component } from './users12/users12.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home12',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Users12Component,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './home12.component.html',
  styleUrl: './home12.component.css'
})
export class Home12Component {

}
