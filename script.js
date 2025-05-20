
async function loadMemes() {
  const container = document.getElementById("meme-container");
  container.innerHTML = "Lade Memes...";

  try {
    const res = await fetch("https://meme-api.com/gimme/10");
    const data = await res.json();

    container.innerHTML = "";
    const memes = data.memes || [data];

    memes.forEach(meme => {
      const img = document.createElement("img");
      img.src = meme.url;
      img.alt = meme.title;
      container.appendChild(img);
    });
  } catch (err) {
    container.innerHTML = "Fehler beim Laden der Memes. 😢";
    console.error(err);
  }
}

document.getElementById("reload").addEventListener("click", loadMemes);
window.onload = loadMemes;
