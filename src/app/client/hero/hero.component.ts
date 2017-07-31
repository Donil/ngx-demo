import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Hero } from '../../core/models';
import { HeroesService, CanComponentDiactivate } from '../../core/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cl-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, CanComponentDiactivate {
  private _canDiactivate = false;

  public hero: Hero;

  public heroName: string;

  public health: number;

  public power: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private heroesService: HeroesService) {
  }

  public ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => {
      if (params.has('id')) {
        // Edit of existing.
        const heroId = parseInt(params.get('id'), 10);
        return this.heroesService.getHero(heroId);
      }
      // Create new.
      return Observable.of(new Hero());
    })
    .subscribe(hero => {
      this.hero = hero;
      this.heroName = hero.name;
      this.health = hero.health;
      this.power = hero.power;
    });
  }

  public canDiactivate(): boolean {
    if (this._canDiactivate) {
      return true;
    }
    alert('Save or discard changes.');
  }

  public submit(form: NgForm): void {
    if (form.invalid) {
      return
    }
    this.hero.name = this.heroName;
    this.hero.health = this.health;
    this.hero.power = this.power;
    this.heroesService.save(this.hero)
      .subscribe(() => this.goBack());
  }

  public cancel(): void {
    this.goBack();
  }

  private goBack(): void {
    this._canDiactivate = true;
    this.router.navigate(['..'],  { relativeTo: this.route });
  }
}
