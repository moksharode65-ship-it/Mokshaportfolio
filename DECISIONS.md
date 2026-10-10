# Moksha Portfolio — Key Decisions

A running log of why we made certain choices so future AI sessions don't quietly contradict earlier decisions.

## Why AmbientBackground Instead of Reference Video

The original brief from the reference specification called for a personal showreel video. This portfolio doesn't have one yet, so this renders a generative animated backdrop instead of hot-linking a stranger's video asset. Once the user has their own reel, they can:
- Drop the file in `/public` and swap the `AmbientBackground` component for a `<video>` tag, OR
- Point it at the URL in `VITE_INTRO_VIDEO_URL` (see `.env.example`)

This keeps the site performant and avoids hardcoding private video URLs.

## Why No Scroll (overflow-hidden)

The specification explicitly states: "NO scroll (overflow-hidden, h-screen) — single locked viewport composition." This was a deliberate design choice for the single-page portfolio experience. All content fits within the full viewport without needing to scroll.

## Why Vitest

- Zero-config testing with `vitest.config.ts`
- `environment: "jsdom"` for React component testing
- `globals: true` so `describe`, `it`, `expect` are available without importing
- `setupFiles: "./tests/setup.ts"` for consistent test setup
- Auto-global setup means less boilerplate in test files
- `--ui` flag for Vitest UI mode during development

## Why basis33 Pixel Font Restrictions

The specification mandates that basis33 (the pixel/bitmap monospace font) must only be used on these exact words:
- "RODE" under "MOKSHA" in the meta grid
- "ENGINEERING" under "SOFTWARE &"
- "CURIOUS" in the hero headline (1.25em inline-block)
- "PRODUCTS" in the hero headline (1.25em inline-block)

Using Inter or any other font on these words would break the pixel-perfect match. All other text must use Inter.

## Why GitHub Links Wired From Profile

Nav "PROJECTS" link, mobile menu PROJECTS link, and the "REPOS x9" stat chip all point to `https://github.com/moksharode65-ship-it` based on the actual GitHub profile. Three project repos (Azad Zindagi Foundation, Sahaara Sangati, ZENCHI) were confirmed by web scraping. Two additional projects (StandardsAI, Phantom SOS) link to their live Vercel deployments only because their exact repo names couldn't be confirmed via scrape (GitHub renders that list client-side).

## Why 6 Nav Links with Specific Stagger Delays

The mobile menu has 6 nav links (ABOUT, SKILLS, PROJECTS, EXPERIENCE, EDUCATION, CONTACT) with staggered entrance delays of `${100 + i * 60}ms` for i = 0..5, resulting in delays of 100, 160, 220, 280, 340, 400ms. This creates a pleasant sequential reveal animation rather than all links appearing simultaneously.

## Why VITE_INTRO_VIDEO_URL Env Var

Instead of hardcoding a video URL, we use an environment variable. This:
- Keeps secrets out of the codebase
- Allows the user to swap in their own reel without touching components
- Falls back to generative AmbientBackground when unset
- Is documented in `.env.example` with a clear "never commit real .env" warning

## CI Configuration

CI runs on every push via `.github/workflows/ci.yml`:
- `npm run lint` (oxlint) — catches styling/logic errors
- `npm run test` (vitest run) — ensures all 7+ tests pass
- `npm run build` (tsc -b && vite build) — verifies TypeScript + Vite build succeed

All three must pass for the merge to be considered safe.

## License Choice

MIT License was chosen because:
- This is a personal portfolio project
- MIT is permissive and widely understood
- Easy to comply with if the project is ever open-sourced
- Doesn't restrict the user's ability to use it commercially