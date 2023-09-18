import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!: FormGroup ;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      account: [
        '',
        [
          Validators.required,
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ]
      ]
    });
  }

  getErrorMessage(formControl: FormControl): string {
    let errorMessage: string='';
    if (!formControl.errors || formControl.pristine) {
      errorMessage = '';
    } else if (formControl.errors['required']) {
      errorMessage = '此欄位必填';
    } else if (formControl.errors['pattern']) {
      errorMessage = '格式有誤，請重新輸入';
    } else if (formControl.errors['minlength']) {
      errorMessage = '密碼長度最短不得低於8碼';
    } else if (formControl.errors['maxlength']) {
      errorMessage = '密碼長度最長不得超過16碼';
    }
    return errorMessage;
  }

  login() {
    console.log(this.loginform.value);
  }
}
