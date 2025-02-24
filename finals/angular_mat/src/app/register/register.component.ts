import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSliderModule } from '@angular/material/slider'
import { MatRadioModule } from '@angular/material/radio'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSliderModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;
  private _snackBar = inject(MatSnackBar);
  message: string = 'Form Submitted';
  action: string = 'Close';

  openSnackBar(message: string, action: string) { 
    this._snackBar.open(message, action)
  }

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    angularSkillLevel: new FormControl(5),
  });

  onClickSubmit(data: {
    userName: string;
    email: string;
    password: string;
    gender: string;
    birthDate: Date;
    address: string;
    angularSkillLevel: number;
  })
  {
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.address = data.address;
    this.angularSkillLevel = data.angularSkillLevel;
    this.birthDate = data.birthDate;
    
    if (this.formdata.valid) {
      console.log("Form Submitted!", this.formdata.value);
    } else {
      console.log("Form is not valid");
    }
  }

}