import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={a:`a`,code:`code`,h3:`h3`,li:`li`,ul:`ul`,...e.components},{ChangelogSection:r}=n;return r||i(`ChangelogSection`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r,{type:`features`,children:[(0,t.jsx)(n.h3,{children:`UI Overhaul`}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Completely redesigned the Railyard UI with a new layout and visual style`}),`
`,(0,t.jsxs)(n.li,{children:[`Added 4 new themes (in place of the old high-contrast and soft ones): `,(0,t.jsx)(n.code,{children:`Coffee`}),`, `,(0,t.jsx)(n.code,{children:`Midnight`}),`, `,(0,t.jsx)(n.code,{children:`Crystal`}),`, and `,(0,t.jsx)(n.code,{children:`Forest`})]}),`
`,(0,t.jsx)(n.li,{children:`Added a new versions, changelog, and dependencies page for each individual asset`}),`
`]}),(0,t.jsx)(n.h3,{children:`Import Local Maps`}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Added support for importing local map ZIPs`}),`
`,(0,t.jsx)(n.li,{children:`Local maps are displayed in the Library with a Local tag and are loaded alongside any Railyard-hosted maps`}),`
`]}),(0,t.jsx)(n.h3,{children:`Profiles`}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Added support for multiple profiles`}),`
`,(0,t.jsx)(n.li,{children:`Individual profiles maintain separate sets of subscriptions + UI/System preferences`}),`
`,(0,t.jsx)(n.li,{children:`Archives of non-active profiles are maintained to allow quick switches between different profiles`}),`
`]}),(0,t.jsx)(n.h3,{children:`Dependencies`}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Added dependency resolution for mods`}),`
`,(0,t.jsx)(n.li,{children:`Mods can now declare another mod as a dependency, and all dependencies will automatically be installed`}),`
`]}),(0,t.jsx)(n.h3,{children:`Command-Line Arguments`}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Devtools within Subway Builder can now be enabled via a setting in Railyard`}),`
`]})]}),`
`,(0,t.jsx)(r,{type:`improvements`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Registry refreshes and downloaded asset extraction are now atomic to reduce risk of corrupted/mixed disk state on unexpected shutdown`}),`
`,(0,t.jsx)(n.li,{children:`Browse section now displays a loading symbol to eliminate lag/slow loading behavior on startup`}),`
`,(0,t.jsx)(n.li,{children:`Library now displays city code for all maps`}),`
`,(0,t.jsx)(n.li,{children:`Disabled modifying (installing, deleting, updating) content while the game is launched`}),`
`]})}),`
`,(0,t.jsx)(r,{type:`bugfixes`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Fixed Ctrl+Click on an asset's Browse page card causing it to open up in a browser window`}),`
`,(0,t.jsx)(n.li,{children:`Fixed toast notifications being able to be picked up and moved around the screen`}),`
`,(0,t.jsx)(n.li,{children:`Command line argument insertion no longer replaces machine env when DevTools setting is enabled`}),`
`,(0,t.jsx)(n.li,{children:`Fixed fuzzy search being too lenient and matching on small subsets of strings`}),`
`]})}),`
`,(0,t.jsx)(r,{type:`notes`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`v0.2 documentation is live at `,(0,t.jsx)(n.a,{href:`https://subwaybuildermodded.com/railyard/docs/v0.2`,children:`https://subwaybuildermodded.com/railyard/docs/v0.2`})]}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};