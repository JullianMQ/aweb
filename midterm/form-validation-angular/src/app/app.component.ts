import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form_with_validation';
  userName: string = "";
  userEmail: string = "";
  userPass: string = "";
  userAge: string = "";

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(""),
    userEmail: new FormControl("", [Validators.required, Validators.email]),
    userPass: new FormControl("", [Validators.required, Validators.minLength(8)]),
    userAge: new FormControl(""),
  })

  onClickSubmit(data: { userName: string, userPass: string, userAge: string, userEmail: string }) {
    if (this.formdata.valid) {
      this.userName = data.userName;
      this.userPass = data.userPass;
      this.userAge = data.userAge;
      this.userEmail = data.userEmail;
    } else {
      alert('Form not valid')
    }
  }
}
