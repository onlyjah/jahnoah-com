import {readFile,readdir,writeFile} from 'node:fs/promises'
import matter from 'gray-matter'
import {marked} from 'marked'
import {markedSmartypants} from 'marked-smartypants'
// Preserve Astro's original typographic rendering; source Markdown stays immutable.
marked.use(markedSmartypants())
const posts=[]
for(const name of (await readdir('src/content/journal')).filter(n=>n.endsWith('.md')).sort()){
 const {data,content}=matter(await readFile(`src/content/journal/${name}`,'utf8'))
 if(data.draft)continue
 if(typeof data.title!=='string'||typeof data.description!=='string'||!Number.isFinite(new Date(data.date).getTime()))throw new Error(`Invalid journal metadata: ${name}`)
 if((data.tags||[]).some(t=>!['yoga','art','tech'].includes(t)))throw new Error(`Unknown topic: ${name}`)
 if(data.dateType&&!['Published','Captured'].includes(data.dateType))throw new Error(`Invalid date type: ${name}`)
 posts.push({...data,id:name.slice(0,-3),date:new Date(data.date).toISOString(),dateType:data.dateType||'Published',tags:data.tags||[],html:await marked(content)})
}
posts.sort((a,b)=>new Date(b.date)-new Date(a.date)||a.id.localeCompare(b.id))
await writeFile('src/content/journal.generated.json',JSON.stringify(posts,null,2)+'\n')
const xml=s=>String(s).replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]))
const origin='https://jahnoah.com'
const items=posts.map(p=>{const url=`${origin}/Journal/${p.id}/`;return `<item><title>${xml(p.title)}</title><link>${xml(url)}</link><guid isPermaLink="true">${xml(url)}</guid><description>${xml(p.description)}</description><category>${xml(p.category)}</category>${p.dateType==='Published'?`<pubDate>${new Date(p.date).toUTCString()}</pubDate>`:''}</item>`}).join('')
await writeFile('public/feed.xml',`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Jah Noah journal</title><link>${origin}/Journal/</link><description>Jah Noah. Journal.</description><language>en-us</language><atom:link href="${origin}/feed.xml" rel="self" type="application/rss+xml"/>${posts[0]?`<lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>`:''}${items}</channel></rss>`)
console.log(`Compiled ${posts.length} published journal entries and RSS`)
