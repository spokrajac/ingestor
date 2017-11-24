import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import { TableData } from './table-data';
import { NG_TABLE_DIRECTIVES } from 'ng2-table/ng2-table';
import { MatDialog } from '@angular/material';
import { ClientDialogComponent } from '../../dialogs/client-dialog/client-dialog.component';
import { DataModel } from '../../interfaces/model-interface';


@Component({
  templateUrl: './ingested-data.component.html',

})
export class IngestedDataComponent {

  public filterValue:string=''
  constructor(public dataService: DataService, public router: Router, private matDialog: MatDialog) {
    this.dataService.datObs.subscribe({
      next: (result) => {
        if (result) {
          this.rows = result;
        }
      }
    })
  }
  public rows: Array<DataModel> = [];

  public columns: Array<any> = [
    { title: 'Client Name  ', name: 'name' },
    { title: 'Client Id', name: 'clientId' },
    { title: 'Input Date', className: ['office-header', 'text-success'], name: 'inputDate' },
    { title: 'Amount', name: 'amount' },
    { title: 'File Meta Data Id', className: 'text-warning', name: 'fileMetaData' },
    { title: 'File Name', name: 'fileName' },
    { title: 'Source', name: 'source' }
  ];


  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    className: ['table-striped', 'table-bordered']
  };

  public ngOnInit(): void {

  }

  onNextPage() {
    
    const request = {
      page: this.dataService.page,
      size: 10,
      sort: "ASC",
      sortFiled: "CLIENT_NAME"
    }
    this.dataService.page++;

    this.dataService.search(request);
  }
  onPreviousPage() {
    const request = {
      page: this.dataService.page,
      size: 10,
      sort: "ASC",
      sortFiled: "CLIENT_NAME"
    }
    this.dataService.page--;
    this.dataService.search(request);
  }

  onFilter(){
    const request={
      filter: "CLIENT_NAME",
      filterValue:this.filterValue,
      page: 0,
      size: 10,
      sort: "ASC",
      sortFiled: "CLIENT_NAME"
    }
    this.dataService.search(request);
  }
  public onCellClick(data: any) {
    if (data.column === 'name') {
      this.matDialog.open(ClientDialogComponent, { data: { clientName: data.row.name } });
    }
  }

}

