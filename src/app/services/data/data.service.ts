import { Injectable } from "@angular/core";
import { RestApiService } from "../rest-api/rest-api.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { IRequestSearch } from "../rest-api/IRequestSearch";
import { IResponseSearch } from "../rest-api/ISearchResponse";


@Injectable()
export class DataService {
  public datObs: BehaviorSubject<any>;
  public dialogDataObs: BehaviorSubject<any>;

  public page: number = 1;
  public numberofPages=10;
  public itemsPerPage: number = 10;
  
  constructor(private restApi: RestApiService) {
    this.datObs = new BehaviorSubject(null);
    this.dialogDataObs = new BehaviorSubject(null);
  }

  search(request: IRequestSearch) {

    this.restApi.search(request).subscribe((res) => {
    this.datObs.next(this.paresseJSON(res));
    });
  }

  searchForClient(request: IRequestSearch): any {
    this.restApi.search(request).subscribe((res) => {
      let data :IResponseSearch= res;
      const clientName =data.content[0].client.clientName;
      const createOn=data.content[0].inputDate;
      const totalRecords=data.content.length;
      let totalAmunt=0;
      let listOfFiles=''; 
      data.content.forEach(element=>{
        totalAmunt+= parseInt(element.amount);
        listOfFiles=listOfFiles+" "+element.fileMetaData.fileName;
      })
      this.dialogDataObs.next({ 
        clientName: clientName,
        createOn: createOn, 
        totalRecords: totalRecords, 
        totalAmunt: totalAmunt, 
        listOfFiles: listOfFiles });
    })
  }

  initWithFile(file: File) {
    return this.restApi.initWithFIle(file);
  }

  private paresseJSON(data: any) {
    const jsonObject: IResponseSearch = data;
    const tableRows = [];
    jsonObject.content.forEach(element => {
      tableRows.push({
        'name': element.client.clientName,
        'clientId': element.client.clientId,
        'inputDate': element.inputDate,
        'amount': element.amount,
        'fileMetaData': element.fileMetaData.fileMetaDataId,
        'fileName': element.fileMetaData.fileName,
        'source': element.fileMetaData.sourceId
      })
    });
    this.numberofPages = Math.floor(jsonObject.totalElements / this.itemsPerPage);
    return tableRows;
  }
}