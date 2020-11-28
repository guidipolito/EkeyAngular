import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import  { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EkeyService {

  constructor(public http: HttpClient) { }
  	getChave(busca): Observable<object> {
  		return this.http.get('http://localhost/processo/apibuscachave.php?busca='+busca).pipe((res: any) => {
  			console.log('resultado', res);
  			return res;
  		});
  	}
  	fazChave(nick): Observable<object>{
  		return this.http.get('http://localhost/processo/apifazchave.php?nick='+nick).pipe((res: any) => {
  			return res;
  		});
  	}

    insereSolicita(email, discord, telefone, msg, equipe, nick): Observable<object>{
      //Eu realmente tentei fazer isso por Post mas n consegui por nada
      return this.http.get('http://localhost/processo/apiinseresolicita.php?email='+email+"&telefone="+telefone+"&discord="+discord+"&nick="+nick+"&msg="+msg+"&nomequipe="+equipe).pipe((res: any) => {
        return res;
      });
    }

}
