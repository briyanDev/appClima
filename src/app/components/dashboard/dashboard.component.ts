import { Component, OnInit } from '@angular/core';
import { ClimaServiceService } from 'src/app/services/clima-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ciudad:string = "";
  temperatura:number = 0;
  humedad:number = 0;
  clima:string = "";
  query:boolean = false;
  loading:boolean = false;
  noCity:boolean = false;

  constructor(private _climaService:ClimaServiceService) { }

  ngOnInit(): void {
  }

  obtenerClima():void{
    this.query = false;
    this.loading = true;
    this._climaService.getClima(this.ciudad).subscribe(data=>{
      this.temperatura = data.main.temp;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
      console.log(data);
      this.loading = false;
      this.query = true;
      this.noCity = false;
    }, error =>{
      this.loading = false;
      this.noCity = true;
    })
  }
}
