import {Injectable} from "@angular/core";
import {Personaje} from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{
  private _personajes: Personaje[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes]; // los 3 puntos o spread permite quitar la referencia del objeto para que no sea modificado por otra clase o función
  }
  constructor() {}

  public addPersonaje(personaje: Personaje): void {
    this._personajes.push(personaje);
  }
}
