import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { DesarrolloMobileComponent } from './components/shared/soluciones/desarrollo-mobile/desarrollo-mobile.component';
import { DesarrolloWebComponent } from './components/shared/soluciones/desarrollo-web/desarrollo-web.component';
import { PruebasDeCalidadComponent } from './components/shared/soluciones/pruebas-de-calidad/pruebas-de-calidad.component';
import { GestionTiComponent } from './components/shared/soluciones/gestion-ti/gestion-ti.component';
import { SeguridadCiberneticaComponent } from './components/shared/soluciones/seguridad-cibernetica/seguridad-cibernetica.component';
import { ConectividadInalambricaComponent } from './components/shared/soluciones/conectividad-inalambrica/conectividad-inalambrica.component';
import { JoeCompanyComponent } from './components/pages/case-studies-details/joe-company/joe-company.component';
import { RideShareAppComponent } from './components/pages/case-studies-details/ride-share-app/ride-share-app.component';
import { RestaurantManagementComponent } from './components/pages/case-studies-details/restaurant-management/restaurant-management.component';
import { ItSoftwareCompanyComponent } from './components/pages/case-studies-details/it-software-company/it-software-company.component';
import { ParkingManagementComponent } from './components/pages/case-studies-details/parking-management/parking-management.component';
import { LoginComponent } from './components/landings/login/login.component';
import { EmailMessageTableAdminComponent } from './components/landings/email-message-table-admin/email-message-table-admin.component';

const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },

    { path: 'inicio', component: HomeOneComponent },
    { path: 'nosotros', component: AboutComponent },

    { path: 'desarrollo-mobile', component: DesarrolloMobileComponent },
    { path: 'desarrollo-web', component: DesarrolloWebComponent },
    { path: 'pruebas-de-calidad', component: PruebasDeCalidadComponent },
    { path: 'gestion-ti', component: GestionTiComponent },
    { path: 'seguridad-cibernetica', component: SeguridadCiberneticaComponent },
    { path: 'conectividad-inalambrica', component: ConectividadInalambricaComponent },

    { path: 'joe-company', component: JoeCompanyComponent },
    { path: 'ride-share-app', component: RideShareAppComponent },
    { path: 'restaurant-management', component: RestaurantManagementComponent },
    { path: 'it-software-company', component: ItSoftwareCompanyComponent },
    { path: 'parking-management', component: ParkingManagementComponent },
    { path: 'temperature-app', component: ItSoftwareCompanyComponent },

    { path: 'terminos-condiciones', component: TermsConditionsComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'error', component: ErrorComponent },

    { path: 'login', component: LoginComponent },

    // ADMIN
    { path: 'email-message-table', component: EmailMessageTableAdminComponent },

    // {path: 'case-studies', component: CaseStudiesComponent},
    // {path: 'case-studies-details', component: CaseStudiesDetailsComponent},
    // {path: 'blog', component: BlogComponent},
    // {path: 'blog-details', component: BlogDetailsComponent},
    // {path: 'team', component: TeamComponent},
    // {path: 'pricing', component: PricingComponent},
    // {path: 'gallery', component: GalleryComponent},
    // {path: 'testimonials', component: TestimonialsComponent},
    // {path: 'sign-up', component: SignUpComponent},
    // {path: 'sign-in', component: SignInComponent},
    // { path: 'faq', component: FaqComponent },
    // {path: 'privacy-policy', component: PrivacyPolicyComponent},
    // {path: 'home-two', component: HomeTwoComponent},
    // {path: 'home-three', component: HomeThreeComponent},

    { path: '**', component: HomeOneComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }