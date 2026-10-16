Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_C2SIsoRepairAllVO = require("gge-module:export_C2SIsoRepairAllVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __s0local0 = function (__s1param0) {
  function CastleSabotageMessageDialog() {
    var __s3local0 = this;
    __s3local0.CHAR_ICON_ASSET_NAME = "SabotageMessageIcon";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleSabotageMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSabotageMessageDialog, __s1param0);
  CastleSabotageMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_repairAll]);
  };
  CastleSabotageMessageDialog.prototype.onClipLoaded = function (__s7param0) {
    this.dialogDisp.mcBuilding.addChild(__s7param0.currentshownDisplayObject);
  };
  CastleSabotageMessageDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_spy_titleSabotage"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_premiumToolTip.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("repairAll"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_sabotageMessage_affected"));
    this.repairAllButton = new __dep_export_ButtonRepairAllComponent.ButtonRepairAllComponent(this.dialogDisp.btn_repairAll);
    this.buildingIcon = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.CHAR_ICON_ASSET_NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.CHAR_ICON_ASSET_NAME), null, 0, false);
    if (this.buildingIcon.isLoaded) {
      this.onClipLoaded(this.buildingIcon);
    } else {
      this.buildingIcon.clipLoaded.add(this.bindFunction(this.onClipLoaded));
    }
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SPY, this.dialogDisp.mc_char, 178, 154);
    this.repairAllButton.initRepairAllButton(this.dialogProperties.castleID, this.dialogDisp.mc_premiumToolTip);
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      this.dialogDisp.mc_premiumToolTip.visible = true;
    }
  };
  CastleSabotageMessageDialog.prototype.hideLoaded = function (__s14param0 = null) {
    if (this.buildingIcon.currentshownDisplayObject && this.buildingIcon.currentshownDisplayObject.parent == this.dialogDisp.mcBuilding) {
      this.dialogDisp.mcBuilding.removeChild(this.buildingIcon.currentshownDisplayObject);
    }
    __s1param0.prototype.hideLoaded.call(this, __s14param0);
  };
  CastleSabotageMessageDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    switch (__s17param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_repairAll:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoRepairAllVO.C2SIsoRepairAllVO());
        this.hide();
    }
  };
  CastleSabotageMessageDialog.prototype.onMouseOver = function (__s20param0) {
    __s1param0.prototype.onMouseOver.call(this, __s20param0);
    if (__s20param0.target == this.dialogDisp.btn_repairAll && this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO) {
      this.dialogDisp.mc_premiumToolTip.visible = true;
      __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.dialogDisp.mc_premiumToolTip, 0.2, {
        alpha: 0
      }, {
        alpha: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
    }
  };
  CastleSabotageMessageDialog.prototype.onMouseOut = function (__s23param0) {
    __s1param0.prototype.onMouseOut.call(this, __s23param0);
    this.dialogDisp.mc_premiumToolTip.visible = false;
  };
  CastleSabotageMessageDialog.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleSabotageMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSabotageMessageDialog.__initialize_static_members = function () {
    CastleSabotageMessageDialog.NAME = "CastleSabotageMessageEx";
  };
  return CastleSabotageMessageDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleSabotageMessageDialog = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ButtonRepairAllComponent = require("gge-module:export_ButtonRepairAllComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
