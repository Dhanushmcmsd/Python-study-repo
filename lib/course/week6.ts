import type { Level } from "../types";

export const WEEK6_LEVELS: Level[] = [
  {
    slug: "week6-level1-api-intro",
    title: "APIs & Live JSON",
    phase: 2,
    day: 6,
    index_in_day: 1,
    level_type: "concept",
    summary: "Call a public HTTPS weather API and read the live JSON it returns.",
    lesson_content: `## What is an API?

An **API** lets programs request data over the internet. Your phone weather app does this every time you open it.

This playground gives you \`fetch_json(url)\` — it performs a real HTTPS GET and returns Python data (same idea as \`requests.get(url).json()\` on your laptop).

### Open-Meteo (no API key)

\`\`\`python
url = "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m"
data = await fetch_json(url)
print(data["current"]["temperature_2m"])
\`\`\`

Numbers change with the real weather. That is the point.

> Use \`await\` — the network call is not instant.`,
    starter_code: `url = "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m,weather_code"\ndata = await fetch_json(url)\ncurrent = data["current"]\nprint("Weather in Delhi")\nprint(f"Temperature: {current['temperature_2m']}°C")\nprint(f"Weather code: {current['weather_code']}")`,
    solution_code: `url = "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m,weather_code"\ndata = await fetch_json(url)\ncurrent = data["current"]\nprint("Weather in Delhi")\nprint(f"Temperature: {current['temperature_2m']}°C")\nprint(f"Weather code: {current['weather_code']}")`,
    validation_type: "contains",
    validation_pattern: "Weather in Delhi",
    hints: ["await fetch_json(url) waits for the live response.", "Live temperature is under data['current']['temperature_2m'].", "Need a different city? Change latitude and longitude."],
  },
  {
    slug: "week6-level2-parse-api",
    title: "Parsing a Real User Profile",
    phase: 2,
    day: 6,
    index_in_day: 2,
    level_type: "run",
    summary: "Read nested fields from JSONPlaceholder user 1.",
    lesson_content: `## Nested JSON from a real API

[JSONPlaceholder](https://jsonplaceholder.typicode.com) is a free fake REST API with real HTTP responses — perfect for practice.

\`\`\`python
user = await fetch_json("https://jsonplaceholder.typicode.com/users/1")
print(user["name"])
print(user["address"]["city"])
\`\`\`

Chain keys the same way you would after \`requests.get(...).json()\`.

### Your task

Print name, email, and city for user 1.`,
    starter_code: `user = await fetch_json("https://jsonplaceholder.typicode.com/users/1")\nprint(f"User: {user['name']}")\nprint(f"Email: {user['email']}")\nprint(f"City: {user['address']['city']}")\nprint(f"Company: {user['company']['name']}")`,
    solution_code: `user = await fetch_json("https://jsonplaceholder.typicode.com/users/1")\nprint(f"User: {user['name']}")\nprint(f"Email: {user['email']}")\nprint(f"City: {user['address']['city']}")\nprint(f"Company: {user['company']['name']}")`,
    validation_type: "contains",
    validation_pattern: "Leanne Graham",
    hints: ["The URL ends with /users/1 — that id is a real resource.", "Nested objects: user['address']['city'].", "Stay on HTTPS public APIs that allow CORS."],
  },
  {
    slug: "week6-level3-nested-json",
    title: "Loop Live Product JSON",
    phase: 2,
    day: 6,
    index_in_day: 3,
    level_type: "modify",
    summary: "Total prices from DummyJSON's live catalog.",
    lesson_content: `## Lists inside live JSON

[DummyJSON](https://dummyjson.com/docs/products) returns a \`products\` array you can loop.

\`\`\`python
catalog = await fetch_json("https://dummyjson.com/products?limit=3")
for product in catalog["products"]:
    print(product["title"], product["price"])
\`\`\`

### Your task

Print each of the first 3 product titles and prices, then print the total.`,
    starter_code: `catalog = await fetch_json("https://dummyjson.com/products?limit=3")\nprint(f"Count: {catalog['total']}")\n\ntotal = 0\nfor product in catalog["products"]:\n    # Print title and price, add to total\n    pass\n\nprint(f"Total: {total}")`,
    solution_code: `catalog = await fetch_json("https://dummyjson.com/products?limit=3")\nprint(f"Count: {catalog['total']}")\n\ntotal = 0\nfor product in catalog["products"]:\n    print(f"  {product['title']}: {product['price']}")\n    total = total + product["price"]\n\nprint(f"Total: {total}")`,
    validation_type: "contains",
    validation_pattern: "Total:",
    hints: ["catalog['products'] is the list.", "Prices are live — totals can change; still print Total:.", "Add product['price'] inside the loop."],
  },
  {
    slug: "week6-level4-api-list",
    title: "Filter a Live User List",
    phase: 2,
    day: 6,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Filter JSONPlaceholder users by city.",
    lesson_content: `## Filtering API lists

Most job scripts: fetch a list, keep rows that match a rule.

### Your task

Load all users, print names in Gwenborough, then print total user count.`,
    starter_code: `users = await fetch_json("https://jsonplaceholder.typicode.com/users")\n\nmatch_count = 0\nprint("Gwenborough:")\nfor user in users:\n    # Print names whose address city is Gwenborough\n    pass\n\nprint(f"Total users: {len(users)}")`,
    solution_code: `users = await fetch_json("https://jsonplaceholder.typicode.com/users")\n\nmatch_count = 0\nprint("Gwenborough:")\nfor user in users:\n    if user["address"]["city"] == "Gwenborough":\n        print(f"  - {user['name']}")\n        match_count = match_count + 1\n\nprint(f"Total users: {len(users)}")\nprint(f"Match count: {match_count}")`,
    validation_type: "contains",
    validation_pattern: "Total users: 10",
    hints: ["Check user['address']['city'] == 'Gwenborough'.", "JSONPlaceholder currently returns 10 users.", "Count matches while you loop."],
  },
  {
    slug: "week6-level5-deep-nested",
    title: "Live Multi-City Weather",
    phase: 2,
    day: 6,
    index_in_day: 5,
    level_type: "exercise",
    summary: "Call Open-Meteo twice and print Delhi and Mumbai temperatures.",
    lesson_content: `## Several live requests

Automation often hits the same API with different parameters.

\`\`\`python
cities = [
    ("Delhi", 28.6139, 77.2090),
    ("Mumbai", 19.0760, 72.8777),
]
\`\`\`

Build the forecast URL for each pair of coordinates, then read \`current.temperature_2m\`.

### Your task

Print \`City: {temp}°C\` for Delhi and Mumbai from live data.`,
    starter_code: `cities = [\n    ("Delhi", 28.6139, 77.2090),\n    ("Mumbai", 19.0760, 72.8777),\n]\n\nfor name, lat, lon in cities:\n    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m"\n    # Fetch JSON, print name and temperature\n    pass`,
    solution_code: `cities = [\n    ("Delhi", 28.6139, 77.2090),\n    ("Mumbai", 19.0760, 72.8777),\n]\n\nfor name, lat, lon in cities:\n    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m"\n    data = await fetch_json(url)\n    temp = data["current"]["temperature_2m"]\n    print(f"{name}: {temp}°C")`,
    validation_type: "contains",
    validation_pattern: "Mumbai:",
    hints: ["await fetch_json(url) inside the loop.", "Temperature: data['current']['temperature_2m'].", "Print both city names so you can see two live readings."],
  },
  {
    slug: "week6-level6-html-intro",
    title: "Fetch Real HTML",
    phase: 2,
    day: 6,
    index_in_day: 6,
    level_type: "run",
    summary: "Download example.com HTML and pull the page title.",
    lesson_content: `## Web scraping starts with a GET

\`fetch_text(url)\` returns the HTML string (like \`requests.get(url).text\`).

\`\`\`python
html = await fetch_text("https://example.com")
start = html.find("<h1>") + 4
end = html.find("</h1>")
print(html[start:end])
\`\`\`

Respect robots.txt and terms of service on real sites. example.com is meant for this.

### Your task

Print the \`<h1>\` text from https://example.com.`,
    starter_code: `html = await fetch_text("https://example.com")\nstart = html.find("<h1>") + 4\nend = html.find("</h1>")\ntitle = html[start:end].strip()\nprint(title)\nprint(f"HTML chars: {len(html)}")`,
    solution_code: `html = await fetch_text("https://example.com")\nstart = html.find("<h1>") + 4\nend = html.find("</h1>")\ntitle = html[start:end].strip()\nprint(title)\nprint(f"HTML chars: {len(html)}")`,
    validation_type: "contains",
    validation_pattern: "Example Domain",
    hints: ["Use fetch_text, not fetch_json — this URL returns HTML.", "find('<h1>') locates the heading.", "Desktop Python: requests + BeautifulSoup."],
  },
  {
    slug: "week6-level7-scrape-prices",
    title: "Average Live Product Prices",
    phase: 2,
    day: 6,
    index_in_day: 7,
    level_type: "exercise",
    summary: "Average the first four DummyJSON product prices.",
    lesson_content: `## Numbers from a live catalog

Regex is useful on HTML. Here the API already parsed JSON — still extract and average like a price scraper.

### Your task

Fetch 4 products, print each price, print the average with two decimals.`,
    starter_code: `catalog = await fetch_json("https://dummyjson.com/products?limit=4")\n\nprices = []\nfor product in catalog["products"]:\n    # Collect product['price'] and print it\n    pass\n\n# Print average`,
    solution_code: `catalog = await fetch_json("https://dummyjson.com/products?limit=4")\n\nprices = []\nfor product in catalog["products"]:\n    price = product["price"]\n    prices.append(price)\n    print(f"Found: {price}")\n\naverage = sum(prices) / len(prices)\nprint(f"Average price: {average:.2f}")`,
    validation_type: "contains",
    validation_pattern: "Average price:",
    hints: ["append each product['price'] to a list.", "average = sum(prices) / len(prices).", "Live catalog — the average will not match a textbook number."],
  },
  {
    slug: "week6-level8-debug-api",
    title: "Debug Live Fetch",
    phase: 2,
    day: 6,
    index_in_day: 8,
    level_type: "debug",
    summary: "Fix missing await and the wrong helper for JSON vs HTML.",
    lesson_content: `## Debug: live APIs

Common bugs:
- Forgetting \`await\`
- Using \`fetch_text\` on JSON (you get a string, not a dict)
- Wrong nested keys

### Your task

Print the first JSONPlaceholder post title and the example.com h1.`,
    starter_code: `post = fetch_json("https://jsonplaceholder.typicode.com/posts/1")\nhtml = await fetch_json("https://example.com")\n\nprint(f"Title: {post['title']}")\nprint(f"Page: {html}")`,
    solution_code: `post = await fetch_json("https://jsonplaceholder.typicode.com/posts/1")\nhtml = await fetch_text("https://example.com")\nstart = html.find("<h1>") + 4\nend = html.find("</h1>")\npage = html[start:end].strip()\n\nprint(f"Title: {post['title']}")\nprint(f"Page: {page}")`,
    validation_type: "contains",
    validation_pattern: "sunt aut facere",
    hints: ["JSON endpoints need await fetch_json.", "HTML endpoints need await fetch_text.", "Slice the h1 the same way as the previous lesson."],
  },
  {
    slug: "week6-level9-quiz",
    title: "Week 6 Checkpoint",
    phase: 2,
    day: 6,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Combine live posts with a live weather reading.",
    lesson_content: `## Week 6 Checkpoint

1. Fetch \`https://jsonplaceholder.typicode.com/posts?userId=1\`
2. Print the first 3 post titles
3. Fetch Delhi weather from Open-Meteo
4. Print \`Posts: {n}\` using the list length`,
    starter_code: `posts = await fetch_json("https://jsonplaceholder.typicode.com/posts?userId=1")\n\nfor post in posts[:3]:\n    # Print each title\n    pass\n\nweather = await fetch_json("https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m")\nprint(f"Delhi: {weather['current']['temperature_2m']}°C")\nprint(f"Posts: {len(posts)}")`,
    solution_code: `posts = await fetch_json("https://jsonplaceholder.typicode.com/posts?userId=1")\n\nfor post in posts[:3]:\n    print(post["title"])\n\nweather = await fetch_json("https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m")\nprint(f"Delhi: {weather['current']['temperature_2m']}°C")\nprint(f"Posts: {len(posts)}")`,
    validation_type: "contains",
    validation_pattern: "Posts: 10",
    hints: ["userId=1 currently returns 10 posts.", "Print post['title'] in the loop.", "Weather numbers are live — still print Delhi:."],
  },
  {
    slug: "week6-level10-project",
    title: "Week 6 Project — Live Data Dashboard",
    phase: 2,
    day: 6,
    index_in_day: 10,
    level_type: "project",
    summary: "Build a dashboard from live weather plus live post titles.",
    lesson_content: `## Week 6 Project

Build a **live Data Dashboard** — no pasted JSON blobs.

### Requirements

1. Fetch Open-Meteo for Delhi and Mumbai
2. Fetch 3 posts from JSONPlaceholder (\`/posts?_limit=3\`)
3. Print a formatted dashboard
4. Print a JSON summary with \`json.dumps\`

### Shape

\`\`\`
=== Data Dashboard ===
WEATHER:
  Delhi: 31.2°C
  Mumbai: 29.4°C
NEWS:
  - (live post titles)
Summary: {"cities": 2, "articles": 3}
\`\`\`

Temperatures and titles come from the network. Keep the labels.`,
    starter_code: `import json\n\ncities = [\n    ("Delhi", 28.6139, 77.2090),\n    ("Mumbai", 19.0760, 72.8777),\n]\n\nprint("=== Data Dashboard ===")\nprint("WEATHER:")\n# Fetch each city and print temperature\n\nposts = await fetch_json("https://jsonplaceholder.typicode.com/posts?_limit=3")\nprint("NEWS:")\n# Print each title\n\nsummary = {"cities": 2, "articles": len(posts)}\nprint(f"Summary: {json.dumps(summary)}")`,
    solution_code: `import json\n\ncities = [\n    ("Delhi", 28.6139, 77.2090),\n    ("Mumbai", 19.0760, 72.8777),\n]\n\nprint("=== Data Dashboard ===")\nprint("WEATHER:")\nfor name, lat, lon in cities:\n    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m"\n    data = await fetch_json(url)\n    print(f"  {name}: {data['current']['temperature_2m']}°C")\n\nposts = await fetch_json("https://jsonplaceholder.typicode.com/posts?_limit=3")\nprint("NEWS:")\nfor post in posts:\n    print(f"  - {post['title']}")\n\nsummary = {"cities": 2, "articles": len(posts)}\nprint(f"Summary: {json.dumps(summary)}")`,
    validation_type: "contains",
    validation_pattern: "Data Dashboard",
    hints: ["Reuse the city loop from earlier today.", "posts is a list of dicts with title.", "json.dumps(summary) prints the compact JSON line."],
  },
];
