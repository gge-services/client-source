Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AIsoDataObjectGroupSimpleList = require("gge-module:export_AIsoDataObjectGroupSimpleList");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoDataObjectGroupExpansion() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoDataObjectGroupExpansion, __s1param0);
  IsoDataObjectGroupExpansion.prototype.initObjects = function () {
    this.resetList();
    this.createExpansionObjects();
    if (this.list != null) {
      for (var __s5local0 = 0, __s5local1 = this.list; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          __s5local2.updateData();
        }
      }
    }
  };
  IsoDataObjectGroupExpansion.prototype.createExpansionObjects = function () {
    if (this.isoData.areaData.isMyArea && !this.isoData.areaData.isUnderConquerProcess) {
      var __s11local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__dep_export_ClientConstCastle.ClientConstCastle.EXTENSION_GROUND_WOD_ID, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
      var __s11local1 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__dep_export_ClientConstCastle.ClientConstCastle.START_GROUND_WOD_ID, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
      var __s11local2 = this.isoData.objects.groundObjects.startPoint;
      var __s11local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.groundObjects.expansionAmount + 1);
      var __s11local4 = __dep_exact_f855840627e6e145.int(__s11local2.x - __dep_export_ClientConstCastle.ClientConstCastle.EXPANSIONS_TO_EACHSIDE * __s11local0.width);
      var __s11local5 = __dep_exact_f855840627e6e145.int(__s11local2.y - __dep_export_ClientConstCastle.ClientConstCastle.EXPANSIONS_TO_EACHSIDE * __s11local0.width);
      var __s11local6 = __dep_exact_f855840627e6e145.int(__s11local2.x + __s11local1.width + __dep_export_ClientConstCastle.ClientConstCastle.EXPANSIONS_TO_EACHSIDE * __s11local0.width) + (__s11local3 >= 17 ? __s11local0.width : 0);
      var __s11local7 = __dep_exact_f855840627e6e145.int(__s11local2.x + __s11local1.width + __dep_export_ClientConstCastle.ClientConstCastle.EXPANSIONS_TO_EACHSIDE * __s11local0.width);
      __dep_exact_c549e43d1112dfff.getLogger("CastleGame").debug("startX: " + __s11local4 + "|  startY: " + __s11local5 + "  | endX: " + __s11local6 + " | endY: " + __s11local7);
      for (var __s11local8 = __s11local4; __s11local8 < __s11local6; __s11local8 += __dep_exact_f855840627e6e145.int(__s11local0.height)) {
        for (var __s11local9 = __s11local5; __s11local9 < __s11local7; __s11local9 += __dep_exact_f855840627e6e145.int(__s11local0.width)) {
          var __s11local10 = new __s0local0(__s11local8, __s11local9);
          var __s11local11 = new __s0local0(__s11local8, __s11local9 - 1);
          var __s11local12 = new __s0local0(__s11local8 + __s11local0.height - 1, __s11local9 - 1);
          var __s11local13 = new __s0local0(__s11local8, __s11local9 + __s11local0.width + 1);
          var __s11local14 = new __s0local0(__s11local8 + __s11local0.height - 1, __s11local9 + __s11local0.width + 1);
          if (!this.isoData.grid.isPointOnBuildingGround(__s11local10)) {
            if (this.isoData.grid.isPointOnBuildingGround(__s11local11) && this.isoData.grid.isPointOnBuildingGround(__s11local12) && !this.isoData.grid.isPointOnBuildingGround(__s11local13) && !this.isoData.grid.isPointOnBuildingGround(__s11local14)) {
              this.addExpansionObject(__s11local8, __s11local9, 1, __s11local0);
            } else if (!this.isoData.grid.isPointOnBuildingGround(__s11local11) && !this.isoData.grid.isPointOnBuildingGround(__s11local12) && this.isoData.grid.isPointOnBuildingGround(__s11local13) && this.isoData.grid.isPointOnBuildingGround(__s11local14)) {
              this.addExpansionObject(__s11local8, __s11local9, 3, __s11local0);
            } else if (this.isoData.grid.isPointOnBuildingGround(__s11local11) && this.isoData.grid.isPointOnBuildingGround(__s11local12) && this.isoData.grid.isPointOnBuildingGround(__s11local13) && this.isoData.grid.isPointOnBuildingGround(__s11local14)) {
              this.addExpansionObject(__s11local8, __s11local9, 3, __s11local0);
            }
          }
        }
      }
      for (__s11local9 = __s11local5; __s11local9 < __s11local7; __s11local9 += __dep_exact_f855840627e6e145.int(__s11local0.height)) {
        for (__s11local8 = __s11local4; __s11local8 < __s11local6; __s11local8 += __dep_exact_f855840627e6e145.int(__s11local0.width)) {
          __s11local10 = new __s0local0(__s11local8, __s11local9);
          __s11local11 = new __s0local0(__s11local8 - 1, __s11local9);
          __s11local12 = new __s0local0(__s11local8 - 1, __s11local9 + __s11local0.height - 1);
          __s11local14 = new __s0local0(__s11local8 + __s11local0.width + 1, __s11local9);
          __s11local13 = new __s0local0(__s11local8 + __s11local0.width + 1, __s11local9 + __s11local0.height - 1);
          if (!this.isoData.grid.isPointOnBuildingGround(__s11local10)) {
            if (this.isoData.grid.isPointOnBuildingGround(__s11local11) && this.isoData.grid.isPointOnBuildingGround(__s11local12) && !this.isoData.grid.isPointOnBuildingGround(__s11local13) && !this.isoData.grid.isPointOnBuildingGround(__s11local14)) {
              this.addExpansionObject(__s11local8, __s11local9, 0, __s11local0);
            } else if (!this.isoData.grid.isPointOnBuildingGround(__s11local11) && !this.isoData.grid.isPointOnBuildingGround(__s11local12) && this.isoData.grid.isPointOnBuildingGround(__s11local13) && this.isoData.grid.isPointOnBuildingGround(__s11local14)) {
              this.addExpansionObject(__s11local8, __s11local9, 2, __s11local0);
            } else if (this.isoData.grid.isPointOnBuildingGround(__s11local11) && this.isoData.grid.isPointOnBuildingGround(__s11local12) && this.isoData.grid.isPointOnBuildingGround(__s11local13) && this.isoData.grid.isPointOnBuildingGround(__s11local14)) {
              this.addExpansionObject(__s11local8, __s11local9, 2, __s11local0);
            }
          }
        }
      }
    }
  };
  IsoDataObjectGroupExpansion.prototype.addExpansionObject = function (__s30param0, __s30param1, __s30param2, __s30param3) {
    var __s30local0 = new __dep_export_CastleExpansionVO.CastleExpansionVO();
    __s30local0.init(this.isoData);
    __s30local0.width = __s30param3.width;
    __s30local0.height = __s30param3.height;
    __s30local0.x = __s30param0;
    __s30local0.y = __s30param1;
    __dep_exact_c549e43d1112dfff.getLogger("CastleGame").debug("Expansion:  x: " + __s30param0 + "|  y: " + __s30param1 + "  | width: " + __s30param3.width + " | height: " + __s30param3.height + " | rotation: " + __s30param2);
    __s30local0.rotation = __s30param2;
    this.list.push(__s30local0);
  };
  return IsoDataObjectGroupExpansion;
}(__dep_export_AIsoDataObjectGroupSimpleList.AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupExpansion = __s0local1;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleExpansionVO = require("gge-module:export_CastleExpansionVO");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
