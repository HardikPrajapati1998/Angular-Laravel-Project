import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDispayComponent } from './blog-dispay/blog-dispay.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BlogUpdateComponent } from './blog-update/blog-update.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"blog-display",component:MainComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:BlogDispayComponent},
  {path:"blog-create",component:BlogCreateComponent},
  {path:"blog-update/:id",component:BlogUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
