Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleLaboratoryList() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLaboratoryList, __s1param0);
  CastleLaboratoryList.prototype.parseGLL = function (__s5param0) {
    if (__s5param0) {
      this._list = [];
      for (var __s5local0 = 0, __s5local1 = __s5param0.AI; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          var __s5local3 = new __dep_export_LaboratoryMapobjectVO.LaboratoryMapobjectVO();
          __s5local3.parseGLL(__s5local2);
          __s5local3.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
          this._list.push(__s5local3);
        }
      }
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_LABORATORYLIST));
    }
  };
  CastleLaboratoryList.prototype.kingdomList = function (__s11param0) {
    return this.completeList.filter(this.getFilterByKingdomID(__s11param0));
  };
  CastleLaboratoryList.prototype.hasLaboratoryInKingdom = function (__s13param0) {
    return this.kingdomList(__s13param0).length > 0;
  };
  CastleLaboratoryList.prototype.getFilterByKingdomID = function (__s15param0) {
    return function (__s17param0) {
      var __s17local0 = [];
      for (var __s17local1 = 1; __s17local1 < arguments.length; __s17local1++) {
        __s17local0[__s17local1 - 1] = arguments[__s17local1];
      }
      return __s17param0.kingdomID == __s15param0;
    };
  };
  return CastleLaboratoryList;
}(require("gge-module:export_UpgradableLandmarkList").UpgradableLandmarkList);
exports.CastleLaboratoryList = __s0local0;
var __dep_export_LaboratoryMapobjectVO = require("gge-module:export_LaboratoryMapobjectVO");
