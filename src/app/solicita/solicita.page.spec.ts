import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitaPage } from './solicita.page';

describe('SolicitaPage', () => {
  let component: SolicitaPage;
  let fixture: ComponentFixture<SolicitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
