import { Component, OnInit } from '@angular/core';
import { SocialDataService } from '../../../shared/social/social-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  constructor(public socialDataService: SocialDataService) {}

  ngOnInit(): void {
  }

}
