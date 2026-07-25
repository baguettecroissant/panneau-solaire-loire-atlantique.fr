import { writeFile } from 'node:fs/promises';
const endpoint='https://geo.api.gouv.fr/departements/44/communes?fields=nom,code,codesPostaux,population&format=json&geometry=centre';
const response=await fetch(endpoint);
if(!response.ok) throw new Error(`API communes indisponible: ${response.status}`);
const data=(await response.json()).filter(c=>Number(c.population)>=2000).sort((a,b)=>b.population-a.population).map(c=>({name:c.nom,slug:c.nom.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''),postalCodes:c.codesPostaux,population:c.population,profile:'profil local à enrichir après vérification éditoriale'}));
await writeFile(new URL('../src/data/communes-api.json',import.meta.url),JSON.stringify(data,null,2)+'\n');
console.log(`${data.length} communes de Loire-Atlantique de plus de 2 000 habitants enregistrées.`);
