import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CellClickedEvent, ColDef } from 'ag-grid-community';

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

  // 欄位的名稱
  columnDefs: ColDef[] = [
    { field: '暱稱' },
    { field: '信箱' },
    { field: '住址', headerName: '居住地', filter: '???', editable: true, sortable: false }
  ];

  //
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // 資料內容，前面的需要和欄位名稱相同才可以印出資料，此為預設資料
  public rowData: any[] | null = [
    { id: 'c1', '暱稱': 'Toyota', model: 'Celica', price: 35000 },
    { id: 'c2', '暱稱': 'Ford', model: 'Mondeo', price: 32000 },
    { id: 'c8', '暱稱': 'Porsche', model: 'Boxster', price: 72000 },
    { id: 'c4', '暱稱': 'BMW', model: 'M50', price: 60000 },
    { id: 'c14', '暱稱': 'Aston Martin', model: 'DBX', price: 190000 },
  ];

  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  constructor(private userS: UserService) {}

  ngOnInit(): void {
    let uData: any[];
    this.nowLogin = this.userS.getUser();
    uData = this.userS.getUser();

    // 將資料使用map改成資料
    this.rowData = uData.map(element => {
      return {
        '暱稱': element.name,
        '信箱': element.mail,
        '住址': element.address
      }
    });

  }

}
