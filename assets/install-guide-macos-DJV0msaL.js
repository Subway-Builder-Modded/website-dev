import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={a:`a`,code:`code`,figure:`figure`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e.components},{Image:r,Note:a}=n;return r||i(`Image`,!0),a||i(`Note`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:`This guide will walk you through installing and setting up Railyard on macOS.`}),`
`,(0,t.jsx)(n.h2,{id:`downloading-railyard`,children:`Step 1 - Downloading Railyard`}),`
`,(0,t.jsxs)(n.p,{children:[`To install Railyard on macOS, navigate to the `,(0,t.jsx)(n.a,{href:`https://subwaybuildermodded.com/railyard`,children:`download page`}),`. You should see a button with the auto-detected download for your operating system.`]}),`
`,(0,t.jsx)(n.h2,{id:`dequarantining-railyard`,children:`Step 2 - Dequarantining Railyard`}),`
`,(0,t.jsx)(n.h3,{id:`first-launch`,children:`First Launch`}),`
`,(0,t.jsx)(n.p,{children:`When you first try to open Railyard, macOS will show a dialog saying the app "can't be opened because Apple cannot check it for malicious software." This is expected for unsigned apps.`}),`
`,(0,t.jsx)(n.h4,{id:`right-click-to-open`,children:`Option A: Right-Click to Open (Recommended)`}),`
`,(0,t.jsxs)(n.ol,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Open `,(0,t.jsx)(n.strong,{children:`Finder`}),` and navigate to `,(0,t.jsx)(n.strong,{children:`Applications`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Right-click`}),` (or Control-click) on `,(0,t.jsx)(n.strong,{children:`Railyard`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Select `,(0,t.jsx)(n.strong,{children:`Open`}),` from the context menu.`]}),`
`,(0,t.jsxs)(n.li,{children:[`A dialog will appear with an `,(0,t.jsx)(n.strong,{children:`Open`}),` button — click it.`]}),`
`]}),`
`,(0,t.jsx)(n.p,{children:`You only need to do this once. After the first launch, you can open Railyard normally.`}),`
`,(0,t.jsx)(n.h4,{id:`system-settings`,children:`Option B: System Settings`}),`
`,(0,t.jsxs)(n.ol,{children:[`
`,(0,t.jsx)(n.li,{children:`Try to open Railyard normally (it will be blocked).`}),`
`,(0,t.jsxs)(n.li,{children:[`Open `,(0,t.jsx)(n.strong,{children:`System Settings`}),` > `,(0,t.jsx)(n.strong,{children:`Privacy & Security`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Scroll down to the `,(0,t.jsx)(n.strong,{children:`Security`}),` section. You should see a message about Railyard being blocked.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Click `,(0,t.jsx)(n.strong,{children:`Open Anyway`}),` and confirm.`]}),`
`]}),`
`,(0,t.jsx)(n.h4,{id:`terminal`,children:`Option C: Terminal`}),`
`,(0,t.jsx)(n.p,{children:`If neither option above works, you can remove the quarantine attribute:`}),`
`,(0,t.jsx)(n.figure,{"data-rehype-pretty-code-figure":``,children:(0,t.jsx)(n.pre,{tabIndex:`0`,"data-language":`bash`,"data-theme":`github-dark github-light-high-contrast`,children:(0,t.jsx)(n.code,{"data-language":`bash`,"data-theme":`github-dark github-light-high-contrast`,style:{display:`grid`},children:(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-dark":`#B392F0`,"--shiki-light":`#702C00`},children:`xattr`}),(0,t.jsx)(n.span,{style:{"--shiki-dark":`#79B8FF`,"--shiki-light":`#023B95`},children:` -cr`}),(0,t.jsx)(n.span,{style:{"--shiki-dark":`#9ECBFF`,"--shiki-light":`#032563`},children:` /Applications/railyard.app`})]})})})}),`
`,(0,t.jsx)(n.p,{children:`Then open Railyard normally.`}),`
`,(0,t.jsx)(n.h3,{id:`install-from-zip`,children:`Install from ZIP`}),`
`,(0,t.jsx)(n.p,{children:`If you prefer not to use the DMG:`}),`
`,(0,t.jsxs)(n.ol,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Download `,(0,t.jsx)(n.code,{children:`railyard-macos-universal.zip`}),` from the download page.`]}),`
`,(0,t.jsx)(n.li,{children:`Extract the ZIP (double-click it in Finder).`}),`
`,(0,t.jsxs)(n.li,{children:[`Move `,(0,t.jsx)(n.code,{children:`railyard.app`}),` to your `,(0,t.jsx)(n.strong,{children:`Applications`}),` folder.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Follow the `,(0,t.jsx)(n.strong,{children:`First launch`}),` steps above.`]}),`
`]}),`
`,(0,t.jsx)(n.h3,{id:`uninstalling`,children:`Uninstalling`}),`
`,(0,t.jsxs)(n.p,{children:[`Drag `,(0,t.jsx)(n.strong,{children:`Railyard`}),` from Applications to the Trash. To remove app data:`]}),`
`,(0,t.jsx)(n.figure,{"data-rehype-pretty-code-figure":``,children:(0,t.jsx)(n.pre,{tabIndex:`0`,"data-language":`bash`,"data-theme":`github-dark github-light-high-contrast`,children:(0,t.jsx)(n.code,{"data-language":`bash`,"data-theme":`github-dark github-light-high-contrast`,style:{display:`grid`},children:(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-dark":`#B392F0`,"--shiki-light":`#702C00`},children:`rm`}),(0,t.jsx)(n.span,{style:{"--shiki-dark":`#79B8FF`,"--shiki-light":`#023B95`},children:` -rf`}),(0,t.jsx)(n.span,{style:{"--shiki-dark":`#9ECBFF`,"--shiki-light":`#032563`},children:` ~/Library/Application`}),(0,t.jsx)(n.span,{style:{"--shiki-dark":`#79B8FF`,"--shiki-light":`#A0111F`},children:`\\ `}),(0,t.jsx)(n.span,{style:{"--shiki-dark":`#9ECBFF`,"--shiki-light":`#032563`},children:`Support/railyard`})]})})})}),`
`,(0,t.jsx)(n.h2,{id:`setting-up-railyard`,children:`Step 3 - Setting Up Railyard`}),`
`,(0,t.jsxs)(n.p,{children:[`When you first launch Railyard, you will be asked to select your `,(0,t.jsx)(n.code,{children:`metro-maker4`}),` folder.`]}),`
`,(0,t.jsx)(`p`,{align:`center`,children:(0,t.jsx)(r,{width:`400`,alt:`image`,src:`/images/docs/railyard/v0.1/railyard-setup-mm4.png`})}),`
`,(0,t.jsx)(n.p,{children:`If you did not manually modify this, click "Auto-Detect". Otherwise, select the location of this folder. Railyard will automatically validate it.`}),`
`,(0,t.jsx)(n.p,{children:`After, you will be asked to select your game executable. Once again, click "Auto-Detect" if you have not modified this. Otherwise, select the location of your game executable.`}),`
`,(0,t.jsx)(`p`,{align:`center`,children:(0,t.jsx)(r,{width:`400`,alt:`image`,src:`/images/docs/railyard/v0.1/railyard-setup-exec.png`})}),`
`,(0,t.jsxs)(n.p,{children:[`The next prompt will ask you to input your GitHub token. This is optional, but recommended to avoid hitting GitHub's API rate limits when using Railyard. If you do not have a token or do not wish to use one, simply click "Next" to continue with the setup process. You can always add a token later via the settings menu. To set up a GitHub token, see the `,(0,t.jsx)(n.a,{href:`https://subwaybuildermodded.com/railyard/docs/v0.1/players/github-token`,children:`GitHub Token guide`}),`.`]}),`
`,(0,t.jsx)(n.p,{children:`The final prompt will ask you whether you want to enable automatic updates. This will allow Railyard to prompt you every time a new version is released, allowing you to easily stay up to date with the latest features and bug fixes.`}),`
`,(0,t.jsx)(a,{children:(0,t.jsx)(n.p,{children:`It is recommended to keep this enabled to ensure you have the latest features and bug fixes. This can be toggled at any time via the settings menu.`})}),`
`,(0,t.jsxs)(n.p,{children:[`After that, you're ready to play! If you have any questions or run into any issues, feel free to ask questions in the `,(0,t.jsx)(n.a,{href:`https://discord.gg/jrNQpbytUQ`,children:`Discord`}),` or `,(0,t.jsx)(n.a,{href:`https://github.com/Subway-Builder-Modded/monorepo/issues`,children:`raise an issue on GitHub`}),`.`]})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};