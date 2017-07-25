import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoNavComponent } from './no-nav.component';

describe('NoNavComponent', () => {
  let component: NoNavComponent;
  let fixture: ComponentFixture<NoNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
