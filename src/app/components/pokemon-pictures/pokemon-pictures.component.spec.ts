import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPicturesComponent } from './pokemon-pictures.component';

describe('PokemonPicturesComponent', () => {
  let component: PokemonPicturesComponent;
  let fixture: ComponentFixture<PokemonPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonPicturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
