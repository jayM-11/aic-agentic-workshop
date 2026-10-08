// Renders the team grid and category filter buttons on teams.html.
(function () {
  var ICONS = {
    "Agentic AI": "🤖",
    "Computer Vision": "👁️",
    "RAG/LLMs": "📚",
    "Machine Learning": "📈",
    "Multimodal AI": "🎨",
    "Reinforcement Learning": "🎮",
    "Recommendation Systems": "🎯"
  };

  var grid = document.getElementById("team-grid");
  var filters = document.getElementById("filters");

  function render(category) {
    grid.innerHTML = "";
    Logic.filterTeams(window.TEAMS, category).forEach(function (team) {
      var card = document.createElement("article");
      card.className = "team-card";
      card.innerHTML =
        "<div class=\"team-icon\">" + (ICONS[team.category] || "✨") + "</div>" +
        "<h3>" + team.name + "</h3>" +
        "<span class=\"tag\">" + team.category + "</span>" +
        "<p>" + team.description + "</p>" +
        "<p class=\"members\">👥 " + team.members + " members</p>";
      grid.appendChild(card);
    });
  }

  function addButton(label, value) {
    var button = document.createElement("button");
    button.className = "filter-btn";
    button.textContent = label;
    button.dataset.category = value;
    button.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      button.classList.add("active");
      render(button.dataset.category);
    });
    filters.appendChild(button);
    return button;
  }

  var categories = [];
  window.TEAMS.forEach(function (team) {
    if (categories.indexOf(team.category) === -1) categories.push(team.category);
  });

  addButton("All", "All").classList.add("active");
  categories.forEach(function (c) { addButton(c, c.toLowerCase()); });
  render("All");
})();
