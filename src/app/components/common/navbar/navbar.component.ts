import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SocialDataService } from '../../../shared/social/social-data.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class NavbarComponent implements OnInit {

    location: any;
    navbarClass: any;

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    isDropdownOpenSoluciones: boolean = false;
    toggleDropdownSoluciones(isClose: boolean): void {
        this.isDropdownOpenSoluciones = !this.isDropdownOpenSoluciones;
        if (isClose) {
            this.toggleClass();
        }

    }

    isDropdownOpenExito: boolean = false;
    toggleDropdownExito(isClose: boolean): void {
        this.isDropdownOpenExito = !this.isDropdownOpenExito;
        if (isClose) {
            this.toggleClass();
        }
    }

    constructor(
        private router: Router,
        location: Location,
        public socialDataService: SocialDataService
    ) {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.location = this.router.url;
                    if (this.location == '/home-three') {
                        this.navbarClass = 'navbar-area three';
                    } else {
                        this.navbarClass = 'navbar-area';
                    }
                }
            });
    }

    ngOnInit(): void { }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

}