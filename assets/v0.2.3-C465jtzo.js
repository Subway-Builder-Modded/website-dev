import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={code:`code`,li:`li`,ul:`ul`,...e.components},{ChangelogSection:r}=n;return r||i(`ChangelogSection`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{type:`features`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Added `,(0,t.jsx)(n.code,{children:`.railyard_{asset_type}`}),` shared directory support for maps. Assets can now include this folder in their ZIP and Railyard will preserve the files there and place them in the asset's installed directory`]}),`
`,(0,t.jsx)(n.li,{children:`Library and Browse counts now adapt to current filter state, showing number of assets matching tags based on the current filter set`}),`
`,(0,t.jsx)(n.li,{children:`Added a credits section within the app (with maintainers and supporters listed)`}),`
`]})}),`
`,(0,t.jsx)(r,{type:`upgrades`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Changed the GitHub permission error toast to a dialogue with a link to the documentation`}),`
`]})}),`
`,(0,t.jsx)(r,{type:`bugfixes`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Fixed missing dependency that caused crashes on map imports, updates, etc.`}),`
`,(0,t.jsx)(n.li,{children:`Fixed download button being enabled even if an asset was not compatible with the current game version`}),`
`,(0,t.jsx)(n.li,{children:`Fixed country flags not rendering on Browse and Home`}),`
`,(0,t.jsx)(n.li,{children:`Fixed a bug where the game could be launched twice (if the initial launch was delayed)`}),`
`,(0,t.jsx)(n.li,{children:`Fixed laggy search caused by excessive rendering`}),`
`,(0,t.jsx)(n.li,{children:`Fixed an issue where maps were downloadable despite not having passed an integrity check`}),`
`,(0,t.jsx)(n.li,{children:`Fixed an issue where new assets were not shown in the app due to localization inconsistencies in date mapping`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};