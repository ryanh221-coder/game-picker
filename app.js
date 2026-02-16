const allGames = [
    { id: 1, title: "Incan Gold", players: "3-8", length: "30m", mechanics: "Push Your Luck", weight: "1.2", img: "https://cf.geekdo-images.com/C_7I5Y_v8R3JitfF8vD6uA__itemrep/img/S5d0Tj9638EAsD77uH7XW3_m6wM=/fit-in/400x400/filters:strip_icc()/pic4684937.jpg" },
    { id: 2, title: "7 Wonders", players: "2-7", length: "30m", mechanics: "Card Drafting", weight: "2.3", img: "https://cf.geekdo-images.com/3990665/pic5516130.jpg" },
    { id: 3, title: "Quacks of Quedlinburg", players: "2-4", length: "45m", mechanics: "Bag Building", weight: "1.9", img: "https://cf.geekdo-images.com/3990665/pic4014182.jpg" },
    { id: 4, title: "MLEM: Space Agency", players: "2-5", length: "30-60m", mechanics: "Push Your Luck", weight: "1.8", img: "https://cf.geekdo-images.com/3990665/pic7784323.jpg" },
    { id: 5, title: "Clank!", players: "2-4", length: "60m", mechanics: "Deck Building", weight: "2.2", img: "https://cf.geekdo-images.com/3990665/pic3164991.jpg" },
    { id: 6, title: "Planet Unknown", players: "1-6", length: "60-80m", mechanics: "Tile Placement", weight: "2.2", img: "https://cf.geekdo-images.com/3990665/pic6306536.jpg" },
    { id: 7, title: "Panda Royale", players: "2-10", length: "20-30m", mechanics: "Roll & Write", weight: "1.5", img: "https://cf.geekdo-images.com/3990665/pic7123456.jpg" },
    { id: 8, title: "Cabanga!", players: "2-6", length: "20m", mechanics: "Hand Management", weight: "1.1", img: "https://cf.geekdo-images.com/3990665/pic7574765.jpg" },
    { id: 9, title: "Hegemony", players: "1-4", length: "90-180m", mechanics: "Asymmetric", weight: "4.2", img: "https://cf.geekdo-images.com/3990665/pic6454222.jpg" },
    { id: 10, title: "Ra", players: "2-5", length: "45-60m", mechanics: "Auction", weight: "2.3", img: "https://cf.geekdo-images.com/3990665/pic6924346.jpg" },
    { id: 11, title: "Magic: The Gathering", players: "2+", length: "20m+", mechanics: "Deck Construction", weight: "3.2", img: "https://cf.geekdo-images.com/3990665/pic163749.jpg" },
    { id: 12, title: "Res Arcana", players: "2-4", length: "30-60m", mechanics: "Engine Building", weight: "2.6", img: "https://cf.geekdo-images.com/3990665/pic4447432.jpg" },
    { id: 13, title: "Werewords", players: "4-10", length: "10m", mechanics: "Deduction", weight: "1.3", img: "https://cf.geekdo-images.com/3990665/pic3716947.jpg" },
    { id: 14, title: "TM: Ares Expedition", players: "1-4", length: "45-60m", mechanics: "Tableau Building", weight: "2.9", img: "https://cf.geekdo-images.com/3990665/pic5839213.jpg" },
    { id: 15, title: "Tapestry", players: "1-5", length: "90-120m", mechanics: "Civ Building", weight: "2.9", img: "https://cf.geekdo-images.com/3990665/pic4765721.jpg" },
    { id: 16, title: "Architects of the West Kingdom", players: "1-5", length: "60-80m", mechanics: "Worker Placement", weight: "2.8", img: "https://cf.geekdo-images.com/3990665/pic4211105.jpg" },
    { id: 17, title: "Castle Combo", players: "2-5", length: "15-30m", mechanics: "Card Drafting", weight: "1.4", img: "https://cf.geekdo-images.com/3990665/pic8121695.jpg" },
    { id: 18, title: "Jorvik", players: "2-5", length: "45-60m", mechanics: "Auction/Bidding", weight: "2.4", img: "https://cf.geekdo-images.com/3990665/pic3253509.jpg" },
    { id: 19, title: "Stonepine Architects", players: "1-4", length: "45-60m", mechanics: "Tile Placement", weight: "2.1", img: "https://cf.geekdo-images.com/3990665/pic8215809.jpg" },
    { id: 20, title: "Sanctuary: Keepers Era", players: "1-2", length: "30-45m", mechanics: "Hand Management", weight: "2.5", img: "https://cf.geekdo-images.com/3990665/pic5155455.jpg" },
    { id: 21, title: "Roll Player", players: "1-4", length: "60-90m", mechanics: "Dice Drafting", weight: "2.4", img: "https://cf.geekdo-images.com/3990665/pic3067160.jpg" },
    { id: 22, title: "World Wonders", players: "1-5", length: "50-70m", mechanics: "Tile Placement", weight: "2.3", img: "https://cf.geekdo-images.com/3990665/pic7512391.jpg" },
    { id: 23, title: "Seasons", players: "2-4", length: "60m", mechanics: "Drafting", weight: "2.8", img: "https://cf.geekdo-images.com/3990665/pic1318214.jpg" },
    { id: 24, title: "Cartographers", players: "1-100", length: "30-45m", mechanics: "Flip & Write", weight: "1.9", img: "https://cf.geekdo-images.com/3990665/pic4738582.jpg" },
    { id: 25, title: "Villagers", players: "1-5", length: "30-60m", mechanics: "Tableau Building", weight: "2.1", img: "https://cf.geekdo-images.com/3990665/pic4287413.jpg" },
    { id: 26, title: "Bunny Kingdom", players: "2-4", length: "40-60m", mechanics: "Drafting", weight: "2.3", img: "https://cf.geekdo-images.com/3990665/pic3492770.jpg" },
    { id: 27, title: "Terraforming Mars", players: "1-5", length: "120m", mechanics: "Engine Building", weight: "3.2", img: "https://cf.geekdo-images.com/3990665/pic3536616.jpg" },
    { id: 28, title: "Paladins of the West Kingdom", players: "1-4", length: "90-120m", mechanics: "Worker Placement", weight: "3.7", img: "https://cf.geekdo-images.com/3990665/pic4726582.jpg" },
    { id: 29, title: "Dominion", players: "2-4", length: "30m", mechanics: "Deck Building", weight: "2.4", img: "https://cf.geekdo-images.com/3990665/pic394356.jpg" },
    { id: 30, title: "SETI", players: "1-4", length: "40-160m", mechanics: "Engine Building", weight: "4.0", img: "https://cf.geekdo-images.com/3990665/pic8215509.jpg" },
    { id: 31, title: "Pirates of Maracaibo", players: "1-4", length: "30-100m", mechanics: "Grid Movement", weight: "2.5", img: "https://cf.geekdo-images.com/3990665/pic7721869.jpg" }
];

let sessionGames = [];
let vault = [];
let currentId = null;

function startNewSession() {
    const shuffled = [...allGames].sort(() => 0.5 - Math.random());
    sessionGames = shuffled.slice(0, 20).map(g => ({ ...g, strikes: 0, stars: 0 }));
    vault = [];
    nextCard();
}

function nextCard() {
    if (vault.length >= 5) {
        showVault();
        return;
    }
    const available = sessionGames.filter(g => g.strikes < 2 && g.stars < 2);
    if (available.length === 0) {
        alert("Ran out of games! Refreshing selection...");
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

    const imgElement = document.getElementById('game-image');
    
    // This proxy tricks BGG into thinking the request is allowed
    const proxyUrl = "https://corsproxy.io/?" + encodeURIComponent(game.img);
    
    imgElement.src = proxyUrl;

    // Optional: If the image still fails, show a placeholder so the card isn't empty
    imgElement.onerror = function() {
        this.src = "https://placehold.co/400x400?text=Image+Not+Found";
    };
}

function handleSwipe(action) {
    let game = sessionGames.find(g => g.id === currentId);
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
    document.getElementById('draw-button').classList.add('hidden');
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
    document.getElementById('vault-screen').classList.add('hidden');
    document.getElementById('winner-announcement').innerText = "";
    document.getElementById('winner-announcement').classList.remove('winner-zoom');
    document.getElementById('draw-button').classList.remove('hidden');
    document.getElementById('reset-button').classList.add('hidden');
    document.getElementById('card-container').classList.remove('hidden');
    document.querySelector('.controls').classList.remove('hidden');
    startNewSession();
}

startNewSession();
