Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function DefaultDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DefaultDetailView, __s1param0);
  DefaultDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_" + this._kingdomVO.kingdomName;
  };
  DefaultDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
  };
  return DefaultDetailView;
}(require("gge-module:export_FightDetailView").FightDetailView);
exports.DefaultDetailView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightDetailView");
