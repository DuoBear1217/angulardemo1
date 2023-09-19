import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register!: FormGroup;

  constructor(private formBuild: FormBuilder, private userS: UserService) { }

  ngOnInit(): void {
    this.register = this.formBuild.group({
      account: [
        'OAO', //預設值
        [
          Validators.required
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.min(8),
          Validators.max(20)
        ]
      ],
      repwd: [
        '',
        [
          Validators.required
        ]
      ],
      email: [
        '',
        [
          Validators.required
        ]
      ],
      address: [
        '',
        [
          Validators.required
        ]
      ],
      nickname: [
        '',
        [
          Validators.required,
          Validators.max(100)
        ]
      ],
    })

  }

  regiUser() {
    let regiInfo: any;
    console.log(this.register.value);
    regiInfo = this.register.value;
    this.userS.addUser(regiInfo.account, regiInfo.password, regiInfo.email, regiInfo.address, regiInfo.nickname)
  }
}
