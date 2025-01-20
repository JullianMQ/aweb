import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./components/test/test.component";
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from "./new-cmp/new-cmp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, NewCmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'midterm1'
  ndate
  componentproperty
  constructor(private myservice:MyserviceService) {
    this.ndate = this.myservice.showTodayDate()
    this.componentproperty = this.myservice.serviceproperty
  }
}
