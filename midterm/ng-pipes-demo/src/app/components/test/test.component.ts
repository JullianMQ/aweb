import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  presentDate = new Date();
  price: number = 20000;
  Fruits = ["Apple", "Orange", "Banana", "Grapes", "Mango"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  time$ = interval(1000).pipe(map(() => new Date()));

  testArr = [1, 2, 3, 4, 5, 6];
  testObj = {
    name: "Garun",
    age: 25,
    food: 'Cheese Cake'
  }
}
