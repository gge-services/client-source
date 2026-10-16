Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function CastleResearchExpertEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleResearchExpertEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResearchExpertEventDialog, __s1param0);
  CastleResearchExpertEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btnClose]);
    __s1param0.prototype.initLoaded.call(this);
    this.timer = new __dep_exact_81dacdf05bd32292.Timer(100, 1);
    this.timer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onClickMouseTimer));
    this.dialogDisp.clickHitArea.mouseChildren = false;
  };
  CastleResearchExpertEventDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.dialogDisp.clickHitArea.actLikeButton = __dep_export_CastleModel.CastleModel.researchData.isResearchTowerBuilt;
  };
  CastleResearchExpertEventDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.itxt_speechBubble = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_ResearchExpert_speechBubble"));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_ResearchExpert_description"));
    if (this.dialogDisp.mouseX > this.dialogDisp.clickHitArea.x - this.dialogDisp.clickHitArea.width / 2 && this.dialogDisp.mouseX < this.dialogDisp.clickHitArea.x + this.dialogDisp.clickHitArea.width / 2 && this.dialogDisp.mouseY > this.dialogDisp.clickHitArea.y - this.dialogDisp.clickHitArea.height / 2 && this.dialogDisp.mouseY < this.dialogDisp.clickHitArea.y + this.dialogDisp.clickHitArea.height / 2) {
      this.timer.start();
    }
  };
  CastleResearchExpertEventDialog.prototype.onClickMouseTimer = function (__s12param0) {
    this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleResearchExpertEventDialog.prototype.hideLoaded = function (__s14param0 = null) {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastleResearchExpertEventDialog.prototype.onClick = function (__s16param0) {
    switch (__s16param0.target) {
      case this.dialogDisp.btnClose:
        this.hide();
        break;
      case this.dialogDisp.clickHitArea:
        if (__dep_export_CastleModel.CastleModel.researchData.isResearchTowerBuilt) {
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleResearchDialog.CastleResearchDialog);
          this.hide();
        }
    }
  };
  CastleResearchExpertEventDialog.prototype.onRemoveEvent = function (__s20param0) {
    if (__s20param0.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    }
  };
  Object.defineProperty(CastleResearchExpertEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchExpertEventDialog.prototype, "eventVO", {
    get: function () {
      if (this.dialogProperties.researchExpertEventVO) {
        return this.dialogProperties.researchExpertEventVO;
      } else if (__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALCHEMIST)) {
        return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALCHEMIST);
      } else {
        this.hide();
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchExpertEventDialog.__initialize_static_members = function () {
    CastleResearchExpertEventDialog.NAME = "CastleResearchExpertEvent";
  };
  return CastleResearchExpertEventDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleResearchExpertEventDialog = __s0local1;
var __dep_export_CastleResearchDialog = require("gge-module:export_CastleResearchDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
