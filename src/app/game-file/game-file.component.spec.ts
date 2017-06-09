/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameFileComponent } from './game-file.component';

describe('GameFileComponent', () => {
  let component: GameFileComponent;
  let fixture: ComponentFixture<GameFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
