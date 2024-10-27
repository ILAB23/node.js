import http from "http";

const hostname = "127.0.0.1";
const port = 3000;

// Luodaan esimerkkidata
const items = [
  { id: 1, name: "Item1" },
  { id: 2, name: "Item2" },
];

const server = http.createServer((req, res) => {
  const urlParts = req.url.split("/");

  // GET /items - palauttaa luettelon kaikista kohteista
  if (req.method === "GET" && req.url === "/items") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(items));
  }
  // POST /items - lisää uuden kohteen
  else if (req.method === "POST" && req.url === "/items") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const newItem = JSON.parse(body);
      newItem.id = items.length + 1; // luo uusi id
      items.push(newItem);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newItem));
    });
  }
  // GET /items/:id - palauttaa tietyn kohteen
  else if (
    req.method === "GET" &&
    urlParts[1] === "items" &&
    urlParts.length === 3
  ) {
    const itemId = parseInt(urlParts[2]);
    const item = items.find((i) => i.id === itemId);

    if (item) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(item));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Item not found" }));
    }
  }
  // DELETE /items/:id - poistaa tietyn kohteen
  else if (
    req.method === "DELETE" &&
    urlParts[1] === "items" &&
    urlParts.length === 3
  ) {
    const itemId = parseInt(urlParts[2]);
    const itemIndex = items.findIndex((i) => i.id === itemId);

    if (itemIndex !== -1) {
      items.splice(itemIndex, 1); // Poistaa kohteen listalta
      res.writeHead(204); // 204 No Content
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Item not found" }));
    }
  }
  // Route not found
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

// Palvelin kuuntelee
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
