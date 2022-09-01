import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  // 1. Have form tag equivalent in TS
  contactForm!: FormGroup;
  isSubmitted = false;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      // Step 2: Have form element equivalents in TS  - FormControl // Refer HTML form Step 3 & 4 
      name: new FormControl('', Validators.required), // Step 5: Let's work on validations
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email])   
    });
  }

  handleAddContact(){
    console.log(this.contactForm);
    console.log(this.contactForm.value); // submittable form data
    this.isSubmitted = true;
  }

}
