const cheerio = require('cheerio');
const fetch = require('node-fetch');

export default async function handler(req, res) {

  if(req.method !== 'GET') {
    res.statusCode = 405;
    res.json('Only get method please.');
  }

  res.statusCode = 200
  
  const page = req.query.page;
  const table = req.query.table ? req.query.table : 0;
  const lang = req.query.lang ? req.query.lang : 'en';

  const data = await getDataFromUrl(page, lang, table);
  const a = convert(data, table);

  res.send(a);
}

async function getDataFromUrl(page, lang) {
  const url = `https://${lang}.wikipedia.org/wiki/${page}`;
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

function convert(html, table) {
  var jsonResponse = [];
  var $ = cheerio.load(html);

  $('table.wikitable').each(function(i, table) {
    var tableAsJson = [];
  
    var columnHeadings = [];
    $(table).find('tr').each(function(i, row) {
      $(row).find('th').each(function(j, cell) {
        columnHeadings[j] = $(cell).text().trim();
      });
    });


    $(table).find('tr').each(function(i, row) {
      var rowAsJson = {};
      $(row).find('td').each(function(j, cell) {
        if (columnHeadings[j]) {
          rowAsJson[ columnHeadings[j] ] = $(cell).text().trim();
        } else {
          rowAsJson[j] = $(cell).text().trim();
        }
      });

      if (JSON.stringify(rowAsJson) != '{}')
        tableAsJson.push(rowAsJson);
    });

    if (tableAsJson.length != 0)
      jsonResponse.push(tableAsJson);
  });

  if(table === 0) {
    return jsonResponse;
  } else {
    return jsonResponse[table];
  }
}