# **AIC Workshop: Member Checklist**

You'll onboard an AI coding agent onto a small sample club website, fix what's broken, then use **Superpowers** to design and build a page that's all yours. Check boxes as you go.

Works with **OpenCode** (free), **Claude Code**, or **Codex**. Commands below use OpenCode; the cheat sheet at the end covers the others.

Make a copy of this document to check in the boxes.

## **0. Before you start**

- [ ] You finished the [pre-work](https://docs.google.com/document/d/1eXix7tRfKNPwQcckZnxb8gYovIpQv7Syx4zK_KWDi8k/edit?usp=sharing): OpenCode installed, a free model connected, Superpowers installed.
- [ ] You cloned the repo:

```sh
git clone https://github.com/jayM-11/aic-agentic-workshop.git
```

then

```sh
cd aic-agentic-workshop
```

## **1. Meet the project (5 min)**

- [ ] Start your agent: `opencode`
- [ ] Pick a model marked **Free**: `/models`
- [ ] Ask: `Explain this project in 5 bullet points.`
- [ ] Ask: `Run the tests and tell me what fails.` You should see **3 failing tests**. That's on purpose.
- [ ] Open `index.html` in your browser and click around. Spot anything off?

## **2. Fix it like the demo (about 8 min)**

**Orchestrate three agents.** This repo comes with a planner, a builder, and a reviewer. Call them with @:

- [ ] `@planner plan fixes for the 3 failing tests`
- [ ] `@builder implement the plan`
- [ ] `@reviewer review the changes` Did it approve, or push back?
- [ ] Run `node --test` in another terminal (same project folder) yourself. Goal: **0 failures**.

**Give your agent a browser.** Playwright MCP is already set up in this repo.

- [ ] Ask: `Use the Playwright tools to click through each link and tell me what's broken.`
- [ ] Ask it to fix what it found.

**Get a design review.** In a second terminal window:

- [ ] Add the impeccable skill to your coding agent. Run

```sh
npx impeccable@latest install --provider=opencode --scope=project
```

You can change the provider to claude, cursor, codex, etc. if that is what you are using. You can also choose to set scope to “global” if you want the skill everywhere on your machine. Here is the documentation for this skill: <https://github.com/pbakaus/impeccable>

If you're on **windows** and you cannot see impeccable show up in your skills in opencode, try running:

```sh
npx impeccable@latest install --provider=opencode --scope=project; echo “EXIT: $LASTEXITCODE”
```

If this the code = -1073741515, then it’s a Microsoft Visual C++ Redistributable problem and you may need to download that. Here is a [link](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-supported-redistributable-version) to the latest supported versions. Run the .exe file and then try the terminal commands again.

- [ ] Run `npx impeccable detect index.html` in the terminal. Or, you may also follow a similar pattern to the demo, where you call `/impeccable critique on index.html`, then `/impeccable polish`
- [ ] Paste the results to your agent and ask it to fix the top 3.

Done early? Ask your agent anything. Improve whatever you want. Or save some of your usage and move to the next task.

## **3. Build your page with Superpowers (the main event)**

`your-page.html` is empty. You'll design and build it with Superpowers, so everyone's page will be different.

**OR** you may also choose to **build whatever you want**. If you have an app idea but never got around to building it, now is the perfect time to create a lightweight mockup! Try to keep the scope down so you can finish early!

- [ ] Pick an idea from `docs/page-ideas.md`, or invent your own.
- [ ] Paste this, filling in your idea:

```sh
I want to build your-page.html in this repo. My idea: [YOUR IDEA]. Keep it to that one page, match the rest of the site, and add no new dependencies. Let's brainstorm it.
```

- [ ] **Brainstorm:** answer its questions in a sentence or two each. Say no to anything that grows the scope.
- [ ] **Design:** read each section it shows you, then approve.
- [ ] **Plan:** approve the task list.
- [ ] **Build:** let it run. Times a reviewer asked for changes: \_\_\_\_\_\_
- [ ] Open `your-page.html` in your browser. Hopefully, It works.

**If it gets stuck:**

- It starts coding without asking questions: type `use the brainstorming skill`
- The model stops responding or hits a limit: switch with `/models` and type `continue`
- It's taking forever: tell it to cut the plan down to 3 tasks.

## **4. Showcase**

- [ ] Be ready to show your page and answer: What did you build? How many times did a reviewer push back? What broke along the way?

## **Stretch goals**

- **Give each agent its own model.** Open `.opencode/agents/reviewer.md` and set a different free model on the `model:` line. Does the reviewer get stricter?
- **Build your own app.** If you still have free usage, make a new folder and start Superpowers from nothing, like Demo 2.

## **Cheat sheet**

| **What you want** | **OpenCode** | **Claude Code** | **Codex** |
| :-: | :-: | :-: | :-: |
| Pick a model | `/models` | `/model` | `/model` |
| Write a context file | `/init` | `/init` | `/init` |
| Call a subagent | `@planner ...` | `Use the planner agent to ...` | Describe the role in your prompt |
| Undo the last change | `/undo` | `/rewind` | `git checkout .` |
| Check MCP servers | `opencode mcp list` | `/mcp` | `/mcp` |
| Run the tests | `node --test` | `node --test` | `node --test` |
