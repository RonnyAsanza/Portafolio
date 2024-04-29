import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home-one',
    templateUrl: './home-one.component.html',
    styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    imageName: string = 'contact-img.png';
    teamSlides: OwlOptions = {
		loop: true,
        margin: 20,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    }
    clientWrap: OwlOptions = {
		loop:true,
		margin:30,
		nav:false,
		mouseDrag: true,
		items:1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 800,
		autoplayHoverPause: true,
		center: false,
		responsive:{
			0:{
				items:1,
				margin: 10,
			},
			576:{
				items:1,
			},
			768:{
				items:2,
				margin: 20,
			},
			992:{
				items:2,
			},
			1200:{
				items:2,
			}
		}
    }

    // Accordion
    accordionItems = [
        {
            title: 'Gran comprensión',
            content: `Nos anticipamos a las necesidades de su negocio con una comprensión excepcional del mercado y sus desafíos únicos. Su visión se convierte en nuestra misión.`,
            open: false
        },
        {
            title: 'Actualizar tecnología',
            content: `Estamos en la cúspide de la innovación tecnológica, adoptando rápidamente los avances para mantener a su empresa siempre adelante en la carrera digital.`,
            open: false
        },
        {
            title: 'Equipo experimentado',
            content: `Nuestro equipo aporta años de experiencia y un historial probado de éxito para asegurar la excelencia en cada proyecto que entregamos.`,
            open: false
        },
        {
            title: 'Servicio de mejor calidad',
            content: `La calidad no es negociable. Ofrecemos servicios de primera línea que definen estándares, superan expectativas y crean experiencias memorables.`,
            open: false
        }
    ];
    selectedItem : any = null;
    toggleAccordionItem(item:any) {
        item.open = !item.open;
        if (this.selectedItem && this.selectedItem !== item) {
            this.selectedItem.open = false;
        }
        this.selectedItem = item;
    }
    
    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}