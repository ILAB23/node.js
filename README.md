REST API -toteutus Node.js
ä

Tässä projektissa toteutetaan yksinkertainen REST API kohteiden hallintaan Node.js
ä. Se tukee perinteisiä CRUD-toimintoja (Luo, Lue, Päivitä, Poista) ja mahdollistaa kohteiden lajittelun aakkosjärjestykseen nimen perusteella.

API-toiminnot
Hae kaikki kohteet – GET /items: Palauttaa listan kaikista kohteista.
Luo uusi kohde – POST /items: Lisää uuden kohteen listalle.
Hae tietty kohde ID
perusteella – GET /items/:id: Palauttaa tietyn kohteen sen ID
perusteella.
Päivitä olemassa oleva kohde ID
perusteella – PUT /items/:id: Päivittää kohteen tiedot sen ID
perusteella.
Poista kohde ID
perusteella – DELETE /items/:id: Poistaa kohteen sen ID
perusteella.
Lajittele kohteet nimen mukaan – GET /items?sortItems=name: Lajittelee kohteet aakkosjärjestykseen nimien perusteella.





