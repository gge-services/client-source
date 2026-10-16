Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ClickFeedbackButtonHoverTabButton = require("gge-module:export_ClickFeedbackButtonHoverTabButton");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __dep_export_AllianceMobilizationRewardDialogList = require("gge-module:export_AllianceMobilizationRewardDialogList");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationRewardDialog() {
    return __s1param0.call(this, AllianceMobilizationRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationRewardDialog, __s1param0);
  AllianceMobilizationRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.tab_0, this.dialogDisp.tab_1], __dep_export_ClickFeedbackButtonHoverTabButton.ClickFeedbackButtonHoverTabButton, 1);
    var __s5local0 = new __dep_export_AllianceMobilizationRewardDialogList.AllianceMobilizationRewardDialogList(this.dialogDisp.mc_list);
    this._subLayer = new Map();
    this._subLayer.set(AllianceMobilizationRewardDialog.TAB_RANK, __s5local0);
    this._subLayer.set(AllianceMobilizationRewardDialog.TAB_LEVEL, __s5local0);
    this._tabs = [AllianceMobilizationRewardDialog.TAB_RANK, AllianceMobilizationRewardDialog.TAB_LEVEL];
  };
  AllianceMobilizationRewardDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.eventVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("popup_ame_rewards_title"))).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.tab_0.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_ame_rewards_ranking"))).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.tab_0.txt_label_white, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_ame_rewards_ranking"))).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.tab_1.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.eventVO.getEventSpecificTextID("button_ame_rewards_level")))).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.tab_1.txt_label_white, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.eventVO.getEventSpecificTextID("button_ame_rewards_level")))).autoFitToBounds = true;
      this.dialogDisp.tab_1.visible = this.dialogProperties.showLevelTab;
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
      var __s7local0 = this.dialogProperties.tab ? this.dialogProperties.tab : AllianceMobilizationRewardDialog.TAB_RANK;
      this.changeCategory(this.dialogProperties.showLevelTab ? __s7local0 : AllianceMobilizationRewardDialog.TAB_RANK);
    } else {
      this.hide();
    }
  };
  AllianceMobilizationRewardDialog.prototype.hideLoaded = function () {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  AllianceMobilizationRewardDialog.prototype.onRemoveEvent = function (__s13param0) {
    if (!this.eventVO || __s13param0.specialEventVO && __s13param0.specialEventVO.eventId == this.dialogProperties.eventID) {
      this.hide();
    }
  };
  AllianceMobilizationRewardDialog.prototype.changeCategory = function (__s16param0) {
    if (this._currentCategory != __s16param0) {
      __s1param0.prototype.changeCategory.call(this, __s16param0);
      this.showSublayer(this._subLayer.get(this._currentCategory), this.getParamsForCategory(__s16param0));
      for (var __s16local0 = 0; __s16local0 < this._tabs.length; __s16local0++) {
        var __s16local1 = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this.dialogDisp["tab_" + __s16local0]);
        if (__s16local0 == this._tabs.indexOf(__s16param0)) {
          __s16local1.selected();
        } else {
          __s16local1.deselected();
        }
      }
    }
  };
  AllianceMobilizationRewardDialog.prototype.getParamsForCategory = function (__s23param0) {
    return [__s23param0, this.dialogProperties.eventID];
  };
  Object.defineProperty(AllianceMobilizationRewardDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationRewardDialog.prototype.onClick = function (__s29param0) {
    __s1param0.prototype.onClick.call(this, __s29param0);
    switch (__s29param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.tab_0:
        this.changeCategory(AllianceMobilizationRewardDialog.TAB_RANK);
        break;
      case this.dialogDisp.tab_1:
        this.changeCategory(AllianceMobilizationRewardDialog.TAB_LEVEL);
    }
  };
  AllianceMobilizationRewardDialog.TAB_RANK = "sublayer_rank";
  AllianceMobilizationRewardDialog.TAB_LEVEL = "sublayer_level";
  AllianceMobilizationRewardDialog.NAME = "AllianceMobilizationRewardsExt";
  return AllianceMobilizationRewardDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.AllianceMobilizationRewardDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
