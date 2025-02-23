import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms_template';
  anytext: string = "";
  anyPass: string = "";
  anyAge: string = "";
  anyHeight: string = "";
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }

  userName: string = "";
  userPass: string = "";
  userAge: string = "";
  userHeight: string = "";
  formdata: FormGroup = new FormGroup({
    userName: new FormControl(""),
    userPass: new FormControl(""),
    userAge: new FormControl(""),
    userHeight: new FormControl("")
  })

  onClickSubmit(data: { userName: string, userPass: string, userAge: string, userHeight: string }) {
    this.userName = data.userName;
    this.userPass = data.userPass;
    this.userAge = data.userAge;
    this.userHeight = data.userHeight;
  }
}
