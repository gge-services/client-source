Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_KingdomCrestsAndSymbolsHelper = require("gge-module:export_KingdomCrestsAndSymbolsHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleQuestCompletedDialog() {
    return __s1param0.call(this, CastleQuestCompletedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleQuestCompletedDialog, __s1param0);
  CastleQuestCompletedDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.rewardScrollComponent = new __dep_export_SimpleCollectableScrollComponent.SimpleCollectableScrollComponent(this.dialogDisp, new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp).addMouseWheelElements([this.dialogDisp]), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(), CastleQuestCompletedDialog.MAX_REWARDS, CastleQuestCompletedDialog.MAX_REWARDS);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  CastleQuestCompletedDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(this.dialogProperties.titleText));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_questName, new __dep_exact_92d05af59ee2ff30.TextVO(this.dialogProperties.descriptionText)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    var __s7local0;
    var __s7local1;
    var __s7local2 = this.dialogProperties.reward;
    for (var __s7local3 = __s7local2.length, __s7local4 = 0; __s7local4 < __s7local3; ++__s7local4) {
      __s7local0 = __s7local2.getItemByIndex(__s7local4);
      if ((__s7local1 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s7local0, "ACollectableItemEquipmentVO") ? __s7local0.equipmentVO : null) && (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s7local1, "RandomEquipmentVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s7local1, "RandomHeroVO")) && this.dialogProperties.randomEquipmentRewardList && this.dialogProperties.randomEquipmentRewardList.length > 0) {
        __s7local2.replaceItemOnIndex(this.dialogProperties.randomEquipmentRewardList.getItemByIndex(0), __s7local4);
        this.dialogProperties.randomEquipmentRewardList.removeByIndex(0);
      }
    }
    this.shownRewards = __s7local2;
    this.rewardScrollComponent.show(this.shownRewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(88, 82)), this.bindFunction(this.preRenderFunc));
    var __s7local5 = this.dialogProperties.crestFrameIndex <= 4;
    this.dialogDisp.mc_category.visible = !__s7local5;
    this.dialogDisp.mc_kingdomCrest.visible = __s7local5;
    this.dialogDisp.mc_category.gotoAndStop(this.dialogProperties.crestFrameIndex);
    __dep_export_KingdomCrestsAndSymbolsHelper.KingdomCrestsAndSymbolsHelper.addCrestToMC(this.dialogDisp.mc_kingdomCrest, this.dialogProperties.quest.shownKingdomID, new __s0local0(112, 112));
  };
  CastleQuestCompletedDialog.prototype.hideLoaded = function (__s12param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s12param0);
    this.rewardScrollComponent.hide();
  };
  CastleQuestCompletedDialog.prototype.preRenderFunc = function (__s14param0) {
    if (__s14param0.itemVO) {
      var __s14local0 = __s14param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      if (__dep_export_ClientConstCollectable.ClientConstCollectable.COLLECTABLES_WITHOUT_TEXTFIELD.indexOf(__s14param0.itemVO.itemType) > -1) {
        __s14local0.transform.offset.y = 12;
      }
    }
  };
  CastleQuestCompletedDialog.prototype.onClick = function (__s18param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s18param0.target)) {
      __s1param0.prototype.onClick.call(this, __s18param0);
      switch (__s18param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleQuestCompletedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestCompletedDialog.NAME = "CastleQuestCompletedEx_ABG";
  CastleQuestCompletedDialog.MAX_REWARDS = 4;
  return CastleQuestCompletedDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleQuestCompletedDialog = __s0local1;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_SimpleCollectableScrollComponent = require("gge-module:export_SimpleCollectableScrollComponent");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
