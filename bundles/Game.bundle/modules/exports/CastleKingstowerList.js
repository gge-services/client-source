Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleKingstowerList() {
    this._kingstowerList = [];
  }
  CastleKingstowerList.prototype.parseGKL = function (__s5param0) {
    if (__s5param0) {
      this._kingstowerList = [];
      for (var __s5local0 = 0, __s5local1 = __s5param0.AI; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          var __s5local3 = new __dep_export_KingstowerMapobjectVO.KingstowerMapobjectVO();
          __s5local3.parseGKL(__s5local2);
          __s5local3.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
          this._kingstowerList.push(__s5local3);
        }
      }
      this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_KINGSTOWERLIST));
    }
  };
  CastleKingstowerList.prototype.getVOByID = function (__s11param0) {
    if (this._kingstowerList != null) {
      for (var __s11local0 = 0, __s11local1 = this._kingstowerList; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined && __s11local2.objectId === __s11param0) {
          return __s11local2;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleKingstowerList.prototype, "completeList", {
    get: function () {
      return this._kingstowerList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingstowerList.prototype, "kingstowerAmount", {
    get: function () {
      if (this._kingstowerList) {
        return this._kingstowerList.length;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingstowerList.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleKingstowerList;
}();
exports.CastleKingstowerList = __s0local0;
var __dep_export_KingstowerMapobjectVO = require("gge-module:export_KingstowerMapobjectVO");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
