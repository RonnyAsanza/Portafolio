import { Component, OnInit } from '@angular/core';
import { SocialDataService } from '../../../shared/social/social-data.service';
import { EmailService } from '../../../services/email/email.service';
import { SendEmailBolletinModel } from 'src/app/models/email/email-message';
import { ServerResponse } from '../../../models/server-response';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  email: string = "";
  emailErrorText: string = "";
  showAlertConfirm: boolean = false;
  showAlertError: boolean = false;

  currentYear: number = new Date().getFullYear();


  constructor(public socialDataService: SocialDataService, private emailService: EmailService) { }

  ngOnInit(): void {
  }

  onSubscribe() {
    const formIsValid = this.validateForm();
    if (!formIsValid) {
      return;
    }

    let sendEmailBolletinModel: SendEmailBolletinModel = {
      email: this.email
    }

    this.emailService.sendEmailBulletin(sendEmailBolletinModel).subscribe({
      next: (response: ServerResponse) => {
        if (response.succeeded) {
          this.showConfirmSendEmail();
          this.resetForm();
        } else {
          this.emailErrorText = "Hubo un error al enviar los datos, contacta con nosotros por Whatsapp!"
          this.showErrorSendEmail();
        }
      },
      error: (error) => {
        this.emailErrorText = "Hubo un error al enviar los datos, contacta con nosotros por Whatsapp!"
        this.showErrorSendEmail();
      },
      complete: () => {
      }
    });
  }

  validateForm(): boolean {
    let formIsValid = true;

    if (!this.email) {
      this.emailErrorText = 'Debes introducir un email.';
      this.showErrorSendEmail();
      formIsValid = false;
    }
    else if (!this.email.includes('@') || this.email.length < 5 || this.email.length > 50) {
      this.emailErrorText = 'Debes introducir un email correcto.';
      this.showErrorSendEmail();
      formIsValid = false;
    }

    return formIsValid;
  }

  showConfirmSendEmail() {
    this.showAlertConfirm = true;
    setTimeout(() => this.showAlertConfirm = false, 10000);
  }

  resetForm() {
    this.email = '';
    this.showAlertError = false;
  }

  showErrorSendEmail() {
    this.showAlertError = true;
  }
}
