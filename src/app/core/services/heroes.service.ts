import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs/Observable';

const heroes: Hero[] = [{
    id: 1,
    name: 'Batman',
    health: 100,
    power: 10
  }, {
    id: 2,
    name: 'Superman',
    health: 10000,
    power: 1000
  }]

const REQUEST_DELAY = 1000; // Delay for emulate of long requset

@Injectable()
export class HeroesService {
  public constructor() {
  }

  public getHeroes(): Observable<Hero[]> {
    return Observable.timer(REQUEST_DELAY)
      .mergeMap(() => Observable.of(heroes));
  }

  public getHero(id: number): Observable<Hero> {
    const hero = heroes.find(h => h.id === id);
    return Observable.timer(REQUEST_DELAY)
      .mergeMap(() => Observable.of(hero));
  }
}
