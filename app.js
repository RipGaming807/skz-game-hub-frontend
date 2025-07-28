fetch("http://localhost:3000/games")
  .then(res => res.json())
  .then(games => {
    const container = document.getElementById("game-list");
    games.forEach(game => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <img src="http://localhost:3000${game.thumbnail}" alt="${game.name}" />
        <h2>${game.name}</h2>
        <a href="http://localhost:3000${game.url}" target="_blank">Play</a>
      `;
      container.appendChild(card);
    });
  });