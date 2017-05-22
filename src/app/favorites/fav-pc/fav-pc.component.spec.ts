/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavPcComponent } from './fav-pc.component';

describe('FavPcComponent', () => {
  let component: FavPcComponent;
  let fixture: ComponentFixture<FavPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
