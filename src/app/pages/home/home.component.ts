import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // J'importe RouterLink pour utiliser routerLink dans le HTML

@Component({
  selector: 'app-home',
  standalone: true, // Je précise que ce composant est standalone (Angular 17+)
  imports: [RouterLink], // J'ajoute RouterLink ici !
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Pas de logique ici, juste l'affichage de la page d'accueil
}
