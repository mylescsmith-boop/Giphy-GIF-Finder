# Giphy GIF Finder

A simple GIF search page built with HTML, CSS, Bootstrap, and JavaScript. Enter a search term and click **Fetch GIFs** to display matching GIFs from Giphy.

## Run it locally

1. Clone this repository and open the folder in VS Code.
2. Get a Giphy API key from the Giphy Developers website.
3. Copy `config.example.js` and name the copy `config.js`.
4. Put your API key inside `config.js`.
5. Open `index.html` with Live Server and search for a GIF.

**Important:** `config.js` is listed in `.gitignore` so your personal API key is not pushed to GitHub. Do not commit or share that file.

## Files

- `index.html` - page structure and search form
- `style.css` - responsive page styling
- `script.js` - API request, search, and GIF display
- `config.example.js` - safe example showing where the key goes
