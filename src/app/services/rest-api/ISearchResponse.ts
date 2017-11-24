export interface IClient{
    clientId:string;
    clientName:string;
}

export interface IFileMetaData{
    fileMetaDataId:string;
    fileName:string;
    sourceId:string;
    provier:string;
}

export interface IContent{
    client:IClient;
    amount:string;
    inputDate:any;
    fileMetaData:IFileMetaData;

}

export interface ISort{
    direction:string;
    property:string;
    ignorCase:boolean;
    nullHandling:string;
    descending:boolean;
    ascending:boolean;
}

export interface IResponseSearch{
    content:IContent[];
    totalElements:number;
    totalPages:number;
    last:boolean;
    size:number;
    number:number;
    first:boolean;
    sort:ISort[];
    numberOfElements:number


}