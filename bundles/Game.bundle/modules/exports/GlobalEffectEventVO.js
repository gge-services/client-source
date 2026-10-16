Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_GlobalEffectEvent = require("gge-module:export_GlobalEffectEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_GlobalEffectEventDialog = require("gge-module:export_GlobalEffectEventDialog");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function GlobalEffectEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GlobalEffectEventVO, __s1param0);
  GlobalEffectEventVO.prototype.parseParamObject = function (__s5param0) {
    __s1param0.prototype.parseParamObject.call(this, __s5param0);
    this.seenGlobalEffects = __s5param0.SGE;
    var __s5local0 = __s5param0.GE;
    this.globalEffectData = [];
    var __s5local1 = 0;
    if (__s5local0 != null) {
      for (var __s5local2 = 0, __s5local3 = __s5local0; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          var __s5local5 = __dep_exact_f855840627e6e145.int(__s5local4[0]);
          var __s5local6 = __s5local4[1];
          var __s5local7 = __dep_exact_f855840627e6e145.int(__s5local4[2]);
          var __s5local8 = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5local6 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
          var __s5local9 = __dep_export_CastleModel.CastleModel.globalEffectData.getGlobalEffectVOsByGlobalEffectID(__s5local5);
          if (__s5local7 > -1 && __s5local9 != null) {
            for (var __s5local10 = 0, __s5local11 = __s5local9; __s5local10 < __s5local11.length; __s5local10++) {
              var __s5local12 = __s5local11[__s5local10];
              if (__s5local12 !== undefined) {
                __s5local12.setEffectStrength(__s5local7, __s5local12.rawBonus);
              }
            }
          }
          this.globalEffectData.push([__s5local9, __s5local8, this.seenGlobalEffects.indexOf(__s5local5) >= 0]);
          if (__s5local1 < __s5local8) {
            __s5local1 = __s5local8;
          }
        }
      }
    }
    this._endTimestamp = __s5local1;
  };
  GlobalEffectEventVO.prototype.openDialog = function (__s16param0 = true) {
    this.executeOpenDialog(__s16param0, __dep_export_GlobalEffectEventDialog.GlobalEffectEventDialog);
  };
  GlobalEffectEventVO.prototype.getShownItems = function () {
    var __s18local0 = [];
    if (this.globalEffectData != null) {
      for (var __s18local1 = 0, __s18local2 = this.globalEffectData; __s18local1 < __s18local2.length; __s18local1++) {
        var __s18local3 = __s18local2[__s18local1];
        if (__s18local3 !== undefined && __s18local3[0]) {
          for (var __s18local4 = 0, __s18local5 = __s18local3[0]; __s18local4 < __s18local5.length; __s18local4++) {
            var __s18local6 = __s18local5[__s18local4];
            if (__s18local6 !== undefined && __s18local6.canBeUsed) {
              __s18local0.push(__s18local3);
            }
          }
        }
      }
    }
    return __s18local0;
  };
  GlobalEffectEventVO.prototype.getGlobalEffectByID = function (__s27param0) {
    if (this.globalEffectData != null) {
      for (var __s27local0 = 0, __s27local1 = this.globalEffectData; __s27local0 < __s27local1.length; __s27local0++) {
        var __s27local2 = __s27local1[__s27local0];
        if (__s27local2 !== undefined) {
          for (var __s27local3 = 0, __s27local4 = __s27local2[0]; __s27local3 < __s27local4.length; __s27local3++) {
            var __s27local5 = __s27local4[__s27local3];
            if (__s27local5 !== undefined && __s27local5.globalEffectID == __s27param0) {
              return __s27local5;
            }
          }
        }
      }
    }
    return null;
  };
  Object.defineProperty(GlobalEffectEventVO.prototype, "showNewSign", {
    get: function () {
      var __s36local0 = this.getShownItems();
      var __s36local1 = 0;
      if (__s36local0 != null) {
        for (var __s36local2 = 0, __s36local3 = __s36local0; __s36local2 < __s36local3.length; __s36local2++) {
          var __s36local4 = __s36local3[__s36local2];
          if (__s36local4 !== undefined) {
            for (var __s36local5 = 0, __s36local6 = __s36local4[0]; __s36local5 < __s36local6.length; __s36local5++) {
              var __s36local7 = __s36local6[__s36local5];
              if (__s36local7 !== undefined && __s36local7.canBeUsed && this.seenGlobalEffects.indexOf(__s36local7.globalEffectID) < 0) {
                __s36local1++;
              }
            }
          }
        }
      }
      return __s36local1;
    },
    enumerable: true,
    configurable: true
  });
  GlobalEffectEventVO.prototype.parse_USG = function (__s45param0) {
    this.seenGlobalEffects = __s45param0.SGE;
    __dep_export_CastleModel.CastleModel.globalEffectData.dispatchEvent(new __dep_export_GlobalEffectEvent.GlobalEffectEvent(__dep_export_GlobalEffectEvent.GlobalEffectEvent.SEEN_EFFECTS_UPDATED));
    this.updateData();
  };
  GlobalEffectEventVO.prototype.updateData = function () {
    if (this.globalEffectData != null) {
      for (var __s47local0 = 0, __s47local1 = this.globalEffectData; __s47local0 < __s47local1.length; __s47local0++) {
        var __s47local2 = __s47local1[__s47local0];
        if (__s47local2 !== undefined && __s47local2[0] != null) {
          __s47local2[2] = this.seenGlobalEffects.indexOf(__s47local2[0][0].globalEffectID) >= 0;
        }
      }
    }
  };
  return GlobalEffectEventVO;
}(require("gge-module:export_ATriggerEventVO").ATriggerEventVO);
exports.GlobalEffectEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
