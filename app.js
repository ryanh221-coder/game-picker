// 1. Your Full Game Database (31 Games)
let games = [
    { id: 1, title: "Incan Gold", players: "3-8", length: "30m", mechanics: "Push Your Luck", weight: "1.2" },
    { id: 2, title: "7 Wonders", players: "2-7", length: "30m", mechanics: "Card Drafting", weight: "2.3" },
    { id: 3, title: "Quacks of Quedlinburg", players: "2-4", length: "45m", mechanics: "Bag Building", weight: "1.9" },
    { id: 4, title: "MLEM: Space Agency", players: "2-5", length: "30-60m", mechanics: "Push Your Luck", weight: "1.8" },
    { id: 5, title: "Clank!", players: "2-4", length: "60m", mechanics: "Deck Building", weight: "2.2" },
    { id: 6, title: "Planet Unknown", players: "1-6", length: "60-80m", mechanics: "Tile Placement", weight: "2.2" },
    { id: 7, title: "Panda Royale", players: "2-10", length: "20-30m", mechanics: "Roll & Write", weight: "1.5" },
    { id: 8, title: "Cabanga!", players: "2-6", length: "20m", mechanics: "Hand Management", weight: "1.1" },
    { id: 9, title: "Hegemony", players: "1-4", length: "90-180m", mechanics: "Asymmetric", weight: "4.2" },
    { id: 10, title: "Ra", players: "2-5", length: "45-60m", mechanics: "Auction", weight: "2.3" },
    { id: 11, title: "Magic: The Gathering", players: "2+", length: "20m+", mechanics: "Deck Construction", weight: "3.2" },
    { id: 12, title: "Res Arcana", players: "2-4", length: "30-60m", mechanics: "Engine Building", weight: "2.6" },
    { id: 13, title: "Werewords", players: "4-10", length: "10m", mechanics: "Deduction", weight: "1.3" },
    { id: 14, title: "TM: Ares Expedition", players: "1-4", length: "45-60m", mechanics: "Tableau Building", weight: "2.9" },
    { id: 15, title: "Tapestry", players: "1-5", length: "90-120m", mechanics: "Civ Building", weight: "2.9" },
    { id: 16, title: "Architects of the West Kingdom", players: "1-5", length: "60-80m", mechanics: "Worker Placement", weight: "2.8" },
    { id: 17, title: "Castle Combo", players: "2-5", length: "15-30m", mechanics: "Card Drafting", weight: "1.4" },
    { id: 18, title: "Jorvik", players: "2-5", length: "45-60m", mechanics: "Auction/Bidding", weight: "2.4" },
    { id: 19, title: "Stonepine Architects", players: "1-4", length: "45-60m", mechanics: "Tile Placement", weight: "2.1" },
    { id: 20, title: "Sanctuary: Keepers Era", players: "1-2", length: "30-45m", mechanics: "Hand Management", weight: "2.5" },
    { id: 21, title: "Roll Player", players: "1-4", length: "60-90m", mechanics: "Dice Drafting", weight: "2.4" },
    { id: 22, title: "World Wonders", players: "1-5", length: "50-70m", mechanics: "Tile Placement", weight: "2.3" },
    { id: 23, title: "Seasons", players: "2-4", length: "60m", mechanics: "Drafting / Management", weight: "2.8" },
    { id: 24, title: "Cartographers", players: "1-100", length: "30-45m", mechanics: "Flip & Write", weight: "1.9" },
    { id: 25, title: "Villagers", players: "1-5", length: "30-60m", mechanics: "Tableau Building", weight: "2.1" },
    { id: 26, title: "Bunny Kingdom", players: "2-4", length: "40-60m", mechanics: "Drafting / Area Control", weight: "2.3" },
    { id: 27, title: "Terraforming Mars", players: "1-5", length: "120m", mechanics: "Engine Building", weight: "3.2" },
    { id: 28, title: "Paladins of the West Kingdom", players: "1-4", length: "90-120m", mechanics: "Worker Placement", weight: "3.7" },
    { id: 29, title: "Dominion", players: "2-4", length: "30m", mechanics: "Deck Building", weight: "2.4" },
    { id: 30, title: "SETI", players: "1-4", length: "40-160m", mechanics: "Engine Building", weight: "4.0" },
    { id: 31, title: "Pirates of Maracaibo", players: "1-4", length: "30-100m", mechanics: "Grid Movement", weight: "2.5" }
];

// Initialize score tracking
let state = games.map(g => ({ ...g, strikes: 0, stars: 0 }));
let vault = [];
let currentId = null;

function nextCard() {
    if (vault.length >= 5) {
        showVault();
        return;
    }

    const available = state.filter(g => g.strikes < 2 && g.stars < 2);
    
    if (available.length === 0) {
        alert("No games left! Resetting list...");
        resetApp();
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
    document.getElementById('game-weight').innerText = game.weight + " / 5";
}

function handleSwipe(action) {
    let game = state.find(g => g.id === currentId);

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
    drawBtn.classList.add('hidden');

    let count = 0;
    const interval = setInterval(() => {
        winnerEl.innerText = vault[Math.floor(Math.random() * vault.length)].title;
        count++;
        if (count > 25) {
            clearInterval(interval);
            const finalWinner = vault[Math.floor(Math.random() * vault.length)];
            winnerEl.innerText = "🏆 " + finalWinner.title + " 🏆";
            winnerEl.classList.add('winner-zoom');
            document.getElementById('reset-button').classList.remove('hidden');
        }
    }, 80);
}

function resetApp() {
    vault = [];
    state = games.map(g => ({ ...g, strikes: 0, stars: 0 }));
    
    document.getElementById('vault-screen').classList.add('hidden');
    document.getElementById('winner-announcement').innerText = "";
    document.getElementById('winner-announcement').classList.remove('winner-zoom');
    document.getElementById('draw-button').classList.remove('hidden');
    document.getElementById('reset-button').classList.add('hidden');
    
    document.getElementById('card-container').classList.remove('hidden');
    document.querySelector('.controls').classList.remove('hidden');
    
    nextCard();
}

nextCard();
