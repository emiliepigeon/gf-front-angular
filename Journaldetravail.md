## Mon premier projet angular 16/06/2025

Comme pour la version react de ce matin :
- New repo github
- clone
- nouvelle branche de travail front-angular

Bien sûr ! Voici un **journal de travail** en mode "je débutante", avec les commandes et des explications simples, pour tout ce que tu viens de faire pour démarrer ton projet Angular à partir d’un dépôt GitHub vide.

---

# 📔 Journal de travail – Création de mon premier projet Angular

---

## 🏁 **Départ : création et clonage du dépôt GitHub**

- **J’ai créé un dépôt vide sur GitHub** appelé `gf-front-angular`.
- **J’ai cloné ce dépôt sur mon ordinateur** :

```bash
git clone https://github.com/mon-utilisateur/gf-front-angular.git
cd gf-front-angular
```
*(Je remplace `mon-utilisateur` par mon nom GitHub)*

---

## 🖥️ **J’ouvre le dossier dans VS Code**

```bash
code .
```
*(Ça ouvre le dossier dans VS Code)*

---

## ⚡ **J’installe Angular CLI (si besoin)**

```bash
npm install -g @angular/cli
```
*(C’est l’outil pour créer et gérer les projets Angular)*

---

## 🏗️ **Je crée le projet Angular dans un sous-dossier temporaire**

```bash
ng new temp-app --routing --style=css
```
- J’ai répondu **No** à la question sur SSR.
- Angular a créé un dossier `temp-app` avec tout le projet dedans.

---

## 📦 **Je déplace tous les fichiers Angular à la racine de mon dépôt**

```powershell
Move-Item -Path temp-app\* -Destination . -Force
Move-Item -Path temp-app\.* -Destination . -Force
Remove-Item -Recurse -Force temp-app
```
*(Maintenant, tous les fichiers sont bien dans `gf-front-angular/`)*

🚩 Pourquoi déplacer ?

    Bonne pratique : mon dépôt doit contenir directement le code de mon projet, pas un dossier intermédiaire.

    Plus simple pour moi et pour GitHub (et pour déployer plus tard).


---

## 📁 **Architecture du dossier après déplacement**

```
gf-front-angular/
├── src/
├── angular.json
├── package.json
├── README.md
└── ... (autres fichiers Angular)
```
- **Tout le code Angular est à la racine du dépôt** (pas dans un sous-dossier).

---

## 📥 **J’installe les dépendances**

```bash
npm install
```
*(Pour être sûre que tout fonctionne et que les modules sont bien installés)*

---

## 🚦 **Je lance le serveur Angular**

```bash
ng serve
```
- Je peux voir mon application sur [http://localhost:4200](http://localhost:4200).

---

## 💾 **Je fais mon premier commit et je pousse sur GitHub**

```bash
git add .
git commit -m "Initialisation du projet Angular à la racine"
git push
```
- **Mon projet Angular est maintenant sur GitHub, prêt à être développé !**

---

## 📝 **Résumé de l’architecture de départ**

```
gf-front-angular/
├── src/                 # Le code source Angular
├── angular.json         # Configuration du projet Angular
├── package.json         # Dépendances et scripts npm
├── README.md            # Explications du projet
└── ...                  # Autres fichiers de config
```

---

## 🎉 **Ce que j’ai appris**

- Cloner un dépôt GitHub vide
- Installer Angular CLI
- Créer un projet Angular dans un sous-dossier puis déplacer les fichiers à la racine
- Installer les dépendances et lancer le serveur Angular
- Faire un commit et pousser sur GitHub

---

*Je suis prête à continuer : je vais maintenant générer mes pages (home, login, register) et commencer à coder mon application !* 🚀

---
