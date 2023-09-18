import { Injectable } from '@angular/core';

export interface User {
  name: string,
  pwd: string,
  mail: string,
  address: string,
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
