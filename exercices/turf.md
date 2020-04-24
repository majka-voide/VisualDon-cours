# Turf



**Expliquez ce que font chacune des 4 fonctions turf utilisées dans l'exemple avec les bars autour de la HEIG-VD.**

- **circle** --> permet de définir le périmètre du cercle en fonction du rayon et prend 3 arguments :
  - Coordonées autour desquelles on souhaite dessiner le cercle
  - Rayon
  - Configuration ou on décrit l'unité pour le rayon

- **bbox** (bounding box) --> permet de définir une zone (un carré, une box) qui englobe le cercle préalablement définit :
  - Longitude minimum
  - Latitude minimum
  - Longitude maximum
  - Latitude maximum

- **bboxxPolygon** --> permet de dessiner le carré sur la carte. 

- **distance** --> permet de calculer la distance entre un bar et l'entrée de la HEIG-VD et prend 3 arguments :
  - Point de départ
  - Point d'arrivée
  - Unité de mesure