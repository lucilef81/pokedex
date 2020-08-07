import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons: any = [];
  types: string[] = ['Grass', 'Poison', 'Fire', 'Flying', 'Water', 'Bug', 'Normal', 'Fighting', 'Rock', 'Steel', 'Ice', 'Ghost', 'Dragon', 'Psychic', 'Ground', 'Electric'];
  nameFilter: string = '';
  idFilter: string = '';
  typeFilter: string= '';

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.http.get('../assets/pokemon.json')
    .subscribe(success => {
      this.pokemons = success;
    })
  }

}
