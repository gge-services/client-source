Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AMovementFilterStrategy = require("gge-module:export_AMovementFilterStrategy");
var __s0local0 = function (__s1param0) {
  function FilterAll() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FilterAll, __s1param0);
  FilterAll.prototype.filterFunction = function (__s5param0, __s5param1, __s5param2) {
    return true;
  };
  Object.defineProperty(FilterAll.prototype, "name", {
    get: function () {
      return FilterAll.NAME;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMovementFilterStrategy.AMovementFilterStrategy.prototype, "name").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  FilterAll.__initialize_static_members = function () {
    FilterAll.NAME = "FilterAll";
  };
  return FilterAll;
}(__dep_export_AMovementFilterStrategy.AMovementFilterStrategy);
exports.FilterAll = __s0local0;
__s0local0.__initialize_static_members();
