import{a as e}from"./chunk-BEqpzyXh.js";import{t}from"./jsx-runtime-qJqhvtml.js";var n=e(t());function r(e){let t={a:`a`,code:`code`,li:`li`,strong:`strong`,ul:`ul`,...e.components},{ChangelogSection:r}=t;return r||a(`ChangelogSection`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{type:`features`,children:(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Driving paths are now served from the app via a sidecar file`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Mapmakers can optionally provide a `,(0,n.jsx)(t.code,{children:`driving_paths.json`}),` which enables Railyard to serve the driving paths rendered when a user clicks on an individual population group in the game.`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[`Enabled the Railyard app to handle the new `,(0,n.jsx)(t.code,{children:`Deprecated`}),` listing state.`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Listings that are deprecated are no longer downloadable, but are not auto-purged as `,(0,n.jsx)(t.code,{children:`Deleted`}),` listings are.`]}),`
`]}),`
`]}),`
`]})}),`
`,(0,n.jsx)(r,{type:`improvements`,children:(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Added a `,(0,n.jsx)(t.code,{children:`Show Deleted Listings`}),` setting, off by default, for looking up a listing after it has been removed`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Deprecated and deleted listings each now have their own unique icon, sort last when viewable, and cannot be newly installed.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[`Added a `,(0,n.jsx)(t.code,{children:`Status`}),` filter covering all listing lifecycle states: Active, Deprecated, Deleted, and Local.`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Browse defaults to Active only; Library in addition shows Deprecated and Local.`}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Status`}),` selections are unions and can be combined`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[`Retired and removed versions now appear in a listing's version history as `,(0,n.jsx)(t.strong,{children:`No Longer Available`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`These are no longer downloadable but keep changelog, release date, and download count`}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.li,{children:`Added sorting by data quality, with tiebreaker fallbacks`}),`
`]})}),`
`,(0,n.jsx)(r,{type:`bugfixes`,children:(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Fixed deleted assets surviving in a profile until the following restart`}),`
`,(0,n.jsx)(t.li,{children:`Fixed map updates failing when the map's city code changed`}),`
`,(0,n.jsxs)(t.li,{children:[`Fixed a renamed `,(0,n.jsx)(t.code,{children:`.app`}),` bundle breaking game launch on macOS`]}),`
`,(0,n.jsx)(t.li,{children:`Improved performance in demand driving path handling; with sidecar serving and caching, the sim no longer needs to hold these paths in memory.`}),`
`]})}),`
`,(0,n.jsx)(r,{type:`notes`,children:(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Deprecation is reversible and leaves your installs alone; deletion is permanent and uninstalls the asset. See `,(0,n.jsx)(t.a,{href:`/railyard/docs/latest/listing-status-and-filters`,children:`Listing Status & Filters`}),` for what each state means.`]}),`
`]})})]})}function i(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};