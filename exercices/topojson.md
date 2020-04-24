# Topojson



**Expliquez à quoi sert le format topojson et en quoi il diffère du format geojson.**

Topojson est une manière de représenter des données géographiques comme geojson.

Topojson vs geojson :

- Topojson prend moins de place pour la même quantité d'informations.
- Les géométries sont un ensemble d'arcs au lieu d'une série de points. 

.feature() --> permet d'extraire une collection geojson à partir d'un topojson.

.topology() --> permet de retourner un topojson à partir d'une liste de geojson.

.mesh() --> permet de retourner un geojson de type MultiLineString à partir d'un topojson.

.merge() --> permet de créer une géométrie qui réunit tous les objets d'un topojson. 







