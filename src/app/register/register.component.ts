import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userdataService: ApiService,private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
  }
  RegisterUser(userdata){ 
    console.log(userdata);
    // User data which we have received from the registration form.
    this.userdataService.register(userdata).subscribe((reponse)=>{
      console.log(reponse);
      this.toastr.success('success', 'create RegisterUser');
      this.router.navigateByUrl('');
     }); 
}
}
