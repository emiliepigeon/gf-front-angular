// J'importe NgModule pour déclarer mon module principal
import { NgModule } from '@angular/core';
// J'importe BrowserModule pour que mon appli fonctionne dans le navigateur
import { BrowserModule } from '@angular/platform-browser';
// J'importe FormsModule pour pouvoir utiliser les formulaires Angular
import { FormsModule } from '@angular/forms';
// J'importe RouterModule et Routes pour gérer la navigation entre les pages
import { RouterModule, Routes } from '@angular/router';

// J'importe tous mes composants
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
// J'importe le composant utilisateur (si tu l'as créé)
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';

// Je définis toutes les routes de mon application
const routes: Routes = [
  { path: '', component: HomeComponent },         // Page d'accueil par défaut
  { path: 'login', component: LoginComponent },   // Page de connexion
  { path: 'register', component: RegisterComponent }, // Page de création de compte
  { path: 'utilisateurs', component: UtilisateurComponent } // Page des utilisateurs
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        UtilisateurComponent // J'ajoute mon composant utilisateur ici
    ],
    imports: [
        BrowserModule,
        FormsModule, // J'ajoute FormsModule ici pour les formulaires
        RouterModule.forRoot(routes) // J'ajoute RouterModule ici pour activer le routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
