import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-cake',
  standalone: true,
  imports: [],
  templateUrl: './cake.component.html',
  styleUrl: './cake.component.css'
})
export class CakeComponent {
    @Input() cake:any
}
