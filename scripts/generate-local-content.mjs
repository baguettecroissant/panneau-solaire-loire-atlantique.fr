import { readFile, writeFile } from 'node:fs/promises';
const communes=JSON.parse(await readFile(new URL('../src/data/communes.json',import.meta.url),'utf8'));
const angles=['toiture et usages','aides et démarches','patrimoine et innovation','données marché','FAQ locale'];
const manifest=communes.map((city,index)=>({slug:city.slug,city:city.name,postalCode:city.postalCodes[0],variant:index%8,productionPerKwc:1065+(index%7)*10,requiredBlocks:angles,internalLinks:communes.filter((_,i)=>i!==index).sort((a,b)=>Math.abs(a.population-city.population)-Math.abs(b.population-city.population)).slice(0,5).map(c=>c.slug)}));
await writeFile(new URL('../src/data/local-content-manifest.json',import.meta.url),JSON.stringify(manifest,null,2)+'\n');
console.log(`${manifest.length} profils locaux générés avec 5 blocs et maillage de proximité.`);
