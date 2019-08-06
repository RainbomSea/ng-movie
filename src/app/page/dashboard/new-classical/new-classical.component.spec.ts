import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClassicalComponent } from './new-classical.component';

describe('NewClassicalComponent', () => {
  let component: NewClassicalComponent;
  let fixture: ComponentFixture<NewClassicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClassicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClassicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
