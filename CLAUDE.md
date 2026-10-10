# Moksha Portfolio — Project Conventions

This file guides AI assistants (Claude, Cursor, etc.) working on this project.
Read this before making any changes to avoid re-inventing patterns.

## Folder Structure

```
/moksha-portfolio/
  ├── src/
  │   ├── main.tsx        # Entry point
  │   ├── App.tsx         # Simple wrapper
  │   ├── components/     # Reusable UI components
  │   │   ├── Portfolio.tsx    # Main page layout
  │   │   ├── Logo.tsx         # Custom MR monogram SVG
  │   │   └── AmbientBackground.tsx  # Background video/generative blobs
  │   └── index.css       # Global Tailwind imports + font-pixel class
  ├── index.html          # HTML entry with font links
  ├── package.json        # Locked dependencies
  ├── tailwind.config.js  # Tailwind v4 config (if using JS API)
  ├── vite.config.ts      # Vite + React plugin
  ├── .env.example      # Environment variables (no real secrets)
  ├── .gitignore        # git ignore rules
  ├── README.md           # Project overview + setup commands
  ├── CLAUDE.md           # This file
  ├── AGENTS.md           # Alias for CLAUDE.md
  ├── DECISIONS.md        # Key architectural decisions
  ├── schema.sql          # Database shape (if applicable)
  ├── tests/              # Vitest test files
  ├── .github/workflows/ci.yml  # CI configuration
  └── LICENSE           # Project license
```

## Naming Conventions

- Components: PascalCase (Portfolio.tsx, Logo.tsx)
- Tailwind class order: `space-y-` before `text-`, `hover:` after base classes
- CSS classes: kebab-case for utility classes
- SVG paths: exact coordinates from spec, no modifications
- Env vars: `VITE_` prefix for client-side variables

## Preferred Libraries

- **React 19** with **TypeScript**
- **Vite 8** as dev server + build tool
- **Tailwind CSS v4** for all styling
- **lucide-react** for icons (Play, Menu, X, ExternalLink)
- **Vitest 5** with jsdom for testing — auto-global setup
- **oxlint** for linting (runs via `npm run lint`)
- **@vitejs/plugin-react** for React Fast Refresh

## Things to Avoid

❌ **No cards, purple gradients, cream backgrounds, or extra sections** beyond the spec'd layout
❌ **No Inter font for pixel words** — basis33 must be used on: "RODE", "ENGINEERING", "CURIOUS", "PRODUCTS"
❌ **No scrolling** or second viewport section — page is single locked viewport (overflow-hidden)
❌ **No page load entrance animation** on desktop content — static on paint
❌ **No basis33** used on non-specified words
❌ **No CloudFront video URL** replacement (use `VITE_INTRO_VIDEO_URL` env var or keep AmbientBackground)
❌ **No copy changes** to specified lines (hero headline, brand blurb, footer stats)
❌ **No scrollbars** on the page

## Font Usage Rules

- **Inter** (Google Fonts): body/default, nav, all headings, body copy, showreel button, awards, footer
- **basis33** (pixel/bitmap): ONLY on specified words:
  - "RODE" under "MOKSHA" in meta grid (font-pixel text-2xl md:text-3xl)
  - "ENGINEERING" under "SOFTWARE &" (font-pixel text-2xl md:text-3xl)
  - "CURIOUS" in hero headline (font-pixel font-normal text-[1.25em] inline-block)
  - "PRODUCTS" in hero headline (font-pixel font-normal text-[1.25em] inline-block)

## Tailwind Class Order

When composing Tailwind classes, follow this order:

1. Positioning (block, inline, relative, absolute, fixed, inset-*)
2. Box model (p-*, py-*, px-*, pt-*, pb-*, mx-*, my-*, w-*, h-*)
3. Typography (text-*, font-*, leading-*, tracking-*, capitalize-, uppercase-)
4. Backgrounds/colors (bg-*, border-, opacity-)
5. Transitions (transition-, duration-, ease-)
6. Hover/focus states (hover:*, focus-*)
7. Responsive (sm:, md:, lg:, xl:)

Example correct order:
```html
<p className="text-sm text-white/90 leading-relaxed mb-3">
```

Example incorrect (avoid):
```html
<p className="mb-3 text-sm text-white/90 leading-relaxed">  ← text-* should come before mb-*
```

## Test Guidelines

- All tests live in `tests/`
- Use Vitest with `globals: true` (configured in vitest.config.ts)
- Tests render `<Portfolio />` and check:
  - Name/headline rendering (MOKSHA, RODE, CURIOUS, PRODUCTS)
  - Nav links presence (desktop + mobile)
  - GitHub/project link destinations
  - Mobile menu open/close functionality
  - Video notice reminder when Play clicked without URL
  - Services list rendering
- Never break existing tests when modifying components
- Add new tests in the same file, don't create separate test files unless necessary

## Git Workflow

- `npm run lint` must pass before committing
- `npm run build` must complete without errors
- `npm run test` must have all tests passing
- Feature branches should include updates to DECISIONS.md for any architectural changes
- Commit messages: concise, present tense ("Add X", "Fix Y", not "Added X", "Fixed Y")

## Video Background

- If `VITE_INTRO_VIDEO_URL` is set in `.env`, the `AmbientBackground` component will use a `<video>` element with that source
- If unset, the component renders generative animated blobs (default behavior)
- Video attributes must remain: `autoPlay`, `muted`, `loop`, `playsInline`
- At `lg` breakpoint, video scales with `lg:scale-[1.2]`
- Never hardcode the CloudFront video URL — always use the env var

## Mobile Menu

- State: `menuOpen` boolean
- Overlay transition: `transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`
- Open: `opacity-100 pointer-events-auto`
- Closed: `opacity-0 pointer-events-none`
- Link stagger delays when opening: `${100 + i * 60}ms` for i = 0..5 → 100, 160, 220, 280, 340, 400ms
- Clicking any nav link closes the menu
- Hamburger icon: `Menu size={24}`, close icon: `X size={24}`

## Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Page bg | `#000000` | html/body background |
| Primary text | `#ffffff` | Main text color |
| Muted | `white/90, white/80, white/60, white/50` | Various text states |
| Award chips | `#0B0B0B` | Three chips in stat row |
| Showreel button | `border-white/30, bg-white/5, backdrop-blur-sm` | PLAY INTRO button |
| Mobile overlay | `black/95 + backdrop blur` | Fullscreen menu |
| Accent link | `Tailwind red-500` | "Get in touch" button |

## DECISIONS.md

Keep DECISIONS.md updated with key choices. See the existing file for the current log of why:
- Video was swapped from reference site's private URL to generative AmbientBackground
- No scroll was implemented (overflow-hidden on html/body)
- Vitest was chosen over other test frameworks
- basis33 pixel font restrictions were applied
- GitHub repo links were wired from profile scrape

## CI/CD

CI runs on every push via `.github/workflows/ci.yml`:
- `npm run lint` (oxlint)
- `npm run test` (vitest run)
- `npm run build` (tsc -b && vite build)

All must pass for merge.

## License

This project is licensed under the MIT License — see LICENSE file for details.