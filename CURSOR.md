# CURSOR.md
> Project memory file for Cursor AI - Updated: 2026-02-18

## Project Overview
**Name**: LearnEnglish (Word Wizard)  
**Purpose**: A browser-based English learning game focused on verb spelling, tense recognition (V1/V2), and Hebrew meaning matching with immediate audio/visual feedback.  
**Status**: Active prototype (single-page app, no build pipeline)

## Tech Stack
- **Languages**: HTML5, CSS3, JavaScript (vanilla)
- **Frontend**: Single-page UI in `@index.html`
- **Backend**: None (client-only)
- **Database**: None; browser `localStorage` for score and word pool persistence
- **Testing**: Manual browser testing
- **Build Tools**: None
- **Deployment**: Static hosting (or direct local file/browser usage)

## Project Structure
```text
/
├── index.html      # Full app: layout, styling, game logic, persistence
├── README.md       # Project title and minimal metadata
├── .cursorrules    # Coding/behavior rules for AI agent
└── CURSOR.md       # Project memory and architecture context
```

## Architecture Decisions
- **Single-file architecture (`index.html`)**: Chosen for simplicity and quick iteration. Trade-off is lower modularity and harder scaling as logic grows.
- **Client-only data persistence with `localStorage`**: Chosen to keep setup zero-config. Trade-off is device/browser-local state with no sync across devices.
- **Three-stage learning loop (`spelling -> tense -> hebrew`)**: Chosen to reinforce auditory recognition, form recognition, and meaning association in sequence.
- **Audio-first interaction**: Uses Web Speech API (`speechSynthesis`) and Web Audio API for engagement and immediate feedback; trade-off is browser/device variability.
- **Editable in-app word pool (`V1 | V2 | Hebrew`)**: Chosen to make content customizable without external files or backend support.

## Coding Conventions
- Follow coding standards in `@.cursorrules` for implementation behavior and safety requirements.
- Keep diffs minimal; prefer targeted changes in existing functions over broad refactors.
- Preserve the current UX style: playful, immediate feedback, and low-friction learner flow.
- When changing game logic, keep stage transitions explicit and synchronized with UI indicators.

## Custom Tools & Scripts
- No project-specific scripts or automation tools are currently defined.

## Workflows
### Feature Change Workflow
1. Read `@index.html` and identify affected UI + logic sections.
2. Implement focused change in place (avoid unrelated restyling/refactors).
3. Manually validate in browser:
   - Speak button behavior and voice output
   - Spelling validation and retry feedback
   - V1/V2 options and Hebrew matching flow
   - Score/streak updates and `localStorage` persistence
4. Update `CURSOR.md` if architecture/workflow/domain assumptions changed.

### Word Pool Update Workflow
1. Use the in-app textarea with rows in format: `V1 | V2 | Hebrew`.
2. Save via app UI; ensure parse/validation behavior is intact.
3. Confirm the badge count and next-round prompts reflect saved entries.

## File Boundaries
### MUST Read
- `@index.html` (primary source of truth for app behavior)
- `@.cursorrules` (agent operating constraints and standards)
- `@CURSOR.md` (project memory; keep aligned with current architecture)

### NEVER Read
- Sensitive environment/secret files if later introduced (for example `.env*`, credential exports, private keys)
- Git internals (`@.git/`) unless explicitly needed for version-control operations
- Generated/dependency directories if introduced later (for example `node_modules/`, build artifacts)

## Domain-Specific Terminology
- **V1**: Base verb form (for example, `go`, `write`, `eat`)
- **V2**: Past simple verb form (for example, `went`, `wrote`, `ate`)
- **Word Pool**: The active set of `{ v1, v2, hebrew }` entries used for rounds
- **Stage**: Current learning step in a round (`spelling`, `tense`, `hebrew`, `complete`)
- **Misspell History**: Per-round record of incorrect spellings attempted by the learner

## Known Issues & Gotchas
- **Speech synthesis availability varies by browser/device**: Voice lists may be delayed or limited; app includes fallback behavior.
- **Autoplay/audio restrictions**: Some mobile browsers require user interaction before reliable audio output.
- **No cross-device persistence**: Learner progress and custom pool are tied to local browser storage.
- **Single-file coupling risk**: UI, styles, and logic are tightly coupled in one file, increasing maintenance cost as features expand.

## Change Log
Use this section to record meaningful project-memory updates (architecture, stack, workflow, domain terms, known issues).

### Entry Template
```markdown
### YYYY-MM-DD - <Short change title>
- **Type**: Architecture | Tech Stack | Workflow | Domain | Known Issue | Other
- **What changed**: <Concise description of the update>
- **Why it changed**: <Reason/trade-off/decision context>
- **Affected files/areas**: <Paths or functional areas>
- **Follow-up**: <Optional next action, owner, or target version>
```

### 2026-02-18 - Initial CURSOR.md baseline
- **Type**: Other
- **What changed**: Created the first project memory file with architecture, workflows, file boundaries, terminology, and known gotchas.
- **Why it changed**: Establish persistent context so future sessions can make safer, faster, and more consistent decisions.
- **Affected files/areas**: `@CURSOR.md`, app context in `@index.html`
- **Follow-up**: Add a new entry whenever project behavior or operating assumptions change.

## External Resources
- Web Speech API overview: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
- SpeechSynthesis API: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
- Web Audio API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
- Web Storage API (`localStorage`): https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
