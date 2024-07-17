/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowItemComponent } from './show-item.component';

describe('ShowItemComponent', () => {
  let component: ShowItemComponent;
  let fixture: ComponentFixture<ShowItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
