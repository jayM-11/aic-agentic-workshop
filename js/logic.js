// Shared logic for AIC Club Hub.
// Browser: loaded with a classic <script> tag, available as window.Logic.
// Node: require("./js/logic.js").
(function () {
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function parts(iso) {
    var p = iso.split("-");
    return { year: Number(p[0]), month: Number(p[1]), day: Number(p[2]) };
  }

  // event.date and today are "YYYY-MM-DD" strings.
  function isUpcoming(event, today) {
    var e = parts(event.date);
    var t = parts(today);
    if (e.month !== t.month) return e.month > t.month;
    return e.day >= t.day;
  }

  function toShortDate(iso) {
    var d = parts(iso);
    return d.month + "/" + d.day + "/" + d.year;
  }

  // Returns a new array, soonest first.
  function sortEvents(events) {
    return events.slice().sort(function (a, b) {
      var ka = toShortDate(a.date);
      var kb = toShortDate(b.date);
      if (ka < kb) return -1;
      if (ka > kb) return 1;
      return 0;
    });
  }

  function filterTeams(teams, category) {
    if (category === "All") return teams.slice();
    return teams.filter(function (team) {
      return team.category === category;
    });
  }

  // "2026-10-09" -> "Oct 9, 2026"
  function formatDate(iso) {
    var d = parts(iso);
    return MONTHS[d.month - 1] + " " + d.day + ", " + d.year;
  }

  var Logic = {
    isUpcoming: isUpcoming,
    sortEvents: sortEvents,
    filterTeams: filterTeams,
    formatDate: formatDate
  };

  if (typeof window !== "undefined") window.Logic = Logic;
  if (typeof module !== "undefined" && module.exports) module.exports = Logic;
})();
