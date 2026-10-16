Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function IsoHelperData() {}
  IsoHelperData.prototype.createIsoObjectVOByXml = function (__s5param0, __s5param1 = null, __s5param2 = true) {
    var __s5local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5param0, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING) || __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5param0, __dep_export_CastleWodData.CastleWodData.TYPE_RUBY_WISHING_WELL);
    if (__s5local0) {
      __s5local0.init(__s5param1 || __dep_export_Iso.Iso.data);
      if (__s5param2) {
        __s5local0.updateData();
      }
    }
    return __s5local0;
  };
  IsoHelperData.prototype.createIsoObjectVOByServer = function (__s9param0, __s9param1 = null, __s9param2 = true) {
    var __s9local0 = __s9param0.O ? __s9param0.O : __s9param0;
    var __s9local1 = __dep_exact_f855840627e6e145.int(__s9local0.shift());
    var __s9local2 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s9local1, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING) || __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s9local1, __dep_export_CastleWodData.CastleWodData.TYPE_RUBY_WISHING_WELL);
    if (__s9local2) {
      __s9local2.init(__s9param1 || __dep_export_Iso.Iso.data);
      __s9local2.parseServerObject(__s9local0);
      if (__s9param2) {
        __s9local2.updateData();
      }
      return __s9local2;
    } else {
      __dep_exact_9e901e8e2483a22f.debug("--- IsoHelperData.createIsoObjectVOByServer(): " + __s9local1 + "was not found in wodData.");
      return null;
    }
  };
  IsoHelperData.prototype.createIsoObjectVOByType = function (__s14param0, __s14param1 = null, __s14param2 = true) {
    var __s14local0 = new __s14param0.dataClass();
    __s14local0.init(__s14param1);
    if (__s14param2) {
      __s14local0.updateData();
    }
    return __s14local0;
  };
  IsoHelperData.prototype.createObjectGroupDic = function (__s17param0) {
    var __s17local0 = new Map();
    for (var __s17local1 = 0, __s17local2 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum); __s17local1 < __s17local2.length; __s17local1++) {
      var __s17local3 = __s17local2[__s17local1];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s17local3, "IsoObjectGroupEnum")) {
        var __s17local4 = __s17local3;
        var __s17local5 = __s17param0 ? __s17local4.viewClass : __s17local4.dataClass;
        if (!__s17local5) {
          continue;
        }
        __s17local0.set(__s17local4, new __s17local5());
        __s17local0.get(__s17local4).groupType = __s17local4;
      }
    }
    return __s17local0;
  };
  IsoHelperData.prototype.cloneIsoObject = function (__s23param0) {
    if (!__s23param0) {
      return null;
    }
    var __s23local0 = this.createIsoObjectVOByXml(__s23param0.wodId, __s23param0.isoData, true);
    __s23local0.cloneFrom(__s23param0);
    return __s23local0;
  };
  IsoHelperData.prototype.updateIsoObjectByServer = function (__s26param0, __s26param1) {
    var __s26local0 = __s26param1;
    var __s26local1 = __dep_exact_f855840627e6e145.int(__s26local0.shift());
    var __s26local2 = __dep_exact_f855840627e6e145.int(__s26param0.wodId);
    if (__s26local2 >= 0 && __s26local2 != __s26local1) {
      var __s26local3 = __dep_export_CastleModel.CastleModel.wodData.wodXmlElements.get(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s26local1);
      if (__s26local3) {
        __s26param0.parseXmlNode(__s26local3);
      }
    }
    __s26param0.parseServerObject(__s26local0);
    __s26param0.updateData();
    __s26param0.dispatchValueObjectChanged();
  };
  IsoHelperData.prototype.destroyAndCreateNewVOList = function (__s30param0) {
    if (__s30param0) {
      for (var __s30local0 = 0, __s30local1 = __s30param0; __s30local0 < __s30local1.length; __s30local0++) {
        var __s30local2 = __s30local1[__s30local0];
        if (__s30local2 !== undefined && "destroy" in __s30local2) {
          __s30local2.destroy();
        }
      }
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s30param0, "Array")) {
      return [];
    } else {
      return new (__dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(__s30param0))();
    }
  };
  IsoHelperData.prototype.getAreaKingdomName = function (__s38param0, __s38param1 = -1) {
    if (__s38param1 == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      return __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventType;
    } else {
      return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s38param0).kingdomName;
    }
  };
  IsoHelperData.prototype.getBackgroundType = function (__s42param0) {
    if (__s42param0.areaData.areaInfo.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      return "Season" + __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId;
    } else {
      return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s42param0.areaData.areaInfo.kingdomID).kingdomName;
    }
  };
  IsoHelperData.prototype.getMovementWaypointClasses = function (__s46param0) {
    return new __s46param0.dataClass().getWaypoints();
  };
  return IsoHelperData;
}();
exports.IsoHelperData = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
