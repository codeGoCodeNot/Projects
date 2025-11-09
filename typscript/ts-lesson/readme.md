\*Typescript first touch

set -up

// inside package.json
"scripts": {
"ci": "tsc", // Run TypeScript compiler (type-check & build)
"dev": "run-p dev:\*", // Run both dev:vite and dev:tsc in parallel
"dev:vite": "vite", // Start Vite dev server
"dev:tsc": "tsc --watch", // Watch and recompile TypeScript files on change
"build": "tsc && vite build", // Compile TypeScript and then bundle with Vite
"preview": "vite preview" // Preview production build locally
}

~bash

- run: pnpm install --frozen-lockfile
- run: pnpm approve-builds
- run: pnpm run ci
- run: pnpm add -D npm-run-all
- run: pnpm install total-typescript/ts-reset

import

import "@total-typescript/ts-reset";
