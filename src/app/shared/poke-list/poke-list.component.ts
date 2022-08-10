import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { PokeSearchComponent } from '../poke-search/poke-search.component';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public apiError: boolean = false;
  private setAllPokemon: any;
  public getAllPokemons: any;
  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      (res) => {
        this.setAllPokemon = res.results;
        this.getAllPokemons = this.setAllPokemon;
      },
      (error: any) => {
        this.apiError = true;
      }
    );
  }

  getSearch(value: string) {
    const filter = this.setAllPokemon.filter((res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase());
    });
    this.getAllPokemons = filter;
  }
}
