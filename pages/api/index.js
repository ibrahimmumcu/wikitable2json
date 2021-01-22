export default async function handler(req, res) {

  if(req.method !== 'GET') {
    res.statusCode = 405;
    res.json('Only get method please.');
  }

  res.statusCode = 200;
  res.send('Hey hey hey! You must add page name in the end of the url like https://wikitable2json.vercel.app/api/Twitter');
}
