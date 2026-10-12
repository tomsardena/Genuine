import urllib.request
import re

url = "https://static.bokun.io/OnlineSalesRenderer.0fd6d3554396aec0420f.js"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, timeout=15) as resp:
    js = resp.read().decode("utf-8")
    idx = js.find('WidgetFrontpageChunk')
    print(js[idx-100:idx+400])
