import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  title = 'myapp';
  constructor(private userdataService: ApiService,private toastr: ToastrService,private router: Router) { 
    if(localStorage.getItem('access_token') !==  null){
      this.toastr.success('success', 'create RegisterUser');
      this.router.navigateByUrl('/blog-create');
  
    }
   else{
    this.toastr.error('Login', 'Please Login');
    this.router.navigateByUrl('/login');
   }
  }
  ngOnInit() {
  
  }
  RegisterUser(userdata){ 
    console.log(userdata);
    // User data which we have received from the registration form.
    this.userdataService.registerUsers(userdata).subscribe((reponse)=>{
      console.log(reponse);
      this.toastr.success('success', 'create blog');
      this.router.navigateByUrl('');
     }); 
   
  }
  


}
