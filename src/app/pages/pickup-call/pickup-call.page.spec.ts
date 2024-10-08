import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PickupCallPage } from './pickup-call.page';

describe('PickupCallPage', () => {

  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PickupCallPage],
      imports: [IonicModule.forRoot(), AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallPage);
    router = TestBed.inject(Router); // Use inject() instead of get()
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home on create new pickup call', () => {
    spyOn(router, 'navigate'); // Fix the spelling and method usage

    component.newPickupCall(); // Ensure this method is called in your component

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

});
