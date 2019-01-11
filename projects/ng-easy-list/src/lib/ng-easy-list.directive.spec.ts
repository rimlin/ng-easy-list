import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEasyListDirective } from './ng-easy-list.directive';

describe('NgEasyListDirective', () => {
  let component: NgEasyListDirective;
  let fixture: ComponentFixture<NgEasyListDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgEasyListDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEasyListDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
