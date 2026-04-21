import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...e.components},{Caution:r,Image:a,Note:o,TabItem:s,Tabs:c,Tip:l}=n;return r||i(`Caution`,!0),a||i(`Image`,!0),o||i(`Note`,!0),s||i(`TabItem`,!0),c||i(`Tabs`,!0),l||i(`Tip`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:`If you have multiple projects, you can host them all on the same repository via a custom Update JSON file. In this file, you can place all the necessary information required for Railyard to fetch updates for all of your projects.`}),`
`,(0,t.jsx)(n.h2,{id:`setting-up-the-directory`,children:`Step 1 - Setting Up the Directory`}),`
`,(0,t.jsx)(n.p,{children:`The first step is to set up the Update JSON files. You will need several of these, one for every project.`}),`
`,(0,t.jsxs)(n.p,{children:[`Create a new folder in your repository and call it something like `,(0,t.jsx)(n.code,{children:`releases`}),` or `,(0,t.jsx)(n.code,{children:`railyard`}),`. This is where your Update JSON files will be located. Create a new `,(0,t.jsx)(n.code,{children:`JSON`}),` file for every project. Inside each file, you can place the custom update schema found below and update it to match your project.`]}),`
`,(0,t.jsx)(n.h2,{id:`custom-update-schema-template`,children:`Step 2 - Custom Update Schema Template`}),`
`,(0,t.jsx)(n.p,{children:`Paste the following template into each of your Update JSON files. Make sure to update the fields to match your project.`}),`
`,(0,t.jsx)(o,{children:(0,t.jsxs)(n.p,{children:[`For mods, each version entry must also include a `,(0,t.jsx)(n.code,{children:`manifest`}),` field pointing to the mod's `,(0,t.jsx)(n.code,{children:`manifest.json`}),` for that release. This should be the `,(0,t.jsx)(n.code,{children:`manifest.json`}),` that you uploaded alongside the mod release. Railyard uses this to validate dependencies without downloading the full ZIP.`]})}),`
`,(0,t.jsxs)(l,{children:[(0,t.jsxs)(n.p,{children:[`The version of the project does `,(0,t.jsx)(n.strong,{children:`not`}),` have to match the version of the GitHub release. As long as the `,(0,t.jsx)(n.code,{children:`download`}),` link points to a valid ZIP file, Railyard will be able to fetch it.`]}),(0,t.jsx)(n.p,{children:`This also means that you may re-release the same update in a new GitHub release without having to update the version in the Update JSON file.`})]}),`
`,(0,t.jsxs)(c,{children:[(0,t.jsx)(s,{value:`maps-schema`,label:`Maps`,default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-json`,children:`{
  "schema_version": 1,
  "versions": [
    {
      "version": "1.0.0",
      "game_version": ">=1.0.0",
      "date": "2026-02-24",
      "changelog": "Realistic demand data using official French government data (INSEE, SIRENE, SNCF).",
      "download": "https://github.com/flopinou/FrancePack/releases/download/1.0.0/Paris_MM.zip",
      "sha256": "<your asset's sha256>"
    }
  ]
}
`})})}),(0,t.jsx)(s,{value:`mods-schema`,label:`Mods`,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-json`,children:`{
  "schema_version": 1,
  "versions": [
    {
      "version": "1.0.0",
      "game_version": ">=1.0.0",
      "date": "2026-02-24",
      "changelog": "Initial release.",
      "download": "https://example.com/my-mod/releases/v1.0.0.zip",
      "sha256": "<your asset's sha256>",
      "manifest": "https://example.com/my-mod/releases/v1.0.0/manifest.json"
    }
  ]
}
`})})})]}),`
`,(0,t.jsx)(r,{children:(0,t.jsxs)(n.p,{children:[`Versions `,(0,t.jsx)(n.strong,{children:`must`}),` be in `,(0,t.jsx)(n.a,{href:`https://semver.org/`,children:`semantic versioning format`}),`. `,(0,t.jsx)(n.code,{children:`1.0`}),`, `,(0,t.jsx)(n.code,{children:`abc`}),`, `,(0,t.jsx)(n.code,{children:`version-A`}),`, etc. will not work. Your version must be `,(0,t.jsx)(n.code,{children:`X.Y.Z`}),` or `,(0,t.jsx)(n.code,{children:`vX.Y.Z`}),`.`]})}),`
`,(0,t.jsxs)(l,{children:[(0,t.jsxs)(n.p,{children:[`You can find the `,(0,t.jsx)(n.code,{children:`sha256`}),` directly on the releases page.`]}),(0,t.jsx)(a,{width:`1000`,alt:`image`,src:`/images/docs/railyard/v0.2/github-assets-sha256.png`})]}),`
`,(0,t.jsxs)(n.p,{children:[`To update your project, simply add a new field in the `,(0,t.jsx)(n.code,{children:`versions`}),` array and add your update information there. An example can be seen below.`]}),`
`,(0,t.jsxs)(c,{children:[(0,t.jsx)(s,{value:`maps-schema-update`,label:`Maps`,default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-json`,children:`{
  "schema_version": 1,
  "versions": [
    {
      "version": "1.0.0",
      "game_version": ">=1.0.0",
      "date": "2026-02-24",
      "changelog": "Realistic demand data using official French government data (INSEE, SIRENE, SNCF).",
      "download": "https://github.com/flopinou/FrancePack/releases/download/1.0.0/Paris_MM.zip",
      "sha256": "<your asset's sha256>"
    },
    {
      "version": "1.1.0",
      "game_version": ">=1.0.0",
      "date": "2026-02-28",
      "changelog": "Updated demand data from 2022 data to 2023 data.",
      "download": "https://github.com/flopinou/FrancePack/releases/download/1.1.0/Paris_MM.zip",
      "sha256": "<your asset's sha256>"
    }
  ]
}
`})})}),(0,t.jsx)(s,{value:`mods-schema`,label:`Mods`,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-json`,children:`{
  "schema_version": 1,
  "versions": [
    {
      "version": "1.0.0",
      "game_version": ">=1.0.0",
      "date": "2026-02-24",
      "changelog": "Initial release.",
      "download": "https://example.com/my-mod/releases/v1.0.0.zip",
      "sha256": "<your asset's sha256>",
      "manifest": "https://example.com/my-mod/releases/v1.0.0/manifest.json"
    },
    {
      "version": "1.1.0",
      "game_version": ">=1.0.0",
      "date": "2026-02-28",
      "changelog": "Added new features and fixed bugs.",
      "download": "https://example.com/my-mod/releases/v1.1.0.zip",
      "sha256": "<your asset's sha256>",
      "manifest": "https://example.com/my-mod/releases/v1.1.0/manifest.json"
    }
  ]
}
`})})})]}),`
`,(0,t.jsxs)(n.p,{children:[`Now that you have your Update JSON files set up, you can move on to actually `,(0,t.jsx)(n.a,{href:`/registry/docs/publishing-projects#using-the-issue-template`,children:`creating the submission ticket on the Railyard registry`}),`.`]})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};