const footballTeam = {
  team: "AC Milan",
  headCoach: "Carlo Ancelotti",
  year: 2003,
  players: [
    { name: "Dida", position: "goalkeeper", isCaptain: false },
    { name: "Christian Abbiati", position: "goalkeeper", isCaptain: false },
    { name: "Paolo Maldini", position: "defender", isCaptain: true },
    { name: "Alessandro Nesta", position: "defender", isCaptain: false },
    { name: "Alessandro Costacurta", position: "defender", isCaptain: false },
    { name: "Kakha Kaladze", position: "defender", isCaptain: false },
    { name: "Jaap Stam", position: "defender", isCaptain: false },
    { name: "Roque Júnior", position: "defender", isCaptain: false },
    { name: "Andrea Pirlo", position: "midfielder", isCaptain: false },
    { name: "Gennaro Gattuso", position: "midfielder", isCaptain: false },
    { name: "Clarence Seedorf", position: "midfielder", isCaptain: false },
    { name: "Rui Costa", position: "midfielder", isCaptain: false },
    { name: "Massimo Ambrosini", position: "midfielder", isCaptain: false },
    { name: "Serginho", position: "midfielder", isCaptain: false },
    { name: "Andriy Shevchenko", position: "forward", isCaptain: false },
    { name: "Filippo Inzaghi", position: "forward", isCaptain: false },
    { name: "Rivaldo", position: "forward", isCaptain: false },
    { name: "Jon Dahl Tomasson", position: "forward", isCaptain: false },
  ],
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");

team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

const playerCardsContainer = document.getElementById("player-cards");

function createPlayerCard(player) {
  const playerCard = document.createElement("div");
  playerCard.classList.add("player-card");
  playerCard.innerHTML = `
    <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
    <p>Position: ${player.position}</p>
  `;
  return playerCard;
}

footballTeam.players.forEach((player) => {
  const card = createPlayerCard(player);
  playerCardsContainer.appendChild(card);
});

const selectContainer = document.getElementById("players");

function filterPlayers(position) {
  playerCardsContainer.innerHTML = "";
  const filteredPlayers =
    position === "all"
      ? footballTeam.players
      : footballTeam.players.filter((player) => player.position === position);

  filteredPlayers.forEach((player) => {
    const card = createPlayerCard(player);
    playerCardsContainer.appendChild(card);
  });
}

selectContainer.addEventListener("change", () => {
  filterPlayers(selectContainer.value);
});
