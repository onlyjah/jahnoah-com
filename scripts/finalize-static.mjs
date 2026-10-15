import {cp,mkdir,copyFile,writeFile,rm} from 'node:fs/promises'
await rm('dist',{recursive:true,force:true})
await cp('.output/public','dist',{recursive:true,force:true})
await copyFile('dist/404/index.html','dist/404.html')
for(const [from,to] of Object.entries({Yoga:'/yoga/',Arts:'/art/',Tech:'/tech/'})){
 await mkdir(`dist/${from}`,{recursive:true})
 await writeFile(`dist/${from}/index.html`,`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${to}"><link rel="canonical" href="https://jahnoah.com${to}"><title>Jah Noah</title></head><body><a href="${to}">${to}</a></body></html>`)
}
