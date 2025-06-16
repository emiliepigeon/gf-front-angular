## 16/06/2025 

# 📔 Mon Journal de Travail Angular
*D’abord le front, puis la connexion avec le backend.*

*Voici comment, en tant que débutante, je mettrais en place ce projet Angular étape par étape : une page d’accueil responsive, deux boutons (“Se connecter” et “Créer un compte”), et deux pages/formulaires distincts.*
---

## 🏁 1. Démarrage du projet

### 🚀 Création et préparation du dépôt GitHub

- J’ai créé un dépôt vide sur GitHub appelé `gf-front-angular`.
- Je l’ai cloné sur mon ordinateur avec :
  ```bash
  git clone https://github.com/mon-utilisateur/gf-front-angular.git
  cd gf-front-angular
  ```
  *(Je remplace `mon-utilisateur` par mon nom GitHub)*

### 🖥️ Ouverture dans VS Code

- J’ouvre mon dossier dans VS Code avec :
  ```bash
  code .
  ```

### ⚡ Installation d’Angular CLI (si besoin)

- J’installe l’outil Angular CLI pour créer et gérer mon projet :
  ```bash
  npm install -g @angular/cli
  ```

---

## 🏗️ 2. Création et organisation du projet Angular

### 🛠️ Création du projet Angular dans un sous-dossier

- Je crée le projet avec le routing intégré :
  ```bash
  ng new temp-app --routing --style=css
  ```
  *(Je réponds “No” à SSR)*

### 📦 Déplacement des fichiers à la racine

- Je déplace tous les fichiers Angular à la racine de mon dépôt pour que ce soit plus propre :
  ```powershell
  Move-Item -Path temp-app\* -Destination . -Force
  Move-Item -Path temp-app\.* -Destination . -Force
  Remove-Item -Recurse -Force temp-app
  ```

### 📥 Installation des dépendances

- J’installe toutes les dépendances du projet :
  ```bash
  npm install
  ```

---

## 📂 3. Architecture de mon projet

```
gf-front-angular/
├── src/
│   ├── app/
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.routes.ts
│   │   └── pages/
│   │       ├── home/
│   │       │   ├── home.component.ts
│   │       │   ├── home.component.html
│   │       │   └── home.component.css
│   │       ├── login/
│   │       │   ├── login.component.ts
│   │       │   ├── login.component.html
│   │       │   └── login.component.css
│   │       └── register/
│   │           ├── register.component.ts
│   │           ├── register.component.html
│   │           └── register.component.css
├── styles.css
├── angular.json
├── package.json
├── README.md
└── index.html
```

---

### 📄 À quoi servent les fichiers principaux ?

- **`src/index.html`** : Point d’entrée de l’application, contient la balise ``.
- **`src/styles.css`** : Tout le style global de l’application.
- **`src/app/app.component.html`** : Le composant principal, contient `` pour afficher la bonne page.
- **`src/app/app.routes.ts`** : Définit les routes (navigation entre pages).
- **`src/app/pages/home/login/register`** : Fichiers pour chaque page (accueil, connexion, création de compte).

---

## 🧱 4. Création des pages

### Génération des composants standalone

```bash
ng generate component pages/home --standalone
ng generate component pages/login --standalone
ng generate component pages/register --standalone
```
- Je crée chaque page avec la CLI Angular, en mode standalone (Angular 17+).

### J’ajoute le code HTML, TypeScript et CSS pour chaque page en suivant les conseils de l’IA.

---

## 🌐 5. Lancement du serveur et accès à mon site

### 🚦 Lancer le serveur Angular

```bash
ng serve
```
- Je vais sur [http://localhost:4200](http://localhost:4200) pour voir mon application.

---

## 🐞 6. Problèmes rencontrés et solutions

### ❌ Boutons `routerLink` ne fonctionnaient pas

- J’ai découvert qu’en Angular 17+ standalone, il faut importer `RouterLink` dans chaque composant qui utilise `routerLink`.
- J’ai corrigé en ajoutant `imports: [RouterLink]` dans mes fichiers `.ts` de chaque composant concerné.

### ❌ Formulaires `ngModel`/`ngForm` ne marchaient pas

- J’avais des erreurs comme “No directive found with exportAs 'ngForm'” ou “Can't bind to 'ngModel'”.
- J’ai appris qu’il faut importer `FormsModule` dans chaque composant standalone qui utilise les formulaires.
- J’ai ajouté `imports: [FormsModule]` dans mes fichiers `.ts` de login et register.

### ❌ Problème de CSS global

- J’ai essayé d’importer mon CSS global dans chaque composant, mais ça ne marchait pas.
- J’ai tout mis dans `src/styles.css` et arrêté d’utiliser `@import` dans les fichiers CSS de composants.

---

## 🏗️ 7. Résumé de l’architecture finale

- **Tout le style** est dans `src/styles.css` pour plus de simplicité.
- **Chaque composant standalone** importe ce dont il a besoin (`FormsModule` pour les formulaires, `RouterLink` pour les liens).
- **Les routes** sont définies dans `app.routes.ts`.
- **Le composant racine** (`app.component.html`) affiche la bonne page avec ``.

---

## 🥳 8. Ce que j’ai appris

- Créer une application Angular moderne avec plusieurs pages.
- Comprendre à quoi servent les fichiers principaux.
- Corriger les erreurs courantes liées aux modules et au routing.
- Lancer mon application en local et naviguer entre les pages.

---

## 🚦 9. Pour lancer mon site

- Je tape `ng serve` dans le terminal.
- Je vais sur [http://localhost:4200](http://localhost:4200).
- Je teste mes boutons et mes formulaires : tout fonctionne !

---

## 🎉 10. Prochaine étape

- Ajouter d’autres pages, améliorer le style, ou connecter mon site à une vraie base de données plus tard !

---

**Fin de mon journal de travail Angular 😊 étape 1 = 16/05/2025**
