"""Verify rendered navigation, multi-topic membership, source routes and RSS."""
from pathlib import Path
from html.parser import HTMLParser
import re, json, xml.etree.ElementTree as ET

root=Path(__file__).resolve().parents[1]
output=root/'dist'
class Page(HTMLParser):
    def __init__(self,text):
        super().__init__();self.links=[];self.main_nav=[];self.topic_posts=[];self.in_nav=False;self.in_topic=False;self.feed_urls=[]
        self.feed_document(text)
    def feed_document(self,text):
        super().feed(text)
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag=='nav' and attrs.get('aria-label')=='Main navigation':self.in_nav=True
        if tag=='section' and 'topic-journal' in attrs.get('class','').split():self.in_topic=True
        if tag=='link' and attrs.get('rel')=='alternate' and attrs.get('type')=='application/rss+xml':self.feed_urls.append(attrs.get('href'))
        if tag=='a':
            href=attrs.get('href','');self.links.append(href)
            if self.in_nav:self.main_nav.append(href)
            if self.in_topic and href.startswith('/Journal/') and href!='/Journal/':self.topic_posts.append(href)
    def handle_endtag(self,tag):
        if tag=='nav':self.in_nav=False
        if tag=='section':self.in_topic=False

posts={}
for file in (root/'src/content/journal').glob('*.md'):
    front=file.read_text().split('---',2)[1]
    if re.search(r'^draft:\s*true\s*$',front,re.M):continue
    match=re.search(r'^tags:\s*(.*)$',front,re.M)
    posts[file.stem]=set(re.findall(r'\b(yoga|art|tech)\b',match.group(1))) if match else set()

for topic in ['yoga','art','tech']:
    page=Page((output/topic/'index.html').read_text())
    expected={f'/Journal/{slug}/' for slug,tags in posts.items() if topic in tags}
    assert set(page.topic_posts)==expected,(topic,page.topic_posts,expected)
    assert len(page.topic_posts)==len(expected),'Duplicate topic entries'
    assert page.main_nav==['/Journal'],page.main_nav
    assert page.feed_urls==['/feed.xml']
assert all('hello-world' in [href.split('/')[2] for href in Page((output/topic/'index.html').read_text()).topic_posts] for topic in ['yoga','art','tech'])

feed=ET.parse(output/'feed.xml').getroot()
items=feed.findall('./channel/item')
assert len(items)==len(posts),(len(items),len(posts))
urls=[item.findtext('guid') for item in items]
assert len(urls)==len(set(urls))
assert set(urls)=={f'https://jahnoah.com/Journal/{slug}/' for slug in posts}
captured=next(item for item in items if item.findtext('title')=='Art Requires Patience')
assert captured.find('pubDate') is None,'Unknown original publication date must not be asserted'
assert feed.find('./channel/{http://www.w3.org/2005/Atom}link').get('href')=='https://jahnoah.com/feed.xml'

missing=[]
for file in output.rglob('*.html'):
    for url in re.findall(r'(?:href|src)="(/[^"?#]*)',file.read_text()):
        target=output/url.lstrip('/')
        if not target.exists() and not (target/'index.html').exists():missing.append((str(file),url))
assert not missing,missing
print(f'Passed: {len(posts)} journal entries; exact multi-tag membership; main navigation; RSS XML, GUIDs and dates; internal destinations.')
