import http from 'http';
import {getItems, postItem, getItemId, deleteItem, putItem} from './items.js';

const hostname = '127.0.0.1';
const port = 3000;

// Luo palvelin ja määritä käsittelijät kaikille pyyntötyypeille
const server = http.createServer((req, res) => {
  const {method, url} = req;
  const path = url.split('?')[0];
  const id = parseInt(path.split('/')[2]);

  console.log('method:', method, 'url:', url);

  // Hakee kaikki kohteet
  if (path === '/items' && method === 'GET') {
    getItems(req, res);

    // Lisää uuden kohteen
  } else if (path === '/items' && method === 'POST') {
    postItem(req, res);

    // Hakee kohteen ID:n perusteella
  } else if (path.startsWith('/items/') && method === 'GET') {
    getItemId(id, res);

    // Poistaa kohteen ID:n perusteella
  } else if (path.startsWith('/items/') && method === 'DELETE') {
    deleteItem(id, res);

    // Päivittää kohteen ID:n perusteella
  } else if (path.startsWith('/items/') && method === 'PUT') {
    putItem(id, req, res);

    // Reittiä ei löytynyt
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({error: '404', message: 'not found'}));
  }
});

// Käynnistä palvelin
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
