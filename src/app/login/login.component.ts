import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, TextBoxAllModule, CommonModule, ButtonAllModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public userLoginForm!: FormGroup;
  public showAndHidePasswordToggleIcon = true;

  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      username: new FormControl(null, Validators.compose([Validators.required])),
      password: new FormControl(null, Validators.compose([Validators.required]))
    });
  }

  onSubmitLoggedInUserDetails() {
    if (this.userLoginForm?.valid) {
      this.loginService.getLoggedInUserDetail(this.userLoginForm?.value);
    } else {
      this.userLoginForm?.markAllAsTouched();
    }
  }

  viewOrHidePasswordToggle() {
    this.showAndHidePasswordToggleIcon = !this.showAndHidePasswordToggleIcon;
  }
}
