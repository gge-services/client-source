Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_AEffectBuildingVO = require("gge-module:export_AEffectBuildingVO");
var __s0local0 = function (__s1param0) {
  function MilitarycampBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MilitarycampBuildingVO, __s1param0);
  Object.defineProperty(MilitarycampBuildingVO.prototype, "usesLords", {
    get: function () {
      return true;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "usesLords").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  MilitarycampBuildingVO.prototype.createInfoPanelItems = function (__s9param0) {
    __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Knights, "panel_multiinfo_generalLimit", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.commanders));
    if (this.decoPoints > 0) {
      __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  MilitarycampBuildingVO.prototype.createInfoDialogItems = function (__s12param0) {
    __s12param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Knights, "panel_multiinfo_generalLimit", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.commanders), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      __s12param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return MilitarycampBuildingVO;
}(__dep_export_AEffectBuildingVO.AEffectBuildingVO);
exports.MilitarycampBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
