import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private Pokemon = inject(PokemonService);
  public pokemons :any = []; // Aquí se almacenará la lista de Pokémon

  constructor() {}

  ngOnInit(): any {
    for (let i = 1; i <= 10; i++) {
      this.Pokemon.getPokemons(i).subscribe((data) => {
        this.pokemons.push(data);
        console.log(this.pokemons);
        
      }); 
    }
  }
}
  

