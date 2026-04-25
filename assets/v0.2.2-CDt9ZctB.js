import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={li:`li`,ul:`ul`,...e.components},{ChangelogSection:r}=n;return r||i(`ChangelogSection`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{type:`bugfixes`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Fixed the Registry not fully refreshing`}),`
`,(0,t.jsx)(n.li,{children:`Fixed the auto-updater not working on Linux systems`}),`
`,(0,t.jsx)(n.li,{children:`Fixed country tabs not properly registering when a map is newly downloaded`}),`
`]})}),`
`,(0,t.jsx)(r,{type:`notes`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`The Registry now checks out sparser; unnecessary Registry files are omitted to save disk space and reduce loading times`}),`
`,(0,t.jsx)(n.li,{children:`City codes can now be alphanumeric (numbers can be applied to the last 2 characters of a city code)`}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};