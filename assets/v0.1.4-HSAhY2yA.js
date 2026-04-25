import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components},{ChangelogSection:r,Note:a}=n;return r||i(`ChangelogSection`,!0),a||i(`Note`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{type:`features`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Added a library page to easily view and manage installed content`}),`
`,(0,t.jsx)(n.li,{children:`Installs can now be cancelled during the download phase`}),`
`,(0,t.jsx)(n.li,{children:`Added support for optional GitHub token as a workaround for GitHub API limits`}),`
`]})}),`
`,(0,t.jsxs)(r,{type:`improvements`,children:[(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Added sorting by country/downloads/last updated (default is now last updated)`}),`
`,(0,t.jsxs)(n.li,{children:[`All assets now show download counts on `,(0,t.jsx)(n.strong,{children:`Browse`}),`, with maps also showing flag icons corresponding to the country of the map`]}),`
`,(0,t.jsx)(n.li,{children:`Search now only shows tags when an asset with that tag exists`}),`
`,(0,t.jsx)(n.li,{children:`Separated toasts for download progress and download success and added an indicator for how many downloads are in queue`}),`
`,(0,t.jsx)(n.li,{children:`Added an updated multistep loading screen on startup`}),`
`,(0,t.jsx)(n.li,{children:`The app now launches in fullscreen`}),`
`,(0,t.jsx)(n.li,{children:`Linux builds are now through Flatpak. This means you will need to have Flatpak installed in order for the app to function. In addition, this means the autoupdater will be broken for one update on Linux (you will need to manually install the flatpak included in the v0.1.4 release yourself)`}),`
`]}),(0,t.jsx)(a,{children:(0,t.jsxs)(n.p,{children:[`You may not be able to find normal file paths when using the flatpak on linux. This is normal. Your host file system will be mounted on /run/host. You `,(0,t.jsx)(n.strong,{children:`will`}),` have to update your paths when switching to the flatpak build.`]})})]}),`
`,(0,t.jsx)(r,{type:`bugfixes`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Fixed the error log copy button overlapping with text`}),`
`,(0,t.jsx)(n.li,{children:`Removed scrolling left and right/zooming in and out`}),`
`,(0,t.jsx)(n.li,{children:`Profiles will now automatically purge entries related to uninstallable content`}),`
`,(0,t.jsx)(n.li,{children:`Resolved issue where multiple Railyard application instances could be started simultaneously`}),`
`,(0,t.jsxs)(n.li,{children:[`Assets with no installable versions are hidden in `,(0,t.jsx)(n.strong,{children:`Browse`}),` and individual versions that are not installable are hidden on the asset's page`]}),`
`,(0,t.jsxs)(n.li,{children:[`Fixed the in-game mod loader version (appeared as `,(0,t.jsx)(n.code,{children:`vv0.1.3`}),`)`]}),`
`]})}),`
`,(0,t.jsx)(r,{type:`notes`,children:(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Changed app instance title from `,(0,t.jsx)(n.code,{children:`railyard`}),` to `,(0,t.jsx)(n.code,{children:`Railyard`})]}),`
`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};