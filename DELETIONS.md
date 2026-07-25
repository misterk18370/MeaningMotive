# Deletion list · 25 July 2026

Remove these from the repo root of misterk18370/MeaningMotive. All are either
stale duplicates, internal working notes, or misnamed drafts; none is linked
from any live page. Removing them changes nothing a visitor sees, except that
one internal document stops being publicly fetchable.

## Delete first (doctrine exposure)

1. `mm_keeping_map_v0_3_170726.html`
   Misnamed: contains Homepage Copy v0.1 with internal editorial notes
   ("hero alternative held in reserve", "the author adjudicates").
   Live at themeaningmotive.org/mm_keeping_map_v0_3_170726.html.
   Flagged for deletion in DEPLOY_README on 17 July; never actioned.

2. `mnt/` (the whole tree: mnt/user-data/outputs/site-update-230726/)
   Accidentally committed working directory. Contains stale forks of
   index.html, clause/index.html and barometer/index.html that contradict
   the live versions, and the path itself exposes build mechanics.

3. `MM_Licence_Block_v0_1_170726.md`
   Misnamed: contains Workshop Note 001 INCLUDING the provenance section
   ("two AI collaborators, arguing. The author adjudicates") that the live
   /workshop/ page correctly omits. Publicly fetchable as raw text.

## Delete second (working files, no exposure but untidy)

4. `COMMIT_NOTE.md`
5. `DEPLOY_README.txt`
6. `README_DEPLOY_v2.txt`
7. `README_DEPLOY_v3.txt`
8. `README_DEPLOY_v4.txt`
9. `README_DEPLOY_v5.txt`
10. `MM_Homepage_Copy_v0_1_170726.md`   (misnamed: contains the licence block spec, now deployed)
11. `MM_MMB2_Design_v0_3_170726.md`     (misnamed: contains a Keeping Map HTML draft, superseded by /keeping-map/. NOTE: the real MMB-2 design doc is NOT in the repo and must never be)
12. `step.txt`                          (duplicate of keep-your-own-step/step.txt; only the folder copy is linked)

## Move, not delete

13. `keeping_map_caption_card_v0_2_170726.png`  -> assets/
14. `keeping_map_drill_v0_2_170726.gif`         -> assets/
    (Only if nothing external hotlinks the root paths; nothing on-site does.)

## Keep

- `README.md`, `SIGNATORIES.md`, `CNAME`, `.nojekyll`, `.github/` - all correct.

## Suggested commit message

`Housekeeping: remove stale drafts, deploy notes and an accidentally committed working tree; no page content changes`
