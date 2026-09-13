import type { Level } from "../types";

export const WEEK6_LEVELS: Level[] = [
  // ── WEEK 6: APIs & Web Scraping ────────────────────────────────────
  {
    slug: "week6-level1-api-intro",
    title: "APIs & JSON Responses",
    phase: 2,
    day: 6,
    index_in_day: 1,
    level_type: "concept",
    summary: "Understand APIs and how JSON carries data over the web.",
    lesson_content: `## What is an API?

An **API** (Application Programming Interface) lets programs talk to each other. When you check the weather on your phone, an API fetches data from a server.

APIs usually return **JSON** — structured text that's easy to parse:

\`\`\`json
{
  "city": "Mumbai",
  "temperature": 32,
  "humidity": 75
}
\`\`\`

In Python:
\`\`\`python
import json

# Simulated API response (normally from requests.get())
api_response = '{"city": "Mumbai", "temperature": 32}'
data = json.loads(api_response)
print(data["city"])
\`\`\`

> In this course we **simulate** API responses with JSON strings — no network needed!`,
    starter_code: `import json\n\n# Simulated weather API response\napi_response = '{"city": "Mumbai", "temperature": 32, "humidity": 75, "condition": "Sunny"}'\n\ndata = json.loads(api_response)\nprint(f"Weather in {data['city']}")\nprint(f"Temperature: {data['temperature']}°C")\nprint(f"Condition: {data['condition']}")`,
    solution_code: `import json\n\napi_response = '{"city": "Mumbai", "temperature": 32, "humidity": 75, "condition": "Sunny"}'\n\ndata = json.loads(api_response)\nprint(f"Weather in {data['city']}")\nprint(f"Temperature: {data['temperature']}°C")\nprint(f"Condition: {data['condition']}")`,
    expected_output: "Weather in Mumbai\nTemperature: 32°C\nCondition: Sunny",
    validation_type: "contains",
    validation_pattern: "Weather in Mumbai",
    hints: ["json.loads() converts JSON string to a dict.", "Access values with data['key'].", "Real APIs return similar JSON structures."],
  },
  {
    slug: "week6-level2-parse-api",
    title: "Parsing API Responses",
    phase: 2,
    day: 6,
    index_in_day: 2,
    level_type: "run",
    summary: "Extract fields from a simulated API JSON response.",
    lesson_content: `## Parsing API data

API responses often nest data inside objects:

\`\`\`python
response = '{"status": "ok", "data": {"user": "alex", "score": 950}}'
parsed = json.loads(response)
user = parsed["data"]["user"]
\`\`\`

Access nested data with chained brackets: \`parsed["data"]["user"]\`

### Your task

Run the code and explore the user profile API response.`,
    starter_code: `import json\n\napi_response = '{"status": "success", "data": {"id": 42, "username": "alex_dev", "email": "alex@example.com", "stats": {"posts": 15, "followers": 230}}}'\n\nparsed = json.loads(api_response)\nuser = parsed["data"]\n\nprint(f"Status: {parsed['status']}")\nprint(f"User: {user['username']}")\nprint(f"Email: {user['email']}")\nprint(f"Followers: {user['stats']['followers']}")`,
    solution_code: `import json\n\napi_response = '{"status": "success", "data": {"id": 42, "username": "alex_dev", "email": "alex@example.com", "stats": {"posts": 15, "followers": 230}}}'\n\nparsed = json.loads(api_response)\nuser = parsed["data"]\n\nprint(f"Status: {parsed['status']}")\nprint(f"User: {user['username']}")\nprint(f"Email: {user['email']}")\nprint(f"Followers: {user['stats']['followers']}")`,
    validation_type: "contains",
    validation_pattern: "Followers: 230",
    hints: ["parsed['data'] gets the inner object.", "user['stats']['followers'] accesses nested data.", "Always check parsed['status'] first in real apps."],
  },
  {
    slug: "week6-level3-nested-json",
    title: "Nested JSON Data",
    phase: 2,
    day: 6,
    index_in_day: 3,
    level_type: "modify",
    summary: "Navigate nested JSON structures and extract lists.",
    lesson_content: `## Lists inside JSON

APIs often return **arrays** of items:

\`\`\`python
response = '{"products": [{"name": "Widget", "price": 9.99}, {"name": "Gadget", "price": 24.50}]}'
data = json.loads(response)

for product in data["products"]:
    print(product["name"], product["price"])
\`\`\`

### Your task

Complete the code to print each product name and calculate the total price.`,
    starter_code: `import json\n\napi_response = '{"store": "TechShop", "products": [{"name": "Mouse", "price": 29.99}, {"name": "Keyboard", "price": 79.99}, {"name": "Monitor", "price": 299.99}]}'\n\ndata = json.loads(api_response)\nprint(f"Store: {data['store']}")\n\ntotal = 0\nfor product in data["products"]:\n    # Print name and price, add to total\n    pass\n\nprint(f"Total: \${total:.2f}")`,
    solution_code: `import json\n\napi_response = '{"store": "TechShop", "products": [{"name": "Mouse", "price": 29.99}, {"name": "Keyboard", "price": 79.99}, {"name": "Monitor", "price": 299.99}]}'\n\ndata = json.loads(api_response)\nprint(f"Store: {data['store']}")\n\ntotal = 0\nfor product in data["products"]:\n    print(f"  {product['name']}: \${product['price']}")\n    total = total + product["price"]\n\nprint(f"Total: \${total:.2f}")`,
    validation_type: "contains",
    validation_pattern: "Total: $409.97",
    hints: ["Loop through data['products'].", "Each product is a dict with name and price.", "Accumulate total in the loop."],
  },
  {
    slug: "week6-level4-api-list",
    title: "Loop Through API Results",
    phase: 2,
    day: 6,
    index_in_day: 4,
    level_type: "exercise",
    summary: "Process a list of users from a simulated API.",
    lesson_content: `## Processing API lists

Many APIs return paginated lists. Here's a simulated "users" endpoint:

\`\`\`python
users_json = '[{"name":"Alice","role":"admin"},{"name":"Bob","role":"user"}]'
users = json.loads(users_json)
\`\`\`

### Your task

Parse the users API response and print only users with role "admin". Count total users.`,
    starter_code: `import json\n\nusers_api = '[{"name":"Alice","role":"admin","active":true},{"name":"Bob","role":"user","active":true},{"name":"Carol","role":"admin","active":false},{"name":"Dave","role":"user","active":true}]'\n\nusers = json.loads(users_api)\n\nadmin_count = 0\nprint("Admins:")\nfor user in users:\n    # Check role and print admin names\n    pass\n\nprint(f"Total users: {len(users)}")`,
    solution_code: `import json\n\nusers_api = '[{"name":"Alice","role":"admin","active":true},{"name":"Bob","role":"user","active":true},{"name":"Carol","role":"admin","active":false},{"name":"Dave","role":"user","active":true}]'\n\nusers = json.loads(users_api)\n\nadmin_count = 0\nprint("Admins:")\nfor user in users:\n    if user["role"] == "admin":\n        print(f"  - {user['name']}")\n        admin_count = admin_count + 1\n\nprint(f"Total users: {len(users)}")\nprint(f"Admin count: {admin_count}")`,
    validation_type: "contains",
    validation_pattern: "Admin count: 2",
    hints: ['Check user["role"] == "admin".', "Print user['name'] for each admin.", "len(users) gives total count."],
  },
  {
    slug: "week6-level5-deep-nested",
    title: "Deep Nested Parsing",
    phase: 2,
    day: 6,
    index_in_day: 5,
    level_type: "exercise",
    summary: "Extract data from deeply nested JSON structures.",
    lesson_content: `## Deep nesting

Real API responses can be deeply nested:

\`\`\`python
data = {
  "response": {
    "results": [
      {"location": {"city": "Delhi", "temp": 28}}
    ]
  }
}
city = data["response"]["results"][0]["location"]["city"]
\`\`\`

### Your task

Extract the city name and temperature from the weather API response.`,
    starter_code: `import json\n\nweather_api = '{"response": {"status": 200, "results": [{"location": {"city": "Delhi", "country": "India"}, "current": {"temp_c": 28, "condition": "Partly cloudy"}}, {"location": {"city": "Mumbai", "country": "India"}, "current": {"temp_c": 32, "condition": "Sunny"}}]}}'\n\ndata = json.loads(weather_api)\nresults = data["response"]["results"]\n\nfor result in results:\n    # Extract city, temp, and condition for each\n    pass`,
    solution_code: `import json\n\nweather_api = '{"response": {"status": 200, "results": [{"location": {"city": "Delhi", "country": "India"}, "current": {"temp_c": 28, "condition": "Partly cloudy"}}, {"location": {"city": "Mumbai", "country": "India"}, "current": {"temp_c": 32, "condition": "Sunny"}}]}}'\n\ndata = json.loads(weather_api)\nresults = data["response"]["results"]\n\nfor result in results:\n    city = result["location"]["city"]\n    temp = result["current"]["temp_c"]\n    condition = result["current"]["condition"]\n    print(f"{city}: {temp}°C, {condition}")`,
    validation_type: "contains",
    validation_pattern: "Mumbai: 32°C",
    hints: ["result['location']['city'] for city name.", "result['current']['temp_c'] for temperature.", "Chain brackets to go deeper."],
  },
  {
    slug: "week6-level6-html-intro",
    title: "Web Scraping Concepts",
    phase: 2,
    day: 6,
    index_in_day: 6,
    level_type: "run",
    summary: "Extract data from simulated HTML strings.",
    lesson_content: `## Web Scraping Basics

**Web scraping** extracts data from web pages. HTML is just text with tags:

\`\`\`html
<h1>Product List</h1>
<div class="product">Widget - $9.99</div>
<div class="product">Gadget - $24.50</div>
\`\`\`

In the browser playground, we simulate HTML as a string and extract data with string methods or regex:

\`\`\`python
html = '<div class="price">$29.99</div>'
start = html.find(">") + 1
end = html.find("<", start)
price = html[start:end]
\`\`\`

> Real scraping uses libraries like BeautifulSoup — here we learn the concepts!`,
    starter_code: `html = —"<html>\n<body>\n  <h1>Store Products</h1>\n  <div class="product">Widget - $9.99</div>\n  <div class="product">Gadget - $24.50</div>\n  <div class="product">Tool - $15.00</div>\n</body>\n</html>—"\n\nlines = html.split("\\n")\nfor line in lines:\n    if "product" in line and "$" in line:\n        # Extract text between > and <\n        start = line.find(">") + 1\n        end = line.find("<", start)\n        product = line[start:end]\n        print(product)`,
    solution_code: `html = —"<html>\n<body>\n  <h1>Store Products</h1>\n  <div class="product">Widget - $9.99</div>\n  <div class="product">Gadget - $24.50</div>\n  <div class="product">Tool - $15.00</div>\n</body>\n</html>—"\n\nlines = html.split("\\n")\nfor line in lines:\n    if "product" in line and "$" in line:\n        start = line.find(">") + 1\n        end = line.find("<", start)\n        product = line[start:end]\n        print(product)`,
    validation_type: "contains",
    validation_pattern: "Gadget - $24.50",
    hints: ["find('>') locates the end of opening tag.", "Text is between > and the next <.", "Check for 'product' in line to filter."],
  },
  {
    slug: "week6-level7-scrape-prices",
    title: "Extract Prices from HTML",
    phase: 2,
    day: 6,
    index_in_day: 7,
    level_type: "exercise",
    summary: "Use regex to extract prices from simulated HTML.",
    lesson_content: `## Extracting with regex

Regex is powerful for scraping patterns like prices:

\`\`\`python
import re
html = '<span class="price">$29.99</span><span class="price">$49.99</span>'
prices = re.findall(r'\\$[\\d.]+', html)
\`\`\`

### Your task

Extract all prices from the HTML page and calculate the average.`,
    starter_code: `import re\n\nhtml = —"<div class="listing">\n  <h2>Laptop Pro</h2><span class="price">$999.99</span>\n  <h2>Tablet Mini</h2><span class="price">$349.99</span>\n  <h2>Phone X</h2><span class="price">$799.99</span>\n  <h2>Earbuds</h2><span class="price">$79.99</span>\n</div>—"\n\n# Find all prices like $999.99\nprices = re.findall(r'\\$[\\d.]+', html)\n\n# Convert to floats and calculate average\n`,
    solution_code: `import re\n\nhtml = —"<div class="listing">\n  <h2>Laptop Pro</h2><span class="price">$999.99</span>\n  <h2>Tablet Mini</h2><span class="price">$349.99</span>\n  <h2>Phone X</h2><span class="price">$799.99</span>\n  <h2>Earbuds</h2><span class="price">$79.99</span>\n</div>—"\n\nprices = re.findall(r'\\$[\\d.]+', html)\n\nprice_values = []\nfor p in prices:\n    value = float(p.replace("$", —))\n    price_values.append(value)\n    print(f"Found: {p}")\n\naverage = sum(price_values) / len(price_values)\nprint(f"Average price: \${average:.2f}")`,
    validation_type: "contains",
    validation_pattern: "Average price: $557.49",
    hints: ["re.findall(r'\\$[\\d.]+', html) finds all prices.", "Remove $ with .replace('$', '') before float().", "sum(price_values) / len(price_values) for average."],
  },
  {
    slug: "week6-level8-debug-api",
    title: "Debug API & HTML Parsing",
    phase: 2,
    day: 6,
    index_in_day: 8,
    level_type: "debug",
    summary: "Fix JSON parsing and HTML extraction bugs.",
    lesson_content: `## Debug: API & Scraping

Common bugs:
- Forgetting \`json.loads()\` on API strings
- Using wrong key names (typo in dict access)
- Off-by-one in string slicing
- Regex pattern missing escape characters

### Your task

Fix the code to print: \`Title: Python Course | Price: $49.99\``,
    starter_code: `import json\nimport re\n\napi = '{"title": "Python Course", "details": {"price": 49.99, "rating": 4.8}}'\nhtml = '<div id="course"><h1>Python Course</h1><p class="price">$49.99</p></div>'\n\n# Buggy parsing\ndata = api\nprice = data["details"]["price"]\n\nmatch = re.findall(r'\\d+.\\d+', html)\nhtml_price = "$" + match[0]\n\nprint(f"Title: {data['title']} | Price: {html_price}")`,
    solution_code: `import json\nimport re\n\napi = '{"title": "Python Course", "details": {"price": 49.99, "rating": 4.8}}'\nhtml = '<div id="course"><h1>Python Course</h1><p class="price">$49.99</p></div>'\n\ndata = json.loads(api)\nprice = data["details"]["price"]\n\nmatch = re.findall(r'\\$[\\d.]+', html)\nhtml_price = match[0]\n\nprint(f"Title: {data['title']} | Price: {html_price}")`,
    validation_type: "contains",
    validation_pattern: "Price: $49.99",
    hints: ["Use json.loads(api) not just api.", "Regex should include the $ sign.", "match[0] gets the first price found."],
  },
  {
    slug: "week6-level9-quiz",
    title: "Week 6 Checkpoint",
    phase: 2,
    day: 6,
    index_in_day: 9,
    level_type: "quiz",
    summary: "Combine API parsing and HTML extraction.",
    lesson_content: `## Week 6 Checkpoint

Given a simulated API response with articles, write code that:
1. Parses the JSON
2. Prints each article title
3. Extracts the tag names from the simulated HTML snippet for each article

Use the provided api_response string. Print "Articles: 3" at the end.`,
    starter_code: `import json\nimport re\n\napi_response = '{"articles": [{"title": "Python Tips", "html": "<div><span class=\\"tag\\">python</span><span class=\\"tag\\">tutorial</span></div>"}, {"title": "API Guide", "html": "<div><span class=\\"tag\\">api</span><span class=\\"tag\\">json</span></div>"}, {"title": "Web Scraping", "html": "<div><span class=\\"tag\\">scraping</span><span class=\\"tag\\">html</span></div>"}]}'\n\ndata = json.loads(api_response)\n\nfor article in data["articles"]:\n    # Print title and extract tags from html\n    pass\n\nprint(f"Articles: {len(data['articles'])}")`,
    solution_code: `import json\nimport re\n\napi_response = '{"articles": [{"title": "Python Tips", "html": "<div><span class=\\"tag\\">python</span><span class=\\"tag\\">tutorial</span></div>"}, {"title": "API Guide", "html": "<div><span class=\\"tag\\">api</span><span class=\\"tag\\">json</span></div>"}, {"title": "Web Scraping", "html": "<div><span class=\\"tag\\">scraping</span><span class=\\"tag\\">html</span></div>"}]}'\n\ndata = json.loads(api_response)\n\nfor article in data["articles"]:\n    title = article["title"]\n    tags = re.findall(r'class=\\"tag\\">([^<]+)', article["html"])\n    print(f"{title}: {tags}")\n\nprint(f"Articles: {len(data['articles'])}")`,
    validation_type: "contains",
    validation_pattern: "Articles: 3",
    hints: ["Loop through data['articles'].", "re.findall with a capture group extracts tag text.", "len(data['articles']) for the count."],
  },
  {
    slug: "week6-level10-project",
    title: "Week 6 Project — Data Dashboard",
    phase: 2,
    day: 6,
    index_in_day: 10,
    level_type: "project",
    summary: "Build a dashboard from simulated API and HTML data.",
    lesson_content: `## Week 6 Project 🎯

Build a **Data Dashboard** that combines API parsing and web scraping!

### Requirements

1. Parse the simulated weather API JSON
2. Parse the simulated news HTML
3. Extract city temperatures and news headlines
4. Print a formatted dashboard report
5. Output a JSON summary with json.dumps()

### Expected output format

\`\`\`
=== Data Dashboard ===
WEATHER:
  Delhi: 28°C
  Mumbai: 32°C
NEWS:
  - Python 3.13 Released
  - AI Tools for Developers
  - Web Scraping Best Practices
Summary: {"cities": 2, "articles": 3}
\`\`\`

All data is simulated — no network or file access needed!`,
    starter_code: `import json\nimport re\n\nweather_api = '{"cities": [{"name": "Delhi", "temp": 28}, {"name": "Mumbai", "temp": 32}, {"name": "Chennai", "temp": 30}]}'\n\nnews_html = —"<html><body>\n<article><h2>Python 3.13 Released</h2></article>\n<article><h2>AI Tools for Developers</h2></article>\n<article><h2>Web Scraping Best Practices</h2></article>\n</body></html>—"\n\n# Parse weather API\n# Extract headlines from HTML\n# Print dashboard\n`,
    solution_code: `import json\nimport re\n\nweather_api = '{"cities": [{"name": "Delhi", "temp": 28}, {"name": "Mumbai", "temp": 32}, {"name": "Chennai", "temp": 30}]}'\n\nnews_html = —"<html><body>\n<article><h2>Python 3.13 Released</h2></article>\n<article><h2>AI Tools for Developers</h2></article>\n<article><h2>Web Scraping Best Practices</h2></article>\n</body></html>—"\n\nweather = json.loads(weather_api)\nheadlines = re.findall(r'<h2>([^<]+)</h2>', news_html)\n\nprint("=== Data Dashboard ===")\nprint("WEATHER:")\nfor city in weather["cities"][:2]:\n    print(f"  {city['name']}: {city['temp']}°C")\n\nprint("NEWS:")\nfor headline in headlines:\n    print(f"  - {headline}")\n\nsummary = {"cities": len(weather["cities"]), "articles": len(headlines)}\nprint(f"Summary: {json.dumps(summary)}")`,
    validation_type: "contains",
    validation_pattern: "Data Dashboard",
    hints: ["json.loads(weather_api) for weather data.", "re.findall(r'<h2>([^<]+)</h2>', news_html) for headlines.", "Build summary dict and use json.dumps()."],
  },
];
