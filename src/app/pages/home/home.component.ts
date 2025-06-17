// J'importe Component pour créer mon composant
import { Component } from '@angular/core';
// J'importe RouterLink pour utiliser routerLink dans le HTML
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, // Je précise que ce composant est standalone (Angular 17+)
  imports: [RouterLink], // J'ajoute RouterLink ici pour pouvoir utiliser routerLink dans le HTML
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Pas de logique ici, juste l'affichage de la page d'accueil
  // rajouter ici pour seconde manière d'afficher une img =   cheminImage = 'assets/non.ext';
}
