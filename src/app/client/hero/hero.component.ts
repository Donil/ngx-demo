import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Hero } from '../../core/models/hero';
import { HeroesService } from '../../core/services/heroes.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cl-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input()
  public hero: Hero;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private heroesService: HeroesService) {
  }

  public ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => {
      const heroId = parseInt(params.get('id'), 10);
      return this.heroesService.getHero(heroId);
    })
    .subscribe(hero => this.hero = hero);
  }

  public onSubmit(form: NgForm): void {
    if (form.invalid) {
      return
    }
    // TODO: Save
    this.router.navigate(['..'],  { relativeTo: this.route });
  }
}
