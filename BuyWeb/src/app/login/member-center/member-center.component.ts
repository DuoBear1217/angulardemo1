import { Component } from '@angular/core';
import { UserService } from '../user.service';

export interface User {
  account: string,
  pwd: string,
  mail: string,
  address: string,
  name: string,
}

@Component({
  selector: 'app-member-center',
  templateUrl: './member-center.component.html',
  styleUrls: ['./member-center.component.css']
})
export class MemberCenterComponent {
  nowLogin!: User[];

  constructor(private userS: UserService) {}

  ngOnInit(): void {
    this.nowLogin = this.userS.getUser();
  }
}
