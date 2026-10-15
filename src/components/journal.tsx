import { useRouterState } from '@tanstack/react-router'
import { topicNames, topicFeatures, type Topic } from '../data/topics'
import posts from '../content/journal.generated.json'
import Connect from './Connect'
export function TopicLinks(){
 const path=useRouterState({select:s=>s.location.pathname})
 return <nav className="topic-links" aria-label="Journal topics">{topicNames.map(topic=><a key={topic} href={`/${topic}/`} aria-current={path.split('/')[1]===topic?'page':undefined}>{topicFeatures[topic].label}</a>)}</nav>
}
export function JournalList({limit=99,kind,topic}:{limit?:number;kind?:string;topic?:string}){
 return <div>{posts.filter(p=>(!kind||p.kind===kind)&&(!topic||p.tags.includes(topic))).slice(0,limit).map(post=><a key={post.id} className="journal-row" href={`/Journal/${post.id}/`}><time className="date" dateTime={post.date}>{post.dateType==='Captured'?'Captured ':''}{new Date(post.date).toLocaleDateString('en-US',{month:'short',day:'2-digit',year:'numeric',timeZone:'UTC'})}</time><div><h3>{post.title}</h3><p>{post.description}</p></div><span className="tag">{post.tags.length?post.tags.map(tag=>topicFeatures[tag as Topic].label).join(' · '):post.category}</span></a>)}</div>
}
export function JournalEntry({id}:{id:string}){
 const post=posts.find(p=>p.id===id)!
 return <article className="article journal-article"><a className="text-link" href="/Journal/">Journal</a><h1>{post.title}</h1><div className="article-meta"><span>Jah Noah</span><time dateTime={post.date}>{post.dateType==='Captured'?'Captured ':''}{new Date(post.date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'})}</time><nav className="article-topics" aria-label="Entry topics">{post.tags.map(tag=><a key={tag} href={`/${tag}/`}>{topicFeatures[tag as Topic].label}</a>)}</nav></div><div className="prose" dangerouslySetInnerHTML={{__html:post.html}} />{post.kind?.startsWith('Archived')&&post.sourceUrl&&<p className="archive-credit">{post.kind==='Archived excerpt'?'Excerpt · ':''}<a href={post.sourceUrl}>Wayback Machine ↗</a></p>}</article>
}
export function TopicFeature({topic}:{topic:Topic}){
 const feature=topicFeatures[topic]
 return <header className={`topic-feature topic-${topic}`}><h1>{feature.label}</h1><p className="lede">{feature.headline}</p>{feature.banner&&<figure><img src={feature.banner.src} alt={feature.banner.alt} loading="eager"/><figcaption><a href={feature.banner.creditUrl}>{feature.banner.credit} · Credits ↗</a></figcaption></figure>}<div className="hero-actions">{feature.bookingUrl?<a className="ui-button" href={feature.bookingUrl}>Book {feature.label.toLowerCase()} consultation <span className="link-kind">External ↗</span></a>:<Connect kind={topic} label={`Consult · ${feature.label}`}/ >}{feature.paymentUrl&&<a className="ui-button ui-button-outline" href={feature.paymentUrl}>Pay for {feature.label.toLowerCase()} consultation <span className="link-kind">External checkout ↗</span></a>}</div>{feature.video&&<section className="yoga-video"><h2>{feature.video.title}</h2><p className="small">Jah Noah · YouTube</p><div className="video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${feature.video.id}`} title={`${feature.video.title} — Jah Noah`} loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><div className="video-links"><a href={`https://www.youtube.com/watch?v=${feature.video.id}`}>Watch on YouTube <span className="link-kind">External ↗</span></a><a href="https://www.youtube.com/@Jah_noah">Jah_Noah channel <span className="link-kind">External ↗</span></a></div></section>}</header>
}
