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
  constructor(private paisService:PaisService){
    this.paises = JSON.parse(localStorage.getItem('paises')!);
  }

  buscar(){
    this.error = false
      this.paisService.buscarPais(this.termino).
      subscribe(paises => {
      this.paises = paises
      localStorage.setItem('paises', JSON.stringify(this.paises))
    },err=> {
      this.error = true;
      this.paises = JSON.parse(localStorage.getItem('paises')!);
    }) ;
  }
}
