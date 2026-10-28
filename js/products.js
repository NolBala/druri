/* Product catalog. Edit this file to add, remove or change products.
   - photo: picture in /images. Replace the sample illustrations with real photos,
     e.g. put sofa.jpg in /images and set  photo: "images/sofa.jpg"
   - price: indicative price in EUR
   - dims: width × depth × height in centimetres
   - name, material, desc: one text per language (en, sq, de) */
window.CATEGORIES = [
  { id: "living",   photo: "images/sofa.svg" },
  { id: "bedroom",  photo: "images/bed.svg" },
  { id: "dining",   photo: "images/dining-table.svg" },
  { id: "office",   photo: "images/desk.svg" },
  { id: "lighting", photo: "images/floor-lamp.svg" },
  { id: "outdoor",  photo: "images/garden-lounger.svg" }
];

window.PRODUCTS = [
  {
    id: "sofa", code: "DR-1101", category: "living", isNew: true,
    photo: "images/sofa.svg", price: 1490,
    dims: { w: 228, d: 96, h: 82 },
    finishes: ["#5F7A63", "#B5583F", "#D9CBB3", "#3E4447"],
    name: { en: "Three-seat sofa", sq: "Divan me tri vende", de: "Dreisitzer-Sofa" },
    material: { en: "Beech frame, wool-blend fabric", sq: "Strukturë ahu, pëlhurë me përzierje leshi", de: "Buchengestell, Wollmischgewebe" },
    desc: {
      en: "A deep three-seat sofa with soft back cushions and wooden legs. The covers come off for cleaning.",
      sq: "Divan i thellë me tri vende, me jastëkë të butë mbështetës dhe këmbë druri. Veshjet hiqen për pastrim.",
      de: "Ein tiefes Dreisitzer-Sofa mit weichen Rückenkissen und Holzbeinen. Die Bezüge sind abnehmbar und waschbar."
    }
  },
  {
    id: "armchair", code: "DR-1102", category: "living",
    photo: "images/armchair.svg", price: 690,
    dims: { w: 72, d: 78, h: 80 },
    finishes: ["#8E9296", "#5F7A63", "#C9A24A"],
    name: { en: "Armchair", sq: "Kolltuk", de: "Sessel" },
    material: { en: "Solid wood frame, upholstered seat and back", sq: "Strukturë druri masiv, ndenjëse dhe shpinë të veshura", de: "Massivholzgestell, gepolsterter Sitz und Rücken" },
    desc: {
      en: "A compact armchair with an open wooden frame. Fits beside a sofa, in a reading corner or in the bedroom.",
      sq: "Kolltuk kompakt me strukturë të hapur druri. Përshtatet pranë divanit, në një cep leximi ose në dhomën e gjumit.",
      de: "Ein kompakter Sessel mit offenem Holzgestell. Passt neben das Sofa, in eine Leseecke oder ins Schlafzimmer."
    }
  },
  {
    id: "coffee-table", code: "DR-1103", category: "living",
    photo: "images/coffee-table.svg", price: 420,
    dims: { w: 120, d: 60, h: 40 },
    finishes: ["#8A5A36", "#C49A6C", "#3F2A1C"],
    name: { en: "Coffee table", sq: "Tavolinë kafeje", de: "Couchtisch" },
    material: { en: "Solid oak, natural oil finish", sq: "Lis masiv, i lyer me vaj natyral", de: "Massive Eiche, natürlich geölt" },
    desc: {
      en: "A low solid oak table for the living room. The oiled top can be sanded and refreshed for years.",
      sq: "Tavolinë e ulët prej lisi masiv për dhomën e ndenjes. Sipërfaqja e vajosur mund të lëmohet dhe rifreskohet për vite.",
      de: "Ein niedriger Tisch aus massiver Eiche für das Wohnzimmer. Die geölte Platte lässt sich über Jahre nachschleifen."
    }
  },
  {
    id: "bed", code: "DR-1201", category: "bedroom", isNew: true,
    photo: "images/bed.svg", price: 1180,
    dims: { w: 176, d: 214, h: 120 },
    finishes: ["#8C9AA6", "#D9CBB3", "#3E4447"],
    name: { en: "Double bed", sq: "Shtrat dopio", de: "Doppelbett" },
    material: { en: "Beech frame, upholstered headboard", sq: "Strukturë ahu, kokë shtrati e veshur", de: "Buchengestell, gepolstertes Kopfteil" },
    desc: {
      en: "A double bed for a 160 × 200 cm mattress, with an upholstered headboard and a slatted base included.",
      sq: "Shtrat dopio për dyshek 160 × 200 cm, me kokë të veshur dhe bazë me dërrasa të përfshirë.",
      de: "Ein Doppelbett für eine Matratze von 160 × 200 cm, mit gepolstertem Kopfteil. Lattenrost inklusive."
    }
  },
  {
    id: "nightstand", code: "DR-1202", category: "bedroom",
    photo: "images/nightstand.svg", price: 260,
    dims: { w: 50, d: 40, h: 55 },
    finishes: ["#7A4B2A", "#C49A6C", "#E9E3D6"],
    name: { en: "Nightstand", sq: "Komodinë", de: "Nachttisch" },
    material: { en: "Solid walnut, two drawers", sq: "Arrë masive, dy sirtarë", de: "Massiver Nussbaum, zwei Schubladen" },
    desc: {
      en: "Two soft-close drawers and a top wide enough for a lamp, a book and a glass of water.",
      sq: "Dy sirtarë me mbyllje të butë dhe sipërfaqe mjaft e gjerë për një llambë, një libër dhe një gotë ujë.",
      de: "Zwei Schubladen mit Softclose und eine Ablage mit Platz für Lampe, Buch und Wasserglas."
    }
  },
  {
    id: "wardrobe", code: "DR-1203", category: "bedroom",
    photo: "images/wardrobe.svg", price: 1640,
    dims: { w: 120, d: 60, h: 200 },
    finishes: ["#7A4B2A", "#E9E3D6", "#8C9AA6"],
    name: { en: "Two-door wardrobe", sq: "Gardërobë me dy dyer", de: "Kleiderschrank, zweitürig" },
    material: { en: "Solid wood, adjustable shelves", sq: "Dru masiv, rafte të rregullueshme", de: "Massivholz, verstellbare Böden" },
    desc: {
      en: "A two-door wardrobe with a hanging rail and adjustable shelves. Delivered in parts and assembled in your room.",
      sq: "Gardërobë me dy dyer, me shufër për varëse dhe rafte të rregullueshme. Dërgohet e çmontuar dhe montohet në dhomën tuaj.",
      de: "Ein zweitüriger Kleiderschrank mit Kleiderstange und verstellbaren Böden. Wird zerlegt geliefert und bei Ihnen aufgebaut."
    }
  },
  {
    id: "dining-table", code: "DR-1301", category: "dining", isNew: true,
    photo: "images/dining-table.svg", price: 1290,
    dims: { w: 180, d: 90, h: 75 },
    finishes: ["#6E4528", "#B08356", "#3F2A1C"],
    name: { en: "Dining table", sq: "Tavolinë ngrënieje", de: "Esstisch" },
    material: { en: "Solid oak, hard-wax oil", sq: "Lis masiv, vaj me dyll të fortë", de: "Massive Eiche, Hartwachsöl" },
    desc: {
      en: "A solid wood dining table that seats six. Also available in 200 and 220 cm lengths.",
      sq: "Tavolinë ngrënieje prej druri masiv për gjashtë persona. E disponueshme edhe në gjatësi 200 dhe 220 cm.",
      de: "Ein Esstisch aus Massivholz für sechs Personen. Auch in 200 und 220 cm Länge erhältlich."
    }
  },
  {
    id: "dining-chair", code: "DR-1302", category: "dining",
    photo: "images/dining-chair.svg", price: 210,
    dims: { w: 46, d: 50, h: 80 },
    finishes: ["#8A5A36", "#3F2A1C", "#C8BFAE"],
    name: { en: "Dining chair", sq: "Karrige ngrënieje", de: "Esszimmerstuhl" },
    material: { en: "Solid beech, oiled", sq: "Ah masiv, i vajosur", de: "Massive Buche, geölt" },
    desc: {
      en: "A simple, sturdy wooden chair without armrests. Matches the dining table and stacks two high.",
      sq: "Karrige druri e thjeshtë dhe e qëndrueshme, pa mbështetëse krahësh. Përputhet me tavolinën dhe mund të vendosen dy njëra mbi tjetrën.",
      de: "Ein schlichter, stabiler Holzstuhl ohne Armlehnen. Passt zum Esstisch und ist zu zweit stapelbar."
    }
  },
  {
    id: "desk", code: "DR-1401", category: "office",
    photo: "images/desk.svg", price: 780,
    dims: { w: 140, d: 70, h: 75 },
    finishes: ["#F1EFEA", "#B08356", "#2D2B28"],
    name: { en: "Desk", sq: "Tavolinë pune", de: "Schreibtisch" },
    material: { en: "Oak top, powder-coated steel frame", sq: "Sipërfaqe lisi, strukturë çeliku e lyer me pluhur", de: "Eichenplatte, pulverbeschichtetes Stahlgestell" },
    desc: {
      en: "A clean work desk with room for a monitor and laptop, and a cable channel under the top.",
      sq: "Tavolinë pune e pastër me vend për monitor dhe laptop, dhe kanal për kabllot nën sipërfaqe.",
      de: "Ein schlichter Schreibtisch mit Platz für Monitor und Laptop und einem Kabelkanal unter der Platte."
    }
  },
  {
    id: "bookshelf", code: "DR-1402", category: "office",
    photo: "images/bookshelf.svg", price: 890,
    dims: { w: 100, d: 35, h: 190 },
    finishes: ["#5B3A22", "#B08356", "#E9E3D6"],
    name: { en: "Bookshelf", sq: "Raft librash", de: "Bücherregal" },
    material: { en: "Solid wood, five shelves", sq: "Dru masiv, pesë rafte", de: "Massivholz, fünf Böden" },
    desc: {
      en: "A freestanding bookshelf with five shelves. Each shelf carries up to 40 kg.",
      sq: "Raft librash që qëndron vetë, me pesë rafte. Çdo raft mban deri në 40 kg.",
      de: "Ein freistehendes Bücherregal mit fünf Böden. Jeder Boden trägt bis zu 40 kg."
    }
  },
  {
    id: "floor-lamp", code: "DR-1501", category: "lighting",
    photo: "images/floor-lamp.svg", price: 340,
    dims: { w: 40, d: 40, h: 160 },
    finishes: ["#2D2B28", "#C9A24A", "#E9E3D6"],
    name: { en: "Floor lamp", sq: "Llambë dyshemeje", de: "Stehleuchte" },
    material: { en: "Metal stem, linen shade, E27 bulb", sq: "Shtyllë metalike, abazhur liri, llambë E27", de: "Metallschaft, Leinenschirm, E27-Fassung" },
    desc: {
      en: "A slim floor lamp with a foot switch. Gives warm light for reading in the corner of a room.",
      sq: "Llambë e hollë dyshemeje me çelës me këmbë. Jep dritë të ngrohtë për lexim në një cep të dhomës.",
      de: "Eine schlanke Stehleuchte mit Fußschalter. Spendet warmes Leselicht in der Zimmerecke."
    }
  },
  {
    id: "garden-lounger", code: "DR-1601", category: "outdoor", isNew: true,
    photo: "images/garden-lounger.svg", price: 640,
    dims: { w: 70, d: 196, h: 82 },
    finishes: ["#E8DFCF", "#6F8576", "#3E4447"],
    name: { en: "Garden lounger", sq: "Shezlong kopshti", de: "Gartenliege" },
    material: { en: "Iroko wood, weatherproof cushion", sq: "Dru iroko, jastëk i rezistueshëm ndaj motit", de: "Iroko-Holz, wetterfeste Auflage" },
    desc: {
      en: "A garden lounger with a five-position backrest. Iroko weathers to a silver grey if left untreated.",
      sq: "Shezlong kopshti me mbështetëse që rregullohet në pesë pozicione. Iroko merr ngjyrë gri të argjendtë nëse lihet pa trajtim.",
      de: "Eine Gartenliege mit fünffach verstellbarer Rückenlehne. Unbehandeltes Iroko bekommt mit der Zeit eine silbergraue Patina."
    }
  }
];
