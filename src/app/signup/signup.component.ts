import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor( private http:HttpClient,private router:Router){}
  user:any={
    name:"",
    email:"",
    password:""
  }

  register(){
    var url="http://localhost:5000/users/create"
    this.http.post(url,this.user).subscribe(
      {
        next:(res:any)=>{
          console.log("res from api",res)
            this.router.navigate(["/success"])
        },
        error:(error:any)=>{console.log(error)}
      }   )
     console.log("register",this.user)
  }
}
