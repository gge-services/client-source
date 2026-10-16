Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_AEffectBuildingVO = require("gge-module:export_AEffectBuildingVO");
var __s0local0 = function (__s1param0) {
  function EstateBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EstateBuildingVO, __s1param0);
  Object.defineProperty(EstateBuildingVO.prototype, "usesLords", {
    get: function () {
      return true;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "usesLords").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  EstateBuildingVO.prototype.createInfoPanelItems = function (__s9param0) {
    __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Baron, "dialog_startAttack_availableBarons", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.barons), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      __s9param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DECOPOINTS));
    }
  };
  return EstateBuildingVO;
}(__dep_export_AEffectBuildingVO.AEffectBuildingVO);
exports.EstateBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
