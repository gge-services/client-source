Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function CastleSlimModel() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSlimModel, __s1param0);
  Object.defineProperty(CastleSlimModel, "networkCookie", {
    set: function (__s5param0) {
      __dep_exact_9e901e8e2483a22f.BasicModel._networkCookie = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSlimModel;
}(__dep_exact_9e901e8e2483a22f.BasicModel);
exports.CastleSlimModel = __s0local0;
