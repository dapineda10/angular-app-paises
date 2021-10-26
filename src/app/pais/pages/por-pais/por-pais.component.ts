import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{
  termino:string = '';
  error:boolean = false;
  paises:Country[] = [];
  nombrePlaceHolder:string = "Buscar por pais"

  constructor(private paisService:PaisService){
    if(localStorage.getItem('paises')){
      this.paises = JSON.parse(localStorage.getItem('paises')!);
    }
  }

  buscar(termino:string){
      this.error = false
      
      this.paisService.buscarPais(termino).
      subscribe(paises => {
      this.paises = paises
      localStorage.setItem('paises', JSON.stringify(this.paises))
    },err=> {
      this.error = true;
      if(localStorage.getItem('paises')){
        this.paises = JSON.parse(localStorage.getItem('paises')!);
      }
    }) ;
  }

  sugerencia(event:any){
    this.error = false;

    this.paisService.buscarPais(event).
    subscribe(paises => {
    this.paises = paises
    localStorage.setItem('paises', JSON.stringify(this.paises))
  },err=> {
    this.error = true;
    if(localStorage.getItem('paises')){
    this.paises = JSON.parse(localStorage.getItem('paises')!);
    }
  }) ;    
    // TODO:Crear sugerencias
  }
}
