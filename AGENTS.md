# AIC Club Hub

A small 3-page website for the SDSU AI Club: a home page with upcoming and past events, a project teams page with category filters, and an empty "Your Page" that members build during the workshop.

Plain HTML, CSS, and JavaScript. No framework, no build step.

## How to open it

- Double-click `index.html` to open it in your browser (works over `file://`), or
- Run `npx serve .` from the repo root and open the URL it prints.

## How to run tests

```sh
node --test
```

Requires Node 20 or newer. Tests live in `tests/*.test.js` and use Node's built-in test runner. No test libraries.

## File map

| Path | What it is |
| --- | --- |
| `index.html` | Home page: hero, upcoming events, past events |
| `teams.html` | Project teams grid with category filter buttons |
| `your-page.html` | Empty page for members to build |
| `css/styles.css` | Shared styles for all pages |
| `js/logic.js` | Shared pure logic (`window.Logic` in the browser, `module.exports` in Node) |
| `js/home.js` | Renders the event lists on `index.html` |
| `js/teams.js` | Renders the filter buttons and team cards on `teams.html` |
| `data/events.js` | `window.EVENTS`: club events |
| `data/teams.js` | `window.TEAMS`: project teams |
| `tests/logic.test.js` | Tests for `js/logic.js` |
| `docs/page-ideas.md` | Ideas for `your-page.html` |

## Logic spec (`js/logic.js`)

- `isUpcoming(event, today)`: `true` if the event date is today or later. Both dates are `"YYYY-MM-DD"` strings.
- `sortEvents(events)`: returns a new array, soonest first. Does not modify the input.
- `filterTeams(teams, category)`: `"All"` returns every team. Otherwise returns teams in that category. Category matching is case-insensitive.
- `formatDate(iso)`: `"2026-10-09"` becomes `"Oct 9, 2026"`.

## Conventions

- Vanilla JS only. No frameworks, no bundlers, no new dependencies.
- The site must keep working from `file://`: no `fetch()` of local files and no ES modules. Load data and code with classic `<script>` tags that set globals.
- Logic that can be tested goes in `js/logic.js`, with tests in `tests/`. Page scripts only render.
- In tests, always pass `today` explicitly. Never depend on the real clock.
- Laptop and desktop only. No mobile layout needed.

## How we work

1. Plan before coding. Write down the steps and the files you will touch.
2. Write or update a test first, then change the code.
3. Run `node --test` before saying you are done.
