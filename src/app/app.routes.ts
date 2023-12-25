import { RouterModule, Routes } from '@angular/router';
import { StagiaireComponent } from './component/stagiaire/stagiaire.component';
import { AdresseComponent } from './component/adresse/adresse.component';
import { NgModule } from '@angular/core';
import { ServicesComponent } from './component/services/services.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';

export const routes: Routes = [
  {path:'stagiaire', component: StagiaireComponent},
  {path:'adresse', component: AdresseComponent},
  {path:'services', component: ServicesComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class appRoutingModule {}
