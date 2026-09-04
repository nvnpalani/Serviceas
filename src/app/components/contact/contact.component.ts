import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  demoForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      society: ['', Validators.required],
      city: [''],
      units: [''],
      role: [''],
      message: ['']
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.demoForm.valid) {
      alert('Thanks for reaching out! We will contact you soon.');
      this.demoForm.reset();
      this.isSubmitted = false;
    }
  }
}
