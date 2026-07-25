export const site = { domain:'panneau-solaire-loire-atlantique.fr', name:'Panneau Solaire Loire-Atlantique', department:'Loire-Atlantique', code:'44', city:'Nantes', url:'https://panneau-solaire-loire-atlantique.fr' };
export type Commune = { name:string; slug:string; postalCodes:string[]; population:number; profile:string };
export const communes: Commune[] = [
  ['Nantes','nantes',['44000', '44100', '44200', '44300'],323204,'maison nantaise tuffeau/ardoise, extension contemporaine, télétravail'],
  ['Saint-Nazaire','saint-nazaire',['44600'],72057,'maison littorale exposée au vent de l’estuaire'],
  ['Rezé','reze',['44400'],42577,'pavillon urbain proche Loire'],
  ['Saint-Herblain','saint-herblain',['44800'],49307,'maison familiale de métropole'],
  ['Orvault','orvault',['44700'],27194,'pavillon verdoyant avec usages électriques réguliers'],
  ['Vertou','vertou',['44120'],26391,'maison avec jardin et toiture bien orientée'],
  ['Couëron','coueron',['44220'],22419,'maison de bord de Loire'],
  ['Carquefou','carquefou',['44470'],20365,'maison récente et profil data-savvy'],
  ['La Chapelle-sur-Erdre','la-chapelle-sur-erdre',['44240'],20322,'maison familiale près de l’Erdre'],
  ['Bouguenais','bouguenais',['44340'],20337,'pavillon sud-Loire'],
  ['Saint-Sébastien-sur-Loire','saint-sebastien-sur-loire',['44230'],27691,'maison de métropole rive sud'],
  ['Pornic','pornic',['44210'],17881,'maison littorale ou résidence secondaire'],
  ['Guérande','guerande',['44350'],16449,'maison de caractère avec contraintes patrimoniales'],
  ['La Baule-Escoublac','la-baule-escoublac',['44500'],16092,'villa balnéaire ou résidence secondaire'],
  ['Sainte-Luce-sur-Loire','sainte-luce-sur-loire',['44980'],15836,'pavillon périurbain'],
  ['Treillières','treillieres',['44119'],10139,'maison récente de couronne nantaise'],
  ['Pornichet','pornichet',['44380'],11763,'maison littorale'],
  ['Châteaubriant','chateaubriant',['44110'],11973,'maison de centre-ville ou pavillon'],
  ['Ancenis-Saint-Géréon','ancenis-saint-gereon',['44150'],11128,'maison en bord de Loire'],
  ['Saint-Brevin-les-Pins','saint-brevin-les-pins',['44250'],14858,'maison littorale avec pins et embruns'],
  ['Clisson','clisson',['44190'],7470,'maison de caractère ou pavillon viticole'],
  ['Vallet','vallet',['44330'],9728,'maison du vignoble nantais'],
  ['Nort-sur-Erdre','nort-sur-erdre',['44390'],9122,'maison proche canal et Erdre'],
  ['Blain','blain',['44130'],10149,'maison ou longère avec toiture ardoise'],
  ['Pontchâteau','pontchateau',['44160'],11028,'pavillon familial du bassin nazairien'],
  ['Savenay','savenay',['44260'],9300,'maison entre Nantes et Saint-Nazaire'],
  ['Le Loroux-Bottereau','le-loroux-bottereau',['44430'],8730,'maison du vignoble'],
  ['Saint-Philbert-de-Grand-Lieu','saint-philbert-de-grand-lieu',['44310'],9252,'maison proche lac de Grand-Lieu'],
  ['Saint-Julien-de-Concelles','saint-julien-de-concelles',['44450'],7630,'maison maraîchère ou pavillon'],
  ['La Montagne','la-montagne',['44620'],6308,'pavillon de première couronne'],
  ['Vigneux-de-Bretagne','vigneux-de-bretagne',['44360'],6341,'maison familiale avec terrain'],
  ['Sucé-sur-Erdre','suce-sur-erdre',['44240'],7615,'maison près de l’Erdre'],
  ['Haute-Goulaine','haute-goulaine',['44115'],5941,'maison du vignoble nantais'],
  ['Divatte-sur-Loire','divatte-sur-loire',['44450'],7115,'maison ligérienne'],
  ['La Haye-Fouassière','la-haye-fouassiere',['44690'],4697,'maison du vignoble'],
  ['Aigrefeuille-sur-Maine','aigrefeuille-sur-maine',['44140'],4155,'pavillon au sud de Nantes'],
  ['Geneston','geneston',['44140'],3773,'maison récente'],
  ['Le Bignon','le-bignon',['44140'],3901,'maison familiale'],
  ['Vieillevigne','vieillevigne',['44116'],4091,'maison avec toiture importante'],
  ['Legé','lege',['44650'],4570,'maison rurale du sud Loire'],
  ['Saint-Aignan-Grandlieu','saint-aignan-grandlieu',['44860'],3996,'maison proche lac'],
  ['La Chevrolière','la-chevroliere',['44118'],6124,'pavillon sud-Loire'],
  ['Bouaye','bouaye',['44830'],8212,'maison familiale proche Grand-Lieu'],
  ['Sainte-Pazanne','sainte-pazanne',['44680'],6924,'maison périurbaine'],
  ['Chaumes-en-Retz','chaumes-en-retz',['44320'],7150,'maison de pays de Retz'],
  ['Saint-Michel-Chef-Chef','saint-michel-chef-chef',['44730'],5220,'maison côtière'],
  ['La Plaine-sur-Mer','la-plaine-sur-mer',['44770'],4350,'maison littorale'],
  ['Donges','donges',['44480'],8200,'maison du bassin nazairien'],
  ['Montoir-de-Bretagne','montoir-de-bretagne',['44550'],7200,'pavillon proche estuaire'],
  ['Herbignac','herbignac',['44410'],7200,'maison de presqu’île'],
  ['La Turballe','la-turballe',['44420'],4700,'maison littorale'],
  ['Le Croisic','le-croisic',['44490'],4000,'maison patrimoniale côtière'],
  ['Le Pouliguen','le-pouliguen',['44510'],4200,'résidence balnéaire'],
  ['Missillac','missillac',['44780'],5300,'maison avec grande toiture'],
  ['Machecoul-Saint-Même','machecoul-saint-meme',['44270'],7766,'maison individuelle du pays de Retz'],
  ['Héric','heric',['44810'],6417,'maison périurbaine avec surface de toiture'],
  ['Basse-Goulaine','basse-goulaine',['44115'],9311,'pavillon résidentiel'],
  ['Thouaré-sur-Loire','thouare-sur-loire',['44470'],10514,'maison de bord de Loire'],
  ['Sautron','sautron',['44880'],8804,'maison familiale sur secteur résidentiel'],
  ['Le Pellerin','le-pellerin',['44640'],5261,'maison de bord de Loire'],
  ['Indre','indre',['44610'],4149,'maison urbaine en rive de Loire'],
  ['Brains','brains',['44830'],2925,'maison rurale proche métropole'],
  ['Grandchamps-des-Fontaines','grandchamps-des-fontaines',['44119'],6651,'pavillon résidentiel'],
  ['Saint-Mars-du-Désert','saint-mars-du-desert',['44850'],5143,'maison périurbaine'],
  ['Mauves-sur-Loire','mauves-sur-loire',['44470'],3379,'maison en coteau de Loire'],
  ['Gorges','gorges',['44190'],4921,'maison proche Clisson'],
  ['Montbert','montbert',['44140'],3357,'pavillon rural'],
  ['Corcoué-sur-Logne','corcoue-sur-logne',['44650'],3052,'maison de campagne'],
  ['Port-Saint-Père','port-saint-pere',['44710'],3029,'maison de bourg'],
  ['Rouans','rouans',['44640'],3149,'maison du pays de Retz'],
  ['Villeneuve-en-Retz','villeneuve-en-retz',['44580'],5021,'maison proche littoral'],
  ['Préfailles','prefailles',['44770'],2440,'résidence littorale'],
  ['Saint-Père-en-Retz','saint-pere-en-retz',['44320'],4650,'maison du pays de Retz'],
  ['Paimbœuf','paimboeuf',['44560'],3100,'maison en estuaire'],
  ['Trignac','trignac',['44570'],8200,'maison proche Saint-Nazaire'],
  ['Saint-Lyphard','saint-lyphard',['44410'],4900,'maison de Brière'],
  ['Batz-sur-Mer','batz-sur-mer',['44740'],3000,'maison littorale'],
  ['Mesquer','mesquer',['44420'],2100,'maison de côte sauvage'],
  ['Piriac-sur-Mer','piriac-sur-mer',['44420'],2400,'maison littorale de caractère']
].map(([name,slug,postalCodes,population,profile])=>({name,slug,postalCodes,population,profile})) as Commune[];

export const cityBlocks = (commune: Commune, index: number) => {
  const intros = [
    `Contrairement aux idées reçues, les ${commune.population.toLocaleString('fr-FR')} habitants de ${commune.name} disposent d’un gisement solaire suffisant : 1 800 heures de soleil annuelles permettent un retour généralement étudié sur 9 à 12 ans.`,
    `Une installation de 6 kWc à ${commune.name} peut produire autour de 6 300 à 6 900 kWh par an. Cette énergie couvre le talon du logement, le ballon, une partie de la PAC et les recharges programmées.`,
    `Les panneaux produisent avec la luminosité, pas avec la chaleur. À ${commune.name}, le climat tempéré évite certaines pertes estivales tout en conservant une production diffuse par temps couvert.`,
    `Le prix de l’électricité renforce l’intérêt de l’autoconsommation à ${commune.name}. L’enjeu n’est pas de remplir la toiture, mais de rapprocher la puissance des usages réels du foyer.`,
    `Le combo PAC air-air et solaire est particulièrement cohérent à ${commune.name} : la production alimente chauffage d’intersaison, rafraîchissement et eau chaude pilotée.`,
    `Une ${commune.profile} offre un profil intéressant pour des modules N-type à haut rendement, posés en surimposition avec une ventilation naturelle.`,
    `QualiPV RGE, assurance décennale, étude d’ombre et raccordement Enedis sont indispensables à ${commune.name} pour sécuriser le chantier et accéder aux dispositifs applicables.`,
    `Même avec des hivers atlantiques, une toiture bien orientée à ${commune.name} produit pendant 25 à 30 ans. La rentabilité se construit avec une simulation mensuelle et un devis transparent.`
  ];
  const advice = [
    `À ${commune.name}, commencez par une déclaration préalable, puis vérifiez la qualification QualiPV RGE et l’assurance décennale photovoltaïque. La prime à l’autoconsommation, la TVA applicable et le tarif EDF OA doivent être datés dans l’étude.`,
    `Nantes Métropole et la Région Pays de la Loire font évoluer leurs dispositifs énergie. Ne déduisez aucune aide non confirmée : demandez au professionnel de séparer prix installé, prime nationale, fiscalité et financement.`,
    `Le raccordement Enedis 44 et la vente du surplus ne se résument pas à une case. Le devis doit préciser qui gère la demande, le Consuel si nécessaire et la mise en service.`,
    `En secteur patrimonial, le service urbanisme de ${commune.name} peut encadrer la teinte, le calepinage ou la visibilité des modules. Un plan de toiture propre accélère l’instruction.`,
    `Pour une résidence secondaire ou un foyer absent en journée, comparez pilotage du chauffe-eau, recharge programmée et batterie LFP avant d’ajouter du stockage coûteux.`
  ];
  const heritage = [
    `À l’image des Machines de l’Île, qui rendent visible une mécanique complexe, le solaire moderne doit rendre ses flux lisibles : production, import réseau, surplus et consommation pilotée.`,
    `Du château des ducs de Bretagne aux maisons en tuffeau, le patrimoine nantais rappelle qu’une amélioration durable respecte d’abord le bâti. Sur ardoise, la surimposition et les passages discrets sont essentiels.`,
    `L’estuaire de la Loire concentre depuis longtemps industrie et énergie. Le photovoltaïque résidentiel prolonge cette histoire à l’échelle de la maison, sans bruit ni émission pendant la production.`,
    `À La Baule et sur la presqu’île, une résidence secondaire équipée d’un monitoring à distance peut piloter ballon, ventilation et recharge tout en surveillant chaque module.`,
    `Le canal de Nantes à Brest illustre une infrastructure pensée pour durer. Une centrale solaire suit la même logique : composants remplaçables, garanties documentées et accès permanent aux données.`
  ];
  const markets = [
    `À ${commune.name}, un projet cohérent se situe généralement entre 7 500 et 10 000 € pour 3 kWc, 12 500 à 16 500 € pour 6 kWc et 16 500 à 22 000 € pour 9 kWc, hors contraintes particulières.`,
    `Le prix par kWc est utile, mais il ne mesure ni l’étanchéité, ni la qualité électrique, ni le service après-vente. Comparez toujours les références exactes, les garanties et le productible annoncé.`,
    `Une batterie LFP de 5 à 10 kWh ajoute environ 4 000 à 8 000 €. Elle devient pertinente lorsque le surplus de journée et la consommation du soir sont suffisamment réguliers.`,
    `Les micro-onduleurs Enphase IQ8 facilitent le suivi panneau par panneau sur les toitures à plusieurs orientations. Un onduleur hybride peut être plus rationnel sur un champ homogène et évolutif.`,
    `Une hausse locale des installations ne garantit pas chaque projet. Le taux d’autoconsommation, le crédit et l’état de la toiture influencent davantage le retour que le seul nombre d’heures de soleil.`
  ];
  return { intro: intros[index % intros.length], advice: advice[(index * 3 + 1) % advice.length], heritage: heritage[(index * 2 + 2) % heritage.length], market: markets[(index * 4 + 1) % markets.length] };
};

export const localMetrics = (commune: Commune, index: number) => {
  const coastal = /littoral|côte|balnéaire|estuaire|mer|Baule|Nazaire|Pornic|Croisic|Pouliguen|Turballe|Piriac|Mesquer|Préfailles/i.test(`${commune.name} ${commune.profile}`);
  const urban = /Nantes|Rezé|Herblain|Orvault|métropole|urbaine|Bouguenais|Carquefou/i.test(`${commune.name} ${commune.profile}`);
  const vineyard = /vignoble|Clisson|Vallet|Gorges|Goulaine|Fouassière|Bottereau/i.test(`${commune.name} ${commune.profile}`);
  const yieldPerKwc = coastal ? 1125 + (index % 5) * 9 : urban ? 1085 + (index % 5) * 8 : vineyard ? 1100 + (index % 4) * 9 : 1065 + (index % 6) * 10;
  const roofTypes = coastal
    ? [`Les vents d’ouest et les embruns demandent des fixations certifiées, des composants résistants à la corrosion et un contrôle précis des rives.`, `Sur le littoral, la prise au vent et le sel marin comptent autant que l’orientation. Le devis doit préciser la classe de résistance des fixations.`]
    : urban
      ? [`Les maisons urbaines combinent souvent ardoise, extensions et ombres de cheminées. Un relevé panneau par panneau évite les estimations trop optimistes.`, `En zone dense, la visibilité depuis la rue et les périmètres patrimoniaux imposent un calepinage régulier et une déclaration préalable complète.`]
      : vineyard
        ? [`Les maisons du vignoble offrent souvent de grands pans, mais les arbres, dépendances et noues exigent une étude d’ombre sur les quatre saisons.`, `La toiture ancienne doit être contrôlée avant de garantir 25 à 30 ans d’exploitation photovoltaïque.`]
        : [`Les pavillons disposent souvent d’une surface simple. Il faut néanmoins contrôler charpente, écran sous-toiture, terre électrique et futurs usages.`, `Une grande toiture ne justifie pas automatiquement 9 kWc : l’autoconsommation et les projets de PAC ou véhicule électrique restent décisifs.`];
  const angles = [
    `À ${commune.name}, le profil « ${commune.profile} » conduit souvent à comparer 3, 6 et 9 kWc avec le même relevé de consommation.`,
    `Pour ${commune.name}, les usages de journée — télétravail, ballon, PAC et recharge — déterminent la valeur réelle de chaque kWh produit.`,
    `Le meilleur projet à ${commune.name} n’est pas forcément le plus puissant : c’est celui dont la courbe de production épouse le mieux le rythme du logement.`,
    `À ${commune.name}, un module N-type full black combine rendement, faible dégradation et intégration discrète sur ardoise ou tuile sombre.`,
    `Une résidence peu occupée à ${commune.name} doit privilégier monitoring, alertes et pilotage à distance avant d’acheter une batterie.`
  ];
  return { coastal, urban, vineyard, yieldPerKwc, sixKwc: Math.round(yieldPerKwc * 6), nineKwc: Math.round(yieldPerKwc * 9), roofType: roofTypes[index % roofTypes.length], localAngle: angles[index % angles.length], planning: `La mairie de ${commune.name}, Enedis 44 et le professionnel RGE interviennent à des étapes différentes : le planning doit les distinguer clairement.` };
};
