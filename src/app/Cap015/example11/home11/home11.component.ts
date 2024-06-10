import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Users11Component } from './users11/users11.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home11',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Users11Component,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './home11.component.html',
  styleUrl: './home11.component.css'
})
export class Home11Component {

}
