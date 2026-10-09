# Waypoint — Daily Lessons

A mobile-first daily learning app. Each day you pick **two topics** and get one short lesson from each, written to give you the 20% of a subject that gets you 80% of the way. Then you drill it.

**Live site:** https://mbutler98.github.io/Daily_quiz/ (after GitHub Pages is enabled — see below)

## How it works

1. **Profile** – choose a callsign and insignia, the topics you're interested in, your preferred drill and a light or dark theme. You can have more than one profile on a device.
2. **Mission** – each day, pick 2 topics. Waypoint gives you the next lesson in each.
3. **Brief** – Bottom Line Up Front, the key points, a real-world example, the common mistake, and key terms.
4. **Drill** – four modes: Flashcards, Multiple choice, True/False, Match-up.
5. **Review** – terms from finished lessons go into a spaced-repetition deck (Leitner boxes), plus a 60-second **Blitz**.

**Gamification:** XP, 9 ranks (Cadet → Air Marshal), daily streaks with bonus XP, 15 patches to earn, and a 4-week activity log.

## Topics (40 lessons)

| Topic | Lessons |
|---|---|
| Artificial Intelligence | 8 |
| Engineering | 7 |
| Finance (CFA) | 8 |
| Aerospace & Flight | 6 |
| Cybersecurity | 5 |
| Leadership & Decisions | 6 |

## Adding content

Each topic is one file in `content/`. To add a lesson, copy an existing lesson object and edit it. To add a topic, create a new file that calls `WP.addTopic({...})`, add a `<script>` tag for it in `index.html`, add the file to `CORE` in `sw.js`, and optionally add an icon to `TOPIC_ICON` in `js/app.js`.

In multiple-choice questions, `c` is the index of the correct answer. Options are shuffled when shown, so the correct answer can go first.

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
