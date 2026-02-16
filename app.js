// 1. Full Game Database
const allGames = [
    { id: 1, title: "Incan Gold", players: "3-8", length: "30m", mechanics: "Push Your Luck", weight: "1.2", summary: "Enter a ruined temple and decide every turn: will you grab your share of the gems and run, or risk it all for more?" },
    { id: 2, title: "7 Wonders", players: "2-7", length: "30m", mechanics: "Card Drafting", weight: "2.3", summary: "Lead an ancient civilization through three ages, building architectural wonders and outsmarting your neighbors." },
    { id: 3, title: "Quacks of Quedlinburg", players: "2-4", length: "45m", mechanics: "Bag Building", weight: "1.9", summary: "Brew potent potions by pulling ingredients from your bag—just don't let your pot explode with cherry bombs!" },
    { id: 4, title: "MLEM: Space Agency", players: "2-5", length: "30-60m", mechanics: "Push Your Luck", weight: "1.8", summary: "Command a crew of cat-astronauts reaching for the stars in a rocket, bailing out before it inevitably crashes." },
    { id: 5, title: "Clank!", players: "2-4", length: "60m", mechanics: "Deck Building", weight: "2.2", summary: "Sneak into a dragon's lair to steal artifacts; the louder you are, the more likely the dragon is to eat you." },
    { id: 6, title: "Planet Unknown", players: "1-6", length: "60-80m", mechanics: "Tile Placement", weight: "2.2", summary: "Develop a mysterious planet simultaneously with other players by placing polyomino tiles to build your colony." },
    { id: 7, title: "Panda Royale", players: "2-10", length: "20-30m", mechanics: "Roll & Write", weight: "1.5", summary: "A high-energy dice game where everyone plays at once to build the best bamboo-filled habitat for their pandas." },
    { id: 8, title: "Cabanga!", players: "2-6", length: "20m", mechanics: "Hand Management", weight: "1.1", summary: "Discard cards as fast as possible by matching numbers, but be careful not to leave 'gaps' for others to jump in." },
    { id: 9, title: "Hegemony", players: "1-4", length: "90-180m", mechanics: "Asymmetric", weight: "4.2", summary: "A deep political simulation where players represent the Working Class, Middle Class, Capitalists, or the State." },
    { id: 10, title: "Ra", players: "2-5", length: "45-60m", mechanics: "Auction", weight: "2.3", summary: "Auction for sets of Egyptian tiles across three epochs, trying to score points while avoiding the wrath of the sun god." },
    { id: 11, title: "Magic: The Gathering", players: "2+", length: "20m+", mechanics: "Deck Construction", weight: "3.2", summary: "The classic collectible card game where wizards duel using spells, artifacts, and summoned creatures." },
    { id: 12, title: "Res Arcana", players: "2-4", length: "30-60m", mechanics: "Engine Building", weight: "2.6", summary: "Compete as mages to build the most efficient engine of magical artifacts and monuments using only an 8-card deck." },
    { id: 13, title: "Werewords", players: "4-10", length: "10m", mechanics: "Deduction", weight: "1.3", summary: "Guess a secret word by asking Yes/No questions, but the Werewolf is trying to mislead you without being caught." },
    { id: 14, title: "TM: Ares Expedition", players: "1-4", length: "45-60m", mechanics: "Tableau Building", weight: "2.9", summary: "A card-driven version of Terraforming Mars where players simultaneously manage corporations to make Mars habitable." },
    { id: 15, title: "Tapestry", players: "1-5", length: "90-120m", mechanics: "Civ Building", weight: "2.9", summary: "Create the most storied civilization from the beginning of humankind into the future across multiple advancement tracks." },
    { id: 16, title: "Architects of the West Kingdom", players: "1-5", length: "60-80m", mechanics: "Worker Placement", weight: "2.8", summary: "Build the King's cathedral while balancing your virtue—be careful, your rivals can arrest your workers!" },
    { id: 17, title: "Castle Combo", players: "2-5", length: "15-30m", mechanics: "Card Drafting", weight: "1.4", summary: "A fast-paced card game about drafting characters to build the most influential castle layout in the kingdom." },
    { id: 18, title: "Jorvik", players: "2-5", length: "45-60m", mechanics: "Auction/Bidding", weight: "2.4", summary: "A Viking-themed bidding game where the order in which you stand in line determines how much you pay for goods." },
    { id: 19, title: "Stonepine Architects", players: "1-4", length: "45-60m", mechanics: "Tile Placement", weight: "2.1", summary: "Carefully plan and build a thriving village in the woods by arranging tiles to maximize your aesthetic scoring." },
    { id: 20, title: "Sanctuary: Keepers Era", players: "1-2", length: "30-45m", mechanics: "Hand Management", weight: "2.5", summary: "A fast-paced card dueling game where players manage unique factions to protect their sanctuaries and destroy the enemy's." },
    { id: 21, title: "Roll Player", players: "1-4", length: "60-90m", mechanics: "Dice Drafting", weight: "2.4", summary: "Compete to build the ultimate RPG character by drafting dice to fill in your stats, race, and alignment." },
    { id: 22, title: "World Wonders", players: "1-5", length: "50-70m", mechanics: "Tile Placement", weight: "2.3", summary: "Spend gold to buy tiles and wooden wonders to build the most magnificent ancient city on your personal board." },
    { id: 23, title: "Seasons", players: "2-4", length: "60m", mechanics: "Drafting", weight: "2.8", summary: "Compete in a three-year tournament of sorcery, drafting cards and managing elemental tokens to gain the most prestige." },
    { id: 24, title: "Cartographers", players: "1-100", length: "30-45m", mechanics: "Flip & Write", weight: "1.9", summary: "Compete to map out the queen's lands by drawing polyomino shapes on your map grid based on revealed cards." },
    { id: 25, title: "Villagers", players: "1-5", length: "30-60m", mechanics: "Tableau Building", weight: "2.1", summary: "Rebuild your village after a plague by drafting specialists and creating efficient production chains." },
    { id: 26, title: "Bunny Kingdom", players: "2-4", length: "40-60m", mechanics: "Drafting", weight: "2.3", summary: "Draft cards to place bunnies on a grid, connecting fiefdoms and farming resources for the Rabbit King." },
    { id: 27, title: "Terraforming Mars", players: "1-5", length: "120m", mechanics: "Engine Building", weight: "3.2", summary: "Run a corporation working to terraform the Red Planet by raising the temperature, oxygen, and ocean levels." },
    { id: 28, title: "Paladins of the West Kingdom", players: "1-4", length: "90-120m", mechanics: "Worker Placement", weight: "3.7", summary: "Defend your city against invaders and build fortifications by enlisting the help of noble paladins each round." },
    { id: 29, title: "Dominion", players: "2-4", length: "30m", mechanics: "Deck Building", weight: "2.4", summary: "The original deck-builder where you buy kingdom cards to construct the most efficient engine of treasure and victory points." },
    { id: 30, title: "SETI", players: "1-4", length: "40-160m", mechanics: "Engine Building", weight: "4.0", summary: "Lead a scientific search for extraterrestrial intelligence by launching probes and analyzing data from deep space." },
    { id: 31, title: "Pirates of Maracaibo", players: "1-4", length: "30-100m", mechanics: "Grid Movement", weight: "2.5", summary: "Sail the Caribbean over three voyages, upgrading your ship and burying treasure to become the most famous pirate." }
];

// 2. App State
let sessionGames = [];
let vault = [];
let currentId = null;

// 3. Initialize/Reset Session
function startNewSession() {
    // Shuffle the master list and pick 20 random games for this session
    const shuffled = [...allGames].sort(() => 0.5 - Math.random());
    sessionGames = shuffled.slice(0, 20).map(g => ({ ...g, strikes: 0, stars: 0 }));
    
    vault = [];
    nextCard();
}

// 4. Game Logic
function nextCard() {
    if (vault.length >= 5) {
        showVault();
        return;
    }

    const available = sessionGames.filter(g => g.strikes < 2 && g.stars < 2);
    
    if (available.length === 0) {
        alert("Ran out of games in this rotation! Starting fresh...");
        resetApp();
        return;
    }

    const randomGame = available[Math.floor(Math.random() * available.length)];
    currentId = randomGame.id;
    updateUI(randomGame);
}

function updateUI(game) {
    document.getElementById('game-title').innerText = game.title;
    document.getElementById('game-summary').innerText = game.summary;
    document.getElementById('game-players').innerText = game.players;
    document.getElementById('game-length').innerText = game.length;
    document.getElementById('game-mechanics').innerText = game.mechanics;
    document.getElementById('game-weight').innerText = game.weight + " / 5";
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

// 5. Final Reveal Logic
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
    document.getElementById('vault-screen').classList.add('hidden');
    document.getElementById('winner-announcement').innerText = "";
    document.getElementById('winner-announcement').classList.remove('winner-zoom');
    document.getElementById('draw-button').classList.remove('hidden');
    document.getElementById('reset-button').classList.add('hidden');
    
    document.getElementById('card-container').classList.remove('hidden');
    document.querySelector('.controls').classList.remove('hidden');
    
    startNewSession();
}

// Kickoff
startNewSession();
