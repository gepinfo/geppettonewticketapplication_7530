import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class SearchticketService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpSearch(ticket): Observable<any> {
        const temp = [];
 	 	const objectKeyPair = Object.entries(ticket);
 	 	objectKeyPair.forEach((element, index) => {
 	 	if (element[1]) {
 	 	temp.push(`${element[0]}=${element[1]}`);
 	 	}
 	 	});
 	 	return this.http.get(this.sharedService.DESKTOP_API + `/ticket/get/search${temp.length > 0 ? `?${temp.join('&')}` : ''}`);
    }
}