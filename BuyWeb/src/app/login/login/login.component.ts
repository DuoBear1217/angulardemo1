import { FormBuilder, FormGroup } from '@angular/forms';
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


  }
}
