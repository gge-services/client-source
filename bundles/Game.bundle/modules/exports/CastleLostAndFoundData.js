Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleLostAndFoundDataEvent = require("gge-module:export_CastleLostAndFoundDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_LostAndFoundListItemVO = require("gge-module:export_LostAndFoundListItemVO");
var __s0local0 = function (__s1param0) {
  function CastleLostAndFoundData() {
    var __s3local0 = this;
    __s3local0._itemVOs = [];
    __s3local0._lastCount = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLostAndFoundData, __s1param0);
  CastleLostAndFoundData.prototype.reset = function () {
    this._itemVOs = [];
  };
  CastleLostAndFoundData.prototype.parse_LFE = function (__s7param0) {
    if (__s7param0) {
      this.reset();
      for (var __s7local0 = 0; __s7local0 < __s7param0.length; __s7local0++) {
        var __s7local1 = new __dep_export_LostAndFoundListItemVO.LostAndFoundListItemVO();
        __s7local1.parseData(__s7param0[__s7local0]);
        this._itemVOs.push(__s7local1);
      }
      this._itemVOs.sort(this.bindFunction(this.sortVOs));
      __s7local0 = 0;
      for (; __s7local0 < this._itemVOs.length; __s7local0++) {
        this._itemVOs[__s7local0].rank = __s7local0 + 1;
      }
      this._lastCount = __dep_exact_f855840627e6e145.int(this._itemVOs.length);
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleLostAndFoundDataEvent.CastleLostAndFoundDataEvent(__dep_export_CastleLostAndFoundDataEvent.CastleLostAndFoundDataEvent.UPDATE_DATA));
    }
  };
  CastleLostAndFoundData.prototype.executeUpdate = function (__s14param0) {
    var __s14local0 = this.getItemAmount();
    if (this._lastCount != __s14local0) {
      this._lastCount = __s14local0;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleLostAndFoundDataEvent.CastleLostAndFoundDataEvent(__dep_export_CastleLostAndFoundDataEvent.CastleLostAndFoundDataEvent.UPDATE_DATA));
    }
  };
  CastleLostAndFoundData.prototype.sortVOs = function (__s17param0, __s17param1) {
    if (__s17param0.receivedTimeStamp != __s17param1.receivedTimeStamp) {
      return __dep_exact_f855840627e6e145.int(__s17param0.receivedTimeStamp - __s17param1.receivedTimeStamp);
    } else {
      return __dep_exact_f855840627e6e145.int(__s17param0.endTimeStamp - __s17param1.endTimeStamp);
    }
  };
  Object.defineProperty(CastleLostAndFoundData.prototype, "itemVOs", {
    get: function () {
      return this._itemVOs;
    },
    enumerable: true,
    configurable: true
  });
  CastleLostAndFoundData.prototype.getItemAmount = function () {
    var __s23local0 = 0;
    if (this._itemVOs != null) {
      for (var __s23local1 = 0, __s23local2 = this._itemVOs; __s23local1 < __s23local2.length; __s23local1++) {
        var __s23local3 = __s23local2[__s23local1];
        if (__s23local3 !== undefined && __s23local3.remainingTimeInSeconds > 0) {
          __s23local0++;
        }
      }
    }
    return __s23local0;
  };
  return CastleLostAndFoundData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleLostAndFoundData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
