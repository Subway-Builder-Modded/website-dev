import{t as e}from"./jsx-runtime-qJqhvtml.js";var t=e();function n(e){let n={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components},{Danger:r,Important:a,Note:o}=n;return r||i(`Danger`,!0),a||i(`Important`,!0),o||i(`Note`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:`Practical recipes for the things you'll do most often when writing mods.`}),`
`,(0,t.jsx)(n.h2,{id:`accessing-the-api`,children:`Accessing the API`}),`
`,(0,t.jsx)(n.p,{children:`Every mod starts with the global API object:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`const api = window.SubwayBuilderAPI;
`})}),`
`,(0,t.jsx)(n.p,{children:`Always check that it exists before using it:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`if (!api) {
  console.error("[MyMod] SubwayBuilderAPI not found!");
} else {
  // Safe to use api
}
`})}),`
`,(0,t.jsx)(n.h2,{id:`initializing-a-mod`,children:`Initializing a Mod`}),`
`,(0,t.jsxs)(n.p,{children:[`Most mods should initialize inside `,(0,t.jsx)(n.code,{children:`onMapReady`}),`, which fires when a city is loaded and the map is
ready. Use a guard to prevent double initialization:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`let initialized = false;

api.hooks.onMapReady((map) => {
  if (initialized) return;
  initialized = true;

  // Your setup code here
  console.log("[MyMod] Initialized!");
});
`})}),`
`,(0,t.jsx)(o,{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:`onMapReady`}),` can fire multiple times (e.g., when switching cities). The `,(0,t.jsx)(n.code,{children:`initialized`}),` guard
ensures your UI and hooks are only set up once.`]})}),`
`,(0,t.jsx)(n.h2,{id:`adding-ui-panels`,children:`Adding UI Panels`}),`
`,(0,t.jsx)(n.h3,{id:`floating-panel`,children:`Floating Panel`}),`
`,(0,t.jsx)(n.p,{children:`The most common way to add a mod UI. Creates a draggable panel accessible from the toolbar:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`api.ui.addFloatingPanel({
  id: "my-panel",
  title: "My Panel",
  icon: "Settings", // Lucide icon name (PascalCase)
  render: MyComponent, // A React component
});
`})}),`
`,(0,t.jsx)(n.h3,{id:`toolbar-button`,children:`Toolbar Button`}),`
`,(0,t.jsx)(n.p,{children:`Add a button to the main in-game toolbar:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`api.ui.addToolbarButton({
  id: "my-button",
  icon: "Zap",
  tooltip: "Do something",
  onClick: () => {
    api.ui.showNotification("Button clicked!", "info");
  },
});
`})}),`
`,(0,t.jsx)(n.h3,{id:`escape-menu-button`,children:`Escape Menu Button`}),`
`,(0,t.jsx)(n.p,{children:`Add a button to the in-game escape/pause menu:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`api.ui.addButton("escape-menu", {
  id: "my-menu-btn",
  label: "My Mod Settings",
  onClick: () => {
    // Open settings, toggle features, etc.
  },
});
`})}),`
`,(0,t.jsx)(n.h3,{id:`settings-menu-controls`,children:`Settings Menu Controls`}),`
`,(0,t.jsx)(n.p,{children:`Add toggles, sliders, and selects to the settings panel:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`api.ui.addToggle("settings-menu", {
  id: "my-toggle",
  label: "Enable feature",
  defaultValue: true,
  onChange: (enabled) => {
    console.log("Feature:", enabled);
  },
});

api.ui.addSlider("settings-menu", {
  id: "my-slider",
  label: "Speed multiplier",
  min: 1,
  max: 10,
  step: 0.5,
  defaultValue: 1,
  onChange: (value) => {
    console.log("Speed:", value);
  },
});
`})}),`
`,(0,t.jsx)(n.h3,{id:`ui-placements`,children:`UI Placements`}),`
`,(0,t.jsxs)(n.p,{children:[`The `,(0,t.jsx)(n.code,{children:`placement`}),` argument controls where UI elements appear:`]}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:`Placement`})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:`Where it shows up`})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`'settings-menu'`})}),(0,t.jsx)(n.td,{children:`Settings panel`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`'escape-menu'`})}),(0,t.jsx)(n.td,{children:`Escape/pause menu body`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`'escape-menu-buttons'`})}),(0,t.jsx)(n.td,{children:`Escape menu button row`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`'main-menu'`})}),(0,t.jsx)(n.td,{children:`Main menu screen`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`'bottom-bar'`})}),(0,t.jsx)(n.td,{children:`Bottom toolbar area`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`'top-bar'`})}),(0,t.jsx)(n.td,{children:`Top bar area`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`'debug-panel'`})}),(0,t.jsx)(n.td,{children:`Debug overlay`})]})]})]}),`
`,(0,t.jsx)(n.h3,{id:`notifications`,children:`Notifications`}),`
`,(0,t.jsx)(n.p,{children:`Show a toast message to the player:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`api.ui.showNotification("Map loaded successfully!", "success");
api.ui.showNotification("Something went wrong.", "error");
api.ui.showNotification("Tip: try building underground.", "info");
api.ui.showNotification("Running low on funds!", "warning");
`})}),`
`,(0,t.jsx)(n.h2,{id:`reading-game-state`,children:`Reading Game State`}),`
`,(0,t.jsxs)(n.p,{children:[`All game state is read-only and accessed through `,(0,t.jsx)(n.code,{children:`api.gameState`}),`:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`// Stations, routes, tracks, trains
const stations = api.gameState.getStations();
const routes = api.gameState.getRoutes();
const tracks = api.gameState.getTracks();
const trains = api.gameState.getTrains();

// Financial
const budget = api.gameState.getBudget();
const ticketPrice = api.gameState.getTicketPrice();

// Time
const day = api.gameState.getCurrentDay();
const hour = api.gameState.getCurrentHour();

// Performance
const ridership = api.gameState.getRidershipStats();
const modeChoice = api.gameState.getModeChoiceStats();
const lineMetrics = api.gameState.getLineMetrics();
`})}),`
`,(0,t.jsx)(n.h2,{id:`station-data`,children:`Station Data`}),`
`,(0,t.jsx)(n.p,{children:`Each station has coordinates, track IDs, and nearby station info:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`const stations = api.gameState.getStations();

for (const station of stations) {
  console.log(station.name, station.coords); // [longitude, latitude]
  console.log("Tracks:", station.trackIds.length);
  console.log(
    "Nearby:",
    station.nearbyStations.map((n) => n.stationId),
  );
}
`})}),`
`,(0,t.jsx)(n.h2,{id:`ridership-data`,children:`Ridership Data`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`// Overall stats
const stats = api.gameState.getRidershipStats();
console.log(\`\${stats.totalRidersPerHour} riders/hour\`);

// Per-station
const stationData = api.gameState.getStationRidership("station-uuid-here");
console.log(\`\${stationData.total} riders at this station\`);

// Per-route
const routeData = api.gameState.getRouteRidership("route-uuid-here");
`})}),`
`,(0,t.jsx)(n.h2,{id:`reacting-to-events`,children:`Reacting to Events`}),`
`,(0,t.jsxs)(n.p,{children:[`Register callbacks for game events using `,(0,t.jsx)(n.code,{children:`api.hooks`}),`:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`// React to new stations
api.hooks.onStationBuilt((station) => {
  console.log(\`New station: \${station.name} at \${station.coords}\`);
});

// React to money changes
api.hooks.onMoneyChanged((balance, change, type, category) => {
  if (type === "expense" && change > 1000000) {
    api.ui.showNotification("Big purchase!", "info");
  }
});

// React to day changes
api.hooks.onDayChange((day) => {
  console.log(\`Day \${day}\`);
});

// React to speed changes
api.hooks.onSpeedChanged((speed) => {
  console.log(\`Speed: \${speed}\`); // 'slow' | 'normal' | 'fast' | 'ultrafast'
});

// React to game saves
api.hooks.onGameSaved((saveName) => {
  console.log(\`Game saved: \${saveName}\`);
});
`})}),`
`,(0,t.jsx)(n.h2,{id:`all-available-hooks`,children:`All Available Hooks`}),`
`,(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:`Hook`})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:`Callback arguments`})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onGameInit`})}),(0,t.jsx)(n.td,{children:`(none)`})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onDayChange`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`day: number`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onCityLoad`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`cityCode: string`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onMapReady`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`map: MapLibreMap`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onStationBuilt`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`station: Station`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onStationDeleted`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`stationId: string`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onRouteCreated`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`route: Route`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onRouteDeleted`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`routeId: string, routeBullet: string`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onTrackBuilt`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`tracks: Track[]`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onBlueprintPlaced`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`tracks: Track[]`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onDemandChange`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`popCount: number`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onTrackChange`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`changeType: 'add' | 'delete', count: number`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onTrainSpawned`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`train: Train`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onTrainDeleted`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`trainId: string, routeId: string`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onPauseChanged`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`isPaused: boolean`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onSpeedChanged`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`newSpeed: GameSpeed`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onMoneyChanged`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`newBalance, change, type, category?`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onGameSaved`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`saveName: string`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onGameLoaded`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`saveName: string`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onWarning`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`message: string`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onError`})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`error: string`})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:`onGameEnd`})}),(0,t.jsx)(n.td,{children:`(none)`})]})]})]}),`
`,(0,t.jsx)(n.h2,{id:`modifying-game-actions`,children:`Modifying Game Actions`}),`
`,(0,t.jsxs)(n.p,{children:[`Use `,(0,t.jsx)(n.code,{children:`api.actions`}),` to change game state:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`// Money
api.actions.setMoney(5000000);
api.actions.addMoney(1000000, "grant");
api.actions.subtractMoney(500000, "maintenance");

// Game control
api.actions.setPause(true);
api.actions.setSpeed("fast"); // 'slow' | 'normal' | 'fast' | 'ultrafast'

// Ticket price
api.actions.setTicketPrice(5);
`})}),`
`,(0,t.jsx)(n.h2,{id:`modifying-game-constants`,children:`Modifying Game Constants`}),`
`,(0,t.jsx)(n.p,{children:`Tweak the game's rules:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`api.modifyConstants({
  STARTING_MONEY: 10000000000, // 10 billion
  DEFAULT_TICKET_COST: 5,
  CONSTRUCTION_COSTS: {
    TUNNEL: { SINGLE_MULTIPLIER: 0.5 }, // Half-price tunnels
  },
});
`})}),`
`,(0,t.jsx)(a,{children:(0,t.jsxs)(n.p,{children:[`Call `,(0,t.jsx)(n.code,{children:`modifyConstants()`}),` early — ideally before `,(0,t.jsx)(n.code,{children:`onMapReady`}),`. Constants affect the
entire game session.`]})}),`
`,(0,t.jsx)(n.h2,{id:`building-tracks-programatically`,children:`Building Tracks Programmatically`}),`
`,(0,t.jsxs)(n.p,{children:[`Use `,(0,t.jsx)(n.code,{children:`api.build`}),` to place and construct tracks via code:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`// Place blueprint tracks
const result = api.build.placeBlueprintTracks([
  {
    coords: [
      [-74.006, 40.7128],
      [-74.009, 40.715],
    ], // [lng, lat] pairs
    trackType: "heavy-metro",
    startElevation: -15, // underground
    endElevation: -15,
  },
]);

if (result.success) {
  console.log(\`Placed \${result.trackIds.length} tracks\`);

  // Build the blueprints (costs money)
  const buildResult = await api.build.buildBlueprints();
  console.log(\`Built \${buildResult.builtTrackCount} tracks, cost: $\${buildResult.totalCost}\`);
}
`})}),`
`,(0,t.jsx)(n.h2,{id:`creating-routes-and-adding-trains`,children:`Creating Routes and Adding Trains`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`// Create a new route
const route = api.build.createRoute({
  bullet: "A",
  color: "#0039A6",
  textColor: "#FFFFFF",
  shape: "circle",
  trainType: "heavy-metro",
});

if (route.success && route.route) {
  // Buy trains and add them to the route
  api.build.buyTrains(4, "heavy-metro");
  api.build.addTrainToRoute(route.route.id, 0); // Add at first station
}
`})}),`
`,(0,t.jsx)(n.h2,{id:`persistent-storage`,children:`Persistent Storage`}),`
`,(0,t.jsx)(r,{children:(0,t.jsx)(n.p,{children:`Mod-level storage is currently broken. You may use localStorage or game-level Electron storage as a workaround, but be aware that these are not sandboxed and can cause conflicts with other mods (or even with the game itself). Use at your own risk!`})}),`
`,(0,t.jsx)(n.p,{children:`Save mod data between sessions (desktop app only):`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-ts`,children:`// Save
await api.storage.set("highScore", 42);
await api.storage.set("settings", { sound: true, difficulty: "hard" });

// Load
const score = await api.storage.get("highScore", 0);
const settings = await api.storage.get("settings", {
  sound: true,
  difficulty: "normal",
});

// Delete
await api.storage.delete("highScore");

// List all keys
const keys = await api.storage.keys();
`})}),`
`,(0,t.jsx)(o,{children:(0,t.jsxs)(n.p,{children:[`Storage only works in the desktop (Electron) app. In the browser version, `,(0,t.jsx)(n.code,{children:`set`}),` does nothing
and `,(0,t.jsx)(n.code,{children:`get`}),` always returns the default value.`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};