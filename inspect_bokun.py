import urllib.request

url = "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=41d69952-300b-48f4-8d8f-c9137aaab33b&isDuda=true"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, timeout=15) as resp:
    js = resp.read().decode("utf-8")
    print(js)
