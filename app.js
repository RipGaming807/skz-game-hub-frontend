const BACKEND_URL = "https://e231204f-cf5a-41fe-9783-f559465653b4-00-19tckj28pb2k5.picard.replit.dev";

fetch(`${BACKEND_URL}/games`)
  .then(res => res.json())
  .then(games => {
    const container = document.getElementById("game-list");
    if (games.length === 0) {
      container.innerHTML = "<p>No games available yet! 👾</p>";
      return;
    }

    games.forEach(game => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <img src="${BACKEND_URL}${game.thumbnail}" alt="${game.name}" />
        <h2>${game.name}</h2>
        <a href="${BACKEND_URL}${game.url}" target="_blank">Play</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById("game-list").innerHTML = "<p>⚠️ Failed to load games. Backend not reachable.</p>";
    console.error("Error fetching games:", err);
  });
