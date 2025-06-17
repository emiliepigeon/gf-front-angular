// J'importe Component pour créer mon composant
import { Component } from '@angular/core';
// J'importe RouterLink pour pouvoir utiliser routerLink dans mon HTML (important pour le bouton retour)
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-utilisateur', // Le nom de mon composant (utilisé dans le HTML si besoin)
  standalone: true,            // Je précise que mon composant est standalone (Angular 17+)
  imports: [RouterLink],       // J'ajoute RouterLink ici pour pouvoir utiliser routerLink dans le HTML
  templateUrl: './utilisateur.component.html', // Le fichier HTML associé à ce composant
  styleUrls: ['./utilisateur.component.css']   // Le fichier CSS associé à ce composant
})
export class UtilisateurComponent {
  // Je prépare un tableau vide d'utilisateurs, que je remplirai plus tard avec l'API
  utilisateurs: any[] = [];

  // Pour l'instant, je n'ai pas de logique ici, je vais juste afficher un tableau vide
}
