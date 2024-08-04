import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialDataService {
  public urlInstagram: any = 'https://www.instagram.com/asanzawebsolutions';
  public urlFacebook: any = 'https://www.facebook.com/people/Asanza-Web-Solutions/61550212934317/';
  public urlEmail: any = 'mailto:asanzawebsolutions@gmail.com';
  public urlEmailPrivate: any = 'mailto:ronnyasanza@gmail.com';
  public urlWhatsapp: any = 'https://wa.me/+34645400608';
  public urlPhone: any = 'tel:+34645400608';

  public email: any = 'asanzawebsolutions@gmail.com';
  public emailPrivate: any = 'ronnyasanza@gmail.com';
  public phone: any = '+34 645 40 06 09';
}
