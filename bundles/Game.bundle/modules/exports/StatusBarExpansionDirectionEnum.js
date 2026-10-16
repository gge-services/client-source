Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function StatusBarExpansionDirectionEnum(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusBarExpansionDirectionEnum, __s1param0);
  StatusBarExpansionDirectionEnum.__initialize_static_members = function () {
    StatusBarExpansionDirectionEnum.EXPAND_LEFT = new StatusBarExpansionDirectionEnum("expandLeft");
    StatusBarExpansionDirectionEnum.EXPAND_RIGHT = new StatusBarExpansionDirectionEnum("expandRight");
    StatusBarExpansionDirectionEnum.EXPAND_UP = new StatusBarExpansionDirectionEnum("expandUp");
    StatusBarExpansionDirectionEnum.EXPAND_DOWN = new StatusBarExpansionDirectionEnum("expandDown");
  };
  return StatusBarExpansionDirectionEnum;
}(__dep_exact_9e901e8e2483a22f.BasicEnum);
exports.StatusBarExpansionDirectionEnum = __s0local0;
__s0local0.__initialize_static_members();
