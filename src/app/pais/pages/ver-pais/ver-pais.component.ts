import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  public pais!:Country ;
  constructor(
    private activateRoute:ActivatedRoute,
    private PaisService:PaisService
    ) { }

  ngOnInit():void {

    this.activateRoute.params.pipe(
      switchMap((param => this.PaisService.ObtenerPaisPorCodigo(param.id))),
      tap(console.log)
    ).subscribe(pais=>{
      this.pais = pais[0];
    })

    //Se puede usar dos subscribe o usar las propiedades de rxjs para hacer lo de arriba con el SwitchMap
    /*this.activateRoute.params.subscribe(
      params=>{
        this.PaisService.ObtenerPaisPorCodigo(params.id).subscribe(
          pais =>{
            console.log(pais)
          }
        )
      }
    )*/
  }

}
