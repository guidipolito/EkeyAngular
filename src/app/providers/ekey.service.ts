import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EkeyService {

  constructor(public http: HttpClient) { }
  	getChave(busca): Observable<object> {
  		return this.http.get('http://localhost/processo/apibuscachave.php?&busca='+busca).pipe((res: any) => {
  			console.log('res', res);
  			return res;
  		});
  	}
   }

