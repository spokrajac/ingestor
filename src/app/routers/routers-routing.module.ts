import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { IngestorComponent } from '../components/Ingestor/ingestor.component';
import { IngestedDataComponent } from '../components/IngestedData/ingested-data.component';

/**
 * Router routing is responsible to import all not lazy page modules like Home mdl page and inject they children routers to the web app.
 * It also define all lazy modules used to be required on router demand Example second-page!
 * just notice that page modules can also add they on page modules but they have to be later imported here!
 * second page module in its defination is importing a lazy module as children the Example page module.
 * To avoid deep dependency complexity, should be avoid having more then 3 level deep lazy loading dependency!
 * Example second page import example-mdl (module) he cold then import a example-2 module
 * but this one should not import any other lazy module
 */

export const LAZY_ROUTES: Routes = [
  
  { path: 'upload', component: IngestorComponent },
  { path: 'data', component: IngestedDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(LAZY_ROUTES)],
  exports: [RouterModule],
})
export class RoutersRoutingModule {}
