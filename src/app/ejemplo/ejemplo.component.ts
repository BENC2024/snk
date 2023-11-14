import { Component } from '@angular/core';
import { InfoService } from "../services/info.service";

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent {
  constructor( private infoService: InfoService ){

  }

  public listado: any[]=[]

  ngOnInit(){
    this.infoService.obtenerInfo().subscribe( data => {
      this.listado = data;
      console.log(data)
    })
  }

  obtener_titanes(){
    this.infoService.obtenerInfo().subscribe( result => {
      this.listado = result
      console.table(result)
    })
  }
}
