const test = require("node:test");
const assert = require("node:assert/strict");
const { isUpcoming, sortEvents, filterTeams, formatDate } = require("../js/logic.js");

const TODAY = "2026-10-07";

test("isUpcoming returns true for an event later this year", () => {
  assert.equal(isUpcoming({ date: "2026-12-03" }, TODAY), true);
});

test("isUpcoming returns true for an event today", () => {
  assert.equal(isUpcoming({ date: "2026-10-07" }, TODAY), true);
});

test("isUpcoming returns false for an earlier date this year", () => {
  assert.equal(isUpcoming({ date: "2026-03-15" }, TODAY), false);
});

test("isUpcoming treats an event from last year as past", () => {
  assert.equal(isUpcoming({ date: "2025-11-12" }, TODAY), false);
});

test("sortEvents puts the soonest event first across months", () => {
  const events = [{ id: "a", date: "2026-10-14" }, { id: "b", date: "2026-09-30" }];
  assert.deepEqual(sortEvents(events).map((e) => e.id), ["b", "a"]);
});

test("sortEvents returns a new array and leaves the input unchanged", () => {
  const events = [{ id: "a", date: "2026-05-02" }, { id: "b", date: "2026-05-01" }];
  const sorted = sortEvents(events);
  assert.notEqual(sorted, events);
  assert.deepEqual(events.map((e) => e.id), ["a", "b"]);
});

const TEAMS = [
  { name: "One", category: "Computer Vision" },
  { name: "Two", category: "RAG/LLMs" },
  { name: "Three", category: "RAG/LLMs" }
];

test("filterTeams with All returns every team", () => {
  assert.equal(filterTeams(TEAMS, "All").length, 3);
});

test("filterTeams returns teams in the given category", () => {
  assert.deepEqual(filterTeams(TEAMS, "Computer Vision").map((t) => t.name), ["One"]);
});

test("filterTeams matches the category regardless of case", () => {
  assert.deepEqual(filterTeams(TEAMS, "rag/llms").map((t) => t.name), ["Two", "Three"]);
});

test("formatDate turns an ISO date into a short readable date", () => {
  assert.equal(formatDate("2026-10-09"), "Oct 9, 2026");
});
