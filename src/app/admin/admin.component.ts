import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  users:any=[]
  constructor(private http:HttpClient){
    var url = "http://localhost:5000/users/listall"
    this.http.get(url).subscribe({
      next:(res)=>{this.users=res},
      error:(error)=>{console.log(error)}
    })
  }

  delete(id:any){
  var url = `http://localhost:5000/users/delete/${id}`
  this.http.delete(url).subscribe({
    next:(res)=>{console.log(res)},
    error:()=>{}
  })


  // this.users = this.users.filter((user:any) => user._id !== id);  // soft delete
  }
}
