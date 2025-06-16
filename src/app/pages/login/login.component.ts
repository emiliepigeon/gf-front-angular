// Je crée mon composant LoginComponent pour la page de connexion
import { Component } from '@angular/core';
// J'importe FormsModule pour pouvoir utiliser les formulaires (ngModel, ngForm)
import { FormsModule } from '@angular/forms';
// J'importe RouterLink pour que mes boutons avec routerLink fonctionnent
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Je dis à Angular que ce composant est autonome (standalone)
  // Ici je dis à Angular quels modules je veux utiliser dans ce composant
  imports: [FormsModule, RouterLink], // J'ajoute FormsModule pour les formulaires et RouterLink pour la navigation
  templateUrl: './login.component.html', // Je dis où est mon HTML
  styleUrls: ['./login.component.css']   // Je dis où est mon CSS
})
export class LoginComponent {
  // Je crée deux variables pour stocker ce que l'utilisateur tape
  username = '';
  password = '';

  // Cette fonction sera appelée quand l'utilisateur clique sur "Se connecter"
  onSubmit() {
    // Pour l'instant, je montre juste une alerte avec ce que l'utilisateur a tapé
    alert(`Tentative de connexion avec ${this.username} / ${this.password}`);
  }
}
