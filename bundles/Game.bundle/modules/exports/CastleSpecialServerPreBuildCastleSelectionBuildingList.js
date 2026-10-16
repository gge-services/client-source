Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = function () {
  function CastleSpecialServerPreBuildCastleSelectionBuildingList(__s3param0) {
    this.disp = __s3param0;
  }
  CastleSpecialServerPreBuildCastleSelectionBuildingList.prototype.fillWithData = function (__s5param0) {
    this._data = __s5param0;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_items);
    var __s5local0 = 0;
    for (var __s5local1 = 0; __s5local1 < __s5param0.length; __s5local1++) {
      if (!(__s5param0[__s5local1].length <= 0)) {
        var __s5local2 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleSpecialServerPreBuildCastleSelectionShopCategoryItem"))();
        this.fillCategory(__s5local2, __s5local1);
        this.disp.mc_items.addChild(__s5local2);
        __s5local2.y = __s5local0;
        __s5local0 += __dep_exact_f855840627e6e145.int(__s5local2.height);
      }
    }
  };
  CastleSpecialServerPreBuildCastleSelectionBuildingList.prototype.fillCategory = function (__s10param0, __s10param1) {
    CastleSpecialServerPreBuildCastleSelectionBuildingList.textFieldManager.registerTextField(__s10param0.txt_title2, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30_2.Localize.text(this.getTitleTextID(__s10param1)))));
    var __s10local0 = this._data[__s10param1];
    __s10local0.sort(this.bindFunction(this.sortByName));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s10param0.mc_items);
    var __s10local1 = 0;
    for (var __s10local2 = 0; __s10local2 < __s10local0.length; __s10local2++) {
      var __s10local3 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleSpecialServerPreBuildCastleSelectionBuildingItem"))();
      this.fillItem(__s10local3, __s10local0[__s10local2]);
      __s10param0.mc_items.addChild(__s10local3);
      __s10local3.y = __s10local1;
      __s10local1 += __dep_exact_f855840627e6e145.int(__s10local3.height);
    }
  };
  CastleSpecialServerPreBuildCastleSelectionBuildingList.prototype.getTitleTextID = function (__s14param0) {
    if (this._data[__s14param0].length <= 0) {
      return "";
    }
    for (var __s14local0, __s14local1 = 0; __s14local1 < this._data[__s14param0].length && (__s14local0 = this._data[__s14param0][__s14local1].buildingVO.buildingGroundType) == ""; __s14local1++);
    switch (__s14local0) {
      case __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL:
        return "panel_deco_civil";
      case __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY:
        return "military";
      case __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE:
        return "Defence";
      case __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DECO:
        return "panel_deco_deco";
    }
    return "";
  };
  CastleSpecialServerPreBuildCastleSelectionBuildingList.prototype.sortByName = function (__s19param0, __s19param1) {
    if (__dep_exact_92d05af59ee2ff30_2.Localize.text(__s19param0.buildingVO.getNameString()) > __dep_exact_92d05af59ee2ff30_2.Localize.text(__s19param1.buildingVO.getNameString())) {
      return 1;
    } else if (__dep_exact_92d05af59ee2ff30_2.Localize.text(__s19param1.buildingVO.getNameString()) > __dep_exact_92d05af59ee2ff30_2.Localize.text(__s19param0.buildingVO.getNameString())) {
      return -1;
    } else {
      return 0;
    }
  };
  CastleSpecialServerPreBuildCastleSelectionBuildingList.prototype.fillItem = function (__s24param0, __s24param1) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s24param0.mc_icon);
    var __s24local0 = __dep_exact_92d05af59ee2ff30_2.Localize.text(__s24param1.buildingVO.getNameString()) + " " + __dep_exact_92d05af59ee2ff30_2.Localize.text("building_level", [__s24param1.buildingVO.level]);
    var __s24local1 = __s24param1.buildingVO.costC2 > 0;
    CastleSpecialServerPreBuildCastleSelectionBuildingList.textFieldManager.registerTextField(__s24param0.txt_premium, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_amount_reward", [__s24param1.amount, __s24local0])).visible = __s24local1;
    CastleSpecialServerPreBuildCastleSelectionBuildingList.textFieldManager.registerTextField(__s24param0.txt_normal, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_amount_reward", [__s24param1.amount, __s24local0])).visible = !__s24local1;
    var __s24local2 = __s24param1.buildingVO.getViewClass();
    if (__s24local2) {
      var __s24local3 = new __s24local2();
      if (__s24local3) {
        __s24local3.init(__s24param1.buildingVO);
      }
      if (__s24local3.buildingGroundIconClass) {
        var __s24local4 = new Library.CastleInterfaceElements.BuildingGroundBg();
        __s24param0.mc_icon.addChild(__s24local4);
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s24local4, 22, 22);
        var __s24local5 = new __s24local3.buildingGroundIconClass();
        __s24param0.mc_icon.addChild(__s24local5);
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s24local5, 16, 16);
      }
    }
  };
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionBuildingList, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpecialServerPreBuildCastleSelectionBuildingList;
}();
exports.CastleSpecialServerPreBuildCastleSelectionBuildingList = __s0local0;
