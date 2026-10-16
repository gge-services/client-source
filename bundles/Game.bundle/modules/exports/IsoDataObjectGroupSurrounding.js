Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoDataObjectGroupSurrounding() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoDataObjectGroupSurrounding, __s1param0);
  IsoDataObjectGroupSurrounding.prototype.initObjects = function () {
    var __s5local0 = new __dep_export_IsoGeneratorSurroundings.IsoGeneratorSurroundings();
    this._list = __s5local0.build();
    if (this.list != null) {
      for (var __s5local1 = 0, __s5local2 = this.list; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local3, "AIsoObjectVO")) {
          var __s5local4 = __s5local3;
          __s5local4.init(this.isoData);
          __s5local4.updateData();
        }
      }
    }
    this.isoData.objects.invalidateCompleteObjectsList();
  };
  IsoDataObjectGroupSurrounding.prototype.getStoneField = function () {
    return this.getSurroundingByClass(__dep_export_StoneResourceFieldVO.StoneResourceFieldVO);
  };
  IsoDataObjectGroupSurrounding.prototype.getWoodField = function () {
    return this.getSurroundingByClass(__dep_export_WoodResourceFieldVO.WoodResourceFieldVO);
  };
  IsoDataObjectGroupSurrounding.prototype.getFoodField = function () {
    return this.getSurroundingByClass(__dep_export_FoodResourceFieldVO.FoodResourceFieldVO);
  };
  IsoDataObjectGroupSurrounding.prototype.getSurroundingByClass = function (__s17param0) {
    if (this.list != null) {
      for (var __s17local0 = 0, __s17local1 = this.list; __s17local0 < __s17local1.length; __s17local0++) {
        var __s17local2 = __s17local1[__s17local0];
        if (__s17local2 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s17local2, __dep_exact_81dacdf05bd32292.getQualifiedClassName(__s17param0))) {
          return __s17local2;
        }
      }
    }
  };
  IsoDataObjectGroupSurrounding.prototype.getResourceCarts = function () {
    var __s23local0 = [];
    if (this.list != null) {
      for (var __s23local1 = 0, __s23local2 = this.list; __s23local1 < __s23local2.length; __s23local1++) {
        var __s23local3 = __s23local2[__s23local1];
        if (__s23local3 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s23local3, "ResourceCartSurroundingsVO")) {
          __s23local0.push(__s23local3);
        }
      }
    }
    return __s23local0;
  };
  return IsoDataObjectGroupSurrounding;
}(require("gge-module:export_AIsoDataObjectGroupSimpleList").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupSurrounding = __s0local0;
var __dep_export_IsoGeneratorSurroundings = require("gge-module:export_IsoGeneratorSurroundings");
var __dep_export_FoodResourceFieldVO = require("gge-module:export_FoodResourceFieldVO");
var __dep_export_StoneResourceFieldVO = require("gge-module:export_StoneResourceFieldVO");
var __dep_export_WoodResourceFieldVO = require("gge-module:export_WoodResourceFieldVO");
