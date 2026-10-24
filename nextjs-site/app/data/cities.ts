// Données des pages villes (/debouchage-<ville>/)
// Une entrée = une page. Le contenu est volontairement différent d'une ville à l'autre
// (quartiers, communes voisines, FAQ) pour éviter le contenu dupliqué.

export type Dept = "95" | "93" | "92";

export interface CityFaq {
  q: string;
  a: string;
}

export interface City {
  slug: string; // ex. "sarcelles" -> /debouchage-sarcelles/
  name: string; // ex. "Sarcelles"
  nameIn: string; // ex. "à Sarcelles"
  postalCode: string;
  dept: Dept;
  deptName: string;
  color: string; // gradient Tailwind de l'en-tête
  soft: string; // fond clair des pastilles
  intro: string[]; // 2 paragraphes
  neighborhoods: string[]; // quartiers
  nearby: { name: string; postalCode: string }[];
  highlights: string[]; // 3 à 4 points spécifiques
  faq: CityFaq[];
  lat: number;
  lng: number;
}

export const DEPT_NAMES: Record<Dept, string> = {
  "95": "Val-d'Oise",
  "93": "Seine-Saint-Denis",
  "92": "Hauts-de-Seine",
};

const colors: Record<Dept, { color: string; soft: string }> = {
  "95": { color: "from-orange-500 to-orange-700", soft: "bg-orange-50" },
  "93": { color: "from-purple-600 to-purple-800", soft: "bg-purple-50" },
  "92": { color: "from-teal-600 to-teal-800", soft: "bg-teal-50" },
};

const base = (dept: Dept) => ({ dept, deptName: DEPT_NAMES[dept], ...colors[dept] });

export const cities: City[] = [
  {
    slug: "sarcelles",
    name: "Sarcelles",
    nameIn: "à Sarcelles",
    postalCode: "95200",
    ...base("95"),
    lat: 48.9972,
    lng: 2.3853,
    intro: [
      "Kidebouchetou est installé à Sarcelles : c'est notre ville, et c'est ici que nos délais d'intervention sont les plus courts. Du Village aux Lochères, des Rosiers aux Flanades, nous connaissons les immeubles du Grand Ensemble comme les pavillons du Vieux Sarcelles, et les colonnes d'évacuation qui vont avec.",
      "WC bouché, évier qui ne s'écoule plus, remontée d'odeurs dans la salle de bain, colonne d'immeuble engorgée : nous arrivons avec le matériel adapté (furet électrique, pompe haute pression 350 bars, caméra d'inspection) et nous débouchons en une seule visite dans la grande majorité des cas.",
    ],
    neighborhoods: ["Sarcelles Village", "Les Lochères", "Les Rosiers", "Les Flanades", "Les Chardonnerettes", "Les Sablons", "Le Mont de Gif", "Chauffour"],
    nearby: [
      { name: "Garges-lès-Gonesse", postalCode: "95140" },
      { name: "Villiers-le-Bel", postalCode: "95400" },
      { name: "Arnouville", postalCode: "95400" },
      { name: "Gonesse", postalCode: "95500" },
      { name: "Écouen", postalCode: "95440" },
      { name: "Saint-Brice-sous-Forêt", postalCode: "95350" },
      { name: "Pierrefitte-sur-Seine", postalCode: "93380" },
      { name: "Stains", postalCode: "93240" },
    ],
    highlights: [
      "Entreprise sarcelloise : intervention souvent en moins de 30 minutes",
      "Habitués des colonnes d'immeubles du Grand Ensemble et des copropriétés",
      "Débouchage de regards et canalisations extérieures des pavillons",
      "Devis annoncé par téléphone avant le déplacement",
    ],
    faq: [
      { q: "Intervenez-vous le soir et le week-end à Sarcelles ?", a: "Oui, 24h/24 et 7j/7, dimanche et jours fériés compris. Étant basés à Sarcelles, nous sommes généralement sur place en 30 à 45 minutes." },
      { q: "Combien coûte un débouchage de WC à Sarcelles ?", a: "Le débouchage simple (WC, siphon, évier, douche) est facturé 110 € TTC. Si le bouchon est profond et nécessite l'hydrocureur haute pression, l'intervention est à 240 € TTC avec passage caméra offert. Le tarif est confirmé avant de commencer." },
      { q: "Pouvez-vous déboucher une colonne d'immeuble ?", a: "Oui. Nous intervenons pour les syndics, gardiens et copropriétaires sur les colonnes d'évacuation et les regards en pied d'immeuble, avec curage haute pression et inspection caméra pour localiser l'origine du bouchon." },
    ],
  },
  {
    slug: "garges-les-gonesse",
    name: "Garges-lès-Gonesse",
    nameIn: "à Garges-lès-Gonesse",
    postalCode: "95140",
    ...base("95"),
    lat: 48.9728,
    lng: 2.4008,
    intro: [
      "Garges-lès-Gonesse est à moins de dix minutes de notre base de Sarcelles : nous y intervenons tous les jours, de la Dame Blanche au Vieux Pays, en passant par la Muette, les Doucettes et les Basses Bauves. Résidences, pavillons, commerces de la gare ou de l'avenue de Stalingrad, nous avons l'habitude des réseaux d'évacuation gargeois.",
      "Que ce soit pour une urgence (toilettes bouchées, évier qui déborde, refoulement) ou un entretien préventif (curage de colonne, nettoyage de regard), nous nous déplaçons avec le camion équipé et nous débouchons dès la première visite.",
    ],
    neighborhoods: ["Dame Blanche Nord", "Dame Blanche Ouest", "La Muette", "Les Doucettes", "Les Basses Bauves", "Le Vieux Pays", "Carreaux", "Barbusse"],
    nearby: [
      { name: "Sarcelles", postalCode: "95200" },
      { name: "Arnouville", postalCode: "95400" },
      { name: "Bonneuil-en-France", postalCode: "95500" },
      { name: "Gonesse", postalCode: "95500" },
      { name: "Stains", postalCode: "93240" },
      { name: "Dugny", postalCode: "93440" },
    ],
    highlights: [
      "À 10 minutes de notre base : délais très courts",
      "Interventions fréquentes dans les résidences de la Dame Blanche et des Doucettes",
      "Débouchage de canalisations extérieures et regards dans le Vieux Pays",
      "Tarifs identiques à ceux de Sarcelles, sans frais de déplacement cachés",
    ],
    faq: [
      { q: "Quel est votre délai d'intervention à Garges-lès-Gonesse ?", a: "Généralement 30 à 45 minutes, Garges étant limitrophe de Sarcelles où nous sommes basés. Nous vous donnons une heure d'arrivée précise lors de l'appel." },
      { q: "Faites-vous les débouchages pour les bailleurs et syndics ?", a: "Oui, nous travaillons avec des gardiens, syndics et bailleurs pour les colonnes d'évacuation, vide-ordures obstrués et regards communs, avec un rapport d'intervention si besoin." },
      { q: "Le passage caméra est-il payant ?", a: "L'inspection caméra seule est facturée 110 € TTC. Elle est offerte lorsqu'elle accompagne un débouchage haute pression (240 € TTC)." },
    ],
  },
  {
    slug: "villiers-le-bel",
    name: "Villiers-le-Bel",
    nameIn: "à Villiers-le-Bel",
    postalCode: "95400",
    ...base("95"),
    lat: 49.0094,
    lng: 2.3917,
    intro: [
      "Villiers-le-Bel jouxte Sarcelles au nord : nous y sommes en quelques minutes, que vous habitiez le Village, le Puits-la-Marlière, Derrière-les-Murs-de-Monseigneur, la Cerisaie ou les Carreaux. Les pavillons anciens du Village et les grandes résidences n'ont pas les mêmes réseaux, et nous adaptons le matériel en conséquence.",
      "Nous débouchons WC, éviers, lavabos, douches et baignoires, mais aussi les canalisations enterrées, regards et fosses des maisons individuelles, avec hydrocureur et caméra pour vérifier le résultat.",
    ],
    neighborhoods: ["Le Village", "Puits-la-Marlière", "Derrière-les-Murs-de-Monseigneur", "La Cerisaie", "Les Carreaux", "Le Vieux Pays", "Les Charmettes"],
    nearby: [
      { name: "Sarcelles", postalCode: "95200" },
      { name: "Arnouville", postalCode: "95400" },
      { name: "Gonesse", postalCode: "95500" },
      { name: "Écouen", postalCode: "95440" },
      { name: "Le Plessis-Gassot", postalCode: "95720" },
      { name: "Bouqueval", postalCode: "95720" },
    ],
    highlights: [
      "Commune voisine de Sarcelles : intervention rapide, même la nuit",
      "Spécialistes des canalisations enterrées et regards des pavillons du Village",
      "Débouchage de colonnes dans les résidences du Puits-la-Marlière et des Carreaux",
      "Conseils d'entretien pour éviter les bouchons récurrents",
    ],
    faq: [
      { q: "Pouvez-vous intervenir sur une canalisation enterrée bouchée ?", a: "Oui. Nous localisons le bouchon par caméra, puis nous le déloge à l'hydrocureur 350 bars sans creuser dans la plupart des cas. Si un tronçon est cassé ou affaissé, nous vous le montrons à l'écran avant tout devis de réparation." },
      { q: "Intervenez-vous pour une odeur d'égout sans bouchon apparent ?", a: "Oui : une odeur persistante vient souvent d'un siphon désamorcé, d'un regard encrassé ou d'une canalisation partiellement obstruée. Le diagnostic est gratuit, l'intervention est facturée au tarif annoncé." },
      { q: "Quels moyens de paiement acceptez-vous ?", a: "Espèces, carte bancaire et chèque, réglés après l'intervention, une fois le problème résolu." },
    ],
  },
  {
    slug: "argenteuil",
    name: "Argenteuil",
    nameIn: "à Argenteuil",
    postalCode: "95100",
    dept: "95",
    deptName: DEPT_NAMES["95"],
    ...colors["95"],
    lat: 48.9472,
    lng: 2.2467,
    intro: [
      "Argenteuil est la plus grande ville du Val-d'Oise, et l'une de celles où nous intervenons le plus : centre-ville, Val-Notre-Dame, Orgemont, Val d'Argent Nord et Sud, les Coteaux, Volembert ou le Marais. Immeubles des années 60, pavillons de la butte d'Orgemont, commerces de la rue Paul-Vaillant-Couturier : chaque secteur a ses canalisations et ses habitudes de bouchons.",
      "Nous arrivons avec le camion équipé (furet électrique, haute pression 350 bars, caméra 30 m) pour déboucher WC, éviers, douches, colonnes et canalisations extérieures en une seule intervention, 24h/24.",
    ],
    neighborhoods: ["Centre-ville", "Val-Notre-Dame", "Orgemont", "Val d'Argent Nord", "Val d'Argent Sud", "Les Coteaux", "Volembert", "Le Marais", "Joliot-Curie"],
    nearby: [
      { name: "Bezons", postalCode: "95870" },
      { name: "Sannois", postalCode: "95110" },
      { name: "Cormeilles-en-Parisis", postalCode: "95240" },
      { name: "Épinay-sur-Seine", postalCode: "93800" },
      { name: "Colombes", postalCode: "92700" },
      { name: "Gennevilliers", postalCode: "92230" },
      { name: "Houilles", postalCode: "78800" },
      { name: "Montigny-lès-Cormeilles", postalCode: "95370" },
    ],
    highlights: [
      "Intervention dans tous les quartiers d'Argenteuil, rive droite de la Seine",
      "Expérience des grandes copropriétés du Val d'Argent et du Val-Notre-Dame",
      "Débouchage de canalisations extérieures pour les pavillons des Coteaux et d'Orgemont",
      "Disponible 24h/24 : urgences de nuit et de week-end",
    ],
    faq: [
      { q: "En combien de temps arrivez-vous à Argenteuil ?", a: "Comptez 30 à 45 minutes depuis Sarcelles selon la circulation sur l'A15 ou la N184. Nous vous indiquons un horaire précis au téléphone." },
      { q: "Débouchez-vous les canalisations de commerces et restaurants ?", a: "Oui. Bacs à graisse saturés, évacuations de cuisine bouchées, siphons de sol : nous intervenons en dehors des heures d'ouverture si nécessaire pour ne pas gêner votre activité." },
      { q: "Que faire en attendant votre arrivée ?", a: "Fermez l'arrivée d'eau de l'appareil concerné, n'utilisez pas de déboucheur chimique (il attaque les joints et complique notre intervention) et dégagez l'accès à la canalisation." },
    ],
  },
  {
    slug: "saint-denis",
    name: "Saint-Denis",
    nameIn: "à Saint-Denis",
    postalCode: "93200",
    ...base("93"),
    lat: 48.9362,
    lng: 2.3574,
    intro: [
      "Saint-Denis est à un quart d'heure de notre base : nous y intervenons chaque semaine, du centre historique autour de la basilique à la Plaine Saint-Denis et au quartier Pleyel, en passant par le Franc-Moisin, Bel-Air, Floréal et la Courtille. Immeubles haussmanniens du centre, résidences neuves de la Plaine, pavillons de la Mutualité : nous adaptons le matériel au réseau.",
      "Toilettes bouchées, évier ou lavabo qui refoule, colonne d'immeuble engorgée, regard saturé : nous débouchons au furet ou à l'hydrocureur 350 bars et nous contrôlons à la caméra que la canalisation est bien dégagée.",
    ],
    neighborhoods: ["Centre-ville / Basilique", "La Plaine Saint-Denis", "Pleyel", "Franc-Moisin", "Bel-Air", "Floréal", "La Courtille", "Delaunay-Belleville", "Stade de France"],
    nearby: [
      { name: "Saint-Ouen-sur-Seine", postalCode: "93400" },
      { name: "Aubervilliers", postalCode: "93300" },
      { name: "Pierrefitte-sur-Seine", postalCode: "93380" },
      { name: "Stains", postalCode: "93240" },
      { name: "L'Île-Saint-Denis", postalCode: "93450" },
      { name: "Épinay-sur-Seine", postalCode: "93800" },
      { name: "La Courneuve", postalCode: "93120" },
      { name: "Villetaneuse", postalCode: "93430" },
    ],
    highlights: [
      "Interventions régulières pour particuliers, syndics et commerces dionysiens",
      "Habitués des immeubles anciens du centre et des colonnes en fonte",
      "Débouchage d'évacuations de cuisines professionnelles à la Plaine et à Pleyel",
      "Devis gratuit, tarif confirmé avant de commencer",
    ],
    faq: [
      { q: "Intervenez-vous dans les immeubles anciens du centre de Saint-Denis ?", a: "Oui, très souvent. Les colonnes en fonte des immeubles anciens s'entartrent et se bouchent plus facilement : nous utilisons le furet électrique puis l'hydrocureur, et la caméra permet de vérifier l'état de la canalisation." },
      { q: "Combien coûte un débouchage à Saint-Denis ?", a: "110 € TTC pour un débouchage simple (WC, évier, douche, siphon) et 240 € TTC pour un débouchage haute pression avec caméra offerte. Pas de supplément de déplacement pour Saint-Denis." },
      { q: "Travaillez-vous avec les syndics et les gardiens ?", a: "Oui. Nous intervenons sur les parties communes (colonnes, regards, vide-sanitaires) et nous fournissons un compte rendu avec photos ou vidéo caméra sur demande." },
    ],
  },
  {
    slug: "saint-ouen",
    name: "Saint-Ouen-sur-Seine",
    nameIn: "à Saint-Ouen",
    postalCode: "93400",
    ...base("93"),
    lat: 48.9123,
    lng: 2.3336,
    intro: [
      "Saint-Ouen-sur-Seine, ses Puces, ses Docks réhabilités et son Vieux Saint-Ouen : nous intervenons dans toute la commune, des immeubles anciens du quartier Debain-Michelet aux programmes neufs des Docks et aux résidences des Rosiers et de la Garibaldi. Des réseaux très différents, que nous connaissons bien.",
      "Débouchage de WC, éviers, douches, baignoires, colonnes et regards, 24h/24 : nous arrivons avec furet, hydrocureur 350 bars et caméra pour résoudre le problème dès la première visite.",
    ],
    neighborhoods: ["Vieux Saint-Ouen", "Les Puces", "Les Docks", "Debain-Michelet", "Les Rosiers", "Garibaldi", "Pasteur / Zola", "Arago"],
    nearby: [
      { name: "Saint-Denis", postalCode: "93200" },
      { name: "Clichy", postalCode: "92110" },
      { name: "L'Île-Saint-Denis", postalCode: "93450" },
      { name: "Paris 17e", postalCode: "75017" },
      { name: "Paris 18e", postalCode: "75018" },
      { name: "Gennevilliers", postalCode: "92230" },
    ],
    highlights: [
      "Débouchage dans les immeubles anciens du Vieux Saint-Ouen et des Puces",
      "Interventions pour les commerces et restaurants des Puces et des Docks",
      "Colonnes d'immeubles et regards de copropriétés",
      "À la frontière de Paris et de Clichy : nous couvrons aussi les 17e et 18e",
    ],
    faq: [
      { q: "Intervenez-vous pour les commerçants des Puces de Saint-Ouen ?", a: "Oui, y compris tôt le matin ou en semaine hors jours de marché, pour les sanitaires, siphons de sol et évacuations de restaurants." },
      { q: "Quel délai pour un WC bouché à Saint-Ouen ?", a: "30 à 45 minutes en moyenne depuis Sarcelles par l'A1 ou l'A86. Nous confirmons l'horaire au téléphone." },
      { q: "Pouvez-vous intervenir dans un logement neuf des Docks ?", a: "Oui. Les réseaux récents se bouchent surtout par lingettes et graisses ; nous débouchons sans abîmer les canalisations PVC et nous vous conseillons pour éviter la récidive." },
    ],
  },
  {
    slug: "aubervilliers",
    name: "Aubervilliers",
    nameIn: "à Aubervilliers",
    postalCode: "93300",
    ...base("93"),
    lat: 48.9146,
    lng: 2.3822,
    intro: [
      "Aubervilliers, des Quatre-Chemins au Fort, du centre-ville à la Villette, du Landy à la Maladrerie : nous y intervenons régulièrement pour les particuliers, les commerces et les grossistes. Immeubles anciens, grandes résidences, entrepôts et boutiques ont chacun leurs problèmes d'évacuation, et nous arrivons équipés pour tous.",
      "WC bouché, évier de cuisine engorgé, odeur d'égout, colonne saturée, siphon de sol d'un local commercial : nous débouchons au furet ou à l'hydrocureur 350 bars et nous vérifions à la caméra, 24h/24 et 7j/7.",
    ],
    neighborhoods: ["Centre-ville", "Quatre-Chemins", "La Villette", "Le Landy", "La Maladrerie", "Fort d'Aubervilliers", "Paul Bert", "Émile Dubois", "Firmin Gémier"],
    nearby: [
      { name: "Saint-Denis", postalCode: "93200" },
      { name: "La Courneuve", postalCode: "93120" },
      { name: "Pantin", postalCode: "93500" },
      { name: "Bobigny", postalCode: "93000" },
      { name: "Paris 19e", postalCode: "75019" },
      { name: "Paris 18e", postalCode: "75018" },
    ],
    highlights: [
      "Interventions pour particuliers, commerces et grossistes du centre et des Quatre-Chemins",
      "Débouchage de siphons de sol et évacuations de locaux professionnels",
      "Colonnes et regards des grandes résidences (Maladrerie, Émile Dubois)",
      "Disponible 24h/24, y compris dimanches et jours fériés",
    ],
    faq: [
      { q: "Intervenez-vous dans les locaux commerciaux et entrepôts ?", a: "Oui. Siphons de sol, évacuations de sanitaires collectifs, canalisations d'eaux usées de locaux d'activité : nous intervenons avec l'hydrocureur et, si besoin, en dehors de vos horaires d'ouverture." },
      { q: "Mon évier se bouche tous les mois, que faire ?", a: "Un bouchon récurrent signale généralement un dépôt de graisse ou de tartre sur toute la longueur de la canalisation, ou un défaut de pente. Un curage haute pression suivi d'un passage caméra règle le problème durablement et permet de voir l'état du tuyau." },
      { q: "Le devis est-il vraiment gratuit ?", a: "Oui. Le diagnostic est gratuit et le tarif (110 € ou 240 € TTC selon le type d'intervention) est annoncé avant de commencer. Vous ne payez qu'une fois le problème résolu." },
    ],
  },
  {
    slug: "montreuil",
    name: "Montreuil",
    nameIn: "à Montreuil",
    postalCode: "93100",
    ...base("93"),
    lat: 48.8638,
    lng: 2.4485,
    intro: [
      "Montreuil est la plus grande ville de Seine-Saint-Denis, et l'une des plus variées : immeubles et lofts du Bas-Montreuil, centre-ville autour de la Croix-de-Chavaux et de la mairie, pavillons et jardins du Haut-Montreuil (Bel-Air, Ruffins, Montreau), résidences de La Noue et des Morillons. Nous intervenons partout, avec le matériel adapté à chaque type de réseau.",
      "Toilettes bouchées, évier ou douche qui refoule, colonne d'immeuble, regard de pavillon ou canalisation enterrée : furet électrique, hydrocureur 350 bars et caméra nous permettent de déboucher en une visite, 24h/24.",
    ],
    neighborhoods: ["Bas-Montreuil", "Croix-de-Chavaux", "Centre-ville / Mairie", "La Noue", "Bel-Air", "Les Ruffins", "Montreau", "Villiers-Barbusse", "Signac / Murs-à-Pêches", "Les Morillons"],
    nearby: [
      { name: "Bagnolet", postalCode: "93170" },
      { name: "Vincennes", postalCode: "94300" },
      { name: "Fontenay-sous-Bois", postalCode: "94120" },
      { name: "Rosny-sous-Bois", postalCode: "93110" },
      { name: "Romainville", postalCode: "93230" },
      { name: "Paris 20e", postalCode: "75020" },
      { name: "Noisy-le-Sec", postalCode: "93130" },
    ],
    highlights: [
      "Du Bas-Montreuil au Haut-Montreuil : tous les quartiers, tous les types d'habitat",
      "Débouchage de regards et canalisations enterrées des pavillons du Haut-Montreuil",
      "Colonnes et évacuations des immeubles anciens du Bas-Montreuil et de la Croix-de-Chavaux",
      "Interventions de nuit et de week-end sans majoration cachée",
    ],
    faq: [
      { q: "Montreuil est loin de Sarcelles, quel est votre délai ?", a: "Par l'A86 et l'A3, comptez 40 à 60 minutes selon l'heure. Pour une urgence de nuit, nous sommes souvent plus rapides. Nous vous donnons un horaire précis lors de l'appel." },
      { q: "Débouchez-vous les canalisations extérieures d'un pavillon ?", a: "Oui : regards, canalisations enterrées, évacuations de cour et de jardin. L'hydrocureur permet de déboucher sans creuser et la caméra montre l'état de la canalisation (racines, cassure, contre-pente)." },
      { q: "Quels sont vos tarifs à Montreuil ?", a: "Les mêmes qu'ailleurs : 110 € TTC pour un débouchage simple, 110 € TTC pour une inspection caméra seule, 240 € TTC pour un débouchage haute pression avec caméra offerte." },
    ],
  },
  {
    slug: "clichy",
    name: "Clichy",
    nameIn: "à Clichy",
    postalCode: "92110",
    ...base("92"),
    lat: 48.9044,
    lng: 2.3064,
    intro: [
      "Clichy-la-Garenne, aux portes de Paris et de Saint-Ouen : nous y intervenons dans tous les quartiers, du centre et de la mairie aux Berges de Seine, de l'Entrée de ville à Victor-Hugo et au Bac d'Asnières. Immeubles haussmanniens, résidences des années 70, programmes neufs le long de la Seine et nombreux commerces : nous connaissons les réseaux clichois.",
      "WC, évier, lavabo, douche, baignoire, colonne d'immeuble, siphon de sol de boutique ou de restaurant : nous débouchons au furet ou à l'hydrocureur 350 bars, avec contrôle caméra, 24h/24 et 7j/7.",
    ],
    neighborhoods: ["Centre-ville / Mairie", "Berges de Seine", "Entrée de ville", "Victor-Hugo", "Bac d'Asnières", "Fournier", "Jean Jaurès", "Landy-Martre"],
    nearby: [
      { name: "Saint-Ouen-sur-Seine", postalCode: "93400" },
      { name: "Levallois-Perret", postalCode: "92300" },
      { name: "Asnières-sur-Seine", postalCode: "92600" },
      { name: "Gennevilliers", postalCode: "92230" },
      { name: "Paris 17e", postalCode: "75017" },
      { name: "Neuilly-sur-Seine", postalCode: "92200" },
    ],
    highlights: [
      "Clichy, Levallois, Asnières : nous couvrons le nord des Hauts-de-Seine",
      "Immeubles haussmanniens : colonnes en fonte et siphons anciens",
      "Interventions pour les commerces et restaurants du centre et des Berges de Seine",
      "Devis gratuit, intervention 24h/24",
    ],
    faq: [
      { q: "Intervenez-vous aussi à Levallois et Asnières ?", a: "Oui, Clichy est notre point d'entrée dans les Hauts-de-Seine : nous intervenons à Levallois-Perret, Asnières-sur-Seine, Gennevilliers et dans le 17e arrondissement aux mêmes conditions." },
      { q: "Un débouchage haute pression abîme-t-il les canalisations anciennes ?", a: "Non lorsqu'il est réalisé avec la buse et la pression adaptées. Sur les colonnes en fonte anciennes, nous commençons au furet et nous contrôlons à la caméra avant de passer à l'hydrocureur." },
      { q: "Comment vous régler ?", a: "Espèces, carte bancaire ou chèque, après l'intervention et une fois le problème résolu. Une facture vous est remise, utile pour votre assurance ou votre syndic." },
    ],
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
