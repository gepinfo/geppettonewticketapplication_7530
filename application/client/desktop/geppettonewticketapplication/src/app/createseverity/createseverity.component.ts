import { Component, OnInit } from '@angular/core';
import { CreateseverityService } from './createseverity.service';

@Component({
  selector: 'app-createseverity',
  templateUrl: './createseverity.component.html',
  styleUrls: ['./createseverity.component.scss'],
})

export class CreateseverityComponent implements OnInit {
    public severity = {
        severityname: '',
        description: '',
    }

    constructor (
        private createseverityService: CreateseverityService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createseverityService.GpCreate(this.severity).subscribe(data => {
            this.severity.severityname = ''
 	 	this.severity.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}