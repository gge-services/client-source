Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function UnitBaseLocationEnum(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitBaseLocationEnum, __s1param0);
  UnitBaseLocationEnum.__initialize_static_members = function () {
    UnitBaseLocationEnum.HOME_CASTLE = new UnitBaseLocationEnum("home_castle");
    UnitBaseLocationEnum.KINGDOM_CASTLE = new UnitBaseLocationEnum("kingdom_castle");
    UnitBaseLocationEnum.CONTROLLER = new UnitBaseLocationEnum("controller");
    UnitBaseLocationEnum.DEFAULT = UnitBaseLocationEnum.CONTROLLER;
  };
  return UnitBaseLocationEnum;
}(__dep_exact_9e901e8e2483a22f.BasicEnum);
exports.UnitBaseLocationEnum = __s0local0;
__s0local0.__initialize_static_members();
