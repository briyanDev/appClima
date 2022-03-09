import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaServiceService {
  url = "https://api.openweathermap.org/data/2.5/weather";
  key = "992b20763a3a0e771ceb222a02d057af";
  constructor(private http:HttpClient) { }

  getClima(ciudad:string):Observable<any>{//Utilizamos observables en lugar de promesas
    const URL = this.url+'?q='+ciudad+'&appid='+this.key;
    return this.http.get(URL);
  }
}
