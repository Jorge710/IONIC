import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeAppoinmentPage } from './make-appoinment.page';

describe('MakeAppoinmentPage', () => {
  let component: MakeAppoinmentPage;
  let fixture: ComponentFixture<MakeAppoinmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeAppoinmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeAppoinmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
