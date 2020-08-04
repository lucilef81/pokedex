import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemons: any = [];

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.http.get('../assets/pokemon.json')
    .subscribe(success => {
      this.pokemons = success;
      console.log(this.pokemons);
    })
  }

}
