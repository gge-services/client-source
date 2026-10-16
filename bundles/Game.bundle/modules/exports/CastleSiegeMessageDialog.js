Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleSiegeMessageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSiegeMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSiegeMessageDialog, __s1param0);
  CastleSiegeMessageDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_player, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    var __s5local0 = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    var __s5local1 = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_value = this.textFieldManager.registerTextField(this.dialogDisp.btn_player.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    switch (this.infoProperties.messageVO.subtypeSiege) {
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_CONQUERABLE_AREA_CONQUERED:
        if (this.infoProperties.messageVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_OUTPOST) {
          __s5local0.textContentVO.textId = "dialog_messageHeader_outpostConquered";
          __s5local1.textContentVO.textId = "dialog_siegeMessage_outpostConquered";
        } else if (this.infoProperties.messageVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_CAPITAL) {
          __s5local0.textContentVO.textId = "dialog_messageHeader_capitalConquered";
          __s5local1.textContentVO.textId = "dialog_siegeMessage_capitalConquered";
        } else if (this.infoProperties.messageVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_METROPOL) {
          __s5local0.textContentVO.textId = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_metropolConquered");
          __s5local1.textContentVO.textId = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_siegeMessage_metropolConquered");
        } else if (this.infoProperties.messageVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_CAMP) {
          __s5local0.textContentVO.textId = "dialog_messageHeader_factionCampConquered";
          __s5local1.textContentVO.textId = "dialog_siegeMessage_factionCampConquered";
        }
        this.setPlayerInfoButton(false);
        break;
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_CONQUERABLE_AREA_LOST:
        if (this.infoProperties.messageVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_OUTPOST) {
          __s5local0.textContentVO.textId = "dialog_messageHeader_outpostLost";
          __s5local1.textContentVO.textId = "dialog_siegeMessage_yourOutpostWasConquered";
        } else if (this.infoProperties.messageVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_CAPITAL) {
          __s5local0.textContentVO.textId = "dialog_messageHeader_capitalLost";
          __s5local1.textContentVO.textId = "dialog_siegeMessage_yourCapitalWasConquered";
        } else if (this.infoProperties.messageVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_METROPOL) {
          __s5local0.textContentVO.textId = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_metropolLost");
          __s5local1.textContentVO.textId = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_siegeMessage_yourMetropolWasConquered");
        } else if (this.infoProperties.messageVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_CAMP) {
          __s5local0.textContentVO.textId = "dialog_messageHeader_factionCampLost";
          __s5local1.textContentVO.textId = "dialog_siegeMessage_yourFactionCampWasConquered";
        }
        this.setPlayerInfoButton(true);
        break;
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_NEW_SIEGE:
        __s5local0.textContentVO.textId = "dialog_messageHeader_outpostNewConquering";
        __s5local1.textContentVO.textId = "dialog_siegeMessage_beenSiegedAgain";
        __s5local1.textContentVO.textReplacements = [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__dep_exact_26a421b704832cff_1.OutpostConst.SIEGE_TIME, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text)];
        this.setPlayerInfoButton(true);
        break;
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SIEGE_CANCELED:
        __s5local0.textContentVO.textId = "dialog_messageHeader_siegeCancelledByPlayer";
        __s5local1.textContentVO.textId = "dialog_siegeMessage_siegeCancelled";
        this.setPlayerInfoButton(true);
    }
  };
  CastleSiegeMessageDialog.prototype.setPlayerInfoButton = function (__s16param0) {
    if (__s16param0) {
      this.dialogDisp.btn_player.playerID = this.infoProperties.messageVO.attackerID;
      this.itxt_value.textContentVO = new __dep_exact_92d05af59ee2ff30_2.TextVO(this.infoProperties.messageVO.attackerName);
    }
    this.dialogDisp.btn_player.visible = __s16param0;
  };
  CastleSiegeMessageDialog.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    switch (__s19param0.target) {
      case this.dialogDisp.btn_player:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s19param0.target.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleSiegeMessageDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSiegeMessageDialog.NAME = "CastleSiegeMessageEx";
  return CastleSiegeMessageDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSiegeMessageDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
