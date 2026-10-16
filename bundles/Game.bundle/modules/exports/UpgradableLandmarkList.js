Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function UpgradableLandmarkList() {
    this._list = [];
  }
  UpgradableLandmarkList.prototype.getVOByID = function (__s5param0) {
    if (this._list != null) {
      for (var __s5local0 = 0, __s5local1 = this._list; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined && __s5local2.objectId === __s5param0) {
          return __s5local2;
        }
      }
    }
    return null;
  };
  Object.defineProperty(UpgradableLandmarkList.prototype, "completeList", {
    get: function () {
      return this._list;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkList.prototype, "amount", {
    get: function () {
      if (this._list) {
        return this._list.length;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  UpgradableLandmarkList.prototype.getLandmarkBonus = function (__s17param0 = -1) {
    var __s17local0 = 0;
    if (this._list != null) {
      for (var __s17local1 = 0, __s17local2 = this._list; __s17local1 < __s17local2.length; __s17local1++) {
        var __s17local3 = __s17local2[__s17local1];
        if (__s17local3 !== undefined) {
          if (__s17param0 == -1 || __s17local3.kingdomID == __s17param0) {
            if (__s17local0 < __s17local3.landmarkBonus) {
              __s17local0 = __s17local3.landmarkBonus;
            }
          }
        }
      }
    }
    return __s17local0;
  };
  Object.defineProperty(UpgradableLandmarkList.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return UpgradableLandmarkList;
}();
exports.UpgradableLandmarkList = __s0local0;
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
