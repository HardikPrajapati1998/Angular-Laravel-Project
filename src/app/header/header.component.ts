import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  access_token;
  constructor(private toastr: ToastrService,private router: Router,private userdataService: ApiService) { }

  ngOnInit() {
  this.access_token = localStorage.getItem('access_token');
  }
 

  onClick(logout: Event): void {
    
     this.userdataService.logout()   
          this.toastr.success('success', 'logout');
    this.router.navigateByUrl('');
}
}
