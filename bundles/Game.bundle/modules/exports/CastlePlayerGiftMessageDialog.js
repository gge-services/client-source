Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastlePlayerGiftMessageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePlayerGiftMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePlayerGiftMessageDialog, __s1param0);
  CastlePlayerGiftMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_okay]);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastlePlayerGiftMessageDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_giftTrader_obtainedGift");
    __s7local0.textReplacements = [this.dialogProperties.messageVO.sendersName];
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("message_header_giftTrader_obtainedGift"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_playername.txt_playerName, new __dep_exact_92d05af59ee2ff30_3.TextVO(this.dialogProperties.messageVO.sendersName));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, __s7local0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.totalAmount));
    var __s7local1 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.dialogProperties.messageVO.packID);
    this.renderReward(__s7local1);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_playername.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_playername);
  };
  CastlePlayerGiftMessageDialog.prototype.renderReward = function (__s9param0) {
    var __s9local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s9param0.reward, "ACollectableItemEquipmentVO") || __s9param0.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.GEM;
    this.dialogDisp.mc_giftBG.visible = !__s9local0;
    var __s9local1 = __s9local0 ? new __s0local0(70, 70) : new __s0local0(42, 42);
    var __s9local2 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_reward);
    __s9local2.addIconMc(this.dialogDisp.mc_reward.mc_icon);
    __s9local2.addInfoBtn(this.dialogDisp.btn_info);
    var __s9local3 = new __dep_export_CollectableRenderer.CollectableRenderer(__s9local2, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, __s9local1));
    __s9local3.updateWithNewVO(__s9param0.reward);
    this.collectableRenderList.push(__s9local3);
  };
  Object.defineProperty(CastlePlayerGiftMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerGiftMessageDialog.prototype, "totalAmount", {
    get: function () {
      var __s13local0 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.dialogProperties.messageVO.packID);
      return this.dialogProperties.messageVO.pAmount * __s13local0.reward.amount;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftMessageDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    switch (__s15param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_okay:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        this.onHelpButton();
        break;
      case this.dialogDisp.btn_playername:
        this.showPlayerInfo();
    }
  };
  CastlePlayerGiftMessageDialog.prototype.showPlayerInfo = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this.dialogProperties.messageVO.sendersID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  CastlePlayerGiftMessageDialog.prototype.onHelpButton = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_giftReceived"));
  };
  CastlePlayerGiftMessageDialog.__initialize_static_members = function () {
    CastlePlayerGiftMessageDialog.NAME = "CastleGotPlayerGift";
  };
  return CastlePlayerGiftMessageDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePlayerGiftMessageDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
