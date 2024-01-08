import { RouterModule, Routes } from '@angular/router';
import { StagiaireComponent } from './component/stagiaire/stagiaire.component';
import { AdresseComponent } from './component/adresse/adresse.component';
import { NgModule } from '@angular/core';
import { ServicesComponent } from './component/services/services.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CrisisListComponent } from './component/crisis-list/crisis-list.component';
import { HeroesListComponent } from './component/heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ChildAComponent } from './component/heroseComponent/child-a/child-a.component';
import { ChildBComponent } from './component/heroseComponent/child-b/child-b.component';

export const routes: Routes = [
  {path:'', redirectTo: 'heroes', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'crisis', component: CrisisListComponent},
  {
    path:'heroes', component: HeroesListComponent,
    children: [
      {
        path: 'child-a', component: ChildAComponent
      },
      {
        path: 'child-b', component: ChildBComponent
      }
    ]
  },
  {path:'stagiaire', component: StagiaireComponent},
  {path:'adresse', component: AdresseComponent},
  {path:'services', component: ServicesComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class appRoutingModule {}
