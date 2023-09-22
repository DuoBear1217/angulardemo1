import { map } from 'rxjs/operators';
import { Component, ViewChild } from '@angular/core';
import { ProductsService, clothes } from '../products.service';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @ViewChild('grid')grid:AgGridAngular | undefined;

  rowData: any[] = [
    {
      name: 'test'
    },
    {
      name: '測試品'
    }
  ];

  constructor(private pService: ProductsService) {}

  // 解決非同步問題
  private async getClothes() {
    return new Promise<void> (async (resolve, reject) => {
      try {
        const datas = await this.pService.getProducts();
        console.log(typeof(datas));
        this.rowData.push(datas);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  // 使用Promise來非同步請求
  async ngOnInit() {
    try {
      await this.getClothes();
      // setRowData 手動更新AG-GRID
      this.grid?.api.setRowData(this.rowData);
      console.log(this.rowData);
    } catch (error) {
      console.error(error);
    }
  }

  // 使用Observable來達成非同步請求(只有data內有)
  // ngOnInit() {
  //   let test: any;
  //   test =  this.pService.getProducts();
  //   test.subscribe(
  //     (data: any) => {
  //       this.AllClothes.push(data);
  //       this.rowData = this.AllClothes;

  //       console.log(this.AllClothes);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  //   console.log(this.AllClothes);
  // }

  columnDefs: ColDef[] = [
    { field: 'name', headerName: '品名' },
    { field: 'color', headerName: '顏色' },
    { field: 'price', headerName: '價格' },
    { field: 'size', headerName: '尺寸' },
    { field: 'materiel', headerName: '材質' },
    { field: 'stock', headerName: '庫存' },
  ]

  // 表單預設設定
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    width: 200
  };

  test() {
    console.log(this.rowData);
    this.rowData.push(
      {
        name: 'tester'
      }
    );
  }

  // let getData: any;
    // getData = await this.getClothes();
    // console.log(getData);
    // // 放入資料
    // this.rowData.push(getData);
    // console.log(this.rowData);
}
