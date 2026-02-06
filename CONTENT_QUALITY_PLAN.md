# Fish content quality plan

Goal: improve the learning/quiz value of each fish entry while keeping facts accurate and sourced.

## Data conventions (Fish entries)

### Habitat
- **Use token lists** (short noun phrases) that work as reusable quiz options.
- Avoid single-place-only entries like just `"Lake Erie"`.
- Prefer 3–5 tokens per fish.
- Good examples:
  - `"Great Lakes (including Lake Erie)"`
  - `"rocky reefs and shoals (spawning areas)"`
  - `"clear, rocky streams and rivers"`
  - `"open lake waters (pelagic)"`

### Features + keyFeature
- Features: 4–6 bullet-like strings; emphasize **ID cues** (not just general ecology).
- `keyFeature` should be:
  - a single, high-signal ID phrase
  - consistent with `featureOptions.correct`
  - ideally something a user can check visually

### True/False questions
- Target **4 questions** per fish (mix of ID + basic ecology).
- Avoid tricky wording; keep statements short and unambiguous.
- Prefer statements that are supported by the fish’s `refs`.

### Refs
- Prefer authoritative sources:
  - ODNR species pages / PDFs
  - USGS NAS factsheets
  - USFWS / NOAA Fisheries
  - Great Lakes Fishery Commission (where relevant)
- Avoid Wikipedia where possible.

## Workflow
1. Pick a batch of **5–10 fish**.
2. For each fish:
   - convert habitat to tokens
   - tighten features + keyFeature
   - expand true/false to ~4 statements
   - add/replace refs with authoritative URLs
3. Run quick checks:
   - `npm test` (note: some suites currently fail for unrelated reasons)
   - spot-check rendering and quiz option behavior
4. Commit per batch with a clear message.

## Follow-up ideas
- Add a small script/check to flag:
  - habitats with commas/sentences
  - habitats that are just a single place name
  - fish entries with <3 TF questions
  - fish refs that include Wikipedia
