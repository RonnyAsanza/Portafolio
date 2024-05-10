import { Component, OnInit } from '@angular/core';
import { EmailMessageModel } from 'src/app/models/email/email-message';
import { StorageService } from '../../../services/storage/storage.service';
import { EmailService } from '../../../services/email/email.service';
import { ServerResponse } from 'src/app/models/server-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-message-table-admin',
  templateUrl: './email-message-table-admin.component.html',
  styleUrl: './email-message-table-admin.component.scss'
})
export class EmailMessageTableAdminComponent implements OnInit {
  isLoged: boolean = false;
  isAdmin: boolean = false;

  datos: EmailMessageModel;

  constructor(private storageService: StorageService, private emailService: EmailService, private router: Router) {
    this.isLoged = this.storageService.get('loged');
    this.isAdmin = this.storageService.get('isAdmin');

    if (!this.isLoged || !this.isAdmin) {
      this.router.navigate(['/inicio']).then(() => {
      });
    }
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.emailService.getEmailData().subscribe({
      next: (response: ServerResponse) => {
        if (response.succeeded) {
          this.datos = response.data;
        }
      },
      error: (error) => {
      },
      complete: () => {
      }
    });
  }

}
