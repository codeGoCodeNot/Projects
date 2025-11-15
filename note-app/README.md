# Notes — Daily Programming Journal

Minimal React + TypeScript app (shadcn/ui + Tailwind) to record short daily programming notes.

## Features

- Create notes: title (required), description, priority (1–5), date, completed toggle
- View notes by selected calendar date
- Sort and delete notes
- Persistence via localStorage (key: `notes_v1`)

## Tech

React + TypeScript, shadcn/ui, Tailwind, Vite, date-fns

## Quick start

1. npm install
2. npm run dev
3. npm run build && npm run preview

## Persistence

- Notes saved to `localStorage` as JSON with fields: id, title, description, date (ISO), priority, isCompleted.
- App rehydrates dates to Date objects on load.
- Completed toggles are persisted immediately.

## Troubleshooting

- If notes disappear: check Application → Local Storage for the exact origin (protocol + host + port).
- Inspect stored data: `JSON.parse(localStorage.getItem('notes_v1') || 'null')`
- Avoid Incognito/private mode or extensions that clear site data.

## Next steps (optional)

- Export/import JSON backup
- Remote sync (Firestore, Supabase) for multi-device sync
