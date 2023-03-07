import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-new-personaje',
  templateUrl: './new-personaje.component.html',
  styleUrls: ['./new-personaje.component.css']
})
export class NewPersonajeComponent {
  @Input() public new: Personaje = {
    name: '',
    power: 0
  }

  /*@Output() newPersonaje: EventEmitter<Personaje> = new EventEmitter()*/

  constructor(private _dbzService: DbzService) {
  }
  agregar() {
    if (this.new.name.trim().length === 0) {
      return;
    }
    /*this.newPersonaje.emit(this.new);*/
    this._dbzService.addPersonaje(this.new);
    this.new = {
      name: '',
      power: 0
    }
  }

}
