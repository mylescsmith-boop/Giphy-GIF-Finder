const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const gifContainer = document.querySelector("#gif-container");
const statusMessage = document.querySelector("#status");

async function fetchGifs(searchTerm) {
  if (typeof GIPHY_API_KEY === "undefined" || !GIPHY_API_KEY) {
    throw new Error("Add your Giphy API key to a local config.js file first.");
  }

  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(searchTerm)}&limit=12&rating=g`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("The GIF request did not work. Check your API key and try again.");
  }

  const data = await response.json();
  const images = data.data
    .map((gif) => gif.images?.original?.url)
    .filter((url) => url);

  return images;
}

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (!searchTerm) {
    statusMessage.textContent = "Type something to search for first.";
    return;
  }

  gifContainer.innerHTML = "";
  statusMessage.textContent = "Loading GIFs...";

  try {
    const images = await fetchGifs(searchTerm);

    if (images.length === 0) {
      statusMessage.textContent = "No GIFs found. Try another search.";
      return;
    }

    images.forEach((imageUrl) => {
      gifContainer.innerHTML += `<div class="col-6 col-md-4 col-lg-3"><img src="${imageUrl}" class="img-fluid" alt="GIF result for ${searchTerm}" loading="lazy"></div>`;
    });

    statusMessage.textContent = `Found ${images.length} GIFs for "${searchTerm}".`;
  } catch (error) {
    console.error(error);
    statusMessage.textContent = error.message;
  }
});
