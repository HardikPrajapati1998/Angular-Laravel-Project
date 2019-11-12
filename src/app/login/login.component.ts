import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlog;
email;
password;
  constructor(private userdataService: ApiService,private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
  }
  login(userdata){ 
    console.log(userdata);
    this.email = userdata['email'];
    this.password = userdata['password']; 
    // User data which we have received from the registration form.
    this.userdataService.login(userdata).subscribe((reponse)=>{
      this.userlog = reponse['access_token'];
localStorage.setItem('access_token',reponse['access_token']);
      if(this.userlog == true)
      {
        this.toastr.success('Successfully Log In...');
        this.router.navigateByUrl('');
      }
      else
      {
        this.toastr.error('Wrong Email & Password...');
        this.router.navigateByUrl('login'); 
      }
     }); 
}
}
