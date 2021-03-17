import { Component, OnInit } from '@angular/core';
import { UpdateticketService } from './updateticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateticket',
  templateUrl: './updateticket.component.html',
  styleUrls: ['./updateticket.component.scss'],
})

export class UpdateticketComponent implements OnInit {
    queryId: any;
    public ticket = {
        name: '',
        description: '',
        type: '',
        severity: '',
    }

    constructor (
        private updateticketService: UpdateticketService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    GpUpdate() {
        this.updateticketService.GpUpdate(this.ticket).subscribe(data => {
            this.ticket.name = ''
 	 	this.ticket.description = ''
 	 	this.ticket.type = ''
 	 	this.ticket.severity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetNounById() {
        this.updateticketService.GpGetNounById(this.queryId).subscribe(data => {
            this.ticket = data
        },
        error => {
            console.log('Error', error);
        });
    }
}