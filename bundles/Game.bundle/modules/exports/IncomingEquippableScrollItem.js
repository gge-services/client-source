Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
var __s0local0 = function (__s1param0) {
  function IncomingEquippableScrollItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IncomingEquippableScrollItem, __s1param0);
  IncomingEquippableScrollItem.prototype.customFillItem = function () {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._disp.mc_equipmentHolder);
    if (this.incomingEquippableScrollItemVO.equippableVO instanceof __dep_export_BasicEquipmentVO.BasicEquipmentVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(this.incomingEquippableScrollItemVO.equippableVO, this._disp.mc_equipmentHolder, 60, 60);
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIconHitBG(this._disp.mc_equipmentHolder, 75, 75);
    } else {
      this._disp.mc_equipmentHolder.addChild(__dep_export_CastleGemRenderer.CastleGemRenderer.renderAsset(this.incomingEquippableScrollItemVO.equippableVO));
    }
    this._disp.mc_equipmentHolder.mouseChildren = false;
  };
  Object.defineProperty(IncomingEquippableScrollItem.prototype, "incomingEquippableScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IncomingEquippableScrollItem, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return IncomingEquippableScrollItem;
}(__dep_exact_9e901e8e2483a22f_2.ScrollItem);
exports.IncomingEquippableScrollItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
