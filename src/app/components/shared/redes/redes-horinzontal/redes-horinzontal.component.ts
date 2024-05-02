import { Component, OnInit } from '@angular/core';
import { SocialDataService } from '../../../../shared/social/social-data.service';

@Component({
  selector: 'app-redes-horinzontal',
  templateUrl: './redes-horinzontal.component.html',
  styleUrl: './redes-horinzontal.component.scss'
})
export class RedesHorinzontalComponent implements OnInit {
  constructor(public socialDataService: SocialDataService) {}

  ngOnInit(): void {
  }

}
