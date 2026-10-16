Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function LongTermPointEventSkin(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._id = 0;
    __s3local0._buildingWod = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._id = __s3param0;
    __s3local0._assetName = __s3param2;
    __s3local0._buildingWod = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongTermPointEventSkin, __s1param0);
  LongTermPointEventSkin.getTypeById = function (__s5param0) {
    return this.getByProperty(LongTermPointEventSkin, "id", __s5param0, LongTermPointEventSkin.DEFAULT);
  };
  Object.defineProperty(LongTermPointEventSkin.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventSkin.prototype, "textId", {
    get: function () {
      return this.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventSkin.prototype, "textSuffix", {
    get: function () {
      if (this.name) {
        return "_" + this.name;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventSkin.prototype, "assetName", {
    get: function () {
      return this._assetName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventSkin.prototype, "buildingWod", {
    get: function () {
      return this._buildingWod;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventSkin.__initialize_static_members = function () {
    LongTermPointEventSkin.DEFAULT = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.NO_SKIN, "", "Default", 0);
    LongTermPointEventSkin.HALLOWEEN = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.HALLOWEEN_SKIN, "halloween", "Halloween", 640);
    LongTermPointEventSkin.WINTER = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.WINTER_SKIN, "winter", "Winter", 642);
    LongTermPointEventSkin.SPRING = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.SPRING_SKIN, "spring", "Spring", 1486);
    LongTermPointEventSkin.INDIA = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.REUSABLE_SKIN, "india", "India", 1500);
    LongTermPointEventSkin.NEWKING = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.NEW_KING_SKIN, "newKing", "NewKing", 1511);
    LongTermPointEventSkin.ST_PATRICKS_DAY = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.ST_PATRICKS_DAY_SKIN, "stPatrick", "StPatrick", 1653);
    LongTermPointEventSkin.ANNI10 = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.ANNIVERSARY_SKIN, "anniversaryLTPE", "Anni10", 2210);
    LongTermPointEventSkin.OKTOBERFEST = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.OKTOBERFEST_SKIN, "oktoberfestLTPE", "Oktoberfest", 2211);
    LongTermPointEventSkin.XMAS = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.CHRISTMAS_SKIN, "christmasLTPE", "Xmas", 2284);
    LongTermPointEventSkin.MAYA = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.MAYA_SKIN, "maya", "Maya", 2742);
    LongTermPointEventSkin.PIRATES = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.PIRATES_SKIN, "pirates", "Pirates", 2741);
    LongTermPointEventSkin.DRAGON_RIDER = new LongTermPointEventSkin(__dep_exact_26a421b704832cff.LongTermPointEventConst.DRAGONRIDERS_SKIN, "dragonrider", "Dragonrider", 2804);
  };
  return LongTermPointEventSkin;
}(__dep_exact_9e901e8e2483a22f.BasicEnum);
exports.LongTermPointEventSkin = __s0local0;
__s0local0.__initialize_static_members();
