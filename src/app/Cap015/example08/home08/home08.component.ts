import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Users08Component } from './users08/users08.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home08',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    Users08Component,
    FormsModule,
    HttpClientModule],
  templateUrl: './home08.component.html',
  styleUrl: './home08.component.css'
})
export class Home08Component {

}
