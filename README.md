# Waypoint — Daily Lessons

A pocket university for your commute. Each day you pick **two topics** and get one lesson from each, written in plain English to give you the 20% of a subject that gets you 80% of the way. Then you drill it.

**Live site:** https://mbutler98.github.io/Daily_quiz/ (after GitHub Pages is enabled — see below)

## How it works

1. **Profile** – callsign, insignia, interests (grouped into faculties), preferred drill, light/dark theme. Multiple profiles per device.
2. **Today** – the home screen opens on **two preselected lessons** (photo cards you can swipe between). Pick one and start — no scrolling needed. Finishing it completes the day and keeps your streak. Don't fancy either? Tap "Show two different options". Changed your mind before starting? "Switch to the other option".
3. **Read** – every lesson has:
   - an opening **hook**
   - **the short version** (one-paragraph summary)
   - **the full picture** — a plain-English explanation with sub-headings
   - **remember these** — the key points
   - a **real-world example** and the **common trap**
   - **key terms**
   - **think about it** — thought-starter questions, with a notes box saved on your device
   - **talk about it** — one thing worth bringing up with a colleague or friend (shareable from your phone)
   - **charts, animations and videos** where a picture explains it better (see below)
   - a **Listen** button: the device reads the lesson aloud, highlighting each paragraph as it goes. The text stays on screen, so you can read, listen or both. Tap any paragraph to jump there; speed is adjustable.
4. **Drill** – Flashcards, Multiple choice, True/False, Match-up. Questions can include a chart or animation, have a read-aloud button, and track how many you get in a row.
5. **Review** – spaced-repetition flashcards from finished lessons, plus a 60-second **Blitz**.
6. **Library** – every lesson is open to browse and search any time; extra lessons earn XP too.

**Habit loop:** the lesson comes first. Everything else is kept small so it doesn't crowd the learning:
- **Daily log** under Today's lesson: a GitHub-style grid of every day you've learned (darker = more XP), with your streak and **1.01ⁿ**, where n is the number of days learned. 1% better a day compounds to about 38× in a year. The full 12 months are on the Logbook tab.
- **Streak freezes:** every 7 days in a row earns one (hold up to two). A missed day spends one automatically, so a single bad day doesn't erase weeks of work.
- **Quick recall:** once today's lesson is done, one question from an older lesson appears for +10 XP. Retrieval practice is what makes things stick.
- **Combos:** three or more correct in a row on a first run earns a small bonus.
- XP, 9 ranks (Cadet → Air Marshal), daily streak bonus XP, 16 patches.

## Library (23 topics, 138 lessons)

| Faculty | Topics |
|---|---|
| Technology | AI (8), Data Systems / DDIA (11), Cybersecurity (5), Engineering (7) |
| Money & Markets | Finance – CFA (8), Banking (6), Economics (6), Risk Modelling (6), Investing (5) |
| Society & Ideas | Politics & Government (5), Regulation & Compliance (5), History (6), Geography (6), Philosophy (6), Toronto (6) |
| Leadership & Strategy | Leadership & Decisions (6), Strategy & Consulting (5) |
| Trades & Home | Carpentry (5), HVAC (5) |
| Flight & Space | Aerospace & Flight (6) |
| Sport & Body | Tennis (5), Squash (5), Strength Training (5) |

## Photos

Card and banner photos live in `img/` and are mapped to topics in `TOPIC_IMG` in `js/app.js`. Swap any file (keep the name, or update the map) to change the look. Note: the current images are game screenshots supplied for personal use — replace them with your own or openly licensed photos (e.g. Unsplash) if you share the site publicly.

## Adding content

Each topic is one file in `content/` that calls `WP.addTopic({...})`. Copy any lesson object as a template — fields are `hook`, `bluf`, `story` (array of paragraphs; a line starting with `## ` becomes a sub-heading), `points`, `example`, `pitfall`, `terms`, `mcq`, `tf`, `think`, `talk`. Add a `<script>` tag for new files in `index.html`, and list the topic in a faculty in `FACULTIES` in `js/app.js` (unlisted topics appear under "More").

`content/extras-*.js` files use `WP.enrich({ lessonId: {...} })` to add fields to existing lessons.

### Charts, animations, images and video

Figures live in `content/visuals.js` (so lesson files stay untouched) via `WP.addFigures({ lessonId: { story, mcq, tf } })`. You can also drop a figure object straight into a lesson's `story` array. Formats are documented at the top of `js/visuals.js`:

- **Charts** (`type: "chart"`, `kind: "column" | "bar" | "line" | "waterfall"`) follow consulting conventions: the title states the takeaway ("Inflation peaked at 3× target in 2022", not "Inflation 2019–24"), grey context with one highlighted mark, direct labels, no gridlines, a source line, and a Data table for screen readers. Tap a bar or point to read its value.
- **Scenes** (`type: "scene"`) are 3Blue1Brown-style animations: curves draw themselves, shift and morph step by step, each with a caption. Press Play, step with the arrows, or let the Listen player narrate them. Shapes: `fn`, `morph`, `pt`, `move`, `line`, `arrow`, `area`, `text`, `dim`.
- **Images** (`type: "image"`, `src`, `alt`, `caption`, `credit`).
- **Video** (`type: "video"`): `youtube: "id"` loads only when tapped (privacy-friendly embed), or `src: "media/clip.mp4"` for local clips, e.g. ones you render with [Manim](https://www.manim.community/), the library 3Blue1Brown uses.

Lessons with figures today: Supply & Demand, Inflation, Compounding, Thinking in Distributions, Credit Risk, The Three Financial Statements, and the first three AI lessons (3Blue1Brown videos plus a gradient-descent animation).

In multiple-choice questions, `c` is the index of the correct answer. Options are shuffled when shown, so the correct answer can go first.

Facts reflect knowledge as of 2025–26; rules, rates and limits (TFSA room, regulations, etc.) change, so check official sources before acting on them.

## Deploying on GitHub Pages

Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)`**. There is no build step.

On your phone, open the site and choose **Add to Home Screen** to use it like an app. It works offline once loaded.

## Data

Progress is stored in your browser (`localStorage`) on each device. Use **Profile → Export / Import** to move it between devices.

## Run locally

```
python3 -m http.server 8000
# open http://localhost:8000
```
