import { Component } from '@angular/core';
import { EmailService } from '../../../services/email/email.service';
import { ServerResponse } from '../../../models/server-response';
import { SocialDataService } from '../../../shared/social/social-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isLoading: boolean = false;
  showAlertConfirm: boolean = false;
  showAlertError: boolean = false;

  nameIsValid: boolean = undefined;
  emailIsValid: boolean = undefined;
  phoneNumberIsValid: boolean = undefined;
  subjectIsValid: boolean = undefined;
  messageIsValid: boolean = undefined;

  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  subject: string = '';
  message: string = '';

  nameErrorText: string = '';
  emailErrorText: string = '';
  phoneNumberErrorText: string = '';
  subjectErrorText: string = '';
  messageErrorText: string = '';

  constructor(private emailService: EmailService, public socialDataService: SocialDataService) {
  }

  onClickSubmit() {
    const formIsValid = this.validateForm();
    if (!formIsValid) {
      return;
    }

    this.isLoading = true;

    this.emailService.sendEmail({
      names: this.name,
      email: this.email,
      phone: this.phoneNumber,
      subject: this.subject,
      message: this.message
    }).subscribe({
      next: (response: ServerResponse) => {
        if (response.succeeded) {
          this.showConfirmSendEmail();
          this.resetForm();
        } else {
          this.showErrorSendEmail();
        }
      },
      error: (error) => {
        this.showErrorSendEmail();
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  validateForm(): boolean {
    this.nameIsValid = true;
    this.emailIsValid = true;
    this.phoneNumberIsValid = true;
    this.subjectIsValid = true;
    this.messageIsValid = true;

    let formIsValid = true;

    if (!this.name || this.name.length < 3) {
      this.nameErrorText = 'Debes introducir un nombre con mínimo tres carácteres.';
      this.nameIsValid = false;
      formIsValid = false;
    }
    if (!this.email.includes('@') || this.email.length < 5 || this.email.length > 50) {
      this.emailErrorText = 'Debes introducir un email correcto.';
      this.emailIsValid = false;
      formIsValid = false;
    }
    if (!this.phoneNumber || this.phoneNumber.length != 9 || !this.phoneNumber.match(/^[0-9]+$/)) {
      this.phoneNumberErrorText = 'El número de teléfono debe tener 9 dígitos y contener solo números.';
      this.phoneNumberIsValid = false;
      formIsValid = false;
    }
    if (!this.subject || this.subject.length < 5) {
      this.subjectErrorText = 'El asunto debe tener al menos 5 caracteres.';
      this.subjectIsValid = false;
      formIsValid = false;
    }
    if (!this.message || this.message.length < 15) {
      this.messageErrorText = 'El mensaje debe tener al menos 15 caracteres.';
      this.messageIsValid = false;
      formIsValid = false;
    }

    return formIsValid;
  }

  showErrorSendEmail() {
    this.showAlertError = true;
    setTimeout(() => this.showAlertError = false, 5000);
  }
  showConfirmSendEmail() {
    this.showAlertConfirm = true;
    setTimeout(() => this.showAlertConfirm = false, 5000);
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.subject = '';
    this.message = '';
  }

  highlightNameField(value: boolean) {
    this.nameIsValid = value;
  }

  highlightEmailField(value: boolean) {
    this.emailIsValid = value;
  }

  highlightPhoneField(value: boolean) {
    this.phoneNumberIsValid = value;
  }

  highlightSubjectField(value: boolean) {
    this.subjectIsValid = value;
  }

  highlightMessageField(value: boolean) {
    this.messageIsValid = value;
  }

  ngOnInit(): void {
  }

}
