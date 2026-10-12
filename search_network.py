import urllib.request
import re

url = "https://static.bokun.io/OnlineSalesContent.99ef0d148deddd49ffb1.js"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, timeout=15) as resp:
    js = resp.read().decode("utf-8")
    # search for axios.create or baseURL
    matches = re.findall(r'baseURL:\s*["\'`][^"\'`]+["\'`]', js)
    print("baseURL matches:", matches)
    matches2 = re.findall(r'axios\.create\([^)]+\)', js)
    print("axios.create matches:", matches2)
    # search for /widgets/
    w_matches = re.findall(r'`/widgets/[^`]+`|"/widgets/[^"]+"', js)
    print("/widgets/ routes:", set(w_matches))
