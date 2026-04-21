import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={a:`a`,code:`code`,del:`del`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components},{Warning:r}=n;return r||i(`Warning`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:`The template includes full TypeScript type definitions for the Subway Builder Modding API v1.0.0.
Here's how they're organized.`}),`
`,(0,t.jsx)(n.h2,{id:`file-structure`,children:`File Structure`}),`
`,(0,t.jsxs)(n.p,{children:[`Types are split across multiple `,(0,t.jsx)(n.code,{children:`.d.ts`}),` files in `,(0,t.jsx)(n.code,{children:`src/types/`}),`, grouped by API namespace:`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:`File`})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:`What it covers`})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`api.d.ts`})}),(0,t.jsxs)(n.td,{children:[`The main `,(0,t.jsx)(n.code,{children:`ModdingAPI`}),` interface — ties everything together`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`index.d.ts`})}),(0,t.jsxs)(n.td,{children:[`Re-exports all types + declares `,(0,t.jsx)(n.code,{children:`window.SubwayBuilderAPI`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`core.d.ts`})}),(0,t.jsxs)(n.td,{children:[`Primitives: `,(0,t.jsx)(n.code,{children:`Coordinate`}),`, `,(0,t.jsx)(n.code,{children:`BoundingBox`}),`, `,(0,t.jsx)(n.code,{children:`GameSpeed`}),`, `,(0,t.jsx)(n.code,{children:`BuildType`}),`, `,(0,t.jsx)(n.code,{children:`ElevationType`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`game-state.d.ts`})}),(0,t.jsxs)(n.td,{children:[`Entity types: `,(0,t.jsx)(n.code,{children:`Station`}),`, `,(0,t.jsx)(n.code,{children:`Track`}),`, `,(0,t.jsx)(n.code,{children:`Train`}),`, `,(0,t.jsx)(n.code,{children:`Route`}),`, `,(0,t.jsx)(n.code,{children:`DemandData`}),`, ridership types`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`game-constants.d.ts`})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`GameConstants`}),`, `,(0,t.jsx)(n.code,{children:`ConstructionCosts`}),`, `,(0,t.jsx)(n.code,{children:`HighSlopeSpeedMultiplier`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`game-actions.d.ts`})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`Bond`}),`, `,(0,t.jsx)(n.code,{children:`BondType`}),`, `,(0,t.jsx)(n.code,{children:`BondResult`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.del,{children:(0,t.jsx)(n.code,{children:`build.d.ts`})})}),(0,t.jsx)(n.td,{children:(0,t.jsxs)(n.del,{children:[`Build automation: `,(0,t.jsx)(n.code,{children:`BlueprintTrackInput`}),`, `,(0,t.jsx)(n.code,{children:`PlaceBlueprintResult`}),`, `,(0,t.jsx)(n.code,{children:`CreateRouteOptions`}),`, etc.`]})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`ui.d.ts`})}),(0,t.jsxs)(n.td,{children:[`UI system: `,(0,t.jsx)(n.code,{children:`UIPlacement`}),`, button/toggle/slider/panel option types`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`cities.d.ts`})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`City`}),`, `,(0,t.jsx)(n.code,{children:`CityConfig`}),`, `,(0,t.jsx)(n.code,{children:`CityTab`}),`, `,(0,t.jsx)(n.code,{children:`CityDataFiles`}),`, `,(0,t.jsx)(n.code,{children:`ViewState`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`trains.d.ts`})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`TrainTypeConfig`}),`, `,(0,t.jsx)(n.code,{children:`TrainTypeStats`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`stations.d.ts`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`StationTypeConfig`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`map.d.ts`})}),(0,t.jsxs)(n.td,{children:[`Map types: `,(0,t.jsx)(n.code,{children:`MapSource`}),`, `,(0,t.jsx)(n.code,{children:`MapLayer`}),`, `,(0,t.jsx)(n.code,{children:`TileURLOverride`}),`, `,(0,t.jsx)(n.code,{children:`RoutingServiceOverride`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`career.d.ts`})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`MissionConfig`}),`, `,(0,t.jsx)(n.code,{children:`StarConfig`}),`, `,(0,t.jsx)(n.code,{children:`CareerMetrics`}),`, `,(0,t.jsx)(n.code,{children:`CareerOperators`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`content-templates.d.ts`})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`NewspaperTemplate`}),`, `,(0,t.jsx)(n.code,{children:`TweetTemplate`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`pop-timing.d.ts`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`CommuteTimeRange`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.del,{children:(0,t.jsx)(n.code,{children:`storage.d.ts`})})}),(0,t.jsx)(n.td,{children:(0,t.jsxs)(n.del,{children:[`Mod storage: `,(0,t.jsx)(n.code,{children:`set`}),`, `,(0,t.jsx)(n.code,{children:`get`}),`, `,(0,t.jsx)(n.code,{children:`delete`}),`, and `,(0,t.jsx)(n.code,{children:`keys`}),` methods for persistent mod data storage`]})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`i18n.d.ts`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`I18nAPI`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`utils.d.ts`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`RechartsComponents`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`schemas.d.ts`})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`GameSchemas`}),` (Zod validation schemas)`]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`electron.d.ts`})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:`ElectronAPI`}),`, `,(0,t.jsx)(n.code,{children:`ElectronAPIExtended`})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`manifest.d.ts`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`ModManifest`})})]})]})]}),`
`,(0,t.jsx)(r,{children:(0,t.jsx)(n.p,{children:`The build/storage API types are listed on the official API documentation but are
currently unusable at runtime.`})}),`
`,(0,t.jsx)(n.h2,{id:`how-it-works`,children:`How It Works`}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`index.d.ts`}),` re-exports everything and declares the global `,(0,t.jsx)(n.code,{children:`Window`}),` interface:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`declare global {
  interface Window {
    SubwayBuilderAPI: ModdingAPI;
    electron?: ElectronAPI;
    electronAPI?: ElectronAPIExtended;
  }
}
`})}),`
`,(0,t.jsxs)(n.p,{children:[`This gives you full autocomplete when you type `,(0,t.jsx)(n.code,{children:`window.SubwayBuilderAPI.`}),` in your editor.`]}),`
`,(0,t.jsx)(n.h2,{id:`key-types-at-a-glance`,children:`Key Types at a Glance`}),`
`,(0,t.jsx)(n.h3,{id:`game-entities`,children:`Game Entities`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`interface Station {
  id: string;
  name: string;
  coords: [number, number]; // [longitude, latitude]
  trackIds: string[];
  routeIds: string[];
  nearbyStations: NearbyStation[];
  buildType: string;
  createdAt: number;
  // ...
}

interface Track {
  id: string;
  coords: [number, number][]; // Start and end points
  trackType: string; // 'heavy-metro', 'light-metro', etc.
  startElevation: number;
  endElevation: number;
  length: number;
  // ...
}

interface Route {
  id: string;
  bullet: string; // Display label ('A', '1', etc.)
  color: string; // Hex color
  stations: RouteStation[];
  trainIds: string[];
  // ...
}

interface Train {
  id: string;
  routeId: string;
  position: Coordinate;
  speed: number;
  // ...
}
`})}),`
`,(0,t.jsx)(n.h3,{id:`core-primitives`,children:`Core Primitives`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`type Coordinate = [number, number]; // [longitude, latitude]
type BoundingBox = [number, number, number, number]; // [minLng, minLat, maxLng, maxLat]
type GameSpeed = "slow" | "normal" | "fast" | "ultrafast";
type BuildType = "blueprint" | "built";
`})}),`
`,(0,t.jsx)(n.h3,{id:`ui-types`,children:`UI Types`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`type UIPlacement =
  | "settings-menu"
  | "escape-menu"
  | "escape-menu-buttons"
  | "main-menu"
  | "bottom-bar"
  | "top-bar"
  | "debug-panel"
  | "menu-items"
  | "pause-menu"
  | "debug";

type NotificationType = "success" | "error" | "info" | "warning";
`})}),`
`,(0,t.jsx)(n.h2,{id:`extending-types`,children:`Extending Types`}),`
`,(0,t.jsxs)(n.p,{children:[`If you need to extend the API types (e.g., adding fields you've discovered at runtime), you can use
TypeScript declaration merging in your own `,(0,t.jsx)(n.code,{children:`.d.ts`}),` file:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`// src/types/my-extensions.d.ts
declare module "./game-state" {
  interface Station {
    myCustomField?: string;
  }
}
`})}),`
`,(0,t.jsx)(n.h2,{id:`official-documentation`,children:`Official Documentation`}),`
`,(0,t.jsxs)(n.p,{children:[`For the most up-to-date API reference, see the
`,(0,t.jsx)(n.a,{href:`https://www.subwaybuilder.com/docs/v1.0.0`,children:`official Subway Builder modding docs`}),`.`]})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};