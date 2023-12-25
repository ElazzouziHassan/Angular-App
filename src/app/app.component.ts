import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Personne } from './classes/personne';
import { MenuComponent } from './component/menu/menu.component';
import { AdresseComponent } from './component/adresse/adresse.component';
import { StagiaireComponent } from './component/stagiaire/stagiaire.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServicesComponent } from './component/services/services.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    MenuComponent,
    AdresseComponent,
    StagiaireComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular App | Tutorial';
  
}
