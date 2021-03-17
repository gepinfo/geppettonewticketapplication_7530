import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdateticketService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpUpdate(ticket): Observable<any> {
        return this.http.put(this.sharedService.DESKTOP_API + '/ticket', ticket);
    }
    GpGetNounById(ticketId): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/ticket/' + ticketId);
    }
}