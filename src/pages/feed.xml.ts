import {getCollection} from 'astro:content';
const escapeXml=(value:string)=>value.replace(/[<>&"']/g,char=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[char]!));

export async function GET(){
  const posts=(await getCollection('journal',({data})=>!data.draft)).sort((a,b)=>b.data.date.getTime()-a.data.date.getTime()||a.id.localeCompare(b.id));
  const origin='https://jahnoah.com';
  const items=posts.map(post=>{
    const url=`${origin}/Journal/${post.id}/`;
    return `<item><title>${escapeXml(post.data.title)}</title><link>${escapeXml(url)}</link><guid isPermaLink="true">${escapeXml(url)}</guid><description>${escapeXml(post.data.description)}</description><category>${escapeXml(post.data.category)}</category>${post.data.dateType==='Published'?`<pubDate>${post.data.date.toUTCString()}</pubDate>`:''}</item>`;
  }).join('');
  const latest=posts[0]?.data.date;
  const xml=`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Jah Noah journal</title><link>${origin}/Journal/</link><description>Jah Noah. Journal.</description><language>en-us</language><atom:link href="${origin}/feed.xml" rel="self" type="application/rss+xml"/>${latest?`<lastBuildDate>${latest.toUTCString()}</lastBuildDate>`:''}${items}</channel></rss>`;
  return new Response(xml,{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}});
}
