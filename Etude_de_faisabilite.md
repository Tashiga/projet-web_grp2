# I - Test de Faisabilité

## Objectifs

Par groupe de 3 ou 4, développer une Plateforme de messagerie instantanée avec déploiement continu. Une présentation devra être réalisée en fin de TD pour présenter votre projet et vos choix d'architecture.

## Prérequis techniques

- Utilisation de NestJS
- Utilisation de GraphQL pour l'API
- Utilisation de Message Queuing
- Mise en place de tests automatisés
- Mise en place d'une intégration continue

## Étude de faisabilité

### Étude du fonctionnement de NestJS

NestJS est un framework Node.js progressif pour construire des applications côté serveur efficaces, fiables et évolutives. Il utilise TypeScript par défaut mais permet également d'utiliser JavaScript pur. NestJS est construit avec une architecture modulaire, permettant aux développeurs d'organiser le code en modules réutilisables.

#### Installation de NestJS

Pour installer NestJS, vous aurez besoin de Node.js et npm (ou yarn). Voici les étapes de base pour installer NestJS :

1. Installez le CLI de NestJS globalement :

npm install -g @nestjs/cli

2. Créez un nouveau projet NestJS :

nest new project-name

3. Naviguez dans le répertoire du projet :

cd project-name

4. Démarrez le projet :

npm run start

##  Architecture modulaire de NestJS

NestJS utilise une architecture modulaire qui permet de diviser l'application en modules distincts et facilement maintenables. Chaque module est un ensemble de contrôleurs et de fournisseurs, qui sont responsables de gérer une partie spécifique de l'application. Cela facilite la gestion et l'évolution du code, notamment dans les grandes applications.

## Analyse de l'intérêt d'utiliser GraphQL pour le développement d'une API

GraphQL est un langage de requête pour les API qui permet de demander exactement les données dont vous avez besoin. Il a été développé par Facebook en 2012 et est devenu open-source en 2015.

### Avantages de GraphQL :
1. Récupération précise des données : Les clients peuvent spécifier exactement les données dont ils ont besoin.
2. Moins de requêtes : GraphQL permet de récupérer plusieurs ressources en une seule requête.
3. Évolution sans versionnage : Les modifications peuvent être faites sans impacter les requêtes existantes.
4. Typage statique : Le schéma GraphQL est fortement typé, ce qui permet de bénéficier d'une validation et d'une documentation automatiques.

### Inconvénients de GraphQL :
1. Complexité initiale : La mise en place de GraphQL peut être plus complexe comparée à REST.
2. Performances : Pour les requêtes très complexes, GraphQL peut entraîner des problèmes de performance.
3. Sécurité : Les API GraphQL peuvent être plus susceptibles aux attaques si elles ne sont pas correctement sécurisées.