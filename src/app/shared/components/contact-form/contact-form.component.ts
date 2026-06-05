import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_8mg3x6q';
const EMAILJS_TEMPLATE_ID = 'template_cr07ckg';
const EMAILJS_PUBLIC_KEY = 'Qu9mmSajJkKAm1jiX';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected sending = false;
  protected sent = false;
  protected error = false;

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.error = false;

    const { name, email, subject, message } = this.form.value;

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, subject, message },
        EMAILJS_PUBLIC_KEY,
      );
      this.sent = true;
      this.form.reset();
    } catch {
      this.error = true;
    } finally {
      this.sending = false;
    }
  }
}
