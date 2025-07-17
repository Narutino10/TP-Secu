# 🔐 TP-Secu – Sécurité Web avec JWT & HTTPS

Bienvenue sur ce projet réalisé dans le cadre d’un TP de sécurité web à l’ESGI.  
Il met en évidence une **faille d’authentification liée aux JWT**, accompagnée d’une démonstration de l’exploitation, puis d’une **remédiation complète**.

## 📁 Contenu du dépôt

```

TP-Secu/
├── Projet-Secu/         # Version vulnérable (jwt.decode)
└── Projet-Secu-Fixe/    # Version sécurisée (jwt.verify)

````

## 🧪 Objectif du TP

- Comprendre les risques liés aux JSON Web Tokens mal sécurisés
- Exploiter une faille liée à `jwt.decode()` (aucune vérification de signature)
- Appliquer la correction avec `jwt.verify()`
- Tester les deux versions en HTTPS via Ngrok

## 🚀 Lancement

### Prérequis
- Node.js installé
- Ngrok installé (`npm install -g ngrok`)

### Lancer la version vulnérable

```bash
cd Projet-Secu
npm install
npm run dev
ngrok http 3000
````

➡️ Accès :

* Formulaire : `https://<ngrok>.ngrok-free.app/index.html`
* Dashboard : `https://<ngrok>.ngrok-free.app/dashboard.html`

### Lancer la version corrigée

```bash
cd Projet-Secu-Fixe
npm install
npm run dev
ngrok http 3000
```

➡️ Même interface, mais **token JWT vérifié côté serveur** → toute falsification est rejetée (`403 Forbidden`).

## 📄 Rapport

Le fichier `Rendu-TP.docx` contient :

* Les captures d’écran
* L’exploitation de la faille
* Le correctif
* Un guide détaillé pour exécuter le projet

## 👨‍💻 Auteur

Projet réalisé par [Ibrahim OUAHABI](https://github.com/Narutino10) – 5IW3 – ESGI

