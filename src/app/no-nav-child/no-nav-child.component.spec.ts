import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoNavChildComponent } from './no-nav-child.component';

describe('NoNavChildComponent', () => {
  let component: NoNavChildComponent;
  let fixture: ComponentFixture<NoNavChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoNavChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoNavChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
