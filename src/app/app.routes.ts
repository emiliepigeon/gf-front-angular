// Je définis ici les routes de mon application Angular
import { Routes } from '@angular/router';

// J'importe mes trois composants de pages
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

// Je liste les routes (URL) et la page à afficher pour chaque URL
export const routes: Routes = [
  { path: '', component: HomeComponent },         // Page d'accueil par défaut
  { path: 'login', component: LoginComponent },   // Page de connexion
  { path: 'register', component: RegisterComponent } // Page de création de compte
];
