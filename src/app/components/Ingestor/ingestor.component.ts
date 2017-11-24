import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data/data.service';

@Component({
  templateUrl: './ingestor.component.html'
})
export class IngestorComponent {
  public loading: boolean;
  public status = "Uploading";
  public animation = true;
  constructor(public dataService: DataService, public router: Router) {
    this.loading = false;
  }

  onFileSelect($event) {
    const file = $event.target.files && $event.target.files[0];
    

   
    if (file) {
      this.loading = true;
      this.dataService.initWithFile(file)
        .subscribe(() => {
        this.animation = false;
        this.status = "Successfully updated"
        this.dataService.search({});
      });
    }
  }
}
