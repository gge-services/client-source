Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __s0local0 = function (__s1param0) {
  function PlaceholderMapobjectVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PlaceholderMapobjectVO, __s1param0);
  PlaceholderMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    this.kingdomID = this.kingdomID > -1 ? this.kingdomID : __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID;
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s5local1 = this.getBackgroundClip();
    __s5local1.x -= __s5local1.asDisplayObject().width / 2 + 4;
    __s5local1.y -= 30;
    __s5local0.addItem(__s5local1);
    return __s5local0;
  };
  PlaceholderMapobjectVO.prototype.parseAreaInfo = function (__s7param0) {
    this._areaType = __s7param0[0];
    this._absAreaPosX = __s7param0[1];
    this._absAreaPosY = __s7param0[2];
    this._isVisibleOnMap = false;
  };
  Object.defineProperty(PlaceholderMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("kingdom_emptyTile");
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return PlaceholderMapobjectVO;
}(require("gge-module:export_ContainerBuilderMapobjectVO").ContainerBuilderMapobjectVO);
exports.PlaceholderMapobjectVO = __s0local0;
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
