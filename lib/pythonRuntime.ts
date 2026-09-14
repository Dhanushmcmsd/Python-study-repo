/** Injected before student code so live HTTPS APIs work in the browser runtime. */
export const PYTHON_RUNTIME_PRELUDE = `
from pyodide.http import pyfetch

async def fetch_json(url):
    response = await pyfetch(url)
    if response.status >= 400:
        raise RuntimeError("HTTP " + str(response.status) + " for " + url)
    return await response.json()

async def fetch_text(url):
    response = await pyfetch(url)
    if response.status >= 400:
        raise RuntimeError("HTTP " + str(response.status) + " for " + url)
    return await response.text()
`;
