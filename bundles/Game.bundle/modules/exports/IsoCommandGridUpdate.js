Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoCommandGridUpdate(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandGridUpdate, __s1param0);
  IsoCommandGridUpdate.prototype.execute = function () {
    this.grid.updateCompleteMap();
  };
  return IsoCommandGridUpdate;
}(require("gge-module:export_AIsoCommandModel").AIsoCommandModel);
exports.IsoCommandGridUpdate = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
