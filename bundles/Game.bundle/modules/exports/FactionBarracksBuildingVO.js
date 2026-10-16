Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BarracksBuildingVO = require("gge-module:export_BarracksBuildingVO");
var __s0local0 = function (__s1param0) {
  function FactionBarracksBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionBarracksBuildingVO, __s1param0);
  Object.defineProperty(FactionBarracksBuildingVO.prototype, "unitCategory", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BarracksBuildingVO.BarracksBuildingVO.prototype, "unitCategory").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionBarracksBuildingVO.prototype, "isProductive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.militaryData.getPackageListByCategory(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES).slotsInUse != 0;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BarracksBuildingVO.BarracksBuildingVO.prototype, "isProductive").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionBarracksBuildingVO.prototype, "recruitCategory", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BarracksBuildingVO.BarracksBuildingVO.prototype, "recruitCategory").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionBarracksBuildingVO.prototype.createInfoPanelItems = function (__s17param0) {
    __s17param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Berimond_Auxiliaries_Unit_Plus, "dialog_factionAuxiliaries_slotCapacity_tooltip", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.stackSize), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s17param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  FactionBarracksBuildingVO.prototype.createInfoDialogItems = function (__s19param0) {
    __s19param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Berimond_Auxiliaries_Unit_Plus, "dialog_factionAuxiliaries_slotCapacity_tooltip", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.stackSize), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s19param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return FactionBarracksBuildingVO;
}(__dep_export_BarracksBuildingVO.BarracksBuildingVO);
exports.FactionBarracksBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
