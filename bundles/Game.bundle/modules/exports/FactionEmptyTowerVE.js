Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __dep_export_ATowerVE = require("gge-module:export_ATowerVE");
var __s0local0 = function (__s1param0) {
  function FactionEmptyTowerVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionEmptyTowerVE, __s1param0);
  FactionEmptyTowerVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName));
  };
  Object.defineProperty(FactionEmptyTowerVE.prototype, "assetClipName", {
    get: function () {
      return "FactionLookout_TowerCorner_Level" + this.towerVO.isoData.objects.defences.currentWallLevel;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ATowerVE.ATowerVE.prototype, "assetClipName").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEmptyTowerVE.prototype, "assetFileName", {
    get: function () {
      return "Event" + __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION + "Lib";
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ATowerVE.ATowerVE.prototype, "assetFileName").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionEmptyTowerVE.prototype.createAdditionalClips = function () {
    __s1param0.prototype.createAdditionalClips.call(this);
    this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.CAMP_FIRE);
  };
  return FactionEmptyTowerVE;
}(__dep_export_ATowerVE.ATowerVE);
exports.FactionEmptyTowerVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
