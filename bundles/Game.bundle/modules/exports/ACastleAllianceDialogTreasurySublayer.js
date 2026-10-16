Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function ACastleAllianceDialogTreasurySublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleAllianceDialogTreasurySublayer, __s1param0);
  ACastleAllianceDialogTreasurySublayer.prototype.init = function () {};
  ACastleAllianceDialogTreasurySublayer.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.disp.visible = true;
    this.update();
  };
  ACastleAllianceDialogTreasurySublayer.prototype.onHide = function () {
    this.disp.visible = false;
    __s1param0.prototype.onHide.call(this);
  };
  ACastleAllianceDialogTreasurySublayer.prototype.update = function () {};
  return ACastleAllianceDialogTreasurySublayer;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.ACastleAllianceDialogTreasurySublayer = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
