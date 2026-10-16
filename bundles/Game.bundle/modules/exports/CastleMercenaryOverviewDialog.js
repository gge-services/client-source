Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SMercenaryPackageVO = require("gge-module:export_C2SMercenaryPackageVO");
var __dep_export_CastleMercenaryDataEvent = require("gge-module:export_CastleMercenaryDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimerComponent = require("gge-module:export_CastleTimerComponent");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = function (__s1param0) {
  function CastleMercenaryOverviewDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleMercenaryOverviewDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMercenaryOverviewDialog, __s1param0);
  CastleMercenaryOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.mc_itemContainer.btn_up, this.dialogDisp.mc_itemContainer.btn_down]);
    this.reinitScrollList();
    this.dialogDisp.mc_time.mouseChildren = false;
    this.dialogDisp.mc_time.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.RESTTIME;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_mission_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_mission_desc")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_nextMissions, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_mission_time_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_empty.txt_empty, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_mission_empty"));
    this.timerTextField = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_nextMissionsTime, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
  };
  CastleMercenaryOverviewDialog.prototype.destroyScrollList = function () {
    if (this.missionList) {
      this.missionList.remove();
      this.missionList.clear();
      this.missionList = null;
    }
  };
  CastleMercenaryOverviewDialog.prototype.reinitScrollList = function () {
    this.destroyScrollList();
    this.missionList = new __dep_export_CastleMercenaryItemScrollList.CastleMercenaryItemScrollList(this.dialogDisp.mc_itemContainer, this.dialogDisp);
    this.missionList.scrollItemClass = __dep_export_CastleMercenaryMissionItem.CastleMercenaryMissionItem;
  };
  CastleMercenaryOverviewDialog.prototype.showLoaded = function (__s12param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s12param0);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMercenaryPackageVO.C2SMercenaryPackageVO(-1));
    __dep_export_CastleModel.CastleModel.mercenaryData.sortMissionsOnUpdate = true;
    __dep_export_CastleModel.CastleModel.mercenaryData.waitingForServer = true;
    this.initScroller(0);
    this.setOfferTimer();
  };
  CastleMercenaryOverviewDialog.prototype.hideLoaded = function (__s14param0 = null) {
    this.destroyScrollList();
    __s1param0.prototype.hideLoaded.call(this, __s14param0);
  };
  CastleMercenaryOverviewDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.mercenaryData.addEventListener(__dep_export_CastleMercenaryDataEvent.CastleMercenaryDataEvent.DATA_CHANGED, this.bindFunction(this.onMercenaryDataUpdate));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserChangeCurreny));
  };
  CastleMercenaryOverviewDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.mercenaryData.removeEventListener(__dep_export_CastleMercenaryDataEvent.CastleMercenaryDataEvent.DATA_CHANGED, this.bindFunction(this.onMercenaryDataUpdate));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserChangeCurreny));
  };
  CastleMercenaryOverviewDialog.prototype.onClick = function (__s20param0) {
    __s1param0.prototype.onClick.call(this, __s20param0);
    switch (__s20param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mission_help"));
    }
  };
  CastleMercenaryOverviewDialog.prototype.onMercenaryDataUpdate = function (__s23param0) {
    this.initScroller();
    this.setOfferTimer();
  };
  CastleMercenaryOverviewDialog.prototype.onUserChangeCurreny = function (__s25param0) {
    if (!__dep_export_CastleModel.CastleModel.mercenaryData.waitingForServer) {
      this.initScroller();
    }
  };
  CastleMercenaryOverviewDialog.prototype.setOfferTimer = function () {
    if (this.nextMissionTimer) {
      this.nextMissionTimer.stop();
    }
    this.nextMissionTimer = new __dep_export_CastleTimerComponent.CastleTimerComponent(this.timerTextField, this.bindFunction(this.getNextMissionTimeString), __dep_export_CastleModel.CastleModel.mercenaryData.remainingNextPackageTime / __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
  };
  CastleMercenaryOverviewDialog.prototype.getNextMissionTimeString = function (__s31param0) {
    return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(__s31param0);
  };
  CastleMercenaryOverviewDialog.prototype.initScroller = function (__s33param0 = -1) {
    var __s33local0 = __dep_exact_f855840627e6e145.int(this.missionList ? this.missionList.currentStartIndex : 0);
    this.reinitScrollList();
    var __s33local1 = __dep_export_CastleModel.CastleModel.mercenaryData.missions;
    if (__s33local1.length == 0) {
      this.dialogDisp.mc_empty.visible = true;
      this.dialogDisp.mc_itemContainer.visible = false;
    } else {
      var __s33local2 = __s33param0 > -1 ? __s33param0 : __s33local0;
      this.dialogDisp.mc_empty.visible = false;
      this.dialogDisp.mc_itemContainer.visible = true;
      if (__s33local1 != null) {
        for (var __s33local3 = 0, __s33local4 = __s33local1; __s33local3 < __s33local4.length; __s33local3++) {
          var __s33local5 = __s33local4[__s33local3];
          if (__s33local5 !== undefined) {
            this.missionList.pushContent(__s33local5);
          }
        }
      }
      this.missionList.initList(__s33local2);
    }
  };
  CastleMercenaryOverviewDialog.__initialize_static_members = function () {
    CastleMercenaryOverviewDialog.NAME = "CastleMercenaryOverview";
  };
  return CastleMercenaryOverviewDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleMercenaryOverviewDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMercenaryItemScrollList = require("gge-module:export_CastleMercenaryItemScrollList");
var __dep_export_CastleMercenaryMissionItem = require("gge-module:export_CastleMercenaryMissionItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
