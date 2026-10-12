import urllib.request
import re

url = "https://static.bokun.io/OnlineSalesRenderer.0fd6d3554396aec0420f.js"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, timeout=15) as resp:
    js = resp.read().decode("utf-8")
    for word in ["bookingChannel", "experience", "pricing", "graphql", "activity", "price", "rates"]:
        matches = [m.start() for m in re.finditer(word, js, re.I)]
        print(f"Word '{word}': {len(matches)} occurrences")
        for idx in matches[:3]:
            print(f"  [{word}]", js[max(0, idx-40):min(len(js), idx+60)])
