import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable()

export class AuthService {

  constructor(private http: Http)  
  {

  }

login(credentials)
{
  return this.http.post('/api/authenticate', JSON.stringify(credentials)).pipe(map(res => {
    console.log(res);
    return res;
  }));
}

}
