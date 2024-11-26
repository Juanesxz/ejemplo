import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private httpClient : HttpClient
  ) { }




  getPokemons(id: number = 1) {
    return this.httpClient.get<any>(`${environment.URL_API}${id}`);
  }


}
