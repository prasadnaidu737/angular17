import { Component } from '@angular/core';
import { CakelistComponent } from '../cakelist/cakelist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CakelistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
