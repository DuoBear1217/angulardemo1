import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!: FormGroup ;

  constructor(private formBuilder: FormBuilder, private logService: UserService) {}

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

  login() {
    this.logService.setLog(this.loginform.value.account, this.loginform.value.password);
  }

  // getErrorMessage(formControl: FormControl): string {
  //   let errorMessage: string='';
  //   if (!formControl.errors || formControl.pristine) {
  //     errorMessage = '';
  //   } else if (formControl.errors['required']) {
  //     errorMessage = '此欄位必填';
  //   } else if (formControl.errors['minlength']) {
  //     errorMessage = '密碼長度最短不得低於8碼';
  //   } else if (formControl.errors['maxlength']) {
  //     errorMessage = '密碼長度最長不得超過16碼';
  //   }
  //   return errorMessage;
  // }

}
