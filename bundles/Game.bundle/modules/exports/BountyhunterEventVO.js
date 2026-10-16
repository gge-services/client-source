Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleBountyhunterEventDialogProperties = require("gge-module:export_CastleBountyhunterEventDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function BountyhunterEventVO() {
    var __s3local0 = this;
    __s3local0._skipPriceC2 = 0;
    __s3local0._hasWon = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BountyhunterEventVO, __s1param0);
  BountyhunterEventVO.prototype.parseEventXmlNode = function (__s5param0) {
    this._skipPriceC2 = parseInt(__s5param0.targetSkipCostC2 || "");
    this._rewardList = __dep_export_CollectableManager.CollectableManager.parser.createListFromRewardIdsString(__s5param0.rewardIDs || "");
  };
  BountyhunterEventVO.prototype.parseParamObject = function (__s7param0) {
    this._targetAreaVO = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s7param0.A);
    this._targetAreaVO.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfo(__s7param0.OI);
    this._hasWon = __s7param0.HW == 1;
  };
  Object.defineProperty(BountyhunterEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Bountyhunter";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "hasUserSolvedEvent", {
    get: function () {
      return this._hasWon;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "hasUserSolvedEvent").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return BountyhunterEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "hasWon", {
    get: function () {
      return this._hasWon;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "bountyRewardC1", {
    get: function () {
      var __s23local0 = this._targetAreaVO.ownerInfo;
      return __dep_exact_26a421b704832cff.EventConst.getBountyPrizeC1ByTargetLevel(__s23local0.playerLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "bountyRewardC2", {
    get: function () {
      return this._rewardList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "skipPriceC2", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this._skipPriceC2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "targetAreaVO", {
    get: function () {
      return this._targetAreaVO;
    },
    enumerable: true,
    configurable: true
  });
  BountyhunterEventVO.prototype.openDialog = function (__s31param0 = true) {
    if (this._targetAreaVO != null) {
      this.executeOpenDialog(__s31param0, __dep_export_CastleBountyhunterEventDialog.CastleBountyhunterEventDialog, new __dep_export_CastleBountyhunterEventDialogProperties.CastleBountyhunterEventDialogProperties(this));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("", __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_191")));
    }
  };
  BountyhunterEventVO.__initialize_static_members = function () {
    BountyhunterEventVO.EVENT_BUILDING_WOD = 218;
  };
  return BountyhunterEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.BountyhunterEventVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleBountyhunterEventDialog = require("gge-module:export_CastleBountyhunterEventDialog");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
