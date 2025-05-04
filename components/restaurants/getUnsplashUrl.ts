const UNSPLASH_ACCESS_KEY = process.env.unsplash_key; // Replace with your real key
const query = 'sandwich'; // Change to anything you like

async function getUnsplashImageUrl() {
  const res = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
  if (!res.ok) {
    console.error("Failed to fetch image:", res.statusText);
    return;
  }

  const data = await res.json();
  const imageUrl = data.urls?.regular;

  if (imageUrl) {
    console.log("Direct Image URL:", imageUrl);
    return imageUrl;
  } else {
    console.error("Image URL not found in response");
  }
}

getUnsplashImageUrl();

