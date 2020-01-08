import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditAppoinmentPage } from './edit-appoinment.page';

describe('EditAppoinmentPage', () => {
  let component: EditAppoinmentPage;
  let fixture: ComponentFixture<EditAppoinmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAppoinmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditAppoinmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
