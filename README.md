# Utopia Engine (Node Server)

## Sommaire
1. [Description du projet](#description-du-projet)
2. [Technologies](#technologies)
3. [Installation](#installation)

## Description du projet
Le projet est basé sur le PnP (Print & Play) gratuit **Utopia Engine**.

![Utopia Engine](https://cf.geekdo-images.com/HTsjNQHQQMf029lmvlOFqA__itemrep/img/BX4Bcn68QCWJHaEIrCG5mTioiCE=/fit-in/246x300/filters:strip_icc()/pic1827127.jpg)

Vous jouez le rôle d'un vieil artificier nommé Isodoros qui tente de reconstruire l'***Utopia Engine***, un appareil légendaire datant d'un passé lointain et peut-être le seul espoir d'éviter la fin du monde qui approche rapidement. Vous devez récupérer les six pièces de la machine dans six régions dangereuses et assembler l'***Utopia Engine*** avant la fin du monde. Le jeu utilise une mécanique de dés simple pour simuler la recherche dans les régions sauvages, l'activation et l'assemblage d'artefacts puissants, et le combat avec les armes des artefacts.

*Résumé traduit depuis https://boardgamegeek.com/boardgame/75223/utopia-engine*

## Technologies
* [Express](https://expressjs.com/fr/) : version 4.17.1

## Installation
Vous devez avoir [Node.js](https://nodejs.org/fr/) d'installer sur votre machine pour pouvoir lancer le projet en local, et avoir accès à un gestion de paquets de *Node.js* comme [yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/).

>Les commandes ci-dessous peuvent être exécutées avec *npm* ou *yarn*.

Pour installer toutes les dépendences nécessaires : 
~~~ shell
$ npm install
// OU
$ yarn install
~~~

Note : Ne pas oublier d'installer les dépendences pour le frontend (dans react).

Pour lancer un server qui sera accessible sur [http://127.0.0.1:3000](http://127.0.0.1:3000) (ou  [http://localhost:3000](http://localhost:3000)):
~~~ shell
$ npm start
// OU
$ yarn start
~~~

>Ne pas oublier d'installer les dépendances et de build le *frontend* (dans le dossier react).
