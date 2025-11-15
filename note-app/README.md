# Notes — Daily Programming Journal

Live on Netlify: https://app.netlify.com/projects/lucky-cajeta-684c29/overview

Minimal React + TypeScript app (shadcn/ui + Tailwind) to record short daily programming notes.

## Features

- Create notes: title (required), description, priority (1–5), date, completed toggle
- View notes by selected calendar date
- Sort and delete notes
- Persistence via localStorage (key: `notes_v1`)

## Tech

React + TypeScript, shadcn/ui, Tailwind, Vite, date-fns

## Quick start

1. pnpm install
2. pnpm run dev
3. pnpm run build && pnpm run preview

## Persistence

- Notes saved to `localStorage` as JSON with fields: id, title, description, date (ISO), priority, isCompleted.
- App rehydrates dates to Date objects on load.
- Completed toggles are persisted immediately.

## Troubleshooting

- If notes disappear: check Application → Local Storage for the exact origin (protocol + host + port).
- Inspect stored data: `JSON.parse(localStorage.getItem('notes_v1') || 'null')`
- Avoid Incognito/private mode or extensions that clear site data.
- TypeScript checks (use pnpm exec to run local binaries): `pnpm exec tsc --noEmit`
- Clean build cache for project references: `pnpm exec tsc -b --clean`
- If you need to run a CLI temporarily without installing globally, use: `pnpm dlx <tool>` (e.g., `pnpm dlx netlify-cli`)

## Netlify (pnpm notes)

- Build command: `pnpm run build`
- Publish directory: `dist`

Tips:

- Commit `pnpm-lock.yaml` so Netlify installs exact dependency versions.
- If Netlify fails to install with pnpm in the default environment, use the build command: `pnpm install && pnpm run build`
- Use `pnpm dlx netlify-cli deploy --dir=dist --prod` for a CLI deploy without a global install.

## Next steps (optional)

- Export/import JSON backup
- Remote sync (Firestore, Supabase) for multi-device sync
