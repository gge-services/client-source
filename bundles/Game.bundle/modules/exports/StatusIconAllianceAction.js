Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleAllianceGiftEvent = require("gge-module:export_CastleAllianceGiftEvent");
var __dep_export_CastleAllianceHelpRequestDataEvent = require("gge-module:export_CastleAllianceHelpRequestDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceActionOverviewDialogProperties = require("gge-module:export_CastleAllianceActionOverviewDialogProperties");
var __s0local0 = function (__s1param0) {
  function StatusIconAllianceAction(__s3param0 = __dep_exact_f855840627e6e145.int(__dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_LOW)) {
    var __s3local0 = __s1param0.call(this, "Icon_AllianceHelpRequest", "mc_count.txt_label", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0), __s3param0) || this;
    __s3local0.setTooltip("dialog_allianceActivity_answerRequests_tooltip");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconAllianceAction, __s1param0);
  StatusIconAllianceAction.prototype.addEventListenerForVisibility = function () {
    __s1param0.prototype.addEventListenerForVisibility.call(this);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.addEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onRequestDataUpdata));
    __dep_export_CastleModel.CastleModel.allianceGiftData.addEventListener(__dep_export_CastleAllianceGiftEvent.CastleAllianceGiftEvent.DATA_UPDATED, this.bindFunction(this.onRequestDataUpdata));
  };
  StatusIconAllianceAction.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.removeEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onRequestDataUpdata));
    __dep_export_CastleModel.CastleModel.allianceGiftData.removeEventListener(__dep_export_CastleAllianceGiftEvent.CastleAllianceGiftEvent.DATA_UPDATED, this.bindFunction(this.onRequestDataUpdata));
    __s1param0.prototype.removeEventListenerForVisibility.call(this);
  };
  StatusIconAllianceAction.prototype.setVisibilityLoaded = function () {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.allianceHelpRequestData.visibleRequests.length > 0 || __dep_export_CastleModel.CastleModel.allianceGiftData.hasGifts(__dep_export_CastleModel.CastleModel.userData.level)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconAllianceAction.prototype.showLoaded = function (__s13param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s13param0);
    if (__dep_export_CastleModel.CastleModel.allianceHelpRequestData.clickAbleRequestCount > 0 || __dep_export_CastleModel.CastleModel.allianceGiftData.hasGifts(__dep_export_CastleModel.CastleModel.userData.level)) {
      this.iconDisp.mc_count.visible = true;
      var __s13local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceHelpRequestData.clickAbleRequestCount);
      var __s13local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceGiftData.giftCount);
      this.itxt_label.textContentVO.numberValue = __s13local0 + __s13local1;
      this.itxt_label.autoFitToBounds = true;
    } else {
      this.iconDisp.mc_count.visible = false;
    }
  };
  StatusIconAllianceAction.prototype.onClick = function () {
    __s1param0.prototype.onClick.call(this);
    var __s17local0 = new __dep_export_CastleAllianceActionOverviewDialogProperties.CastleAllianceActionOverviewDialogProperties(__dep_export_CastleAllianceActionOverviewDialog.CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST);
    if (__dep_export_CastleModel.CastleModel.allianceGiftData.hasGifts(__dep_export_CastleModel.CastleModel.userData.level)) {
      __s17local0.layerToOpen = __dep_export_CastleAllianceActionOverviewDialog.CastleAllianceActionOverviewDialog.SUBLAYER_GIFT;
    }
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceActionOverviewDialog.CastleAllianceActionOverviewDialog, __s17local0);
  };
  StatusIconAllianceAction.prototype.onRequestDataUpdata = function (__s20param0) {
    this.setVisibility();
  };
  StatusIconAllianceAction.prototype.onAllianceStatusChanged = function (__s22param0) {
    this.setVisibility();
  };
  return StatusIconAllianceAction;
}(require("gge-module:export_ACastleLabeledStatusIcon").ACastleLabeledStatusIcon);
exports.StatusIconAllianceAction = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceActionOverviewDialog = require("gge-module:export_CastleAllianceActionOverviewDialog");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
