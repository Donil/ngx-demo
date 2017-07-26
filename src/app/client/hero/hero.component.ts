import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../core/models/hero';

@Component({
  selector: 'cl-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input()
  public hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
