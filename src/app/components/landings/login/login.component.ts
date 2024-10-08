import { Component } from '@angular/core';
import { LoginService } from '../../../services/usuario/login.service';
import { ServerResponse } from '../../../models/server-response';
import { StorageService } from '../../../services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLogged: boolean = false;

  email: string = '';
  password: string = '';
  recoveryLogin: boolean = undefined;
  showPassword: boolean = false;

  emailIsValid: boolean = undefined;
  passwordIsValid: boolean = undefined;

  emailErrorText: string = '';
  passwordErrorText: string = '';

  showAlertConfirm: boolean = false;
  showAlertError: boolean = false;

  constructor(private loginService: LoginService, private storageService: StorageService, private router: Router) {
    this.getInLocalStoreRecovery();
    this.isLogged = this.storageService.get('logged');

    if (this.isLogged) {
      this.router.navigate(['/inicio']).then(() => {
      });
    }
  }

  iniciarSesion() {
    const formIsValid = this.validateForm();
    if (!formIsValid) {
      return;
    }

    if (this.recoveryLogin === true) {
      this.saveInLocalStoreRecovery();
    }
    else {
      this.removeInLocalStoreRecovery();
    }

    this.loginService.login({
      Email: this.email,
      Password: this.password,
    }).subscribe({
      next: (response: ServerResponse) => {
        if (response.succeeded) {
          this.storageService.save('logged', true);
          this.storageService.save('userlogged', response.data);
          this.storageService.save('isAdmin', response.data.isAdmin);
          this.router.navigate(['/inicio']).then(() => {
          });          //redirect si es admin un sitio sino otro
          //setear true vistas
        } else {
          this.showErrorLogin();
        }
      },
      error: (error) => {
      },
      complete: () => {
      }
    });
  }

  validateForm(): boolean {
    this.emailIsValid = true;
    this.passwordIsValid = true;

    let formIsValid = true;

    if (!this.email.includes('@') || this.email.length < 5 || this.email.length > 50) {
      this.emailErrorText = 'Debes introducir un email correcto.';
      this.emailIsValid = false;
      formIsValid = false;
    }
    if (!this.password || this.password.length < 8 || this.password.length > 25) {
      this.passwordErrorText = 'La contraseña no tiene el formato correcto.';
      this.passwordIsValid = false;
      formIsValid = false;
    }

    return formIsValid;
  }

  showErrorLogin() {
    this.showAlertError = true;
    setTimeout(() => this.showAlertError = false, 10000);
  }

  resetForm() {
    this.email = '';
    this.password = '';
  }

  getInLocalStoreRecovery() {
    this.recoveryLogin = this.storageService.get('recoverylogin');

    if (this.recoveryLogin === true) {
      this.email = this.storageService.get('emaillogin');
      this.password = this.storageService.get('passwordlogin');
    }
  }

  saveInLocalStoreRecovery() {
    this.storageService.save('recoverylogin', true);
    this.storageService.save('emaillogin', this.email);
    this.storageService.save('passwordlogin', this.password);
  }

  removeInLocalStoreRecovery() {
    this.storageService.remove('recoverylogin');
    this.storageService.remove('emaillogin');
    this.storageService.remove('passwordlogin');
  }

  onChangeCheckbox(value: boolean) {
    this.recoveryLogin = value;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
