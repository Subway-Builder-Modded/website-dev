import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:`Here's what each file in the template does.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:`├── src/
│   ├── main.ts               # Your mod's entry point
│   ├── ui/
│   │   └── ExamplePanel.tsx   # Example React component
│   └── types/
│       ├── react.ts           # React shim (pulls React from game API)
│       ├── index.d.ts         # Re-exports + global Window declarations
│       ├── api.d.ts           # Main ModdingAPI interface
│       ├── core.d.ts          # Coordinate, BoundingBox, GameSpeed
│       ├── game-state.d.ts    # Station, Track, Train, Route types
│       ├── game-constants.d.ts# GameConstants, ConstructionCosts
│       ├── game-actions.d.ts  # Bond, BondType types
│       ├── build.d.ts         # Build automation types
│       ├── ui.d.ts            # UI placements & option types
│       ├── cities.d.ts        # City, CityConfig types
│       ├── trains.d.ts        # TrainTypeConfig, TrainTypeStats
│       ├── stations.d.ts      # StationTypeConfig
│       ├── map.d.ts           # Map sources, layers, overrides
│       ├── career.d.ts        # MissionConfig, StarConfig
│       ├── content-templates.d.ts # Newspaper & tweet templates
│       ├── pop-timing.d.ts    # CommuteTimeRange
│       ├── i18n.d.ts          # I18nAPI
│       ├── utils.d.ts         # RechartsComponents
│       ├── schemas.d.ts       # Zod validation schemas
│       ├── electron.d.ts      # ElectronAPI types
│       └── manifest.d.ts      # ModManifest type
├── scripts/
│   ├── run.ts                 # Game launcher with logging
│   └── link.ts                # Symlink management
├── manifest.json              # Mod metadata (loaded by the game)
├── vite.config.ts             # Build configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
`})}),`
`,(0,t.jsx)(n.h2,{id:`key-files`,children:`Key Files`}),`
`,(0,t.jsx)(n.h3,{id:`manifest.json`,children:`manifest.json`}),`
`,(0,t.jsx)(n.p,{children:`The game reads this to identify your mod. Required fields:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-json`,children:`{
  "id": "com.author.modname",
  "name": "My Mod",
  "description": "Description of your mod",
  "version": "1.0.0",
  "author": { "name": "Your Name" },
  "main": "index.js"
}
`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`id`}),` — unique identifier in reverse-domain notation`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`main`}),` — always `,(0,t.jsx)(n.code,{children:`"index.js"`}),` (the Vite build output)`]}),`
`]}),`
`,(0,t.jsx)(n.h3,{id:`main.ts`,children:`src/main.ts`}),`
`,(0,t.jsx)(n.p,{children:`Your mod's entry point. This is where you register hooks, add UI elements, and set up your mod's
logic. The template comes with a working example:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`const api = window.SubwayBuilderAPI;

if (!api) {
  console.error("SubwayBuilderAPI not found!");
} else {
  let initialized = false;

  api.hooks.onMapReady((_map) => {
    if (initialized) return;
    initialized = true;

    // Set up your mod here
    api.ui.addFloatingPanel({
      id: "my-mod-panel",
      title: "My Mod",
      icon: "Puzzle",
      render: ExamplePanel,
    });
  });
}
`})}),`
`,(0,t.jsx)(n.h3,{id:`examplepanel.tsx`,children:`src/ui/ExamplePanel.tsx`}),`
`,(0,t.jsx)(n.p,{children:`A sample React component that demonstrates how to use game UI components and hooks inside a floating
panel:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-tsx`,children:`import { useState } from "react";

const api = window.SubwayBuilderAPI;
const { Button } = api.utils.components as Record<string, React.ComponentType<any>>;

export function ExamplePanel() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-3 p-3">
      <p className="text-sm text-muted-foreground">Click count: {count}</p>
      <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
    </div>
  );
}
`})}),`
`,(0,t.jsx)(n.h3,{id:`react.ts`,children:`src/types/react.ts`}),`
`,(0,t.jsx)(n.p,{children:`The React shim. This is how JSX works in mods — instead of bundling React, the shim pulls React from
the game's API at runtime:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`const React = window.SubwayBuilderAPI.utils.React;

export default React;
export const { useState, useEffect, useCallback, useMemo, useRef /* ... */ } = React;

// JSX runtime exports
export const jsx = React.createElement;
export const jsxs = React.createElement;
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Vite is configured to alias `,(0,t.jsx)(n.code,{children:`react`}),` and `,(0,t.jsx)(n.code,{children:`react/jsx-runtime`}),` imports to this file, so you can write
standard `,(0,t.jsx)(n.code,{children:`import { useState } from 'react'`}),` and it just works.`]}),`
`,(0,t.jsx)(n.h3,{id:`vite.config.ts`,children:`vite.config.ts`}),`
`,(0,t.jsx)(n.p,{children:`The build configuration. Key points:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Output format`}),`: IIFE (immediately-invoked function expression) — the game expects a single
script, not ES modules`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`React aliasing`}),`: Routes `,(0,t.jsx)(n.code,{children:`react`}),` imports through the shim`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Static copy`}),`: Copies `,(0,t.jsx)(n.code,{children:`manifest.json`}),` into `,(0,t.jsx)(n.code,{children:`dist/`}),` alongside the built JS`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`No minification`}),`: Keeps the output readable for debugging`]}),`
`]}),`
`,(0,t.jsx)(n.h3,{id:`tsconfig.json`,children:`tsconfig.json`}),`
`,(0,t.jsx)(n.p,{children:`Standard TypeScript config with:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`strict: true`}),` — full type safety`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`jsx: "react-jsx"`}),` — automatic JSX transform`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`noEmit: true`}),` — TypeScript is only used for type checking, Vite handles the actual build`]}),`
`]}),`
`,(0,t.jsx)(n.h3,{id:`link.ts`,children:`scripts/link.ts`}),`
`,(0,t.jsxs)(n.p,{children:[`Creates a symlink from `,(0,t.jsx)(n.code,{children:`dist/`}),` to the game's mods folder. It reads the mod ID from `,(0,t.jsx)(n.code,{children:`manifest.json`}),`
and uses the last segment as the folder name (e.g., `,(0,t.jsx)(n.code,{children:`com.author.mymod`}),` becomes `,(0,t.jsx)(n.code,{children:`mymod/`}),`).`]}),`
`,(0,t.jsx)(n.h3,{id:`run.ts`,children:`scripts/run.ts`}),`
`,(0,t.jsxs)(n.p,{children:[`Finds the Subway Builder executable on your system and launches it with `,(0,t.jsx)(n.code,{children:`ELECTRON_ENABLE_LOGGING=1`}),`.
Captures stdout/stderr to `,(0,t.jsx)(n.code,{children:`debug/latest.log`}),` so you can review console output after the session.`]})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}export{r as default};