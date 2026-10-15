import { createRootRoute, HeadContent, Outlet, Scripts, useRouterState } from '@tanstack/react-router'
import { EditorialLayout } from '@onlyjah/ui/layouts/editorial-layout'
import Connect from '../components/Connect'
import stylesheet from '../styles/global.css?url'
export const Route=createRootRoute({head:()=>({meta:[{charSet:'utf-8'},{name:'viewport',content:'width=device-width, initial-scale=1'},{title:'Jah Noah — Development & Public Speaking'},{name:'description',content:'Jah Noah. Development, public speaking, yoga, and art.'}],links:[{rel:'stylesheet',href:stylesheet},{rel:'icon',href:'/favicon.svg'},{rel:'alternate',type:'application/rss+xml',title:'Jah Noah journal',href:'/feed.xml'}]}),component:Root,notFoundComponent:()=> <section className="page-intro"><h1 className="page-title">404</h1><a className="text-link" href="/">Home</a></section>})
function Root(){
 const path=useRouterState({select:s=>s.location.pathname})
 const canonical=new URL(path,'https://jahnoah.com').href
 const brand=<a className="logo" href="/">Jah Noah.</a>
 return <html lang="en"><head><HeadContent/><link rel="canonical" href={canonical}/><meta property="og:url" content={canonical}/><meta property="og:type" content="website"/><meta name="twitter:card" content="summary"/></head><body><a href="#main" className="skip">Skip to content</a><EditorialLayout header={{brand,links:[{label:'Journal',href:'/Journal'}],actions:<Connect/>,activePath:path}} footer={{brand,links:[{label:'About Jah Noah',href:'/about/'},{label:'OnlyJah External ↗',href:'https://onlyjah.com'},{label:'Photo credits',href:'/credits/'},{label:'Journal RSS · XML feed',href:'/feed.xml'}],note:<span className="small">© {new Date().getFullYear()} Jah Noah</span>}}><Outlet/></EditorialLayout><Scripts/></body></html>
}
