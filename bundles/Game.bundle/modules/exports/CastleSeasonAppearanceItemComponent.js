Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleArrayHelper = require("gge-module:export_CastleArrayHelper");
var __dep_export_BackGroundAppearanceItem = require("gge-module:export_BackGroundAppearanceItem");
var __dep_export_DecoColumnAppearanceItem = require("gge-module:export_DecoColumnAppearanceItem");
var __dep_export_WallAppearanceItem = require("gge-module:export_WallAppearanceItem");
var __s0local0 = function () {
  function CastleSeasonAppearanceItemComponent() {}
  CastleSeasonAppearanceItemComponent.prototype.initComponent = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = __s5param0.tMapNodeVOs;
    this._appearanceItems = [];
    this._walls = [];
    for (var __s5local1 = 0; __s5local1 < 10; __s5local1++) {
      if (__s5param2["deco_column_" + __s5local1]) {
        __s5param2["deco_column_" + __s5local1].visible = false;
      }
    }
    for (var __s5local2 = 0; __s5local2 < __s5local0.length; __s5local2++) {
      var __s5local3 = __s5local0[__s5local2];
      var __s5local4 = __s5param2["bg_node_" + __s5local3.pos];
      var __s5local5 = __s5param2["deco_column_" + __s5local3.columnOnMap];
      if (__s5local4) {
        this._appearanceItems.push(new __dep_export_BackGroundAppearanceItem.BackGroundAppearanceItem(__s5local4, __s5local3));
      }
      if (__s5local5) {
        this._appearanceItems.push(new __dep_export_DecoColumnAppearanceItem.DecoColumnAppearanceItem(__s5local5, __s5local3));
      }
    }
    var __s5local6 = __s5param2.walls_container;
    if (__s5local6) {
      for (var __s5local7 = 0; __s5local7 < __s5local6.numChildren; __s5local7++) {
        var __s5local8 = __s5local6.getChildAt(__s5local7);
        if (__s5local8) {
          var __s5local9 = __s5local8.name.substr(5).split("_");
          var __s5local10 = __dep_export_CastleArrayHelper.CastleArrayHelper.toIntVector(__s5local9);
          var __s5local11 = new __dep_export_WallAppearanceItem.WallAppearanceItem(__s5local8, __s5local10);
          __s5local11.updateVisibility(__s5param0.tMapNodeVOs);
          this._walls.push(__s5local11);
        }
      }
    }
  };
  CastleSeasonAppearanceItemComponent.prototype.updateComponent = function (__s18param0) {
    if (this._appearanceItems && __s18param0) {
      var __s18local0 = 0;
      for (__s18local0 = 0; __s18local0 < this._appearanceItems.length; __s18local0++) {
        var __s18local1 = __dep_exact_f855840627e6e145.int(this._appearanceItems[__s18local0].getNodeVO().nodeID);
        var __s18local2 = __s18param0.getNodeById(__s18local1);
        this._appearanceItems[__s18local0].updateVO(__s18local2);
      }
      for (__s18local0 = 0; __s18local0 < this._walls.length; __s18local0++) {
        this._walls[__s18local0].updateVisibility(__s18param0.tMapNodeVOs);
      }
    }
  };
  CastleSeasonAppearanceItemComponent.prototype.destroy = function () {
    if (this._appearanceItems) {
      if (this._appearanceItems != null) {
        for (var __s25local0 = 0, __s25local1 = this._appearanceItems; __s25local0 < __s25local1.length; __s25local0++) {
          var __s25local2 = __s25local1[__s25local0];
          if (__s25local2 !== undefined) {
            __s25local2.dispose();
            this._appearanceItems.splice(this._appearanceItems.indexOf(__s25local2), 1);
          }
        }
      }
      this._appearanceItems = null;
    }
  };
  return CastleSeasonAppearanceItemComponent;
}();
exports.CastleSeasonAppearanceItemComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureUpdateComponent");
