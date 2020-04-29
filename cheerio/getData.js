const cheerio = require('cheerio')
const fs = require('fs')

const page = fs.readFileSync('page.html', 'utf-8')

const $ = cheerio.load(page)

const tbody = $('#mw-content-text > div > table:nth-child(36) > tbody')
const trs = $('tr', tbody)

trs.each((index, tr) => {
    if (index !== 0) {
      console.log({
        titres: $('td:nth-child(1) > center', tr).text(),
        club: $('td:nth-child(2) > a', tr).attr('title')
      })
    }
  })

  let result = []
  
  trs.each((index, tr) => {
    if (index !== 0) {
      result.push({
        titres: $('td:nth-child(1) > center', tr).text(),
        club: $('td:nth-child(2) > a', tr).attr('title')
      })
    }
  })
  
  console.log(
    JSON.stringify(
      result.map(d => ({ ...d, titres: Number(d.titres) }))
    )
  )

//console.log("nook nook");