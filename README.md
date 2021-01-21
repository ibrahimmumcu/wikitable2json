<p align="center">
  <img src="https://raw.githubusercontent.com/ibrahimmumcu/wikitable2json/main/public/logo.png" alt="Wiki Table 2 JSON Logo" width="400">
</p>
<h1 align="center"> Wiki Table 2 JSON</h1>
<h5 align="center">An API to get Wikipedia tables as JSON.</h5>
<p align="center">
   <a href="https://wikitable2json.vercel.app" target="_blank">https://wikitable2json.vercel.app</a>
</p>


## Example
[https://en.wikipedia.org/wiki/Twitter](https://en.wikipedia.org/wiki/Twitter)

<img src="https://raw.githubusercontent.com/ibrahimmumcu/wikitable2json/main/public/table-example.png" alt="Wiki Table 2 JSON Example">

#### Request
```js
https://wikitable2json.vercel.app/api/Twitter?table=0
```
#### Response
```js
[
   {
      "Year":"2010[254]",
      "Revenuein mil. US$":"28",
      "Net incomein mil. US$":"−67",
      "Total assetsin mil. US$":"0",
      "Employees":""
   },
   {
      "Year":"2011[254]",
      "Revenuein mil. US$":"106",
      "Net incomein mil. US$":"−164",
      "Total assetsin mil. US$":"721",
      "Employees":""
   },
   {
      "Year":"2012[254]",
      "Revenuein mil. US$":"317",
      "Net incomein mil. US$":"−79",
      "Total assetsin mil. US$":"832",
      "Employees":"2,000"
   },
   {
      "Year":"2013[254]",
      "Revenuein mil. US$":"665",
      "Net incomein mil. US$":"−645",
      "Total assetsin mil. US$":"3,366",
      "Employees":"2,712"
   },
   {
      "Year":"2014[255]",
      "Revenuein mil. US$":"1,403",
      "Net incomein mil. US$":"−578",
      "Total assetsin mil. US$":"5,583",
      "Employees":"3,638"
   },
   {
      "Year":"2015[256]",
      "Revenuein mil. US$":"2,218",
      "Net incomein mil. US$":"−521",
      "Total assetsin mil. US$":"6,442",
      "Employees":"3,898"
   },
   {
      "Year":"2016[257]",
      "Revenuein mil. US$":"2,530",
      "Net incomein mil. US$":"−457",
      "Total assetsin mil. US$":"6,870",
      "Employees":"3,583"
   },
   {
      "Year":"2017[258]",
      "Revenuein mil. US$":"2,443",
      "Net incomein mil. US$":"−108",
      "Total assetsin mil. US$":"7,412",
      "Employees":"3,372"
   },
   {
      "Year":"2018[259]",
      "Revenuein mil. US$":"3,042",
      "Net incomein mil. US$":"1,206",
      "Total assetsin mil. US$":"10,163",
      "Employees":"3,900"
   },
   {
      "Year":"2019[260]",
      "Revenuein mil. US$":"3,459",
      "Net incomein mil. US$":"1,466",
      "Total assetsin mil. US$":"12,703",
      "Employees":"4,900"
   }
]
```
### Supported Parameters
#### table
Index of the table in the page, default returns all tables.
```js
?table=0
```

#### lang
Language of the wikipedia page, default is en
```js
?lang=de
```

## TODO
- [ ] Make it work with tables that have colspan attribute.

## Credit
I've got the idea from <a href="https://www.wikitable2json.com" target="_blank">https://www.wikitable2json.com</a> but the response that service returns is not same what I wanted to achieve here. And I don't know GO at all - So I couldn't help that project even tho it is open source. So I had to create a new one.

## License

MIT