import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={a:`a`,code:`code`,figure:`figure`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Alert:r,Caution:a,Image:o,Note:s,Tip:c}=n;return r||i(`Alert`,!0),a||i(`Caution`,!0),o||i(`Image`,!0),s||i(`Note`,!0),c||i(`Tip`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:`This guide will walk you through installing and setting up Railyard on macOS-based systems.`}),`
`,(0,t.jsx)(n.h2,{id:`downloading-railyard`,children:`Step 1 - Downloading Railyard`}),`
`,(0,t.jsxs)(n.p,{children:[`To install Railyard on macOS, navigate to the `,(0,t.jsx)(n.a,{href:`/railyard`,children:`download page`}),`. You should see a button with the auto-detected download for your operating system.`]}),`
`,(0,t.jsx)(n.hr,{}),`
`,(0,t.jsx)(n.h2,{id:`dequarantining-railyard`,children:`Step 2 - Dequarantining Railyard`}),`
`,(0,t.jsx)(n.p,{children:`When you first try to open Railyard, macOS will show a dialog saying the app can't be opened because Apple cannot check it for malicious software. This is expected for unsigned apps.`}),`
`,(0,t.jsxs)(c,{children:[(0,t.jsx)(n.p,{children:`If you prefer not to use a DMG, you can install Railyard using the ZIP file.`}),(0,t.jsxs)(n.ol,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Download `,(0,t.jsx)(n.code,{children:`railyard-macos-universal.zip`}),` from the `,(0,t.jsx)(n.a,{href:`/railyard`,children:`download page`}),`.`]}),`
`,(0,t.jsx)(n.li,{children:`Extract the ZIP (double-click it in Finder).`}),`
`,(0,t.jsxs)(n.li,{children:[`Move `,(0,t.jsx)(n.code,{children:`railyard.app`}),` to your `,(0,t.jsx)(n.strong,{children:`Applications`}),` folder.`]}),`
`,(0,t.jsx)(n.li,{children:`Follow the dequarantining steps below.`}),`
`]})]}),`
`,(0,t.jsx)(n.h3,{id:`right-click-to-open`,children:`Option A: Right-Click to Open (Recommended)`}),`
`,(0,t.jsxs)(n.ol,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Open `,(0,t.jsx)(n.strong,{children:`Finder`}),` and navigate to `,(0,t.jsx)(n.strong,{children:`Applications`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Right-click`}),` (or Control-click) on `,(0,t.jsx)(n.strong,{children:`Railyard`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Select `,(0,t.jsx)(n.strong,{children:`Open`}),` from the context menu.`]}),`
`,(0,t.jsxs)(n.li,{children:[`A dialog will appear with an `,(0,t.jsx)(n.strong,{children:`Open`}),` button. Click it.`]}),`
`]}),`
`,(0,t.jsx)(n.p,{children:`You only need to do this once. After the first launch, you can open Railyard normally.`}),`
`,(0,t.jsx)(n.h3,{id:`system-settings`,children:`Option B: System Settings`}),`
`,(0,t.jsxs)(n.ol,{children:[`
`,(0,t.jsx)(n.li,{children:`Try to open Railyard normally (it will be blocked).`}),`
`,(0,t.jsxs)(n.li,{children:[`Open `,(0,t.jsx)(n.strong,{children:`System Settings`}),` > `,(0,t.jsx)(n.strong,{children:`Privacy & Security`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Scroll down to the `,(0,t.jsx)(n.strong,{children:`Security`}),` section. You should see a message about Railyard being blocked.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Click `,(0,t.jsx)(n.strong,{children:`Open Anyway`}),` and confirm.`]}),`
`]}),`
`,(0,t.jsx)(n.h3,{id:`terminal`,children:`Option C: Terminal`}),`
`,(0,t.jsx)(n.p,{children:`If neither option above works, you can remove the quarantine attribute from the executable directly by running:`}),`
`,(0,t.jsx)(n.figure,{"data-rehype-pretty-code-figure":``,children:(0,t.jsx)(n.pre,{tabIndex:`0`,"data-language":`bash`,"data-theme":`github-dark github-light-high-contrast`,children:(0,t.jsx)(n.code,{"data-language":`bash`,"data-theme":`github-dark github-light-high-contrast`,style:{display:`grid`},children:(0,t.jsxs)(n.span,{"data-line":``,children:[(0,t.jsx)(n.span,{style:{"--shiki-dark":`#B392F0`,"--shiki-light":`#702C00`},children:`xattr`}),(0,t.jsx)(n.span,{style:{"--shiki-dark":`#79B8FF`,"--shiki-light":`#023B95`},children:` -cr`}),(0,t.jsx)(n.span,{style:{"--shiki-dark":`#9ECBFF`,"--shiki-light":`#032563`},children:` /Applications/railyard.app`})]})})})}),`
`,(0,t.jsx)(n.p,{children:`Then, open Railyard normally.`}),`
`,(0,t.jsx)(n.hr,{}),`
`,(0,t.jsx)(n.h2,{id:`setting-up-railyard`,children:`Step 3 - Setting Up Railyard`}),`
`,(0,t.jsx)(n.p,{children:`When you first launch Railyard, you will need to run through the setup process.`}),`
`,(0,t.jsx)(n.h3,{id:`data-folder`,children:`Data Folder`}),`
`,(0,t.jsxs)(n.p,{children:[`First, you will be prompted to select your `,(0,t.jsx)(n.code,{children:`metro-maker4`}),` folder.`]}),`
`,(0,t.jsxs)(n.p,{children:[`If you did not manually modify this, click `,(0,t.jsx)(n.strong,{children:`Auto-Detect`}),`. Otherwise, select the location of this folder. Railyard will automatically validate it.`]}),`
`,(0,t.jsxs)(r,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`metro-maker4`}),` will `,(0,t.jsx)(n.strong,{children:`only`}),` be recognized as a valid data folder if you have previously:`]}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Launched the game at least once`}),`
`,(0,t.jsxs)(n.li,{children:[`Loaded a map in-game (to populate `,(0,t.jsx)(n.code,{children:`cities/`}),`)`]}),`
`]})]}),`
`,(0,t.jsx)(n.h3,{id:`game-executable`,children:`Game Executable`}),`
`,(0,t.jsxs)(n.p,{children:[`After, you will be asked to select your game executable. Once again, click `,(0,t.jsx)(n.strong,{children:`Auto-Detect`}),` if you have not modified this. Otherwise, select the location of your game executable.`]}),`
`,(0,t.jsx)(s,{children:(0,t.jsx)(n.p,{children:`Game executable refers to the actual file that launches the game, not any shortcut or folder containing it.`})}),`
`,(0,t.jsx)(n.h3,{id:`github-token`,children:`GitHub Token`}),`
`,(0,t.jsxs)(n.p,{children:[`The next prompt will ask you to input your GitHub token. This is optional, but `,(0,t.jsx)(n.strong,{children:`highly`}),` recommended to avoid hitting GitHub's API rate limits when using Railyard. If you do not have a token or do not wish to use one, simply click `,(0,t.jsx)(n.strong,{children:`Next`}),` to continue with the setup process. You can always add a token later via the settings menu. To set up a GitHub token, see the `,(0,t.jsx)(n.a,{href:`/railyard/docs/v0.2/github-token`,children:`GitHub Token guide`}),`.`]}),`
`,(0,t.jsx)(n.h3,{id:`automatic-updates`,children:`Automatic Updates`}),`
`,(0,t.jsx)(n.p,{children:`The final prompt will ask you whether you want to enable automatic updates. This will allow Railyard to prompt you every time a new version is released, allowing you to easily stay up-to-date with the latest features and bug fixes.`}),`
`,(0,t.jsx)(c,{children:(0,t.jsx)(n.p,{children:`It is recommended to keep this enabled to ensure you have the latest features and bug fixes. This can be toggled at any time via the settings menu.`})}),`
`,(0,t.jsx)(n.hr,{}),`
`,(0,t.jsx)(n.h2,{id:`launching-subway-builder`,children:`Step 4 - Launching Subway Builder`}),`
`,(0,t.jsxs)(n.p,{children:[`Once you install content through Railyard, you must launch the game through Railyard for the content to work properly. To do this, simply click the `,(0,t.jsx)(n.strong,{children:`Launch`}),` button located on the Railyard navbar.`]}),`
`,(0,t.jsx)(a,{children:(0,t.jsxs)(n.p,{children:[`If you launch the game directly (not through Railyard), `,(0,t.jsx)(n.strong,{children:`the game will still launch`}),` and some mods may still work. However, maps will load without the necessary data needed to load in-game and any custom command-line arguments set through Railyard will not be applied.`]})}),`
`,(0,t.jsxs)(n.p,{children:[`When the game is launched, open `,(0,t.jsx)(n.strong,{children:`Settings`}),`. Scroll until you see `,(0,t.jsx)(n.strong,{children:`Mod Manager`}),`.`]}),`
`,(0,t.jsx)(`p`,{align:`center`,children:(0,t.jsx)(o,{width:`500`,alt:`image`,src:`/images/railyard/docs/v0.2/subway-builder-mod-manager.png`})}),`
`,(0,t.jsxs)(n.p,{children:[`In that menu, enable the `,(0,t.jsx)(n.strong,{children:`Railyard Map Loader`}),` mod.`]}),`
`,(0,t.jsx)(r,{children:(0,t.jsx)(n.p,{children:`This is required to load maps installed through Railyard. If you do not enable this mod, maps will fail to load properly.`})}),`
`,(0,t.jsxs)(n.p,{children:[`After that, you're ready to play! If you have any questions or run into any issues, feel free to ask questions in the `,(0,t.jsx)(n.a,{href:`https://discord.gg/jrNQpbytUQ`,children:`Discord`}),` or raise an issue on `,(0,t.jsx)(n.a,{href:`https://github.com/Subway-Builder-Modded/monorepo/issues`,children:`GitHub`}),`.`]})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};