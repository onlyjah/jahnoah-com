import {createFileRoute,notFound} from '@tanstack/react-router'
import About from '../features/about'
import Credits from '../features/credits'
import Journal from '../features/journal'
import TopicPage from '../features/topic'
import {JournalEntry} from '../components/journal'
import posts from '../content/journal.generated.json'
import {topicNames,type Topic} from '../data/topics'
function pageMeta(path:string){
 if(path==='about')return {title:'About — Jah Noah',description:'Artist | Technologist | Yogi'}
 if(path==='credits')return {title:'Photo credits — Jah Noah',description:'Example photograph sources and licenses.'}
 if(path==='Journal')return {title:'Journal — Jah Noah',description:'Jah Noah. Journal.'}
 if(topicNames.includes(path as Topic)){const title=path==='tech'?'Tech':path==='yoga'?'Yoga':'Art';return {title:`${title} — Jah Noah`,description:`Jah Noah. ${title}.`}}
 const post=posts.find(p=>path===`Journal/${p.id}`)
 if(post)return {title:`${post.title} — Jah Noah`,description:post.description}
 return {title:'Page not found — Jah Noah',description:'Jah Noah. Development, public speaking, yoga, and art.'}
}
export const Route=createFileRoute('/$')({beforeLoad:({params})=>{
 const path=params._splat?.replace(/\/$/,'')||''
 if(!['about','credits','Journal','404',...topicNames,...posts.map(p=>`Journal/${p.id}`)].includes(path))throw notFound()
},head:({params})=>{const m=pageMeta(params._splat?.replace(/\/$/,'')||'');return {meta:[{title:m.title},{name:'description',content:m.description},{property:'og:title',content:m.title},{property:'og:description',content:m.description}]}},component:Page})
function Page(){const path=Route.useParams()._splat?.replace(/\/$/,'')||''
 if(path==='about')return <About/>
 if(path==='credits')return <Credits/>
 if(path==='Journal')return <Journal/>
 if(topicNames.includes(path as Topic))return <TopicPage topic={path as Topic}/>
 if(path.startsWith('Journal/'))return <JournalEntry id={path.slice(8)}/>
 return <section className="page-intro"><h1 className="page-title">404</h1><a className="text-link" href="/">Home</a></section>
}
