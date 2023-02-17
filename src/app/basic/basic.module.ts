import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TrustComponent } from './trust/trust.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BasicRoutes } from './basic.routing';
import { HomeModule } from '../home/home.module';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    TrustComponent,
    InfrastructureComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(BasicRoutes),
    HomeModule,
    FormsModule,
    ReactiveFormsModule
    

  ]
})
export class BasicModule { }
