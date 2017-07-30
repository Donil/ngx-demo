import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Hero } from '../../core/models/hero';

@Component({
  selector: 'cl-selected-hero',
  templateUrl: './selected-hero.component.html',
  styleUrls: ['./selected-hero.component.scss']
})
export class SelectedHeroComponent implements OnInit {

  @Input()
  public hero: Hero;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
  }

  public goToEditHero(): void {
    this.router.navigate(['../heroes', this.hero.id], { relativeTo: this.route })
  }
}
