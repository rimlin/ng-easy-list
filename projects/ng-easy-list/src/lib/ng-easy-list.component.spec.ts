import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEasyListComponent } from './ng-easy-list.component';

describe('NgEasyListComponent', () => {
  let component: NgEasyListComponent;
  let fixture: ComponentFixture<NgEasyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgEasyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEasyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
