import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();
  @Input() nombrePlaceHolder!:string;
  
  termino:string ='';
  debouncer:Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(200)//No se emite el subscribe hasta que el usuario debe de emitir por 300 ms
    ).subscribe(valor=>{
      this.onDebounce.emit(valor);
    })
  }
  
  teclaPresionada(Event:any){
    this.debouncer.next(this.termino);
  }

  buscar(){
    //Emite evento para output
    this.onEnter.emit(this.termino);
  }

}
