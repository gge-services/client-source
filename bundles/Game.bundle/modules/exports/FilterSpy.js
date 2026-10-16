Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AMovementFilterStrategy = require("gge-module:export_AMovementFilterStrategy");
var __s0local0 = function (__s1param0) {
  function FilterSpy() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FilterSpy, __s1param0);
  FilterSpy.prototype.filterFunction = function (__s5param0, __s5param1, __s5param2) {
    return __dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "SpyMapmovementVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "PlaguemonkMapmovementVO");
  };
  Object.defineProperty(FilterSpy.prototype, "name", {
    get: function () {
      return FilterSpy.NAME;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMovementFilterStrategy.AMovementFilterStrategy.prototype, "name").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  FilterSpy.__initialize_static_members = function () {
    FilterSpy.NAME = "FilterSpy";
  };
  return FilterSpy;
}(__dep_export_AMovementFilterStrategy.AMovementFilterStrategy);
exports.FilterSpy = __s0local0;
__s0local0.__initialize_static_members();
