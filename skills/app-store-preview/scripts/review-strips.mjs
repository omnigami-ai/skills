// Review every portrait transition in one browser. Each strip is 12 consecutive
// frames at the film's fps, arranged left-to-right, then down, as render.mjs --strip.
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import { requireChrome, chromeArgs } from './chrome.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const film = path.join(root, 'reference'), out = path.join(root, 'out/rev3/strips');
const MOVES = {
 '9:16': [
 ['01-hook-arrival',0.5], ['02-hook-last-plant',1.5], ['03-hook-to-card',1.8],
 ['04-card-entry',2], ['05-isolated-cursor-entry',2.15], ['06-isolated-press',2.7],
 ['07-window-rise',3], ['08-window-settle',3.4], ['09-water-cursor-entry',3.4],
 ['10-first-water-press',3.95], ['11-last-water-press',4.45], ['12-water-result-callout',4.75],
 ['13-second-callout',5.15], ['14-add-transition',5.85], ['15-add-headline',6.1],
 ['16-search-entry',6.15], ['17-search-press-and-type',6.7], ['18-search-type-and-result',7.2],
 ['19-matches-callout',7.75], ['20-species-cursor-entry',7.9], ['21-species-press',8.45],
 ['22-name-callout',9], ['23-settings-camera-start',9.4], ['24-settings-camera-land',9.8],
 ['25-add-button-entry',9.9], ['26-add-button-press',10.45], ['27-result-camera-return',10.8],
 ['28-rescue-transition',11.85], ['29-rescue-callouts',12.6], ['30-rescue-second-callout',13],
 ['31-swipe-cursor-entry',13.25], ['32-scroll-and-camera',13.8], ['33-scroll-land',14.15],
 ['34-reminder-entry',14.65], ['35-reminder-press',15.2], ['36-reminder-result',15.6],
 ['37-camera-return',16.4], ['38-light-transition',16.85], ['39-light-headline',17.1],
 ['40-light-camera-land',17.3], ['41-window-reading',17.75], ['42-stand-entry',18.65],
 ['43-stand-press',19.2], ['44-stand-reading',19.6], ['45-window-drop',22],
 ['46-recap-first',22.5], ['47-recap-second',23], ['48-recap-last',23.5],
 ['49-recap-out',24.15], ['50-seed-and-mark',24.4], ['51-mark-settle',24.75],
 ['52-tagline',25.1], ['53-rating',25.5], ['54-cta',25.9], ['55-lockup-slide',26.3],
 ['56-platform-and-lockup-land',26.65], ['57-slow-push',27.2], ['58-final-hold',27.6],
 ],
 '886:1920': [
 ['01-opening-seed',0], ['02-opening-mark',0.15], ['03-opening-words',0.4],
 ['04-opening-clear-and-caption',1.55], ['05-first-touch-entry',1.9], ['06-first-water-press',2.45],
 ['07-second-touch-entry',2.9], ['08-second-water-press',3.45], ['09-last-touch-entry',3.9],
 ['10-last-water-press',4.45], ['11-add-transition',5.75], ['12-add-caption',5.95],
 ['13-search-touch-entry',6.4], ['14-search-press',6.95], ['15-search-typing',7.2],
 ['16-search-result',7.6], ['17-species-entry',8.15], ['18-species-press',8.7],
 ['19-add-plant-entry',9.65], ['20-add-plant-press',10.2], ['21-rescue-and-plus',11.75],
 ['22-rescue-caption',11.95], ['23-swipe-entry',13.25], ['24-captured-scroll',13.95],
 ['25-scroll-land-and-exit',14.3], ['26-reminder-entry',14.65], ['27-reminder-press',15.2],
 ['28-light-transition',16.75], ['29-light-caption',16.95], ['30-stand-touch-entry',18.65],
 ['31-stand-press',19.2], ['32-shelf-and-plus-out',21.75], ['33-shelf-caption',21.95],
 ['34-end-frost-and-mark',24.5], ['35-disclosure-settle',24.8], ['36-lockup-slide',26.3],
 ['37-lockup-land',26.65], ['38-slow-push',27.2], ['39-final-hold',27.6],
 ],
};
const types = { '.html':'text/html', '.js':'text/javascript', '.json':'application/json', '.svg':'image/svg+xml', '.ttf':'font/ttf', '.webp':'image/webp' };
const server = createServer(async (req,res) => {
 try { const f=path.join(film,decodeURIComponent(new URL(req.url,'http://x').pathname));
  const data = await readFile(f);
  res.writeHead(200,{'content-type':types[path.extname(f)]||'application/octet-stream'}).end(data);
 } catch { res.writeHead(404).end(); }
});
await new Promise(r => server.listen(0,'127.0.0.1',r));
const browser = await puppeteer.launch({ executablePath:requireChrome(),headless:true,args:['--force-color-profile=srgb','--disable-lcd-text','--font-render-hinting=none',...chromeArgs()] });
try {
 const page = await browser.newPage(); page.on('pageerror',e=>{throw e;});
 await page.goto(`http://127.0.0.1:${server.address().port}/index.html?render=1`);
 await page.evaluate(()=>window.template.prepare());
 const manifest=[];
 for(const [size,moves] of Object.entries(MOVES)) for(const [label,start] of moves) {
  const dir=path.join(out,size.replace(':','x')); await mkdir(dir,{recursive:true});
  const data=await page.evaluate(({size,start,label})=>{
   const T=window.template, values={...T.defaults(),size}, c=document.createElement('canvas');
   const h=Math.round(316*T.sizes[size][1]/T.sizes[size][0]), pitch=h+22;
   c.width=1920;c.height=42+2*pitch;
   const ctx=c.getContext('2d',{willReadFrequently:true});ctx.reset();ctx.fillStyle='#ffffff';ctx.fillRect(0,0,c.width,c.height);
   ctx.fillStyle='#111';ctx.font='20px sans-serif';ctx.fillText(`${size} · ${label} · ${start.toFixed(2)} s · 12 frames at 30 fps`,12,26);
   for(let i=0;i<12;i++) { const t=start+i/T.fps, f=T.seek(t,values), x=(i%6)*320+2, y=42+Math.floor(i/6)*pitch;
    ctx.drawImage(f,x,y,316,h);ctx.fillStyle='#111';ctx.font='12px sans-serif';ctx.fillText(t.toFixed(3),x+4,y+h+13);
   }
   return c.toDataURL('image/png').split(',')[1];
  },{size,start,label});
  const file=path.join(dir,label+'.png');await writeFile(file,Buffer.from(data,'base64'));
  manifest.push({size,label,start,frames:12,file:path.relative(root,file)});
 }
 await mkdir(out,{recursive:true});await writeFile(path.join(out,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
 console.log(`Wrote ${manifest.length} twelve-frame strips to ${out}`);
} finally {await browser.close();await new Promise(r=>server.close(r));}
