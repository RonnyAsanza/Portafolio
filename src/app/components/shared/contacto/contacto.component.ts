import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  @Input() imageName: string; // Nombre del archivo de imagen

  // Método para obtener la URL completa
  get imageUrl(): string {
    return `assets/images/${this.imageName}`;
  }
}
