Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function UnknownMapobjectVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnknownMapobjectVO, __s1param0);
  UnknownMapobjectVO.prototype.parseAreaInfo = function (__s5param0) {
    this._absAreaPosX = __s5param0[0];
    this._absAreaPosY = __s5param0[1];
    this.kingdomID = __s5param0[2];
  };
  return UnknownMapobjectVO;
}(require("gge-module:export_InteractiveMapobjectVO").InteractiveMapobjectVO);
exports.UnknownMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
