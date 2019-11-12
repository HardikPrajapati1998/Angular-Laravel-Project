import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-dispay',
  templateUrl: './blog-dispay.component.html',
  styleUrls: ['./blog-dispay.component.css']
})
export class BlogDispayComponent implements OnInit {
blogs;
  constructor(private apiService: ApiService,private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
    this.apiService.getNews().subscribe((data)=>{
 
      console.log(data['blog']);
    
      this.blogs = data['blog'];
    });
  }
  delblog(id) {
       if(localStorage.getItem('access_token') !==  null){
            this.apiService
              .delblog(id)
              .subscribe(
               response => {
                console.log('sucessfully deleted');
                this.toastr.error('success', 'Delete blog');
                location.reload();
                            },
               error => {
                console.log('error......');
                          }
        );
  
    }
   else{
    this.toastr.error('Login', 'Please Login');
    this.router.navigateByUrl('/login');
   }
  }
}
