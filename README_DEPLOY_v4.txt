MEANING MOTIVE — website update v4, 17 July 2026 (full review build)

FIRST, THE GOOD NEWS: last time's upload WORKED. The live site already
shows the new homepage and /keeping-map/. If your browser shows the old
page, press Ctrl+F5 (hard refresh). Also: double-clicking index.html on
your desktop will always look broken locally — style.css lives on the
server; only the live site is the truth.

UPLOAD (drag into the repo root via Add file -> Upload files, replacing
what is there; folder drags upload correctly):

  index.html          (v3: adds "Next" to nav + a Next door card)
  keeping-map/        (v2: retypeset to match the site: same column
                       width, heading style, sizes as every other page;
                       nav now includes Next)
  next/               (NEW page: What we test next — MMB-2, with the
                       design map and the on-record predictions)
  story/ experiment/ evidence/ clause/ community/ colophon/ for-ai/
                      (each identical to live EXCEPT the nav line, which
                       now includes Keeping Map and Next everywhere)

THEN DELETE from the repo (open the file on GitHub -> bin icon -> commit):
  DEPLOY_README.txt
  mm_keeping_map_v0_3_170726.html

VERIFY: repo -> Actions tab shows a green "pages build and deployment";
then Ctrl+F5 on themeaningmotive.org. Check /keeping-map/ and /next/.

v3 CHANGES (over v2):
  keeping-map/index.html  - titling now matches the other pages exactly:
                            short kicker, all-normal-weight h1, tightened
                            top spacing.
  community/index.html    - new section: The Keeping List (opt-in letters,
                            mailto join/leave, no pixels, repo-watch lane).
Everything else identical to v2. Same instruction: drag all, replace all.

v4 CHANGES (over v3):
  story/part-ii/index.html - NEW: The Register, Part II (three problems
                             with the plan; timeless, no dated framing).
  story/index.html         - CTA row now leads with "Part II" (primary);
                             experiment button demoted to secondary.
