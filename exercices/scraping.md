# Techniques de scraping

**Télécharger le jeux de données de tous les modèles de chaussettes vendues sur Galaxus**

- Se rendre sur le site de Galaxus : https://www.galaxus.ch/fr

- Ouvrir l'onglet "Réseau" de l'outil de développement web

- Rechercher les chaussettes dans la barre de recherche

- Séléctionner chacune des requêtes de type "json" : clique droit "Copy" > "Copy as cURL"

- Sauvagarder les données dans un fichier "chaussettes.json"

- Créer un script "prépare.js" pour y charger le fichier "chaussettes.json" et "ramda"

- Trier uniquement de sorte à obtenir l'identifiant unique, le nom du produit, la marque, la description et le prix (TVA incluse)

- Sauver le résultat dans un fichier "data.json"

  

**Télécharger le jeu de données de tous les titres du 19h30 de la RTS**

- Se rendre sur le site de la RTS à la page du journal du jour : https://www.rts.ch/play/tv/emission/19h30?id=6454706
- Ouvrir l'onglet "Réseau" de l'outil de de développement web
- Trouver la requête du dernier épisode et l'ouvrir dans un nouvel onglet : retourne les 10 derniers épisodes
- Installer la librairie dayjs avec la commande "npm install dayjs --save"
- Utiliser la fonction maxDate pour trouver la prochaine date (10 jours avant la précédente)
- Installer "node.fetch" avec la commande "npm install node-fetch --save"
- En utilisant "maxDate" faire une requête qui va permettre de lire la réponse au format "json"
- Sauver les données au fur et à mesure (pour éviter de tout perdre en cas d'erreur) dans un fichier "ndjson" ou chaque ligne représente un objet "json"
- Utiliser la fonction "createWriteStream" pour ajouter une ligne à la fois dans le fichier "file" qui s'appelera "scraper.ndjson" 
- Il faut créer un boucle pour ajouter chaque nouvelle date et répeter les opérations. On peut utiliser la fonction "loop" mais si nous souhaitons par exemple continuer jusqu'à l'an 200, la fonction "loopShouldEnd" permet de décider quand l'arrêter et donc est plus optimale
- Chaque ligne du fichier "scraped.ndjson" contenant 10 épisodes alors qu'on veut un fichier avec un épisode par ligne, utiliser la librairie "readline" qui va lire le fichier ligne par ligne
- Chaque ligne va être lue puis envoyée à la console grâce à reader.on
- Garder uniquement ce qui nous intéresse (identifiant unique, date de diffusion, durée, vues, sujets traités (identifiant unique, titre, durée)) pour obtenir un fichier moins volumineux
- Créer un fichier "segments.ndjson" pour regrouper tous les sujets traités





