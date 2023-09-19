import { Injectable } from '@angular/core';

export interface User {
  account: string,
  pwd: string,
  mail: string,
  address: string,
  name: string,
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  logAccount: string = '';
  logPassword: string = '';

  userList: User[] = [
    {
      account: 'Duo',
      pwd: 'test1234',
      mail: 'test@gmail.com',
      address: '台中大里區',
      name: '跳跳狗'
    },
    {
      account: 'Carl',
      pwd: 'test5678',
      mail: 'test2@gmail.com',
      address: '彰化市',
      name: '跳跳貓'
    }
  ];

  constructor() {  }

  addUser(act: string, uPwd: string, uMail: string, ads: string, nickname: string) {
    this.userList.push(
      {
        account: act,
        pwd: uPwd,
        mail: uMail,
        address: ads,
        name: nickname
      }
    );
  }

  getUser(): User[] {
    return this.userList;
  }

  setLog(act: string, pwd: string) {
    this.logAccount = act;
    this.logPassword = pwd;
  }

  checkUser(): boolean {
    let logFlag = false;
    this.userList.forEach(element => {
      if(this.logAccount === element.account && this.logPassword === element.pwd) {
        logFlag = true;
      }
    })
    return logFlag;
  }
}


