const cheerio = require('cheerio')
const fs = require('fs')

const page = fs.readFileSync('page.html', 'utf-8')

const $ = cheerio.load(page)

const divbody = $('body > div.wrapper > div.container.test-site > div > div.col-md-9 > div.row')
const divs = $('div.thumbnail',divbody)

divs.each((index, div) => {
    if (index !== 0) {
      console.log({
        nom: $('div.caption > h4:nth-child(2) > a', div).text(),
        prix: $('div.caption > h4.pull-right.price', div).text()
      })
    }
  })

  let result = []
  
  divs.each((index, div) => {
    if (index !== 0) {
      result.push({
        nom: $('div.thumbnail > div.caption > h4:nth-child(2) > a', div).text(),
        prix: $('div.thumbnail > div.caption > h4.pull-right.price', div).text()
      })
    }
  })
  console.log(
    JSON.stringify(
      result.map(d => ({ ...d, nom: d.nom, prix: d.prix }))
    )
  )