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
  {path:'home', title: ' Home ', component: HomeComponent},
  {path:'crisis', title: ' Crisis ', component: CrisisListComponent},
  {
    path:'heroes', title: ' Heores ', component: HeroesListComponent,
    children: [
      {
        path: 'child-a', title: 'Heores | Child A ', component: ChildAComponent
      },
      {
        path: 'child-b', title: 'Heores | Child B ', component: ChildBComponent
      }
    ]
  },
  {path:'stagiaire', title: ' Stagiaires ', component: StagiaireComponent},
  {path:'adresse', title: ' Adresse ', component: AdresseComponent},
  {path:'services', title: ' Services ', component: ServicesComponent},
  {path:'about', title: ' About ', component: AboutComponent},
  {path:'contact', title: ' Contact ', component: ContactComponent},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class appRoutingModule {}
