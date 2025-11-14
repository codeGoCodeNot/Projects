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

"devDependencies": {
"npm-run-all": "^4.1.5",
"typescript": "~5.9.3",
"vite": "^7.1.7",
"@types/node": "24.10.0"
},

~bash

- run: pnpm install --frozen-lockfile
- run: pnpm approve-builds
- run: pnpm run ci
- run: pnpm add -D npm-run-all
- run: pnpm install total-typescript/ts-reset
- run: pnpm add diff
- run: pnpm i @types/node
- run: pnpm i zod
- run: pnpm install --save-dev ts-toolbelt

import

import "@total-typescript/ts-reset";
import { diffChars, diffWords, diffLines } from "diff";
import type { Change } from "diff";
import { S } from "ts-toolbelt";
