// Je crée mon composant RegisterComponent pour la page de création de compte
import { Component } from '@angular/core';
// J'importe FormsModule pour pouvoir utiliser les formulaires (ngModel, ngForm)
import { FormsModule } from '@angular/forms';
// J'importe RouterLink pour que mes boutons avec routerLink fonctionnent
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true, // Je dis à Angular que ce composant est autonome (standalone)
  // Ici je dis à Angular quels modules je veux utiliser dans ce composant
  imports: [FormsModule, RouterLink], // J'ajoute FormsModule pour les formulaires et RouterLink pour la navigation
  templateUrl: './register.component.html', // Je dis où est mon HTML
  styleUrls: ['./register.component.css']   // Je dis où est mon CSS
})
export class RegisterComponent {
  // Je crée des variables pour stocker ce que l'utilisateur tape
  nom = '';
  prenom = '';
  username = '';
  email = '';
  password = '';

  // Cette fonction sera appelée quand l'utilisateur clique sur "Créer un compte"
  onSubmit() {
    // Pour l'instant, je montre juste une alerte avec ce que l'utilisateur a tapé
    alert(
      `Création de compte pour ${this.nom} ${this.prenom} / ${this.username} / ${this.email}`
    );
  }
}
