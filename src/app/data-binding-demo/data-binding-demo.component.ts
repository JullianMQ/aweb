import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
  message = "My First App!"
  description = "This is Angular"
  imageUrl = '/angular.webp'
  w = 200;
  h = 150;
  altText = 'Angular Logo';
  textColor = 'blue';
  isHighlighted = true
  yourName = '';

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  logName() {
    console.log(this.yourName)
  }
}
