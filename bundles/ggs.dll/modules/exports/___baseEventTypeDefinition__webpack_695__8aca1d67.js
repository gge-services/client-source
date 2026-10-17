// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 695
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_f8e61ad0d08b0431.js
// Original canonical SHA-256: 7a4f1e9336c41bfe57fee9f0a382be68a792627c7c0154260b5603d73e73b2da
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(94),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  sessionId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  sessionTime: __dep_exact_f5b02bbe07c08b29.Number,
  inGameState: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s5param0) {
    return __s5param0.length <= 64;
  }),
  level: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0 && __s7param0 <= 256;
  }),
  minFps: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 0 && __s9param0 <= 256;
  }),
  maxFps: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0 && __s11param0 <= 256;
  }),
  fps: __dep_exact_f5b02bbe07c08b29.Always,
  measurementDuration: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0 && __s13param0 <= 65535;
  }),
  deviceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 0 && __s15param0 <= 50;
  }),
  animations: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s17param0) {
    return __s17param0.length <= 64;
  }),
  storeId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= 0 && __s19param0 <= 50;
  }),
  connectionType: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s21param0) {
    return __s21param0.length <= 10;
  }),
  memoryUsage: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= 0 && __s23param0 <= 65536;
  }),
  buildVersion: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= 0 && __s25param0 <= 4294967295;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  deviceType: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s27param0) {
    return __s27param0.length <= 255;
  })
}));
