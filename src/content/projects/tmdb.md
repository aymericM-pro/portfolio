# Movies Explorer

## Présentation

Movies Explorer est un projet personnel construit autour de l’API The Movie Database (TMDB).

L’objectif était de développer une application complète permettant d’explorer un catalogue de films tout en mettant en
pratique une architecture backend propre et une structuration frontend claire.

Le projet est volontairement classique sur le plan fonctionnel, mais structuré avec une attention particulière portée à
l’organisation du code et à la séparation des responsabilités.

---

## Fonctionnalités

L’application permet de :

- Rechercher des films par titre
- Consulter les films populaires et les tendances actuelles
- Afficher les détails d’un film (synopsis, note, date de sortie, genres)
- Gérer la navigation entre liste et page détail
- Centraliser les appels API côté backend
- Exposer une API REST intermédiaire sécurisée
- Gérer les erreurs et états de chargement proprement côté frontend
- Review des films via des commentaires, likes, etc.
- Authentification avec Spring Security
- Gestion de la pagination et des filtres de recherche avancés

---

## Architecture

Le projet repose sur une séparation claire :

- Frontend Vue.js pour l’interface utilisateur
- Backend Spring Boot pour encapsuler les appels TMDB
- Base PostgreSQL pour certaines persistances éventuelles
- Organisation en couches (controller, service, repository)
- Approche inspirée d’une architecture hexagonale

## Compétences développées

- Consommation et encapsulation d’API externe
- Développement REST avec Spring Boot
- Application de principes d’architecture logicielle (clean code, séparation des responsabilités, gestion des erreurs,
  etc.)
