import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../api.service';
import {ActivatedRoute} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent implements OnInit {
  blogs;
  constructor(private apiService: ApiService,private toastr: ToastrService,private route: ActivatedRoute,private router: Router) { 
    
    
      if(localStorage.getItem('access_token') !==  null){
      
     this.route.params.subscribe( params => this.getupdate(params['id']) );
  
    }
   else{
    this.toastr.error('Login', 'Please Login');
    this.router.navigateByUrl('/login');
   }
  }

  ngOnInit() {

   
  }

 getupdate(id){

  this.apiService.getupdate(id).subscribe((data)=>{
 
    console.log(data);
  
    this.blogs = data;
  });
 }
  

 updateUser(userdata){ 
  console.log(userdata);
  // User data which we have received from the registration form.
  this.apiService.updateUsers(userdata).subscribe((reponse)=>{
    console.log(reponse);
    this.toastr.success('success', 'Update blog');
    this.router.navigateByUrl('');
   }); 
 
}

}
