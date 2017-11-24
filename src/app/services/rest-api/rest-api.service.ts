import { Injectable, Inject } from '@angular/core';
import { Http, Response, ResponseContentType, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { IRequestSearch } from './IRequestSearch';

@Injectable()
export class RestApiService {
  apiEndPoint ='http://localhost:8090/test/api';
  
  constructor(
    public http: Http,
  ) {}

  initWithFIle(file:File):Observable<void>{
    const endpoint = `${this.apiEndPoint}/ingest/upload`;
    let formData:FormData = new FormData();
    formData.append('file', file,file.name);
    return this.http.post(endpoint, formData)
    .map(() => {
      return undefined;
    });
  }
  search(request:IRequestSearch):Observable<any>{
    const endpoint = `${this.apiEndPoint}/search/`;
    return this.http.post(endpoint,request).map((res)=>{
      return res.json();
    });
  };

}