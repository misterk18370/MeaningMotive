# Site fix drop · 25 July 2026

Files mirror repo paths. Upload via Add file -> Upload files, replacing.

REPLACE:
  for-ai/index.html                  v1.0 -> v1.1: authorship line aligned with
                                     MM-1 v0.2; dated changelog added; footer
                                     step line now linked.
  clause/mm-1.txt                    v0.1 -> v0.2: machine-readable clause now
                                     matches the live page, changelog appended.
  evidence/predictions/index.html    Rendering repair (raw tuple paste around the
                                     seven ledger cards removed - the cards were
                                     wrapped in ('...', '...') with literal \n);
                                     full eight-item nav; licence footer line and
                                     Licence link added; step line linked.
  evidence/index.html                "also on SSRN" removed (submission rejected;
                                     the page should not claim a listing a
                                     reviewer cannot find). Nothing else touched.

THEN: work through DELETIONS.md (repo housekeeping)
THEN: ZENODO_PASTE_PACK.md (two edits in the Zenodo UI)

DECISION STILL YOURS (no file in this drop):
  hello@ vs info@ - verify Cloudflare routes hello@themeaningmotive.org.
  If it does, leave /red-team/ and /community/ alone. If not, say the word
  and I will return both pages switched to info@.

Suggested commit message:
  For AI v1.1 + mm-1.txt v0.2 (prediction-is-not-authorship alignment);
  Prediction Ledger rendering repair, full nav and licence footer
