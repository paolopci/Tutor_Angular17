import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Users14Component } from './users14/users14.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home14',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Users14Component,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './home14.component.html',
  styleUrl: './home14.component.css'
})
export class Home14Component {
  loadData: boolean = false;
  showData: boolean = false;
  onPrefetch() {
    this.loadData = true;
  }

  onDisplay() {
    this.showData = true;
  }
}
