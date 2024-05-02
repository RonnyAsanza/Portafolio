import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../../services/interceptor/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnDestroy {
  activeLoader: boolean = false;
  private subscription: Subscription;

  constructor(private loaderService: LoaderService) {
    this.subscription = this.loaderService.loading$.subscribe(state => {
      this.activeLoader = state;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
