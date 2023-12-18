import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Personne } from './classes/personne';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular App | Tutorial';
  personne: Personne = new Personne(1, 'El azzouzi', 'Hassan');
  version: number = 17.07;
  tab: number[] = [2, 3, 5, 8];
  notes: number[] = [19, 9.5, 16, 10, 14, 13.5];
  constructor() {

  }
  sayHello() {
    return 'Hello Angular';
  }
}
