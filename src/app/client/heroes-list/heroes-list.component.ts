import { Component, OnInit } from '@angular/core';
import { Hero } from '../../core/models/hero';
import { HeroesService } from '../../core/services/heroes.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cl-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  private _selectedHero: Hero;

  public heroes: Hero[];

  public heroesLazyLoader: Observable<Hero[]>;

  public constructor(private heroesService: HeroesService) {
    this.heroesLazyLoader = this.heroesService.getHeroes()
      .do(heroes => this.heroes = heroes);
  }

  public ngOnInit(): void {
    // Init component.
  }

  public get selectedHero(): Hero {
    return this._selectedHero;
  }

  public setSelectedHero(hero: Hero): void {
    this._selectedHero = hero;
  }
}
