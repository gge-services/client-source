// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 19
// Export: create; preserved source: modules/webpack/exports/ValidationError.js
// Original canonical SHA-256: d4714856928b57005eed485d9efbc86e6f099499b4a2673542e8c41b730fcadc
exports.create = function create(__s12param0, __s12param1) {
  __s12param1.check = __s12param0;
  __s12param1.validate = validate;
  __s12param1.guard = function guard(__s14param0) {
    return validate(__s14param0).success;
  };
  __s12param1.Or = function __s16local0(__s16param0) {
    return __dep_exact_f5b02bbe07c08b29.Union(__s12param1, __s16param0);
  };
  __s12param1.And = function And(__s18param0) {
    return __dep_exact_f5b02bbe07c08b29.Intersect(__s12param1, __s18param0);
  };
  __s12param1.withConstraint = function withConstraint(__s20param0, __s20param1) {
    return __dep_exact_f5b02bbe07c08b29.Constraint(__s12param1, __s20param0, __s20param1);
  };
  __s12param1.reflect = __s12param1;
  __s12param1.toString = function () {
    return "Runtype<" + __dep_exact_74a46a23c18f1e11.default(__s12param1) + ">";
  };
  return __s12param1;
  function validate(__s24param0) {
    try {
      __s12param0(__s24param0);
      return {
        success: true,
        value: __s24param0
      };
    } catch (__s27local0) {
      return {
        success: false,
        message: __s27local0.message
      };
    }
  }
};
