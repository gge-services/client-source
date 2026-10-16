Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function CastleResetMonumentDialogProperties() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResetMonumentDialogProperties, __s1param0);
  Object.defineProperty(CastleResetMonumentDialogProperties.prototype, "areaType", {
    get: function () {
      return __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_MONUMENT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResetMonumentDialogProperties.prototype, "titleTextID", {
    get: function () {
      return "dialog_monument_resetMessage_title";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResetMonumentDialogProperties.prototype, "copyTextID", {
    get: function () {
      return "dialog_monument_resetMessage_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResetMonumentDialogProperties.prototype, "helpTextID", {
    get: function () {
      return "help_monument_resetMessage";
    },
    enumerable: true,
    configurable: true
  });
  return CastleResetMonumentDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleResetMonumentDialogProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleResetLandmarkDialogProperties");
