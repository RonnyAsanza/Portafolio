import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SolutionsComponent } from './components/pages/solutions/solutions.component';
import { SolutionsDetailsComponent } from './components/pages/solutions-details/solutions-details.component';
import { CaseStudiesComponent } from './components/pages/case-studies/case-studies.component';
import { CaseStudiesDetailsComponent } from './components/pages/case-studies-details/case-studies-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { RedesHorinzontalComponent } from './components/shared/redes/redes-horinzontal/redes-horinzontal.component';
import { DesarrolloMobileComponent } from './components/shared/soluciones/desarrollo-mobile/desarrollo-mobile.component';
import { DesarrolloWebComponent } from './components/shared/soluciones/desarrollo-web/desarrollo-web.component';
import { PruebasDeCalidadComponent } from './components/shared/soluciones/pruebas-de-calidad/pruebas-de-calidad.component';
import { GestionTiComponent } from './components/shared/soluciones/gestion-ti/gestion-ti.component';
import { SeguridadCiberneticaComponent } from './components/shared/soluciones/seguridad-cibernetica/seguridad-cibernetica.component';
import { ConectividadInalambricaComponent } from './components/shared/soluciones/conectividad-inalambrica/conectividad-inalambrica.component';
import { DisenoComponent } from './components/shared/casos-de-extio/diseno/diseno.component';
import { DesarrolloComponent } from './components/shared/casos-de-extio/desarrollo/desarrollo.component';
import { SeguridadCiberneticaExitoComponent } from './components/shared/casos-de-extio/seguridad-cibernetica-exito/seguridad-cibernetica-exito.component';
import { AllComponent } from './components/shared/casos-de-extio/all/all.component';
import { JoeCompanyComponent } from './components/pages/case-studies-details/joe-company/joe-company.component';
import { RideShareAppComponent } from './components/pages/case-studies-details/ride-share-app/ride-share-app.component';
import { RestaurantManagementComponent } from './components/pages/case-studies-details/restaurant-management/restaurant-management.component';
import { ItSoftwareCompanyComponent } from './components/pages/case-studies-details/it-software-company/it-software-company.component';
import { ParkingManagementComponent } from './components/pages/case-studies-details/parking-management/parking-management.component';
import { TemperatureAppComponent } from './components/pages/case-studies-details/temperature-app/temperature-app.component';
import { TestimoniosComponent } from './components/shared/testimonios/testimonios.component';
import { ContactoComponent } from './components/shared/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { LoginComponent } from './components/landings/login/login.component';
import { ShapeComponent } from './components/shared/shape/shape.component';
import { EmailMessageTableAdminComponent } from './components/landings/email-message-table-admin/email-message-table-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    AboutComponent,
    SolutionsComponent,
    SolutionsDetailsComponent,
    CaseStudiesComponent,
    CaseStudiesDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    TeamComponent,
    PricingComponent,
    GalleryComponent,
    TestimonialsComponent,
    SignUpComponent,
    SignInComponent,
    ErrorComponent,
    FaqComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    RedesHorinzontalComponent,
    DesarrolloMobileComponent,
    DesarrolloWebComponent,
    PruebasDeCalidadComponent,
    GestionTiComponent,
    SeguridadCiberneticaComponent,
    ConectividadInalambricaComponent,
    DisenoComponent,
    DesarrolloComponent,
    SeguridadCiberneticaExitoComponent,
    AllComponent,
    JoeCompanyComponent,
    RideShareAppComponent,
    RestaurantManagementComponent,
    ItSoftwareCompanyComponent,
    ParkingManagementComponent,
    TemperatureAppComponent,
    TestimoniosComponent,
    ContactoComponent,
    LoaderComponent,
    LoginComponent,
    ShapeComponent,
    EmailMessageTableAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxScrollTopModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
