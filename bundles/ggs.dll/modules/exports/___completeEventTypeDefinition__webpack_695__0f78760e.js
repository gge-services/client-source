// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 695
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_f8e61ad0d08b0431.js
// Original canonical SHA-256: 7a4f1e9336c41bfe57fee9f0a382be68a792627c7c0154260b5603d73e73b2da
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(94),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s29param0) {
    return __s29param0 >= 0;
  }),
  sessionId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s31param0) {
    return __s31param0 >= 0;
  }),
  sessionTime: __dep_exact_f5b02bbe07c08b29.Number,
  inGameState: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s33param0) {
    return __s33param0.length <= 64;
  }),
  level: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s35param0) {
    return __s35param0 >= 0 && __s35param0 <= 256;
  }),
  minFps: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s37param0) {
    return __s37param0 >= 0 && __s37param0 <= 256;
  }),
  maxFps: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s39param0) {
    return __s39param0 >= 0 && __s39param0 <= 256;
  }),
  fps: __dep_exact_f5b02bbe07c08b29.Always,
  measurementDuration: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s41param0) {
    return __s41param0 >= 0 && __s41param0 <= 65535;
  }),
  deviceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s43param0) {
    return __s43param0 >= 0 && __s43param0 <= 50;
  }),
  animations: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s45param0) {
    return __s45param0.length <= 64;
  }),
  storeId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s47param0) {
    return __s47param0 >= 0 && __s47param0 <= 50;
  }),
  connectionType: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s49param0) {
    return __s49param0.length <= 10;
  }),
  memoryUsage: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s51param0) {
    return __s51param0 >= 0 && __s51param0 <= 65536;
  }),
  buildVersion: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s53param0) {
    return __s53param0 >= 0 && __s53param0 <= 4294967295;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s55param0) {
    return __s55param0 >= 1 && __s55param0 <= 100;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s57param0) {
    return __s57param0 >= 0 && __s57param0 <= 1000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s59param0) {
    return __s59param0 >= 0 && __s59param0 <= 1000;
  }),
  lang: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s61param0) {
    return __s61param0.length <= 5;
  }),
  accountId: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s63param0) {
    return __s63param0.length <= 30;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  deviceType: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s65param0) {
    return __s65param0.length <= 255;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s67param0) {
    return __s67param0 >= 0;
  })
}));
