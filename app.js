// 1. Initial Database
let games = [
    { id: 1, title: "Terraforming Mars", players: "1-5", length: "120m", mechanics: "Engine Building", weight: "3.2", strikes: 0, stars: 0 },
    { id: 2, title: "Catan", players: "3-4", length: "60m", mechanics: "Trading", weight: "2.3", strikes: 0, stars: 0 },
    { id: 3, title: "Wingspan", players: "1-5", length: "40-70m", mechanics: "Card Drafting", weight: "2.4", strikes: 0, stars: 0 },
    { id: 4, title: "Gloomhaven", players: "1-4", length: "120m", mechanics: "Campaign", weight: "3.8", strikes: 0, stars: 0 },
    { id: 5, title: "Splendor", players: "2-4", length: "30m", mechanics: "Resource Management", weight: "1.8", strikes: 0, stars: 0 },
    { id: 6, title: "Ticket to Ride", players: "2-5", length: "45m", mechanics: "Route Building", weight: "1.8", strikes: 0, stars: 0 },
    { id: 7, title: "Azul", players: "2-4", length: "45m", mechanics: "Tile Placement", weight: "2.1", strikes: 0, stars: 0 }
];

let vault = [];
let currentId = null;

// 2. Start the App
function nextCard() {
    if (vault.length >= 5) {
        showVault();
        return;
    }

    // Filter for games that aren't in the vault and have < 2 strikes
    const available = games.filter(g => g.strikes < 2 && g.stars < 2);
    
    if (available.length === 0) {
        alert("Out of games! Lower your standards or add more to the list.");
        return;
    }

    const randomGame = available[Math.floor(Math.random() * available.length)];
    currentId = randomGame.id;
    updateUI(randomGame);
}

function updateUI(game) {
    document.getElementById('game-title').innerText = game.title;
    document.getElementById('game-players').innerText = game.players;
    document.getElementById('game-length').innerText = game.length;
    document.getElementById('game-mechanics').innerText = game.mechanics;
    document.getElementById('game-weight').innerText = game.weight;
}

// 3. Handle Swiping
function handleSwipe(action) {
    let game = games.find(g => g.id === currentId);

    if (action === 'left') {
        game.strikes++;
    } else {
        game.stars++;
        if (game.stars === 2) {
            vault.push(game);
        }
    }
    nextCard();
}

// 4. The Grand Finale
function showVault() {
    document.getElementById('card-container').classList.add('hidden');
    document.querySelector('.controls').classList.add('hidden');
    document.getElementById('vault-screen').classList.remove('hidden');

    const listDiv = document.getElementById('vault-list');
    listDiv.innerHTML = vault.map(g => `<div class="vault-item">${g.title}</div>`).join('');
}

function announceWinner() {
    const winnerEl = document.getElementById('winner-announcement');
    const drawBtn = document.getElementById('draw-button');
    drawBtn.disabled = true;

    // Animation: Shuffle titles 20 times
    let count = 0;
    const interval = setInterval(() => {
        winnerEl.innerText = vault[Math.floor(Math.random() * vault.length)].title;
        count++;
        if (count > 20) {
            clearInterval(interval);
            const finalWinner = vault[Math.floor(Math.random() * vault.length)];
            winnerEl.innerText = "🏆 " + finalWinner.title + " 🏆";
            winnerEl.style.color = "#FFD700"; // Gold
            winnerEl.classList.add('winner-zoom');
        }
    }, 100);
}

// Initialize
nextCard();
