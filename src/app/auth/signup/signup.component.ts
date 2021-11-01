import { Component, OnInit } from "@angular/core";
import { AbstractControl,
    FormControl,
    FormGroup,
    ValidatorFn,
    Validators } from "@angular/forms";

import { AuthService } from "../auth.service";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  isLoading = false;
  form: FormGroup;

  constructor( public authService: AuthService) {}

  ngOnInit() {
    this.form = new FormGroup({
      first_name: new FormControl(null, {
        validators: [Validators.required]
      }),
      last_name: new FormControl(null, {
        validators: [Validators.required]
      }),
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10)]
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.pattern(
          "^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{8,255})\\S$"
       )]
      }),
      confirmPassword: new FormControl('',{
        validators: [Validators.required, this.confirmEquals()]
      })
    })
  }

  confirmEquals(): ValidatorFn {
    return (control: AbstractControl): {
        [key: string]: any
    } | null => {
      if(control.value != ''){
        return control.value.toLowerCase() === this.passwordValue.toLowerCase() ? null : { noMatch: true }
      }
    }
 }

get passwordValue() {
  return this.form.controls.password.value;
}

onSignup() {
    if(this.form.invalid) {
      return;
    }

    this.authService.createUser(this.form.value)
  }
}
