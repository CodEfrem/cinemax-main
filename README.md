# CINEMAX

## Description

Cinemax est une app de recherche de film et permet d'ajouter une sélection en favoris.

### Les étapes de réalisation

1. Instalation de React
2. Création des composants
    1. Home
    2. Search
    3. Movies
3. Mise en place d'un router
4. Installation d'ExpressJS
   1. npm init -y
   2. npm install express
   3. npm install nodemon
   4. package.json
5. Configuration du server
   1. Création des routes
   2. Mise en place d'un Middleware
   3. Mise en place de CORS
6. Création de la fonction Save ()
7. Mise en place de la persistance avec JSON
8. Intégration d'un formulaire pour Save ()
9. Mise en place de l'affichage des favoris

---
### Installation de React 

Pour travailler React On doit installer NodeJS et NPM. 2 solution 'offre à nous soit :

create-react-app

```bash
npx create-react-app cinemax
```

ou vitejs

```bash
npm create vite@latest cinemax

Suite à cela nous devons entrer dans le dossier de notre projet et installer les dépendances si nécessaire avant de lancer le serveur de développement.

```bash
cd cinemax && npm install

Lancez le serveur de développement `npm start` ou `npm run dev` pour vitejs.

---

### Création des composants 

Pour les composants, dans ce projet nous avons l'architecture suivante :

```

public
  index.html // Point pour React

src
  index.js // Point d'entrée de l'application
  styles.css // Fichier de styles global

pages
  Home.js // Page d'acceuil
  Favorites.js // Page des favoris

components
  Search.js // Barre de recherche
  Movies.js // Liste des films

assets
  bg.png
  logo.png

package.json // Fichiuer de config
package-lock.json // Fichier de config 
.gitignore // Fichier de config
.env // Variable d'environement
