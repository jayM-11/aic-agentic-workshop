// Renders the Upcoming and Past event lists on index.html.
(function () {
  var now = new Date();
  var today = now.getFullYear() + "-" +
    String(now.getMonth() + 1).padStart(2, "0") + "-" +
    String(now.getDate()).padStart(2, "0");

  function eventItem(event) {
    var li = document.createElement("li");
    li.className = "event-card";
    li.innerHTML =
      "<h3>" + event.title + "</h3>" +
      "<p class=\"event-meta\">📅 " + Logic.formatDate(event.date) + " · ⏰ " + event.time + "</p>" +
      "<p class=\"event-meta\">📍 " + event.location + "</p>" +
      "<p>" + event.description + "</p>";
    return li;
  }

  var upcoming = Logic.sortEvents(window.EVENTS.filter(function (e) {
    return Logic.isUpcoming(e, today);
  }));
  var past = Logic.sortEvents(window.EVENTS.filter(function (e) {
    return !Logic.isUpcoming(e, today);
  })).reverse();

  var upcomingList = document.getElementById("upcoming-list");
  var pastList = document.getElementById("past-list");
  upcoming.forEach(function (e) { upcomingList.appendChild(eventItem(e)); });
  past.forEach(function (e) { pastList.appendChild(eventItem(e)); });
})();
