import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Component} from '@angular/core';
import { AppComponent } from './app.component';
import { RoutersRoutingModule } from './routers/routers-routing.module';
import { IngestorComponent } from './components/Ingestor/ingestor.component';
import { DataService } from './services/data/data.service';
import { IngestedDataComponent } from './components/IngestedData/ingested-data.component';
import { CommonModule } from '@angular/common';
import { RestApiService } from './services/rest-api/rest-api.service';
import { Http, HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import { FormsModule } from '@angular/forms';


import {MatDialog} from '@angular/material';
import { ShareModulesModule } from './models/share-modules/share-modules';
import { ClientDialogComponent } from './dialogs/client-dialog/client-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    IngestorComponent,
    IngestedDataComponent,
    ClientDialogComponent
    
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RoutersRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    Ng2TableModule,
    FormsModule,
    ShareModulesModule,
     
    
     
  ],
  providers: [DataService,RestApiService],
  bootstrap: [AppComponent],
  exports: [CommonModule],
  entryComponents:[ClientDialogComponent]
})
export class AppModule { }
