import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...e.components},{Note:r}=n;return r||i(`Note`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:`Your mod may require a certain version of Subway Builder, or another mod, to be installed in order to properly function. This is called a dependency, and we have made them as easy to declare and install as possible.`}),`
`,(0,t.jsx)(n.h2,{id:`declaring-dependencies`,children:`Declaring Dependencies`}),`
`,(0,t.jsxs)(n.p,{children:[`In the `,(0,t.jsx)(n.code,{children:`manifest.json`}),` you create for your mod, create a new field called dependencies, like so:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-json`,children:`{
    "name": "My Mod",
    "id": "my-mod",
    ...
    "dependencies": {
        "subway-builder": ">=1.0.0",
        // Mod dependencies
    }
}
`})}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`subway-builder`}),` is always required as a dependency for your mod, so that Railyard can determine if the version of the game installed on the user's computer is compatible with your mod.`]}),`
`,(0,t.jsx)(n.h3,{id:`dependency-fields`,children:`Dependency Fields`}),`
`,(0,t.jsx)(n.p,{children:`Dependencies can be declared using the following format:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-json`,children:`{
  "dependencies": {
    "mod-a": ">X.Y.Z", // greater than
    "mod-b": "<=A.B.C" // less than or equal
  }
}
`})}),`
`,(0,t.jsx)(r,{children:(0,t.jsxs)(n.p,{children:[`In the example above, `,(0,t.jsx)(n.code,{children:`mod-a`}),` and `,(0,t.jsx)(n.code,{children:`mod-b`}),` are the mod IDs of the mods you depend on.`]})}),`
`,(0,t.jsxs)(n.p,{children:[`In order for Railyard to install dependencies, the Mod ID must match a mod in the `,(0,t.jsx)(n.a,{href:`https://github.com/Subway-Builder-Modded/registry`,children:`registry`}),`, and the version constraint must be compatible with at least one version of the mod.`]}),`
`,(0,t.jsx)(n.p,{children:`Otherwise, that's it! Railyard will select and install the latest, most compatible version of your dependencies for you, and even ensure nested dependencies are installed properly. All you have to do is declare them, and we'll handle the rest.`})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};