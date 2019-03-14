import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokemonsPage } from './search-pokemons.page';

describe('SearchPokemonsPage', () => {
  let component: SearchPokemonsPage;
  let fixture: ComponentFixture<SearchPokemonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPokemonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPokemonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
