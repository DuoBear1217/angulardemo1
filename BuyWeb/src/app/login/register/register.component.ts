import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register!: FormGroup;

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.register = this.formBuild.group({
      account: [
        'OAO', //預設值
      ]
    })

  }
}
