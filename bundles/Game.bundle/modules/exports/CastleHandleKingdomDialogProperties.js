Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleHandleKingdomDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._kingdomVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHandleKingdomDialogProperties, __s1param0);
  CastleHandleKingdomDialogProperties.prototype.hasTimer = function () {
    return this._kingdomVO.hasTimer;
  };
  CastleHandleKingdomDialogProperties.prototype.getRemainingTime = function () {
    return __dep_exact_f855840627e6e145.int(this._kingdomVO.resetTime);
  };
  CastleHandleKingdomDialogProperties.prototype.getTitleString = function () {
    return this._kingdomVO.kingdomNameString;
  };
  CastleHandleKingdomDialogProperties.prototype.getName = function () {
    return this._kingdomVO.kingdomName;
  };
  CastleHandleKingdomDialogProperties.prototype.getBackgroundSkinClassName = function () {
    return "KingdomDialogBackground_" + this._kingdomVO.kingdomName;
  };
  CastleHandleKingdomDialogProperties.prototype.getCrestLeft = function () {
    if (this._kingdomVO.kID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      return __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO;
    } else if (this._kingdomVO.kID == __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID) {
      return __dep_export_CastleModel.CastleModel.userData.playerCrest;
    } else {
      return __dep_export_CastleNPCOwnerFactory.CastleNPCOwnerFactory.getKingdomOwnerCrest(this._kingdomVO.kID);
    }
  };
  CastleHandleKingdomDialogProperties.prototype.getCrestRight = function () {
    if (this._kingdomVO.kID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      return __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO;
    } else {
      return this.getCrestLeft();
    }
  };
  CastleHandleKingdomDialogProperties.prototype.isUnlocked = function () {
    return this._kingdomVO.isPaid;
  };
  CastleHandleKingdomDialogProperties.prototype.getSpaceID = function () {
    return this._kingdomVO.kID;
  };
  CastleHandleKingdomDialogProperties.prototype.isEiland = function () {
    return this._kingdomVO.kID == __dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID;
  };
  Object.defineProperty(CastleHandleKingdomDialogProperties.prototype, "kingdomVO", {
    get: function () {
      return this._kingdomVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHandleKingdomDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleHandleKingdomDialogProperties = __s0local0;
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
var __dep_export_CastleNPCOwnerFactory = require("gge-module:export_CastleNPCOwnerFactory");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleHandleSpaceDialogProperties");
