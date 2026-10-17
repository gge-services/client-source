// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 693
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_1e9fa4b32c68f10c.js
// Original canonical SHA-256: a85074b8b224f42340a1027e2090d1db304e13cd453a0390e9c72a9759f618e3
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(90),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s45param0) {
    return __s45param0 >= 0;
  }),
  type: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s47param0) {
    return __s47param0 >= 0;
  }),
  browserString: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s49param0) {
    return __s49param0.length <= 255;
  }),
  start: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s51param0) {
    return __s51param0 >= 0 && __s51param0 <= 16777215;
  }),
  redirect: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s53param0) {
    return __s53param0 >= 0 && __s53param0 <= 16777215;
  }),
  appCache: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s55param0) {
    return __s55param0 >= 0 && __s55param0 <= 16777215;
  }),
  dnsTime: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s57param0) {
    return __s57param0 >= 0 && __s57param0 <= 16777215;
  }),
  tcp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s59param0) {
    return __s59param0 >= 0 && __s59param0 <= 16777215;
  }),
  requestTime: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s61param0) {
    return __s61param0 >= 0 && __s61param0 <= 16777215;
  }),
  responseTime: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s63param0) {
    return __s63param0 >= 0 && __s63param0 <= 16777215;
  }),
  processing: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s65param0) {
    return __s65param0 >= 0 && __s65param0 <= 16777215;
  }),
  load: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s67param0) {
    return __s67param0 >= 0 && __s67param0 <= 16777215;
  }),
  domContentLoad: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s69param0) {
    return __s69param0 >= 0 && __s69param0 <= 16777215;
  }),
  domInteractive: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s71param0) {
    return __s71param0 >= 0 && __s71param0 <= 16777215;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s73param0) {
    return __s73param0 >= 1 && __s73param0 <= 100;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s75param0) {
    return __s75param0 >= 0 && __s75param0 <= 1000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s77param0) {
    return __s77param0 >= 0 && __s77param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  customHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s79param0) {
    return __s79param0.length <= 32;
  }),
  country: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s81param0) {
    return __s81param0.length <= 2;
  }),
  subType: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s83param0) {
    return __s83param0 >= 0;
  }),
  caseId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s85param0) {
    return __s85param0 >= 0;
  }),
  testId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s87param0) {
    return __s87param0 >= 0;
  }),
  embeddedLoad: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s89param0) {
    return __s89param0 >= 0 && __s89param0 <= 16777215;
  }),
  visualCompleteness: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s91param0) {
    return __s91param0 >= 0 && __s91param0 <= 16777215;
  }),
  clickToLoaded: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s93param0) {
    return __s93param0 >= 0 && __s93param0 <= 16777215;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s95param0) {
    return __s95param0 >= 0 && __s95param0 <= 1000;
  })
}));
