Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function BasicBuildList() {
    var __s3local0 = this;
    __s3local0._freeSlots = 0;
    __s3local0._useableSlots = 0;
    __s3local0._slotsInUse = 0;
    __s3local0._waitForUpdate = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicBuildList, __s1param0);
  BasicBuildList.prototype.parseList = function (__s5param0) {};
  BasicBuildList.prototype.executeUpdate = function (__s7param0) {};
  BasicBuildList.prototype.switchSlots = function (__s9param0, __s9param1) {
    var __s9local0 = this.getSlotByPos(__s9param0);
    var __s9local1 = this.getSlotByPos(__s9param1);
    __s9local0.pos = __s9param1;
    __s9local1.pos = __s9param0;
  };
  BasicBuildList.prototype.getSlotByPos = function (__s11param0) {
    if (this._slots != null) {
      for (var __s11local0 = 0, __s11local1 = this._slots; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined && __s11local2.pos == __s11param0) {
          return __s11local2;
        }
      }
    }
    return null;
  };
  Object.defineProperty(BasicBuildList.prototype, "slotsArray", {
    get: function () {
      var __s17local0 = [];
      if (this._slots != null) {
        for (var __s17local1 = 0, __s17local2 = this._slots; __s17local1 < __s17local2.length; __s17local1++) {
          var __s17local3 = __s17local2[__s17local1];
          if (__s17local3 !== undefined) {
            __s17local0.push(__s17local3);
          }
        }
      }
      return __s17local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildList.prototype, "numOfSlots", {
    get: function () {
      if (this._slots) {
        return this._slots.length;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildList.prototype, "useableSlots", {
    get: function () {
      return this._useableSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildList.prototype, "slotsInUse", {
    get: function () {
      return this._slotsInUse;
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildList.prototype.hasFreeSlots = function () {
    return this._freeSlots > 0;
  };
  BasicBuildList.prototype.getSlotByArrayPos = function (__s33param0) {
    return this._slots[__s33param0];
  };
  BasicBuildList.prototype.allSlotsBought = function () {
    return false;
  };
  BasicBuildList.prototype.playerCanBuyNextSlot = function () {
    return false;
  };
  BasicBuildList.prototype.createSlotVO = function () {
    return null;
  };
  BasicBuildList.prototype.getFreshBuildListFromServer = function () {};
  return BasicBuildList;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.BasicBuildList = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
