Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __s0local0 = function (__s1param0) {
  function CoinmineBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CoinmineBuildingVO, __s1param0);
  CoinmineBuildingVO.prototype.getInfoTooltipLine2 = function () {
    if (this.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED) {
      return "";
    } else if (this.isoData.areaData.isMyArea) {
      if (this.isCharging) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_GoldMine_coinsToGo", [this.getRestLootAmount()]);
      } else if (this.isFull) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("rubymine_collect", [__dep_export_ClientConstTextIds.ClientConstTextIds.C1]);
      } else if (this.isEmpty) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("alert_coinmine_depleated_title");
      } else {
        return "";
      }
    } else {
      return "";
    }
  };
  CoinmineBuildingVO.prototype.createInfoPanelItems = function (__s14param0) {
    var __s14local0 = this.mineVO.amountPerCollect;
    var __s14local1 = this.mineVO.totalAmount;
    var __s14local2 = this.mineVO.waitingTime;
    __s14param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Coins_Cluster, "coinmine_infotab_totalamount", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s14local1, true), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s14param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Coins_Time, "coinmine_infotab_dailyamount", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s14local0), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s14param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Time, "mine_infotab_productiontime", new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__s14local2, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text, false, true)));
    __s14param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return CoinmineBuildingVO;
}(require("gge-module:export_AMineBuildingVO").AMineBuildingVO);
exports.CoinmineBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
