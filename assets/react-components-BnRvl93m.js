import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:`Subway Builder mods can render custom UI using React. The game provides React at runtime — your mod
doesn't need to bundle it.`}),`
`,(0,t.jsx)(n.h2,{id:`how-the-react-shim-works`,children:`How the React Shim Works`}),`
`,(0,t.jsxs)(n.p,{children:[`The template includes a React shim at `,(0,t.jsx)(n.code,{children:`src/types/react.ts`}),` that pulls React from the game's API:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`const React = window.SubwayBuilderAPI.utils.React;
export default React;
export const { useState, useEffect, useCallback, useMemo, useRef } = React;
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Vite is configured to alias all `,(0,t.jsx)(n.code,{children:`react`}),` imports to this shim, so you can write standard React:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-tsx`,children:`import { useState, useEffect } from "react";
`})}),`
`,(0,t.jsx)(n.p,{children:`This just works — the import gets redirected to the shim at build time, and at runtime it uses the
game's React instance.`}),`
`,(0,t.jsx)(n.h2,{id:`using-game-ui-components`,children:`Using Game UI Components`}),`
`,(0,t.jsx)(n.p,{children:`The game exposes a set of styled UI components. Access them from the API:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-tsx`,children:`const api = window.SubwayBuilderAPI;

// Cast to any since the components work at runtime but don't have strict prop types
const { Button, Card, CardHeader, CardTitle, CardContent } = api.utils.components as Record<
  string,
  React.ComponentType<any>
>;
`})}),`
`,(0,t.jsx)(n.h3,{id:`available-components`,children:`Available Components`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:`Component`})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:`Description`})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`Button`})}),(0,t.jsx)(n.td,{children:`Standard button with variant support`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`Card`})}),(0,t.jsx)(n.td,{children:`Container card`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`CardHeader`})}),(0,t.jsx)(n.td,{children:`Card header section`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`CardTitle`})}),(0,t.jsx)(n.td,{children:`Card title text`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`CardContent`})}),(0,t.jsx)(n.td,{children:`Card body content`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`CardDescription`})}),(0,t.jsx)(n.td,{children:`Card description text`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`Switch`})}),(0,t.jsx)(n.td,{children:`Toggle switch`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`Slider`})}),(0,t.jsx)(n.td,{children:`Range slider`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`Label`})}),(0,t.jsx)(n.td,{children:`Form label`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`Input`})}),(0,t.jsx)(n.td,{children:`Text input`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`Badge`})}),(0,t.jsx)(n.td,{children:`Status badge`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`Progress`})}),(0,t.jsx)(n.td,{children:`Progress bar`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`Tooltip`})}),(0,t.jsx)(n.td,{children:`Tooltip wrapper`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`TooltipProvider`})}),(0,t.jsx)(n.td,{children:`Tooltip context provider`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`TooltipTrigger`})}),(0,t.jsx)(n.td,{children:`Tooltip trigger element`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`TooltipContent`})}),(0,t.jsx)(n.td,{children:`Tooltip content popup`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`SubwayButton`})}),(0,t.jsx)(n.td,{children:`Game-styled button`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`MainMenuButton`})}),(0,t.jsx)(n.td,{children:`Main menu style button`})]})]})]}),`
`,(0,t.jsx)(n.h3,{id:`button-example`,children:`Button Example`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-tsx`,children:`const { Button } = api.utils.components as Record<string, React.ComponentType<any>>;

function MyPanel() {
  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => console.log("click")}>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}
`})}),`
`,(0,t.jsx)(n.h3,{id:`card-example`,children:`Card Example`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-tsx`,children:`const { Card, CardHeader, CardTitle, CardContent } = api.utils.components as Record<
  string,
  React.ComponentType<any>
>;

function StatsCard() {
  const stats = api.gameState.getRidershipStats();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ridership</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{stats.totalRidersPerHour} riders/hour</p>
        <p>{stats.totalRiders} total</p>
      </CardContent>
    </Card>
  );
}
`})}),`
`,(0,t.jsx)(n.h2,{id:`using-lucide-icons`,children:`Using Lucide Icons`}),`
`,(0,t.jsxs)(n.p,{children:[`The game provides ~1700 `,(0,t.jsx)(n.a,{href:`https://lucide.dev/`,children:`Lucide`}),` icons. Access them by PascalCase name:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-tsx`,children:`const icons = api.utils.icons;

function MyPanel() {
  const TrainIcon = icons.Train;
  const SettingsIcon = icons.Settings;
  const MapPinIcon = icons.MapPin;

  return (
    <div className="flex items-center gap-2">
      <TrainIcon className="w-4 h-4" />
      <span>Trains</span>
    </div>
  );
}
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Common icons you might use: `,(0,t.jsx)(n.code,{children:`Train`}),`, `,(0,t.jsx)(n.code,{children:`MapPin`}),`, `,(0,t.jsx)(n.code,{children:`Settings`}),`, `,(0,t.jsx)(n.code,{children:`DollarSign`}),`, `,(0,t.jsx)(n.code,{children:`BarChart`}),`, `,(0,t.jsx)(n.code,{children:`Route`}),`,
`,(0,t.jsx)(n.code,{children:`Building`}),`, `,(0,t.jsx)(n.code,{children:`Layers`}),`, `,(0,t.jsx)(n.code,{children:`Clock`}),`, `,(0,t.jsx)(n.code,{children:`Play`}),`, `,(0,t.jsx)(n.code,{children:`Pause`}),`, `,(0,t.jsx)(n.code,{children:`Zap`}),`, `,(0,t.jsx)(n.code,{children:`Plus`}),`, `,(0,t.jsx)(n.code,{children:`Minus`}),`, `,(0,t.jsx)(n.code,{children:`Search`}),`, `,(0,t.jsx)(n.code,{children:`Filter`}),`,
`,(0,t.jsx)(n.code,{children:`Download`}),`, `,(0,t.jsx)(n.code,{children:`Save`}),`.`]}),`
`,(0,t.jsxs)(n.p,{children:[`For icon names used in `,(0,t.jsx)(n.code,{children:`addFloatingPanel`}),`, `,(0,t.jsx)(n.code,{children:`addToolbarButton`}),`, etc., use the PascalCase string name
directly:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`api.ui.addFloatingPanel({
  id: "my-panel",
  icon: "Train", // String name, not the component
  title: "My Panel",
  render: MyPanel,
});
`})}),`
`,(0,t.jsx)(n.h2,{id:`using-recharts`,children:`Using Recharts`}),`
`,(0,t.jsxs)(n.p,{children:[`The game bundles `,(0,t.jsx)(n.a,{href:`https://recharts.org/`,children:`Recharts`}),` for data visualization. All the standard
components are available:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-tsx`,children:`const { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } =
  api.utils.charts;

function RidershipChart() {
  const metrics = api.gameState.getLineMetrics();

  const data = metrics.map((m) => ({
    name: m.name,
    riders: m.ridersPerHour,
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="riders" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  );
}
`})}),`
`,(0,t.jsx)(n.h3,{id:`available-chart-components`,children:`Available Chart Components`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:`Component`})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:`Use for`})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`ResponsiveContainer`})}),(0,t.jsx)(n.td,{children:`Auto-sizing wrapper (use this around every chart)`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`BarChart`}),`, `,(0,t.jsx)(n.code,{children:`Bar`})]}),(0,t.jsx)(n.td,{children:`Bar charts`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`LineChart`}),`, `,(0,t.jsx)(n.code,{children:`Line`})]}),(0,t.jsx)(n.td,{children:`Line charts`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`AreaChart`}),`, `,(0,t.jsx)(n.code,{children:`Area`})]}),(0,t.jsx)(n.td,{children:`Area charts`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`PieChart`}),`, `,(0,t.jsx)(n.code,{children:`Pie`}),`, `,(0,t.jsx)(n.code,{children:`Cell`})]}),(0,t.jsx)(n.td,{children:`Pie/donut charts`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`RadarChart`}),`, `,(0,t.jsx)(n.code,{children:`Radar`})]}),(0,t.jsx)(n.td,{children:`Radar charts`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`ComposedChart`})}),(0,t.jsx)(n.td,{children:`Mixed chart types`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`XAxis`}),`, `,(0,t.jsx)(n.code,{children:`YAxis`})]}),(0,t.jsx)(n.td,{children:`Axes`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`CartesianGrid`})}),(0,t.jsx)(n.td,{children:`Grid lines`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`Tooltip`})}),(0,t.jsx)(n.td,{children:`Hover tooltips`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`Legend`})}),(0,t.jsx)(n.td,{children:`Chart legend`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`styling-with-tailwind`,children:`Styling With Tailwind`}),`
`,(0,t.jsx)(n.p,{children:`The game uses Tailwind CSS. You can use Tailwind utility classes directly in your components:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-tsx`,children:`function MyPanel() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <h3 className="text-lg font-semibold">My Mod</h3>
      <p className="text-sm text-muted-foreground">Some description</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-card rounded-lg p-2">Cell 1</div>
        <div className="bg-card rounded-lg p-2">Cell 2</div>
      </div>
    </div>
  );
}
`})}),`
`,(0,t.jsx)(n.p,{children:`Useful theme-aware classes:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`text-muted-foreground`}),` — subdued text color`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`bg-card`}),` — card background`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`border`}),` — themed border`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`rounded-lg`}),` / `,(0,t.jsx)(n.code,{children:`rounded-md`}),` — border radius`]}),`
`]}),`
`,(0,t.jsx)(n.h2,{id:`floating-panel-tips`,children:`Floating Panel Tips`}),`
`,(0,t.jsxs)(n.p,{children:[`When rendering into a floating panel (`,(0,t.jsx)(n.code,{children:`addFloatingPanel`}),`), the panel provides its own container —
you don't need to wrap your component in a `,(0,t.jsx)(n.code,{children:`Card`}),`:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-tsx`,children:`// Good — panel provides the container
function MyPanel() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <p>Content here</p>
    </div>
  );
}

// Registering it
api.ui.addFloatingPanel({
  id: "my-panel",
  title: "My Mod",
  icon: "Puzzle",
  render: MyPanel,
});
`})}),`
`,(0,t.jsx)(n.h2,{id:`registering-custom-components-at-placements`,children:`Registering Custom Components at Placements`}),`
`,(0,t.jsx)(n.p,{children:`For more advanced UI, you can register a React component directly at a UI placement:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-tsx`,children:`function MySettingsSection() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center justify-between p-2">
      <span>My Feature</span>
      <Switch checked={enabled} onCheckedChange={setEnabled} />
    </div>
  );
}

api.ui.registerComponent("settings-menu", {
  id: "my-settings",
  component: MySettingsSection,
});
`})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}export{r as default};