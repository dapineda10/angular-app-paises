import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{
  termino:string = '';
  error:boolean = false;
  capitales:Country[] = [];


  constructor(private paisService:PaisService){
    if(localStorage.getItem('capitales')){
      this.capitales = JSON.parse(localStorage.getItem('capitales')!);
    }
  }

  buscar(termino:string){
      this.error = false
      
      this.paisService.buscarCapital(termino).
      subscribe(capitales => {
      this.capitales = capitales
      localStorage.setItem('capitales', JSON.stringify(this.capitales))
    },err=> {
      this.error = true;
      if(localStorage.getItem('capitales')){
        this.capitales = JSON.parse(localStorage.getItem('capitales')!);
      }
    }) ;
  }

  sugerencia(event:any){
    this.error = false;

    this.paisService.buscarCapital(event).
    subscribe(paises => {
    this.capitales = paises
    localStorage.setItem('capitales', JSON.stringify(this.capitales))
  },err=> {
    this.error = true;
    if(localStorage.getItem('capitales')){
      this.capitales = JSON.parse(localStorage.getItem('capitales')!);
    }
  }) ;    
    // TODO:Crear sugerencias
  }

}
