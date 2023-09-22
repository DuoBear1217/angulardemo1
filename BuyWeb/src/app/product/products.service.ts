import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface clothes {
  name: string,
  price: number,
  discount: number,
  color: string,
  size: string,
  materiel: string,
  stock: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readJ: HttpClient) { }

  // 使用promise達成非同步的請求取值
  async getProducts(): Promise<object> {
    var responseData: object | any;

    responseData = await this.readJ.get('assets/clothes.json').toPromise(

    );
    // console.log();
    return responseData;
  }

    // 使用observable達成非同步的請求取值
    // getProducts(): Observable<object> {
    //   return this.readJ.get('assets/clothes.txt');
    // }

}
