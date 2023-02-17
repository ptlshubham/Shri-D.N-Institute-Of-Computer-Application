import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { TrustComponent } from './trust/trust.component';


export const BasicRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'trust',
        component: TrustComponent
    },
   
    {
        path: 'infrastructure',
        component: InfrastructureComponent
    },
    ]
}];
