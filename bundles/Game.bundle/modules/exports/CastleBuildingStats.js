Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function CastleBuildingStats(__s3param0, __s3param1, __s3param2 = 7) {
    this.SPECIAL_LAYOUT_START_POSITION = 7;
    this.useSpecialLayout = false;
    this.SPECIAL_LAYOUT_START_POSITION = __s3param2;
    this._infoLayer = __s3param0;
    this.posMap = __s3param1;
  }
  CastleBuildingStats.prototype.showBuildingInfo = function (__s5param0, __s5param1) {
    this.cleanUpDisp();
    var __s5local0 = __s5param1.items;
    if (__s5local0.length != 0) {
      var __s5local1;
      var __s5local2;
      var __s5local3 = this.getPanelItemClass(__s5local0.length, __s5param0);
      var __s5local4 = this.getItemPosition(__s5local0.length);
      for (var __s5local5 = 0; __s5local5 < __s5local0.length; __s5local5++) {
        __s5local1 = __s5local0[__s5local5];
        (__s5local2 = new __s5local3()).x = __s5local4[__s5local5 * 2];
        __s5local2.y = __s5local4[__s5local5 * 2 + 1];
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.replaceMovieClip(__s5local2.icon_holder, __s5local1.iconClass);
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s5local2.icon_holder.children[0], 20, 20, -1, false);
        __s5local2.toolTipText = __s5local1.tooltipText;
        __s5local2.mouseChildren = false;
        var __s5local6 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5local2.txt_info, __s5local1.textVO);
        __s5local6.color = __s5local1.textColor;
        __s5local6.autoFitToBounds = true;
        __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(__s5local6, __s5local1.useSubscription, 15, new __s0local0(-3, -3), true, __s5local1.textColor);
        this._infoLayer.addChild(__s5local2);
      }
    }
  };
  CastleBuildingStats.prototype.getItemPosition = function (__s10param0) {
    if (this.useSpecialLayout) {
      __s10param0 += this.SPECIAL_LAYOUT_START_POSITION;
    }
    return this.posMap.get(__s10param0);
  };
  CastleBuildingStats.prototype.getPanelItemClass = function (__s13param0, __s13param1) {
    this.useSpecialLayout = false;
    if (__s13param0 == 1) {
      return Library.CastleInterfaceElements.MultiInfoPanelItemBig;
    } else if (__s13param0 == 2 && this.foundProductionVOInBuildingsWithSpecialLayout(__s13param1)) {
      this.useSpecialLayout = true;
      return Library.CastleInterfaceElements.MultiInfoPanelItemBig;
    } else {
      return Library.CastleInterfaceElements.MultiInfoPanelItem;
    }
  };
  CastleBuildingStats.prototype.foundProductionVOInBuildingsWithSpecialLayout = function (__s18param0) {
    if (CastleBuildingStats.BUILDINGS_WITH_SPECIAL_LAYOUT != null) {
      for (var __s18local0 = 0, __s18local1 = CastleBuildingStats.BUILDINGS_WITH_SPECIAL_LAYOUT; __s18local0 < __s18local1.length; __s18local0++) {
        if (__s18local1[__s18local0] !== undefined && __dep_exact_81dacdf05bd32292.instanceOfClass(__s18param0, "specialBuildingClass")) {
          return true;
        }
      }
    }
    return false;
  };
  CastleBuildingStats.prototype.cleanUpDisp = function () {
    for (var __s24local0 = __dep_exact_f855840627e6e145.int(this._infoLayer.numChildren) - 1; __s24local0 >= 0; __s24local0--) {
      var __s24local1 = this._infoLayer.getChildAt(__s24local0);
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s24local1, "MultiInfoPanelItem") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s24local1, "MultiInfoPanelItemBig")) {
        this._infoLayer.removeChild(__s24local1);
        __s24local1 = null;
      }
    }
  };
  Object.defineProperty(CastleBuildingStats.prototype, "textFieldmanager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleBuildingStats.__initialize_static_members = function () {
    CastleBuildingStats.BUILDINGS_WITH_SPECIAL_LAYOUT = [__dep_export_StrongholdBuildingVO.StrongholdBuildingVO];
  };
  return CastleBuildingStats;
}();
exports.CastleBuildingStats = __s0local1;
var __dep_export_StrongholdBuildingVO = require("gge-module:export_StrongholdBuildingVO");
__s0local1.__initialize_static_members();
