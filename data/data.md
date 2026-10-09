# SDSU AI Club: Upcoming Events and Projects

## Upcoming Events (Fall 2026)

The site lists event titles only, with no individual times, locations, or descriptions. All dates fall on Fridays, and the site says the club meets **Fridays, 1:00 to 3:00 PM**, so that is the likely time for each event.

| Date | Day | Event(s) |
|---|---|---|
| 2026-10-09 | Fri | Workshop |
| 2026-10-16 | Fri | Project Worktime; Social |
| 2026-10-23 | Fri | Midterm Presentations |
| 2026-10-30 | Fri | Workshop |
| 2026-11-06 | Fri | Hackathon; Project Worktime |
| 2026-11-13 | Fri | Speaker |
| 2026-11-20 | Fri | Workshop; Project Worktime |
| 2026-12-04 | Fri | Final Presentations |

Past Fall 2026 events (for reference): Sep 11 Project Introductions, Python + ML Workshop; Sep 18 Group Formation, Social; Sep 25 Speaker; Oct 2 Social, Project Worktime.

---

## Current Projects (Fall 2026)

### In-House Projects

#### PRD to MCP Tool Generator
- **Difficulty:** Medium - Hard
- **Problem:** Writing an MCP server is mostly boilerplate. Someone describes what they want a tool to do in plain English, and a developer spends a day translating that into schemas, handlers, and tests. The description already contains almost everything needed.
- **Goal:** Take a product requirements doc written in plain English and output a working MCP server that compiles, starts, and answers protocol calls. The code generation is not the interesting part. The checker that verifies the output without a human reading it is the interesting part.

#### Dependency Vulnerability Scanner
- **Difficulty:** Medium - Hard
- **Problem:** Every existing scanner dumps a list of vulnerable packages, and most of those findings are noise because the vulnerable function never gets called. Security teams get 400 alerts and act on 6.
- **Goal:** Point it at a repo and get back only the vulnerabilities your code can actually reach. Reachability is the differentiator, and it is what makes this a semester project instead of a weekend one.

#### Personalized Knowledge Base
- **Difficulty:** Easy - Medium
- **Problem:** Organizations sit on piles of documents that go stale, contradict each other, and nobody notices until someone acts on the wrong version.
- **Goal:** Build an agent that ingests a document set and keeps it usable over time. It indexes, spots contradictions between documents, and flags information that has expired.

#### Driver Drowsiness Detection
- **Difficulty:** Easy - Medium
- **Problem:** Drowsy driving kills thousands of people a year. Detection systems ship in luxury cars and almost nowhere else.
- **Goal:** A camera watches a face and raises an alert when the driver is falling asleep. The hard part is that drowsiness happens over seconds, not in a single frame. One closed-eye frame is a blink. Two seconds of closed eyes is the alert.

#### Trash / Recycling Classifier
- **Difficulty:** Easy - Medium
- **Problem:** Contaminated recycling loads get diverted to landfill. One greasy pizza box in the wrong bin costs a facility real money, and most people are guessing.
- **Goal:** Hold an object up to a camera and get told which bin, using the actual published rules of one specific city.

#### Resume / JD Gap Analyzer
- **Difficulty:** Easy - Medium
- **Problem:** Applicants get rejected with no feedback and no idea what was missing. The tools that claim to help return a match percentage, which tells you nothing you can act on.
- **Goal:** Paste a resume and a job posting, get back the specific skills the posting asks for that the resume does not show, with evidence for every claim.

#### Custom Medical Chatbot
- **Difficulty:** Medium
- **Problem:** Medical information online is hard to read and full of misinformation, and general purpose LLMs will confidently answer questions they have no business answering.
- **Goal:** A question answering system over trusted medical sources that cites every claim and refuses what it should refuse.

#### Sports Game Outcome Prediction
- **Difficulty:** Easy - Medium
- **Problem:** Everyone builds a model that beats the spread on backtest, and almost none of them survive contact with a live season. The failure is usually leakage, not modeling.
- **Goal:** Build a well calibrated predictor. When it says 70%, that team should win about 70% of the time. The goal is not to beat the market. The goal is to know exactly how confident you are and be right about that.

#### Sketch Showdown
- **Difficulty:** Medium
- **Problem:** Sketch recognition demos all work the same way. Draw the whole thing, hit submit, get a label. That is not how anyone plays Pictionary, and it is not where the recognition is useful.
- **Goal:** A drawing game where the model guesses while you are still drawing. Guessing from 20% of the strokes and updating live is the entire project. Every design decision follows from that.

#### Ambient Audio Generator
- **Difficulty:** Medium - Hard
- **Problem:** Sound design for games, film, and accessibility tools is slow and expensive, and stock libraries never quite match the scene you have.
- **Goal:** Describe a scene in text, or hand it a photo, and get matching ambient audio back.

#### Poker Agent
- **Difficulty:** Medium
- **Problem:** Poker is the standard testbed for imperfect information games, where you never see the full state and your opponent is actively hiding it. The techniques that solved chess and Go do not work here.
- **Goal:** An agent that learns poker by playing itself, starting in a game small enough that you can prove it is improving rather than hoping.

#### Chess Agent
- **Difficulty:** Medium - Hard
- **Problem:** Every team wants to build full chess. AlphaZero used thousands of TPUs. The semester ends before self-play converges and the demo is an agent that hangs its queen on move nine.
- **Goal:** Pick one of three scoped versions in week one and build that one properly. All three produce a real result. Full chess does not.

#### Cross-Media Recommender
- **Difficulty:** Medium
- **Problem:** You finish a novel you loved and want something that hits the same way, but every recommender only knows one medium. Goodreads recommends books, MyAnimeList recommends anime, and neither one talks to the other.
- **Goal:** You loved a book, it recommends an anime. You finished a show, it recommends a novel.

### Industry Partner Projects

**Program:** Building Industry Association (BIA) AI Subcommittee x SDSU AI Club, Applied AI Program

The BIA AI Subcommittee and SDSU AI Club partner to connect BIA member businesses with student teams for a semester-long applied AI collaboration. Teams work directly with a selected BIA member company to identify a meaningful workflow or business process, design a practical AI/ML or automation solution, and deliver a professional project report, code repository, and demo by the end of the Fall 2026 semester. Teams present their findings to BIA leadership.

#### Jobsite Safety Intelligence
- **Partner:** Data Net Solutions Group
- **Problem:** Safety documentation across construction job sites is scattered across paper forms, spreadsheets, and photos, making it hard to catch compliance gaps or trends before they become violations or incidents.
- **Goal:** Build an AI system that extracts and cross-references safety data (hazard assessments, certifications, incident reports) to flag compliance risks and surface safety trends automatically.

#### AI-Enabled Change Order Management
- **Partner:** Cohyric
- **Problem:** Subcontractors lose significant revenue each year because field-reported change orders are captured inconsistently and estimated without the context needed to make fast, accurate decisions.
- **Goal:** Develop an AI tool that turns voice and photo field reports into structured change order data with automated cost estimates (subject to human review), management interface, and timely notifications.

#### Construction Talent Discovery Engine
- **Partner:** Bright Sky Recruiting
- **Problem:** Traditional keyword-based candidate search fails in construction recruiting, where job titles are inconsistent and strong candidates often have thin online profiles.
- **Goal:** Create an AI-powered discovery engine that identifies and evaluates promising candidates from public sources using patterns beyond simple title or keyword matching when given a target position and its requirements.

---

## Club Info (for headers/footers)

- **Founded:** 2017
- **Meetings:** Fridays, 1:00 to 3:00 PM
- **Who can join:** Open to all majors, no experience required
- **Discord:** https://discord.gg/Rp8tnQr9dr
- **GitHub:** https://github.com/aiclub-sdsu
- **Instagram:** https://www.instagram.com/sdsuaiclub/
- **Email:** SDSUAIClub@gmail.com