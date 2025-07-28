const BACKEND = "https://e231204f-cf5a-41fe-9783-f559465653b4-00-19tckj28pb2k5.picard.replit.dev";

fetch(`${BACKEND}/games`)
  .then(res => res.json())
  .then(games => {
    const container = document.getElementById("gamesList");
    if (!games.length) {
      container.innerHTML = "<p>No games uploaded yet! 👾</p>";
      return;
    }

    games.forEach(game => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <div class="game-thumbnail-container">
          <img src="${BACKEND}${game.thumbnail}" alt="${game.name}">
          <button class="play-btn" onclick="window.open('${BACKEND}${game.url}', '_blank')">▶</button>
          <div class="three-dots">⋮</div>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById("gamesList").innerHTML = "<p>⚠️ Could not load games. Backend unreachable.</p>";
    console.error(err);
  });

// Background changer
document.getElementById("bgSelect").addEventListener("change", (e) => {
  const body = document.body;
  body.className = `dark-theme ${e.target.value}`;
});
