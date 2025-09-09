// Sample command data
const commands = [
  { name: "ban", category: "Moderation", description: "Ban a user from the server." },
  { name: "kick", category: "Moderation", description: "Kick a user from the server." },
  { name: "ping", category: "Utility", description: "Check bot latency." },
  { name: "help", category: "General", description: "Displays all commands avalible" }
];

// Render command list
function renderCommands(filter = "") {
  const list = document.getElementById("command-list");
  list.innerHTML = ""; // Clear previous items

  const filtered = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(cmd => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${cmd.name}</strong> (${cmd.category}): ${cmd.description}`;
    list.appendChild(item);
  });
}


document.getElementById("search").addEventListener("input", (e) => {
  renderCommands(e.target.value);
});


renderCommands();

// == Bot Status (Simulated) ==
function updateBotStatus() {
  const statusEl = document.getElementById("status-indicator");
  const isOnline = Math.random() > 0.2; // 80% chance online

  statusEl.textContent = isOnline ? "🟢 Online" : "🔴 Offline";
  statusEl.style.color = isOnline ? "green" : "red";
}

updateBotStatus();
setInterval(updateBotStatus, 10000);


document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});