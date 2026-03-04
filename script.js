let points = 0;
let perSecond = 0;

// List of upgrades in order
const upgrades = [
  { name: "Liam", cost: 10, power: 1, owned: 0 },
  { name: "OD", cost: 50, power: 5, owned: 0 },
  { name: "Dan", cost: 200, power: 20, owned: 0 },
  { name: "Chud", cost: 1000, power: 100, owned: 0 },
  { name: "Beefus", cost: 5000, power: 500, owned: 0 },
  { name: "Oddizy", cost: 20000, power: 2000, owned: 0 },
  { name: "Chud Beefus", cost: 100000, power: 10000, owned: 0 },
  { name: "Personal Butler", cost: 500000, power: 50000, owned: 0 },
  { name: "Max Chud Beefus", cost: 2000000, power: 200000, owned: 0 }
];

const pointsEl = document.getElementById("points");
const ppsEl = document.getElementById("pps");
const btn = document.getElementById("leefusBtn");
const container = document.getElementById("upgradeContainer");

function updateUI() {
  pointsEl.textContent = Math.floor(points);
  ppsEl.textContent = perSecond;
}

// Click the button
btn.onclick = () => {
  points++;
  updateUI();
};

// Add points per second
setInterval(() => {
  points += perSecond;
  updateUI();
}, 1000);

// Show upgrades
function renderUpgrades() {
  container.innerHTML = "";
  upgrades.forEach((u, i) => {
    const b = document.createElement("button");
    b.textContent = `${u.name} - ${u.cost} (Owned: ${u.owned})`;
    b.onclick = () => buyUpgrade(i);
    container.appendChild(b);
  });
}

// Buy upgrade
function buyUpgrade(i) {
  const u = upgrades[i];
  if (points >= u.cost) {
    points -= u.cost;
    u.owned++;
    perSecond += u.power;
    u.cost = Math.floor(u.cost * 1.5);
    updateUI();
    renderUpgrades();
  }
}

renderUpgrades();
updateUI();
