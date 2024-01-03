import { Component } from '@angular/core';
import { CakeComponent } from '../cake/cake.component';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cakelist',
  standalone: true,
  imports: [CakeComponent,NgFor],
  templateUrl: './cakelist.component.html',
  styleUrl: './cakelist.component.css'
})
export class CakelistComponent {
cakes:any
constructor(private http:HttpClient){
 let url="http://localhost:5001/cakes/listall"
  this.http.get(url).subscribe({
    next:(res)=>{this.cakes=res},
    error:(err)=>{console.log(err)}
  })
}

}
