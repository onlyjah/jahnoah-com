"""Compare the migration's rendered main content against an original Astro build.
Usage: python3 scripts/verify-content-parity.py /absolute/path/to/original/dist
The baseline is intentionally external, not a second deployed application.
"""
from pathlib import Path
from html.parser import HTMLParser
import re,sys
class MainText(HTMLParser):
 def __init__(self,text):
  super().__init__(convert_charrefs=True);self.active=False;self.skip=0;self.parts=[];self.feed(text)
 def handle_starttag(self,tag,attrs):
  if tag=='main':self.active=True
  if self.active and tag in ['br','p','div','section','article','h1','h2','h3','li','time','nav','blockquote','figcaption']:self.parts.append(' ')
  if self.active and tag in ['script','style']:self.skip+=1
 def handle_endtag(self,tag):
  if self.active and tag in ['script','style']:self.skip-=1
  if self.active and tag in ['p','div','section','article','h1','h2','h3','li','time','nav','blockquote','figcaption']:self.parts.append(' ')
  if tag=='main':self.active=False
 def handle_data(self,data):
  if self.active and not self.skip:self.parts.append(data)
 def text(self):return re.sub(r'\s+',' ',''.join(self.parts)).strip()
baseline=Path(sys.argv[1]);output=Path(__file__).resolve().parents[1]/'dist';count=0
for page in baseline.rglob('*.html'):
 relative=page.relative_to(baseline)
 if relative.parts[0] in ['404.html','Yoga','Arts','Tech']:continue
 old=MainText(page.read_text()).text();new=MainText((output/relative).read_text()).text()
 assert old==new,f'Content changed at {relative}\nOLD: {old[:300]}\nNEW: {new[:300]}'
 count+=1
print(f'Passed: exact normalized main-content text matches original Astro output on {count} pages.')
