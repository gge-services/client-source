Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_LordVO = require("gge-module:export_LordVO");
var __s0local0 = function (__s1param0) {
  function BaronVO() {
    var __s3local0 = this;
    __s3local0._lockedInCastleID = -1;
    __s3local0._baronOrderPosition = 0;
    __s3local0._isDummyBaron = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BaronVO, __s1param0);
  BaronVO.prototype.getVisClassName = function () {
    if (this.isHero) {
      return this.heroPicVisClassName;
    } else {
      return "BaronPic_" + this.picID;
    }
  };
  BaronVO.prototype.getFeatherClassName = function () {
    return "BaronPic_" + this.picID;
  };
  BaronVO.prototype.getVisAsset = function () {
    if (this.isHero) {
      return this.heroPicAssetURL;
    } else {
      return "Lord_Icons";
    }
  };
  BaronVO.prototype.parseLord = function (__s15param0, __s15param1 = false, __s15param2 = false) {
    __s1param0.prototype.parseLord.call(this, __s15param0, __s15param1, __s15param2);
    this._lockedInCastleID = __dep_exact_f855840627e6e145.int(__s15param0.LICID);
    this._baronOrderPosition = __dep_exact_f855840627e6e145.int(BaronVO.PIC_ID_ORDER.indexOf(this.picID));
  };
  Object.defineProperty(BaronVO.prototype, "isAvailableForMovement", {
    get: function () {
      return !(this._lockedInCastleID >= 0) && (this.picID != __dep_exact_26a421b704832cff.EquipmentConst.PICK_BARON_FACTION || __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.BARON_ID) && (this.picID != __dep_exact_26a421b704832cff.EquipmentConst.PICK_BARON_ISLAND || __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID) && Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "isAvailableForMovement").get.call(this);
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "isAvailableForMovement").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaronVO.prototype, "lockedInCastleID", {
    get: function () {
      return this._lockedInCastleID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaronVO.prototype, "baronOrderPosition", {
    get: function () {
      return this._baronOrderPosition;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaronVO.prototype, "name", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("equipment_itemType_baron");
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "name").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaronVO.prototype, "isDummyBaron", {
    get: function () {
      return this._isDummyBaron;
    },
    set: function (__s31param0) {
      this._isDummyBaron = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaronVO.prototype, "isBaron", {
    get: function () {
      return true;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "isBaron").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  BaronVO.PIC_ID_ORDER = [0, 6, 7, 8, 1, 13, 2, 3, 4, 10, 11, 12, 9, 5];
  return BaronVO;
}(__dep_export_LordVO.LordVO);
exports.BaronVO = __s0local0;
