import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScanData } from "../../models/scan-data.model";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MapaPage } from '../../pages/index.paginas';


/*
  Generated class for the HistorialService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialService {
  
  modalCtrl: any;
  private _historial:ScanData[] = [];
  constructor( private iab: InAppBrowser) { 

  }
  /*constructor(public http: HttpClient) {
    console.log('Hello HistorialService Provider');
  }*/
  abrir_scan( index:number){
    let scanData = this._historial[index];
    console.log( scanData );
    switch( scanData.tipo ){
      case "http":
        this.iab.create( scanData.info, "_system" );
      break
      case "mapa":
  		  console.log("es un mapa");
        this.modalCtrl.create( MapaPage, { coords: scanData.info }).present();
      break;
      case "contacto":
        console.log("es un contacto");
      break;
      case "email":
        console.log("es un email");
      break;
      default:
        console.error("Tipo no soportado");
    }
  }

  agregar_historial( texto:string ){
    let data = new ScanData( texto );
    this._historial.unshift( data );
    console.log( this._historial );
    this.abrir_scan(0);
  }

  cargar_historial(){
    return this._historial;
  }

}
