import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={code:`code`,li:`li`,ul:`ul`,...e.components},{ChangelogSection:r}=n;return r||i(`ChangelogSection`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{type:`features`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Added update indicators to the Library page if an asset's version is outdated`}),`
`,(0,t.jsx)(n.li,{children:`Multiple assets can be updated at once via selection`}),`
`,(0,t.jsxs)(n.li,{children:[`Added a theme switcher and 6 new themes: `,(0,t.jsx)(n.code,{children:`Dark`}),`, `,(0,t.jsx)(n.code,{children:`Dark (Soft)`}),`, `,(0,t.jsx)(n.code,{children:`Dark (Contrast)`}),`, `,(0,t.jsx)(n.code,{children:`Light`}),`, `,(0,t.jsx)(n.code,{children:`Light (Soft)`}),`, `,(0,t.jsx)(n.code,{children:`Light (Contrast)`})]}),`
`]})}),`
`,(0,t.jsx)(r,{type:`improvements`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Added corrupted/missing install-state recovery on startup`}),`
`,(0,t.jsx)(n.li,{children:`Added validation checks for GitHub personal access tokens`}),`
`,(0,t.jsx)(n.li,{children:`Game logs are now separated by session`}),`
`]})}),`
`,(0,t.jsx)(r,{type:`bugfixes`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Removed the leftover right-click context menu`}),`
`,(0,t.jsx)(n.li,{children:`Fixed pinching (on a touchscreen device) still allowing you to zoom`}),`
`,(0,t.jsx)(n.li,{children:`Fixed selecting multiple projects on the Library page not clearing selection when deleting via the trash can`}),`
`,(0,t.jsx)(n.li,{children:`Fixed the paths used to install the security sandbox for Subway Builder`}),`
`,(0,t.jsx)(n.li,{children:`Fixed the paths used to spawn the game`}),`
`]})}),`
`,(0,t.jsx)(r,{type:`notes`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Added deep link integration with the website. Clicking download for an asset on the website will now open Railyard and navigate to the asset's page`}),`
`,(0,t.jsx)(n.li,{children:`Restored auto-update functionality on Linux`}),`
`,(0,t.jsx)(n.li,{children:`Added additional logging to help with debugging`}),`
`,(0,t.jsx)(n.li,{children:`Railyard now allows only one cancellation button to be present during install`}),`
`,(0,t.jsx)(n.li,{children:`Standardized coloring between update/delete/install interfaces`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};