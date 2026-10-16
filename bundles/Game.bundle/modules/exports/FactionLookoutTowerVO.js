Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ATowerVO = require("gge-module:export_ATowerVO");
var __s0local0 = function (__s1param0) {
  function FactionLookoutTowerVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionLookoutTowerVO, __s1param0);
  FactionLookoutTowerVO.prototype.getShopIconURL = function (__s5param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Event3Lib");
  };
  Object.defineProperty(FactionLookoutTowerVO.prototype, "isSelectionEnabled", {
    get: function () {
      return true;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ATowerVO.ATowerVO.prototype, "isSelectionEnabled").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionLookoutTowerVO.prototype.createInfoPanelItems = function (__s11param0) {
    __s11param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_DefendingTroops, "unitCapacity", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [this.unitWallCount]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      __s11param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "protection_tt", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return FactionLookoutTowerVO;
}(__dep_export_ATowerVO.ATowerVO);
exports.FactionLookoutTowerVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
