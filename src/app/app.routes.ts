import { RouterModule, Routes } from '@angular/router';
import { StagiaireComponent } from './component/stagiaire/stagiaire.component';
import { AdresseComponent } from './component/adresse/adresse.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path:'stagiaire', component: StagiaireComponent},
  {path:'adresse', component: AdresseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class appRoutingModule {}
