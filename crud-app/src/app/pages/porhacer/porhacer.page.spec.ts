import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PorhacerPage } from './porhacer.page';

describe('PorhacerPage', () => {
  let component: PorhacerPage;
  let fixture: ComponentFixture<PorhacerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorhacerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PorhacerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
