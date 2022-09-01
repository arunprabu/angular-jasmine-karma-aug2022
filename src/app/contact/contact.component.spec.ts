import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    // the following is like app.module
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should set isSubmitted to true upon form submit', () => {
  //   component.handleAddContact();
  //   expect(component.isSubmitted).toBeTrue();
  // });

  // form's positive test 
  it('has valid form when all fields are filled properly', () => {
    component.contactForm?.controls['name'].setValue('John');
    component.contactForm?.controls['phone'].setValue('1234567890');
    component.contactForm?.controls['email'].setValue('j@k.com');
    expect(component.contactForm.valid).toBeTrue();
  });

  // form's negative test 
  it('has invalid form when all fields are not filled properly', () => {
    component.contactForm?.controls['name'].setValue('');
    component.contactForm?.controls['phone'].setValue('123456');
    component.contactForm?.controls['email'].setValue('j');
    expect(component.contactForm.valid).toBeFalse();
  });

  // Let's learn about Spy
  // SpyOn is a Jasmine feature that allows dynamically intercepting 
  // the calls to a function and change its result. 
  it('should call the handleAddContact', () => {
    // component = 11 players | handleAddContact = Kohli | Kohli is spied by Smith
    spyOn(component, 'handleAddContact'); // Install a spy onto an existing object.
    // find out submit button element from html 
    const btnEl = fixture.debugElement.query(By.css('button')).nativeElement;
    btnEl.click(); // arrange a person named John to find ways to interact with Kohli
    
    // checking whether John has interacted with Kohli or not -- Smith can confirm it
    expect(component.handleAddContact).toHaveBeenCalled(); 
  });


});
