import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Personne } from './classes/personne';
import { MenuComponent } from './component/menu/menu.component';
import { AdresseComponent } from './component/adresse/adresse.component';
import { StagiaireComponent } from './component/stagiaire/stagiaire.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    MenuComponent,
    AdresseComponent,
    StagiaireComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular App | Tutorial';
  
}
