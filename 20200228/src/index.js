import d3 from 'd3'

console.log(d3)

const villes = [
    { nom: 'Lausanne', population: 138905 },
    { nom: 'Yverdon', population: 30143 },
    { nom: 'Montreux', population: 26574 },
    { nom: 'Renens', population: 21036 },
    { nom: 'Nyon', population: 20533 },
    { nom: 'Vevey', population: 19827 },
]

const WIDTH = 1000
const HEIGHT = 500

const body = d3.select('body')
.attr('width', WIDTH)
.attr('height', HEIGHT)

const ul = body.append('ul')

const rects = svg.selectAll('rect') //on selectionnes les elements li qui n existent pas encore mais qu on va créer plus tard
    .data(villes).enter()
    .append('rect')
    
