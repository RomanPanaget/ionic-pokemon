import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardPage } from './pokemon-card.page';

describe('PokemonCardPage', () => {
  let component: PokemonCardPage;
  let fixture: ComponentFixture<PokemonCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
