Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleMonumentList() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMonumentList, __s1param0);
  CastleMonumentList.prototype.parseGML = function (__s5param0) {
    if (__s5param0) {
      this._list = [];
      for (var __s5local0 = 0, __s5local1 = __s5param0.AI; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          var __s5local3 = new __dep_export_MonumentMapobjectVO.MonumentMapobjectVO();
          __s5local3.parseGML(__s5local2);
          __s5local3.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
          this._list.push(__s5local3);
        }
      }
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_MONUMENTLIST));
    }
  };
  return CastleMonumentList;
}(require("gge-module:export_UpgradableLandmarkList").UpgradableLandmarkList);
exports.CastleMonumentList = __s0local0;
var __dep_export_MonumentMapobjectVO = require("gge-module:export_MonumentMapobjectVO");
