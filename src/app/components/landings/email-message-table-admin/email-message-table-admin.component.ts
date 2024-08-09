import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmailService } from '../../../services/email/email.service';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage/storage.service';
import { EmailMessageModel } from 'src/app/models/email/email-message';
import { ServerResponse } from 'src/app/models/server-response';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-email-message-table-admin',
  templateUrl: './email-message-table-admin.component.html',
  styleUrls: ['./email-message-table-admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmailMessageTableAdminComponent implements OnInit, AfterViewInit {
  isLogged: boolean;
  isAdmin: boolean;
  datos = new MatTableDataSource<EmailMessageModel>();
  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'subject', 'message', 'date', 'actions'];
  pageSize = 10;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private storageService: StorageService,
    private emailService: EmailService,
    private router: Router
  ) {
    this.isLogged = this.storageService.get('logged');
    this.isAdmin = this.storageService.get('isAdmin');
    if (!this.isLogged || !this.isAdmin) {
      this.router.navigate(['/inicio']);
    }
  }

  ngOnInit(): void {
    this.loadEmailData();
  }

  ngAfterViewInit(): void {
    this.datos.paginator = this.paginator;
    this.datos.sort = this.sort;
  }

  loadEmailData() {
    this.emailService.getEmailData().subscribe({
      next: (response: ServerResponse) => {
        if (response.succeeded && Array.isArray(response.data)) {
          this.datos.data = Array.isArray(response.data) ? response.data : [];
        } else {
          console.error('No data or failed response', response.message);
        }
      },
      error: (error) => {
        console.error('Error loading data', error);
      }
    });
  }

  applyFilter(filterValue: string) {
    this.datos.filter = filterValue.trim().toLowerCase();

    if (this.datos.paginator) {
      this.datos.paginator.firstPage();
    }
  }
}
