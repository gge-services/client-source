Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SSelectKingdomCastleVO = require("gge-module:export_C2SSelectKingdomCastleVO");
var __dep_export_C2SSelectSeasonCampVO = require("gge-module:export_C2SSelectSeasonCampVO");
var __dep_export_PrebuiltCastleResponseEvent = require("gge-module:export_PrebuiltCastleResponseEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleConfirmCostsDialogProperties = require("gge-module:export_CastleConfirmCostsDialogProperties");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleKingdomChooseLocalizationDialogProperties = require("gge-module:export_CastleKingdomChooseLocalizationDialogProperties");
var __s0local0 = function (__s1param0) {
  function AUnlockPrebuiltCastle(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.targetSpaceID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).targetSpaceID = __s3param1;
    __s3local0.txt_info1 = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_info1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.txt_info1.autoFitToBounds = true;
    __s3local0.txt_info2 = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_info2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.txt_info2.autoFitToBounds = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AUnlockPrebuiltCastle, __s1param0);
  AUnlockPrebuiltCastle.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.update(__s5param0);
  };
  AUnlockPrebuiltCastle.prototype.update = function (__s7param0) {
    this.castleVO = __s7param0;
    this.targetSpaceID = __s7param0.spaceIds[0];
    var __s7local0 = AUnlockPrebuiltCastle.TEXT_ID_PREFIX + "detailsDialog_infoBox_" + this.unlockTypeTextId + __s7param0.textIdName();
    this.txt_info1.textContentVO.textId = __s7local0 + "_01";
    this.txt_info2.textContentVO.textId = __s7local0 + "_02";
  };
  Object.defineProperty(AUnlockPrebuiltCastle.prototype, "unlockButtonTextId", {
    get: function () {
      return AUnlockPrebuiltCastle.TEXT_ID_PREFIX + "unlockButton_" + this.castleVO.textIdName();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AUnlockPrebuiltCastle.prototype, "unlockTypeTextId", {
    get: function () {
      throw new Error("Abstract method");
    },
    enumerable: true,
    configurable: true
  });
  AUnlockPrebuiltCastle.prototype.buyPrebuiltCastle = function (__s13param0, __s13param1 = false) {
    if (!__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(this.targetSpaceID)) {
      var __s13local0 = false;
      for (var __s13local1 = 0, __s13local2 = this.castleVO.spaceIds; __s13local1 < __s13local2.length; __s13local1++) {
        var __s13local3 = __s13local2[__s13local1];
        if (__s13local3 !== undefined) {
          __s13local0 ||= __dep_exact_26a421b704832cff.WorldConst.WORLD_IDS.indexOf(__s13local3) != -1;
        }
      }
      if (__s13local0) {
        var __s13local4 = new __dep_export_CastleKingdomChooseLocalizationDialogProperties.CastleKingdomChooseLocalizationDialogProperties();
        __s13local4.onDirectionSelected = this.bindFunction(function (__s20param0) {
          this.confirmUnlock(this.bindFunction(function () {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSelectKingdomCastleVO.C2SSelectKingdomCastleVO(this.castleVO.id, __s20param0, __s13param1, this.targetSpaceID));
            __s13param0();
          }), __s13param1);
        });
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleKingdomChooseLocalizationDialog.CastleKingdomChooseLocalizationDialog, __s13local4);
      } else {
        this.confirmUnlock(this.bindFunction(function () {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSelectSeasonCampVO.C2SSelectSeasonCampVO(this.castleVO.id, __s13param1, this.targetSpaceID));
          __s13param0();
        }), __s13param1);
      }
    }
  };
  AUnlockPrebuiltCastle.prototype.confirmUnlock = function (__s27param0, __s27param1) {
    var __s27local0 = AUnlockPrebuiltCastle.TEXT_ID_PREFIX + "confirm" + this.unlockTypeTextId + this.castleVO.textIdName() + "_body";
    var __s27local1 = this.getCosts(__s27param1);
    if (__dep_export_CostHelper.CostHelper.canAfford(new __dep_export_CollectablesCosts.CollectablesCosts(__s27local1))) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConfirmCostsDialog.CastleConfirmCostsDialog, new __dep_export_CastleConfirmCostsDialogProperties.CastleConfirmCostsDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_factionJoin_confirm_header"), __dep_exact_92d05af59ee2ff30.Localize.text(__s27local0), __s27local1, null, __s27param0));
    } else {
      __s27param0();
    }
  };
  AUnlockPrebuiltCastle.prototype.getCosts = function (__s31param0) {
    var __s31local0;
    if (__s31param0) {
      (__s31local0 = new __dep_export_CollectableList.CollectableList()).addItem(this.castleVO.costC2);
      return __s31local0;
    } else {
      return this.castleVO.primaryCosts;
    }
  };
  AUnlockPrebuiltCastle.prototype.disableUntilResponse = function (__s35param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s35param0, false);
    function __s35local0(__s37param0) {
      if (__s37param0.isError) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(__s35param0, true);
      }
      this.controller.removeEventListener(__dep_export_PrebuiltCastleResponseEvent.PrebuiltCastleResponseEvent.RESPONSE, this.bindFunction(__s35local0));
    }
    this.controller.addEventListener(__dep_export_PrebuiltCastleResponseEvent.PrebuiltCastleResponseEvent.RESPONSE, this.bindFunction(__s35local0));
  };
  AUnlockPrebuiltCastle.TEXT_ID_PREFIX = "dialog_kingdomStart_prebuiltCastle_";
  return AUnlockPrebuiltCastle;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.AUnlockPrebuiltCastle = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CollectablesCosts = require("gge-module:export_CollectablesCosts");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleConfirmCostsDialog = require("gge-module:export_CastleConfirmCostsDialog");
var __dep_export_CastleKingdomChooseLocalizationDialog = require("gge-module:export_CastleKingdomChooseLocalizationDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
