# LU DHC landing page

Viena statiska, divvalodu landing page Latvijas Universitātes Digitālo humanitāro zinātņu centram. Nav nepieciešams būvēšanas solis vai ārējs CMS – faili ir paredzēti publicēšanai GitHub Pages.

## Sadaļas un enkuri

- `#about-us` – ievads un centra darbības virzieni
- `resources.html` – atsevišķa digitālo resursu un rīku lapa
- `#projects` – AISTER, ȬPEN, DigiLATE un NAMS
- `#team` – LU DHC komanda
- `#contacts` – e-pasts un adrese

## Lokāla pārbaude

Repozitorija saknē palaist:

```bash
python3 -m http.server 8000
```

Tad atvērt `http://localhost:8000/#lv` vai `http://localhost:8000/#en`.

## Publicēšana

Failus `index.html`, `style.css`, `script.js` un mapi `assets/` ievieto repozitorija `ul-dhc.github.io` galvenajā zarā. GitHub Pages tos publicēs bez papildu konfigurācijas.

Saturs balstīts LU HZF institucionālajā LU DHC lapā. Oficiālie LU logo faili iegūti no LU zīmola resursu lapas. Esošais favicon un atmiņas spēles mehānika saglabāti.
