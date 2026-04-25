import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={a:`a`,code:`code`,li:`li`,p:`p`,ul:`ul`,...e.components},{ChangelogSection:r,Warning:a}=n;return r||i(`ChangelogSection`,!0),a||i(`Warning`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{type:`features`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Added loading screen on app startup`}),`
`,(0,t.jsx)(n.li,{children:`Added light mode`}),`
`,(0,t.jsx)(n.li,{children:`Added persistent search filters (search state will remain even if youvisit another page, including tags and search query)`}),`
`]})}),`
`,(0,t.jsxs)(r,{type:`improvements`,children:[(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Fixed an issue where Railyard wouldn't work on some distros due to them not supporting `,(0,t.jsx)(n.code,{children:`libwebkit2gtk-4.0`})]}),`
`]}),(0,t.jsx)(a,{children:(0,t.jsxs)(n.p,{children:[`This means there are now two builds for Linux. `,(0,t.jsx)(n.code,{children:`current`}),` is built targeting `,(0,t.jsx)(n.code,{children:`libwebkit2gtk-4.1`}),`, whereas `,(0,t.jsx)(n.code,{children:`legacy`}),` is built targeting `,(0,t.jsx)(n.code,{children:`libwebkit2gtk-4.0`}),`. Make sure you install the correct one!`]})}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Added an auto-update check (toggleable in settings)`}),`
`,(0,t.jsxs)(n.li,{children:[`Removed GitHub authentication, as `,(0,t.jsx)(n.a,{href:`https://github.com/Subway-Builder-Modded/registry`,children:`the Registry`}),` is now public`]}),`
`,(0,t.jsx)(n.li,{children:`Added static download counts to the Registry. Download counts within Railyard will now utilize that as a more reliable source of data`}),`
`,(0,t.jsxs)(n.li,{children:[`Updated tagging for maps (Level of Detail / Source Quality) to replace ambiguous high/medium/low-detail (see the `,(0,t.jsx)(n.a,{href:`/railyard/docs/latest/data-quality`,children:`Data Quality`}),` guide) and updated UI to reflect that change`]}),`
`]})]}),`
`,(0,t.jsx)(r,{type:`bugfixes`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Fixed no installed maps/mods being displayed on initial load-in`}),`
`,(0,t.jsx)(n.li,{children:`Fixed multiple parallel downloads sometimes leading to crashes`}),`
`,(0,t.jsx)(n.li,{children:`Fixed download counts displaying total downloads for all assets for a release (rather than just the map/mod .ZIP)`}),`
`,(0,t.jsx)(n.li,{children:`Fixed maps having a download count of 0`}),`
`,(0,t.jsx)(n.li,{children:`Fixed an issue where updating Railyard would delete all installed maps`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};