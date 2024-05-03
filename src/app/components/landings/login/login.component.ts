import { Component } from '@angular/core';
import { LoginService } from '../../../services/usuario/login.service';
import { ServerResponse } from '../../../models/server-response';
import { LoaderService } from '../../../services/interceptor/loader.service';
import { StorageService } from '../../../services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoged: boolean = false;

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

  constructor(private loginService: LoginService, private loaderService: LoaderService, private storageService: StorageService, private router: Router) {
    this.getInLocalStoreRecovery();
    this.isLoged = this.storageService.get('loged');

    if (this.isLoged) {
      this.router.navigate(['/inicio']);
    }
  }

  iniciarSesion() {
    const formIsValid = this.validateForm();
    if (!formIsValid) {
      return;
    }

    this.loaderService.show();
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
          this.storageService.save('loged', true);
          this.storageService.save('userloged', response.data);
          this.storageService.save('isAdmin', response.data.isAdmin);
          this.router.navigate(['/inicio']);
          //redirect si es admin un sitio sino otro
          //setear true vistas
        } else {
          this.showErrorLogin();
        }
      },
      error: (error) => {
        this.showErrorLogin();
        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
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
    setTimeout(() => this.showAlertError = false, 7000);
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
