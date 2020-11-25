import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FazChavePage } from './faz-chave.page';

describe('FazChavePage', () => {
  let component: FazChavePage;
  let fixture: ComponentFixture<FazChavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FazChavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FazChavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
