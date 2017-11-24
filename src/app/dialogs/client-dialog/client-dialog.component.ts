import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataService } from '../../services/data/data.service';


@Component({
  selector: 'app-client-dialog',
  templateUrl: './client-dialog.component.html',
  styleUrls: ['./client-dialog.component.scss']
})
export class ClientDialogComponent implements OnInit {
  public  filteredData= { clientName:'',createOn:'',totalRecords:'',totalAmunt:'',listOfFiles:''};
  constructor(
    private dialogRef: MatDialogRef<ClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService
  ) { 
    this.dataService.dialogDataObs.subscribe({
      next:(res)=>{
        if(res){
          this.filteredData=res;
        }
      }
    })
  }
  ngOnInit(): void {
   this.dataService.searchForClient(
      {
        filterValue: this.data.clientName,
        page: 0, size: 100,
        sort: 'ASC',
        sortFiled: 'CLIENT_NAME',
        filter: 'CLIENT_NAME'
      })
  }

}
