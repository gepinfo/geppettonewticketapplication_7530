import { Component, OnInit } from '@angular/core';
import { CreateticketService } from './createticket.service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
    servicetypesitemArray: any = [];
    severityitemArray: any = [];
    public ticket = {
        name: '',
        description: '',
        type: '',
        severity: '',
    }

    constructor (
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
    }
    servicetypesGpGetAllValues() {
        this.createticketService.servicetypesGpGetAllValues().subscribe(data => {
            this.servicetypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.createticketService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createticketService.GpCreate(this.ticket).subscribe(data => {
            this.ticket.name = ''
 	 	this.ticket.description = ''
 	 	this.ticket.type = ''
 	 	this.ticket.severity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}