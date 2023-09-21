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
    { field: 'nickName', headerName: '暱稱' },
    { field: 'mail', headerName: '信箱' },
    { field: 'ads', headerName: '居住地', editable: true, sortable: false }
  ]; // AG-GRID，field是欄位的變數名稱，headerName是顯示在上面的名稱，editable表示可以編輯
  // sortable則是是否可以以這個欄位來排序

  // 設定一個為可排序，一個為是否有篩選器
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // 資料內容，前面的需要和欄位名稱相同才可以印出資料，此為預設資料
  public rowData: any[] | null = [];
  constructor(private userS: UserService) {}

  ngOnInit(): void {
    // 設定flag
    this.userS.resetUser();
    this.userS.setToken();

    let uData: any[];
    this.nowLogin = this.userS.getUser();
    uData = this.userS.getUser();
    // 將資料使用map改成資料
    this.rowData = uData.map(element => {
      return {
        'nickName': element.name,
        'mail': element.mail,
        'ads': element.address
      }
    });
  }

  logOut() {
    this.userS.delToken();
  }

  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
}
