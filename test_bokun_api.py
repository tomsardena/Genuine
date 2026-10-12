import urllib.request
import json

channel_id = "41d69952-300b-48f4-8d8f-c9137aaab33b"
product_id = "1166356"

candidates = [
    f"https://extranet.bokun.io/online-sales/api/experience/{product_id}?bookingChannelId={channel_id}",
    f"https://extranet.bokun.io/online-sales/api/{channel_id}/experience/{product_id}",
    f"https://extranet.bokun.io/online-sales/{channel_id}/experience/{product_id}/details",
    f"https://extranet.bokun.io/online-sales/{channel_id}/experience/{product_id}/price",
    f"https://extranet.bokun.io/online-sales/{channel_id}/experience/{product_id}/pricing",
    f"https://widgets.bokun.io/online-sales/api/{channel_id}/experience/{product_id}",
    f"https://widgets.bokun.io/online-sales/{channel_id}/experience/{product_id}",
    f"https://api.bokun.io/booking-channel/{channel_id}/experience/{product_id}",
    f"https://extranet.bokun.io/booking-channel/{channel_id}/experience/{product_id}",
    f"https://extranet.bokun.io/online-sales-api/{channel_id}/experience/{product_id}",
    f"https://extranet.bokun.io/online-sales/api/v1/{channel_id}/experience/{product_id}",
]

for url in candidates:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            print("SUCCESS 200:", url)
            content = resp.read()
            print("  Response len:", len(content), content[:200])
    except urllib.error.HTTPError as e:
        print(f"HTTP {e.code}:", url)
    except Exception as e:
        print(f"Err {e}:", url)
