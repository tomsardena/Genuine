import urllib.request
import json

channel_id = "41d69952-300b-48f4-8d8f-c9137aaab33b"

for host in ["widgets.bokun.io", "extranet.bokun.io", "api.bokun.io"]:
    for path in [
        f"/widgets/{channel_id}/mainConfig/en",
        f"/widgets/{channel_id}/mainConfig/en_GB",
        f"/widgets/{channel_id}/mainConfig/default",
        f"/widgets/{channel_id}/mainConfig/",
        f"/widgets/booking/{channel_id}",
    ]:
        url = f"https://{host}{path}"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "Accept": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=5) as resp:
                print("SUCCESS 200:", url)
                data = resp.read()
                print("  Len:", len(data), data[:150])
        except urllib.error.HTTPError as e:
            print(f"HTTP {e.code}:", url)
        except Exception as e:
            print(f"Err {e}:", url)
