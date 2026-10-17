// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 691
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_d3b8c425ff4c876e.js
// Original canonical SHA-256: 255102960d647e24084a45e0b9e7efb475054b506d76103b8b6cfb88f638921d
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(67),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 1;
  }),
  sessionId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 1;
  }),
  clickSourceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2)
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  client_timestamp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0;
  }),
  storeId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 0 && __s9param0 <= 50;
  }),
  deviceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0 && __s11param0 <= 50;
  }),
  connectionType: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s13param0) {
    return __s13param0.length <= 10;
  })
}));
