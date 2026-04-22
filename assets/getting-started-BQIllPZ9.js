import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Note:r,Tip:a}=n;return r||i(`Note`,!0),a||i(`Tip`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:`This guide walks you through setting up your first Subway Builder mod using the community TypeScript
template.`}),`
`,(0,t.jsxs)(r,{title:`Prerequisites`,children:[(0,t.jsxs)(n.p,{children:[`Before you start, you should have a basic grasp of `,(0,t.jsx)(n.strong,{children:`JavaScript`}),` or
`,(0,t.jsx)(n.strong,{children:`TypeScript`}),`. If you've never written JS/TS before, we recommend working through a beginner
tutorial first — the modding API is straightforward, but you do need to understand variables,
functions, and basic syntax.`]}),(0,t.jsx)(n.p,{children:`You'll also need:`}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:`https://nodejs.org/`,children:`Node.js`}),` v22 or later`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:`https://pnpm.io/`,children:`pnpm`}),` package manager (`,(0,t.jsx)(n.code,{children:`npm install -g pnpm`}),`)`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:`https://subwaybuilder.com`,children:`Subway Builder`}),` v1.1.0 or later`]}),`
`,(0,t.jsxs)(n.li,{children:[`A code editor (we recommend `,(0,t.jsx)(n.a,{href:`https://code.visualstudio.com/`,children:`VS Code`}),`)`]}),`
`]})]}),`
`,(0,t.jsx)(n.h2,{id:`clone-the-template`,children:`Step 1 - Clone the Template`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`git clone https://github.com/Subway-Builder-Modded/template-mod.git my-mod
cd my-mod
`})}),`
`,(0,t.jsx)(n.h2,{id:`install-dependencies`,children:`Step 2 - Install Dependencies`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`pnpm install
`})}),`
`,(0,t.jsx)(n.p,{children:`This installs the build toolchain (Vite/Rolldown, TypeScript, etc.). The game's APIs are accessed at
runtime — there's no SDK package to install.`}),`
`,(0,t.jsx)(n.h2,{id:`configure-your-mod`,children:`Step 3 - Configure Your Mod`}),`
`,(0,t.jsxs)(n.p,{children:[`Edit `,(0,t.jsx)(n.code,{children:`manifest.json`}),` with your mod's identity:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-json`,children:`{
  "id": "com.yourname.yourmod",
  "name": "My Cool Mod",
  "description": "Does something cool",
  "version": "1.0.0",
  "author": { "name": "Your Name" },
  "main": "index.js"
}
`})}),`
`,(0,t.jsxs)(n.p,{children:[`The `,(0,t.jsx)(n.code,{children:`id`}),` should be a unique reverse-domain identifier. The `,(0,t.jsx)(n.code,{children:`main`}),` field should always be
`,(0,t.jsx)(n.code,{children:`"index.js"`}),` — that's what the build outputs.`]}),`
`,(0,t.jsx)(n.h2,{id:`build`,children:`Step 4 - Build`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`pnpm build
`})}),`
`,(0,t.jsxs)(n.p,{children:[`This compiles your TypeScript + React code into a single `,(0,t.jsx)(n.code,{children:`dist/index.js`}),` file, and copies
`,(0,t.jsx)(n.code,{children:`manifest.json`}),` into `,(0,t.jsx)(n.code,{children:`dist/`}),`.`]}),`
`,(0,t.jsx)(n.h2,{id:`link-to-the-game`,children:`Step 5 - Link to the Game`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`pnpm dev:link
`})}),`
`,(0,t.jsxs)(n.p,{children:[`This creates a symlink from `,(0,t.jsx)(n.code,{children:`dist/`}),` to the game's mods folder. The mods folder location depends on
your OS:`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:`OS`}),(0,t.jsx)(n.th,{children:`Path`})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:`macOS`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`~/Library/Application Support/metro-maker4/mods/`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:`Windows`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`%APPDATA%\\metro-maker4\\mods\\`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:`Linux`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`~/.config/metro-maker4/mods/`})})]})]})]}),`
`,(0,t.jsx)(n.p,{children:`The symlink means every time you rebuild, the game sees your latest code without you copying files.`}),`
`,(0,t.jsx)(a,{children:(0,t.jsx)(n.p,{children:`On Windows, you may need to run your terminal as Administrator for the symlink to work.`})}),`
`,(0,t.jsx)(n.h2,{id:`enable-your-mod`,children:`Step 6 - Enable Your Mod`}),`
`,(0,t.jsxs)(n.ol,{children:[`
`,(0,t.jsx)(n.li,{children:`Launch Subway Builder`}),`
`,(0,t.jsxs)(n.li,{children:[`Go to `,(0,t.jsx)(n.strong,{children:`Settings > Mods`})]}),`
`,(0,t.jsxs)(n.li,{children:[`Toggle your mod `,(0,t.jsx)(n.strong,{children:`on`})]}),`
`,(0,t.jsx)(n.li,{children:`Restart the game (or load a city)`}),`
`]}),`
`,(0,t.jsx)(n.p,{children:`You should see your mod's log messages in the game's developer console.`}),`
`,(0,t.jsx)(n.h2,{id:`development-workflow`,children:`Step 7 - Development Workflow`}),`
`,(0,t.jsxs)(n.p,{children:[`For active development, use the `,(0,t.jsx)(n.code,{children:`dev`}),` command which watches for file changes and launches the game
with logging:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`pnpm dev
`})}),`
`,(0,t.jsx)(n.p,{children:`This runs two processes simultaneously:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Vite watcher`}),` — rebuilds on every file save`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Game launcher`}),` — starts Subway Builder with logging to `,(0,t.jsx)(n.code,{children:`debug/latest.log`})]}),`
`]}),`
`,(0,t.jsxs)(n.p,{children:[`After making changes, reload mods in-game with `,(0,t.jsx)(n.strong,{children:`Ctrl+Shift+R`}),` (or `,(0,t.jsx)(n.strong,{children:`Cmd+Shift+R`}),` on Mac) to see
your updates without restarting the game.`]}),`
`,(0,t.jsx)(n.h2,{id:`unlink-when-done`,children:`Step 8 - Unlink When Done`}),`
`,(0,t.jsx)(n.p,{children:`To remove the symlink:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`pnpm dev:unlink
`})}),`
`,(0,t.jsx)(n.h2,{id:`available-scripts`,children:`Available Scripts`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:`Command`})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:`Description`})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`pnpm build`})}),(0,t.jsxs)(n.td,{children:[`Build the mod to `,(0,t.jsx)(n.code,{children:`dist/`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`pnpm dev`})}),(0,t.jsx)(n.td,{children:`Watch mode + launch game with logging`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`pnpm dev:link`})}),(0,t.jsxs)(n.td,{children:[`Symlink `,(0,t.jsx)(n.code,{children:`dist/`}),` to game's mods folder`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`pnpm dev:unlink`})}),(0,t.jsx)(n.td,{children:`Remove the symlink`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`pnpm typecheck`})}),(0,t.jsx)(n.td,{children:`Run TypeScript type checking`})]})]})]})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};