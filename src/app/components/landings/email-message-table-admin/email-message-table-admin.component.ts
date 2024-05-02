import { Component } from '@angular/core';
import { EmailMessageModel } from 'src/app/models/email/email-message';

@Component({
  selector: 'app-email-message-table-admin',
  templateUrl: './email-message-table-admin.component.html',
  styleUrl: './email-message-table-admin.component.scss'
})
export class EmailMessageTableAdminComponent {
  datos: EmailMessageModel;
  
}
