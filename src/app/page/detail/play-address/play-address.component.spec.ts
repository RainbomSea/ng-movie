import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAddressComponent } from './play-address.component';

describe('PlayAddressComponent', () => {
  let component: PlayAddressComponent;
  let fixture: ComponentFixture<PlayAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
