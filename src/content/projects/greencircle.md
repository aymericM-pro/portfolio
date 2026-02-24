# GreenCircle

## Présentation

GreenCircle est une plateforme créée pour répondre à un problème concret : le secteur du BTP produit plus de 40 % des
déchets en France, et une grande partie finit en décharge faute de solutions simples pour les professionnels.

L’objectif est clair : mettre en relation les entreprises du BTP qui souhaitent valoriser leurs déchets de chantier
et les centres de revalorisation capables de les traiter. Le projet a été développé en équipe dans le cadre d'un
accompagnement
avec l'incubateur étudiant Pépite, après avoir remporté le prix de l'innovation days organisé par l'EFREI regroupant
plus de
60 projets.

## Fonctionnalités

La plateforme permet de :

- Trouver un centre de revalorisation proche d’un chantier à l'aide d'une map interactive
- Gestion de filtres (type de déchets, distance, quantité, entreprise, etc.)
- Gérer les comptes avec une authentification sécurisée (entreprise, centre, admin)
- Gestion de la facturation, des contrats, etc.
- Authentification via Keycloak avec SSO pour une sécurisé

---

## Stack technique

### Frontend

| Technologie  | Usage               |
|--------------|---------------------|
| Vue.js 3     | Framework principal |
| TypeScript   | Typage statique     |
| Tailwind CSS | Styling utilitaire  |
| Pinia        | Gestion d’état      |
| Nuxt 3       | Framework fullstack |
| Google Maps  | Cartographie        |
| Keycloak JS  | Authentification    |
| Axios        | Communication API   |
| Vuetify      | Composants UI       |
| Vue Calandar | Pickers de date     |

### Backend

| Technologie   | Usage                  |
|---------------|------------------------|
| Java 17       | Langage principal      |
| Spring Boot 3 | Framework REST         |
| Keycloak      | Authentification & SSO |
| PostgreSQL    | Base de données        |

### Infrastructure

| Technologie | Usage                |
|-------------|----------------------|
| Docker      | Containerisation     |
| Kubernetes  | Orchestration        |
| ArgoCD      | GitOps / CD          |
| Helm        | Gestion des charts   |
| OVH         | Hébergement cloud    |
| GitLab CI   | Intégration continue |

### Organisation du projet

| Technologie | Usage             |
|-------------|-------------------|
| Jira        | Gestion de projet |
| Confluence  | Documentation     |
| Figma       | Design UI/UX      |

---

## Compétences développées

- Mise en place d’une authentification OAuth2 / OIDC avec Keycloak
- Déploiement cloud-native avec GitOps (ArgoCD + Helm)
- Travail en équipe pluridisciplinaire (développement, design, business)
- Conception d’une UX adaptée à des professionnels du BTP  
