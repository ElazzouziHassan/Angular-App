import { Component } from '@angular/core';
import { HeroesListComponent } from '../../component/heroes-list/heroes-list.component';
import { CrisisListComponent } from '../../component/crisis-list/crisis-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroesListComponent,
    CrisisListComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
