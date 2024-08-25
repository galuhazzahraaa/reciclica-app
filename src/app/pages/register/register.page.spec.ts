import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RegisterPage } from './register.page';

describe('RegisterPage', () => {

  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [IonicModule.forRoot(), AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    router = TestBed.inject(Router); // Use inject() instead of get()
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home page on register', () => {
    spyOn(router, 'navigate'); // Fix the spelling and method usage

    // Call the method or trigger the action that should navigate to 'home'
    component.register(); // Replace with the actual method that should trigger the navigation

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

});
