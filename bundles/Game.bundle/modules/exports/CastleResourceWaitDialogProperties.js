Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_C2SFoundAllianceVO = require("gge-module:export_C2SFoundAllianceVO");
var __dep_export_C2SFestivalStartVO = require("gge-module:export_C2SFestivalStartVO");
var __dep_export_C2SWishingWellCommandVO = require("gge-module:export_C2SWishingWellCommandVO");
var __dep_export_C2SIsoBuyObjectVO = require("gge-module:export_C2SIsoBuyObjectVO");
var __dep_export_C2SIsoRepairBuildingVO = require("gge-module:export_C2SIsoRepairBuildingVO");
var __dep_export_C2SIsoUpgradeDefenceVO = require("gge-module:export_C2SIsoUpgradeDefenceVO");
var __dep_export_C2SIsoUpgradeObjectVO = require("gge-module:export_C2SIsoUpgradeObjectVO");
var __dep_export_C2CraftingStartVO = require("gge-module:export_C2CraftingStartVO");
var __dep_export_C2SSelectFactionCampVO = require("gge-module:export_C2SSelectFactionCampVO");
var __dep_export_C2SSelectKingdomCastleVO = require("gge-module:export_C2SSelectKingdomCastleVO");
var __dep_export_C2SBuyUnitPackageVO = require("gge-module:export_C2SBuyUnitPackageVO");
var __dep_export_C2SQuestDonateRessourcesVO = require("gge-module:export_C2SQuestDonateRessourcesVO");
var __dep_export_C2SResearchStartVO = require("gge-module:export_C2SResearchStartVO");
var __dep_export_C2SBuyEventPackageVO = require("gge-module:export_C2SBuyEventPackageVO");
var __dep_export_C2SSelectSeasonCampVO = require("gge-module:export_C2SSelectSeasonCampVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleResourceWaitDialogProperties(__s3param0 = "") {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.costs = new Map();
    __s3local0.storage = new Map();
    __s3local0.production = new Map();
    __s3local0.commandId = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourceWaitDialogProperties, __s1param0);
  CastleResourceWaitDialogProperties.prototype.getResourceSkipCommand = function (__s5param0) {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.privateOfferData.getPrivateOfferMerchantID());
    switch (this.commandId) {
      case __dep_export_ClientConstSF.ClientConstSF.S2C_RESEARCH_START:
        return new __dep_export_C2SResearchStartVO.C2SResearchStartVO(__s5param0.RID, __s5local0, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_FOUND_ALLIANCE:
        return new __dep_export_C2SFoundAllianceVO.C2SFoundAllianceVO(__s5param0.N, __s5param0.D, __s5param0.ALL, __s5param0.IA, __s5local0, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_BUY_UNIT_PACKAGE:
        return new __dep_export_C2SBuyUnitPackageVO.C2SBuyUnitPackageVO(__s5param0.LID, __s5param0.WID, __s5param0.AMT, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle().areaId, __s5local0, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_FESTIVAL_START:
        return new __dep_export_C2SFestivalStartVO.C2SFestivalStartVO(__s5param0.T, __s5param0.CID, __s5param0.KID, __s5local0, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_UPGRADE_DEFENCE:
        return new __dep_export_C2SIsoUpgradeDefenceVO.C2SIsoUpgradeDefenceVO(__s5param0.OID, __s5local0, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_REPAIR_BUILDING:
        return new __dep_export_C2SIsoRepairBuildingVO.C2SIsoRepairBuildingVO(__s5param0.OID, __s5local0, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_UPGRADE_OBJECT:
        return new __dep_export_C2SIsoUpgradeObjectVO.C2SIsoUpgradeObjectVO(__s5param0.OID, __s5local0, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_BUY_OBJECT:
        return new __dep_export_C2SIsoBuyObjectVO.C2SIsoBuyObjectVO(__s5param0.WID, __s5param0.X, __s5param0.Y, __s5param0.R, __s5local0, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_RUBY_WISHING_WELL:
        return new __dep_export_C2SWishingWellCommandVO.C2SWishingWellCommandVO(__s5param0.WOP, __s5local0, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_QUEST_DONATE_RESOURCES:
        return new __dep_export_C2SQuestDonateRessourcesVO.C2SQuestDonateRessourcesVO(__s5param0.QID, __s5param0.F, __s5param0.W, __s5param0.S, __s5param0.C1, 0, 0, 0, 0, __s5local0, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_BUY_EVENTPACKAGE:
        return new __dep_export_C2SBuyEventPackageVO.C2SBuyEventPackageVO(__s5param0.PID, __s5param0.BT, __s5param0.TID, __s5param0.AMT, __s5param0.KID, __s5param0.AID, __s5param0.PC2, __s5param0.BA, __s5local0, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_SELECT_FACTION_CAMP_ID:
        return new __dep_export_C2SSelectFactionCampVO.C2SSelectFactionCampVO(__s5param0.ID, false, __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_SELECT_PREBUILT_CAMP_ID:
        return new __dep_export_C2SSelectSeasonCampVO.C2SSelectSeasonCampVO(__s5param0.ID, false, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.spaceID, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_SELECT_PREBUILT_CASTLE_ID:
        return new __dep_export_C2SSelectKingdomCastleVO.C2SSelectKingdomCastleVO(__s5param0.ID, __s5param0.D, false, __s5param0.SID === undefined ? __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.spaceID : __s5param0.SID, true);
      case __dep_export_ClientConstSF.ClientConstSF.S2C_CRAFTING_START:
        return new __dep_export_C2CraftingStartVO.C2CraftingStartVO(__s5param0.KID, __s5param0.AID, __s5param0.OID, true, __s5param0.CRID);
    }
    return null;
  };
  CastleResourceWaitDialogProperties.prototype.parseParams = function (__s8param0) {
    this._skipCommand = this.getResourceSkipCommand(__s8param0);
    for (var __s8local0 = 0, __s8local1 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s8local0 < __s8local1.length; __s8local0++) {
      var __s8local2 = __s8local1[__s8local0];
      if (__s8local2 !== undefined) {
        var __s8local3 = __s8local2.serverKey;
        var __s8local4 = __s8local2.serverKey + "S";
        var __s8local5 = __s8local2.serverKey + "P";
        this.costs.set(__s8local2, __s8local3 in __s8param0 ? __s8param0[__s8local3] : 0);
        this.storage.set(__s8local2, __s8local4 in __s8param0 ? __s8param0[__s8local4] : __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s8local2).amount);
        this.production.set(__s8local2, __s8local5 in __s8param0 ? __s8param0[__s8local5] / 10 : __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s8local2).productionPerSec);
      }
    }
  };
  CastleResourceWaitDialogProperties.prototype.parseCosts = function (__s13param0) {
    for (var __s13local0 = 0; __s13local0 < __s13param0.length; ++__s13local0) {
      var __s13local1 = __s13param0.getItemByIndex(__s13local0);
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s13local1, "ACollectableItemResourceVO")) {
        var __s13local2 = __s13local1.itemType;
        this.costs.set(__s13local2, __s13local1.amount);
        this.storage.set(__s13local2, __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s13local2).amount);
        this.production.set(__s13local2, __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s13local2).productionPerSec);
      }
    }
  };
  CastleResourceWaitDialogProperties.prototype.getCost = function (__s18param0) {
    return __dep_exact_f855840627e6e145.int(this.costs.get(__s18param0));
  };
  CastleResourceWaitDialogProperties.prototype.getStorage = function (__s20param0) {
    return __dep_exact_f855840627e6e145.int(this.storage.get(__s20param0));
  };
  CastleResourceWaitDialogProperties.prototype.getProduction = function (__s22param0) {
    return this.production.get(__s22param0);
  };
  CastleResourceWaitDialogProperties.prototype.getMissing = function (__s24param0) {
    return __dep_exact_f855840627e6e145.int(Math.max(0, this.getCost(__s24param0) - this.getStorage(__s24param0)));
  };
  Object.defineProperty(CastleResourceWaitDialogProperties.prototype, "descriptionTextId", {
    get: function () {
      if (this.commandId == __dep_export_ClientConstSF.ClientConstSF.S2C_FOUND_ALLIANCE) {
        return "dialog_resourceWait_creatingAlliance";
      } else if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp) {
        return "dialog_resourceWait_faction";
      } else {
        return "dialog_resourceWait_description";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceWaitDialogProperties.prototype, "isSkippableWithRubies", {
    get: function () {
      return this.skipCommand != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceWaitDialogProperties.prototype, "hasAnyProduction", {
    get: function () {
      for (var __s33local0 = 0, __s33local1 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s33local0 < __s33local1.length; __s33local0++) {
        var __s33local2 = __s33local1[__s33local0];
        if (__s33local2 !== undefined && this.getProduction(__s33local2) > 0) {
          return true;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceWaitDialogProperties.prototype.getNumberOfMissingResources = function () {
    var __s38local0 = 0;
    for (var __s38local1 = 0, __s38local2 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s38local1 < __s38local2.length; __s38local1++) {
      var __s38local3 = __s38local2[__s38local1];
      if (__s38local3 !== undefined && this.getMissing(__s38local3) > 0) {
        __s38local0++;
      }
    }
    return __s38local0;
  };
  Object.defineProperty(CastleResourceWaitDialogProperties.prototype, "skipCommand", {
    get: function () {
      return this._skipCommand;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceWaitDialogProperties.prototype.parseSkipCommand = function (__s45param0) {
    this._skipCommand = this.getResourceSkipCommand(__s45param0);
  };
  return CastleResourceWaitDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleResourceWaitDialogProperties = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IResourceWaitDialogProperties");
