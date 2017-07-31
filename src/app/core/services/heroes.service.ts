import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs/Observable';

let HEROES: Hero[] = [{
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
const LOCAL_STORAGE_HEROES_KEY = 'ngx-demo-heroes';

@Injectable()
export class HeroesService {
  public constructor() {
    const raw = localStorage.getItem(LOCAL_STORAGE_HEROES_KEY);
    if (raw) {
      HEROES = JSON.parse(raw);
    }
  }

  public save(hero: Hero): Observable<Hero> {
    if (hero.id) {
      // Find and replace.
      const index = HEROES.findIndex(h => h.id === hero.id);
      HEROES.splice(index, 1, hero);
    } else {
      hero.id = Math.max(...HEROES.map(h => h.id)) + 1;
      HEROES.push(hero);
    }
    localStorage.setItem(LOCAL_STORAGE_HEROES_KEY, JSON.stringify(HEROES))
    return Observable.of(hero)
      .delay(REQUEST_DELAY);
  }

  public getHeroes(): Observable<Hero[]> {
    return Observable.timer(REQUEST_DELAY)
      .mergeMap(() => Observable.of(HEROES));
  }

  public getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id);
    return Observable.timer(REQUEST_DELAY)
      .mergeMap(() => Observable.of(hero));
  }
}
