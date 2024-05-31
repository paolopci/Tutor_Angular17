import { Component } from '@angular/core';
import { AdminDataService } from '../services/admin-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './app-admin.component.html',
  styleUrl: './app-admin.component.css'
})
export class AppAdminComponent {

  constructor(public getAdmin:AdminDataService){}

}
