import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e.components},{Note:r}=n;return r||i(`Note`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:`Tips for debugging your mods during development.`}),`
`,(0,t.jsx)(n.h2,{id:`hot-reload`,children:`Hot Reload`}),`
`,(0,t.jsx)(n.p,{children:`The fastest way to test changes is hot reloading. After rebuilding your mod:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Press `,(0,t.jsx)(n.strong,{children:`Ctrl+Shift+R`}),` (Windows/Linux) or `,(0,t.jsx)(n.strong,{children:`Cmd+Shift+R`}),` (Mac) in-game`]}),`
`,(0,t.jsxs)(n.li,{children:[`This calls `,(0,t.jsx)(n.code,{children:`api.reloadMods()`}),` internally, which clears all mod callbacks, UI components, custom
layers, and custom train types, then re-executes all mod scripts`]}),`
`]}),`
`,(0,t.jsxs)(n.p,{children:[`If you're using `,(0,t.jsx)(n.code,{children:`pnpm dev`}),`, Vite automatically rebuilds on file save, so you just need to press the
reload shortcut in-game.`]}),`
`,(0,t.jsx)(r,{children:(0,t.jsx)(n.p,{children:`Hot reload clears most mod state, but some things persist (like already-built tracks and
stations). If your mod gets into a weird state, restarting the game fully is the safest reset.`})}),`
`,(0,t.jsx)(n.h2,{id:`console-logging`,children:`Console Logging`}),`
`,(0,t.jsxs)(n.p,{children:[`Use `,(0,t.jsx)(n.code,{children:`console.log`}),` with a tag prefix to identify your mod's output:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:'const TAG = "[MyMod]";\nconsole.log(`${TAG} Initialized`);\nconsole.warn(`${TAG} Something unexpected`, someData);\nconsole.error(`${TAG} Failed to load`, error);\n'})}),`
`,(0,t.jsx)(n.h3,{id:`viewing-logs`,children:`Viewing Logs`}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`In-game`}),`: Open the developer console with `,(0,t.jsx)(n.strong,{children:`Ctrl+Shift+I`}),` (Windows/Linux) or `,(0,t.jsx)(n.strong,{children:`Cmd+Option+I`}),`
(Mac).`]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:[`With `,(0,t.jsx)(n.code,{children:`pnpm dev`})]}),`: Logs are printed to your terminal and saved to `,(0,t.jsx)(n.code,{children:`debug/latest.log`}),`. The game
launcher enables Electron logging automatically.`]}),`
`,(0,t.jsx)(n.h2,{id:`checking-performance`,children:`Checking Performance`}),`
`,(0,t.jsxs)(n.p,{children:[`You can monitor the effects of your mod on game performance by pressing `,(0,t.jsx)(n.code,{children:`Ctrl+Shift+P`}),` to view the performance monitor in-game. Run benchmarks while your mod is active to compare frame rates and memory usage.`]}),`
`,(0,t.jsx)(n.h2,{id:`error-handling`,children:`Error Handling`}),`
`,(0,t.jsx)(n.p,{children:`Wrap your initialization in try/catch to avoid crashing the game:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`api.hooks.onMapReady((_map) => {
  if (initialized) return;
  initialized = true;

  try {
    // Setup code
    console.log(\`\${TAG} Initialized successfully.\`);
  } catch (err) {
    console.error(\`\${TAG} Failed to initialize:\`, err);
    api.ui.showNotification("My Mod failed to load. Check console.", "error");
  }
});
`})}),`
`,(0,t.jsx)(n.p,{children:`For hooks that run repeatedly, consider wrapping each callback:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`api.hooks.onDayChange((day) => {
  try {
    // Your logic
  } catch (err) {
    console.error(\`\${TAG} Error on day \${day}:\`, err);
  }
});
`})}),`
`,(0,t.jsx)(n.h2,{id:`game-error-hooks`,children:`Game Error Hooks`}),`
`,(0,t.jsx)(n.p,{children:`The API provides hooks for catching game-level warnings and errors:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`api.hooks.onWarning((message) => {
  console.warn(\`\${TAG} Game warning:\`, message);
});

api.hooks.onError((error) => {
  console.error(\`\${TAG} Game error:\`, error);
});
`})}),`
`,(0,t.jsx)(n.h2,{id:`type-checking`,children:`Type Checking`}),`
`,(0,t.jsx)(n.p,{children:`Run TypeScript's type checker to catch errors before building:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`pnpm typecheck
`})}),`
`,(0,t.jsxs)(n.p,{children:[`This runs `,(0,t.jsx)(n.code,{children:`tsc --noEmit`}),` and reports any type errors without producing output files. It's a good
practice to run this before testing in-game.`]}),`
`,(0,t.jsx)(n.h2,{id:`common-issues`,children:`Common Issues`}),`
`,(0,t.jsx)(n.h3,{id:`subwaybuilderapi-not-found`,children:`"SubwayBuilderAPI Not Found"`}),`
`,(0,t.jsx)(n.p,{children:`Your mod script ran before the game initialized the API. This shouldn't happen with the template's
structure, but if it does:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Make sure `,(0,t.jsx)(n.code,{children:`main`}),` in `,(0,t.jsx)(n.code,{children:`manifest.json`}),` is `,(0,t.jsx)(n.code,{children:`"index.js"`})]}),`
`,(0,t.jsxs)(n.li,{children:[`Make sure you're checking `,(0,t.jsx)(n.code,{children:`if (!api)`}),` before using the API`]}),`
`]}),`
`,(0,t.jsx)(n.h3,{id:`ui-not-showing-up`,children:`UI Not Showing Up`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Check that you're registering UI inside `,(0,t.jsx)(n.code,{children:`onMapReady`}),` — the UI system isn't ready before the map
loads`]}),`
`,(0,t.jsx)(n.li,{children:`Verify your component doesn't throw during render (check console for React errors)`}),`
`,(0,t.jsxs)(n.li,{children:[`Make sure the `,(0,t.jsx)(n.code,{children:`id`}),` you're using is unique — duplicate IDs silently fail`]}),`
`]}),`
`,(0,t.jsx)(n.h3,{id:`changes-not-appearing-after-reload`,children:`Changes Not Appearing After Reload`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Verify Vite rebuilt successfully (check terminal for build errors)`}),`
`,(0,t.jsxs)(n.li,{children:[`Make sure the symlink is still intact (`,(0,t.jsx)(n.code,{children:`pnpm dev:link`}),`)`]}),`
`,(0,t.jsx)(n.li,{children:`Try a full game restart if hot reload isn't picking up changes`}),`
`]}),`
`,(0,t.jsx)(n.h3,{id:`react-hooks-errors`,children:`React Hooks Errors ("Invalid Hook Call")`}),`
`,(0,t.jsx)(n.p,{children:`This usually means there are multiple React instances. Make sure:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`You're importing from `,(0,t.jsx)(n.code,{children:`'react'`}),` (not installing react as a dependency)`]}),`
`,(0,t.jsxs)(n.li,{children:[`The Vite alias in `,(0,t.jsx)(n.code,{children:`vite.config.ts`}),` is correctly pointing to `,(0,t.jsx)(n.code,{children:`src/types/react.ts`})]}),`
`,(0,t.jsxs)(n.li,{children:[`You haven't accidentally installed `,(0,t.jsx)(n.code,{children:`react`}),` in `,(0,t.jsx)(n.code,{children:`node_modules`})]}),`
`]}),`
`,(0,t.jsx)(n.h3,{id:`windows-symlink-permission-error`,children:`Windows Symlink Permission Error`}),`
`,(0,t.jsx)(n.p,{children:`On Windows, creating symlinks may require Administrator privileges. Either:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Run your terminal as Administrator`}),`
`,(0,t.jsx)(n.li,{children:`Enable Developer Mode in Windows Settings (Settings > For Developers > Developer Mode)`}),`
`]})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};