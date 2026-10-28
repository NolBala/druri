# Druri – sample furniture catalog

A static catalog website (no shop, no checkout) in English, Albanian and German.
Plain HTML, CSS and JavaScript – no build step, deploys to Vercel as-is.

## Deploy to Vercel
1. Put this folder in a GitHub repository.
2. On vercel.com: **Add New → Project**, import the repository.
3. Framework preset: **Other**. Leave build command and output directory empty. Click **Deploy**.

Or with the CLI: `npm i -g vercel` then run `vercel` inside this folder.

## Where to change things
| What | File |
|---|---|
| Products (names, prices, sizes in cm, descriptions in 3 languages) | `js/products.js` |
| Categories / rooms | `CATEGORIES` at the top of `js/products.js` (+ a `cat.<id>` label in `js/i18n.js`) |
| All interface text (EN / SQ / DE) | `js/i18n.js` |
| Colours and fonts | top of `css/style.css` |
| Phone, email, opening hours | `index.html` (showroom section and product sheet) |
| Product pictures | `images/` – the `.svg` files are sample illustrations. Replace them with real photos (e.g. `sofa.jpg`, 4:3 ratio, about 1600×1200) and change the `photo` line in `js/products.js` to `images/sofa.jpg`. |

## Features
- Language switch (EN / SQ / DE), remembered in the browser; first visit follows the browser language.
- Rooms grid, category filter, search, sorting by price or name.
- Product sheet with dimensions, material, finishes and a product code to quote when ordering.
- Each product has its own link, e.g. `/#sharr-sofa`.
- Light and dark mode, works on phones.

The phone number and email are placeholders.
