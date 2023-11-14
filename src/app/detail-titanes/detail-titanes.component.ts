import { Component } from '@angular/core';
import { InfoService } from "../services/info.service";
import { EjemploComponent } from '../ejemplo/ejemplo.component';

@Component({
  selector: 'app-detail-titanes',
  templateUrl: './detail-titanes.component.html',
  styleUrls: ['./detail-titanes.component.scss']
})
export class DetailTitanesComponent {

   public detalle: any=[]

   constructor( private infoService: InfoService ){
   }
   
   ngOnInit() {
      this.infoService.obtenerDetalles("").subscribe(data => {
        this.detalle = data;
        console.log(data);
      });
    }
}
