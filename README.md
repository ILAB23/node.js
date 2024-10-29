HEAD

REST API -toteutus Node.jsä

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

> > > > > > > 1e7749111d8a88a807de7ee55c65a57b9d89b551
