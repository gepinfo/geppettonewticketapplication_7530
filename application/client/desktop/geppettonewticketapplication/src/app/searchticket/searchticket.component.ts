import { Component, OnInit } from '@angular/core';
import { SearchticketService } from './searchticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchticket',
  templateUrl: './searchticket.component.html',
  styleUrls: ['./searchticket.component.scss'],
})

export class SearchticketComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'Service Type', field: 'type'  },{ headerName: 'Severity', field: 'severity'  },];
    public ticket = {
        name: '',
        description: '',
        type: '',
        severity: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private searchticketService: SearchticketService,
        private router: Router,
    ) { }

    ngOnInit() {
    }
    GpSearch() {
        this.searchticketService.GpSearch(this.ticket).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./updateticket'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(values) {
        this.GpRoute(values._id);
    }
}