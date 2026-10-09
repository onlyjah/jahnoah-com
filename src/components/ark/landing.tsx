import { useEffect, useState } from 'react'
import { ArkOverview, type ArkCopy } from './blocks/ark-overview'
import fallback from './copy.json'
// Jah Noah [Q007]: "all my projects are sovereign"
// Engineering: this public copy request shares the Ark source, while the host's root remains JahNoah.
export function ArkLanding(){const [copy,setCopy]=useState<ArkCopy>(fallback);useEffect(()=>{const controller=new AbortController();fetch('https://ark-core-testing.up.railway.app/app/client-copy.json',{credentials:'omit',signal:controller.signal}).then(async r=>{if(!r.ok)return;const v=await r.json();if(v.version&&typeof v.title==='string'&&typeof v.quote==='string'&&typeof v.author==='string'&&typeof v.quote_id==='string')setCopy(v)}).catch(()=>{});return()=>controller.abort()},[]);return <ArkOverview copy={copy} workspaceUrl="https://ark-core-testing.up.railway.app/app/" />}
