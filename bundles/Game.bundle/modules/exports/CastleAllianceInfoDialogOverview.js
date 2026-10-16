Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SJoinOpenAllianceVO = require("gge-module:export_C2SJoinOpenAllianceVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleApplyForMembershipDialogProperties = require("gge-module:export_CastleApplyForMembershipDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceInfoDialogOverview(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_description"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_member, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_member"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_leader, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_leader"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_honor, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("honor"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_fame, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliancelevel")).autoFitToBounds = true;
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_language, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_allianceLanguage_name")).autoFitToBounds = true;
    __s3local0.itxt_memberCount = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_memberCount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_leaderName = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_leaderName, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0.itxt_allianceDescription = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_allianceDescription, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0.itxt_allianceDescription.selectable = true;
    __s3local0.itxt_honorAmount = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_honorAmount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_fameAmount = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_fameAmount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_languageName = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_languageName, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(__s3local0.sublayerDisp.txt_allianceDescription, __s3local0.sublayerDisp.mc_scrollHandle.btn_up, __s3local0.sublayerDisp.mc_scrollHandle.btn_down, __s3local0.sublayerDisp.mc_scrollHandle.btn_slider, __s3local0.sublayerDisp.mc_scrollHandle.mc_sliderLine, [__s3local0.sublayerDisp.mc_scrollHandle]));
    __s3local0._scrollComponent.invisibleOnFit = true;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.sublayerDisp.btn_appyForMembership);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceInfoDialogOverview, __s1param0);
  CastleAllianceInfoDialogOverview.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this._scrollComponent.onShow();
    this.itxt_memberCount.textContentVO.numberValue = this.allianceInfoVO.memberAmount;
    this.itxt_leaderName.textContentVO.stringValue = this.allianceInfoVO.allianceLeader ? this.allianceInfoVO.allianceLeader.playerName : "";
    this.itxt_allianceDescription.textContentVO.stringValue = this.allianceInfoVO.allianceDescription;
    this.itxt_honorAmount.textContentVO.numberValue = this.allianceInfoVO.allianceHonor;
    this.itxt_fameAmount.textContentVO.numberValue = this.allianceInfoVO.allianceFameLevel;
    this.itxt_languageName.textContentVO.textId = this.allianceInfoVO.allianceLanguage ? "language_native_" + this.allianceInfoVO.allianceLanguage : "dialog_allLanguages_desc";
    this.sublayerDisp.btn_appyForMembership.visible = !__dep_export_CastleModel.CastleModel.userData.isInAlliance;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.sublayerDisp.btn_appyForMembership, true);
    if (this.allianceInfoVO.isAcceptingMembers) {
      this.sublayerDisp.btn_appyForMembership.gotoAndStop(2);
      this.textFieldManager.registerTextField(this.sublayerDisp.btn_appyForMembership.btn_join.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_joinAlliance_Button"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
      this.sublayerDisp.btn_appyForMembership.toolTipText = "dialog_alliance_joinAlliance_Button_tooltip";
    } else if (this.allianceInfoVO.isSearchingMembers) {
      this.sublayerDisp.btn_appyForMembership.gotoAndStop(1);
      this.sublayerDisp.btn_appyForMembership.toolTipText = "dialog_alliance_applyForMembership";
    } else {
      this.sublayerDisp.btn_appyForMembership.gotoAndStop(1);
      this.sublayerDisp.btn_appyForMembership.toolTipText = "dialog_alliance_isntLookingForMembers";
    }
    this._scrollComponent.scrollToStart();
  };
  CastleAllianceInfoDialogOverview.prototype.hide = function () {
    this._scrollComponent.onHide();
    __s1param0.prototype.hide.call(this);
  };
  CastleAllianceInfoDialogOverview.prototype.onMouseUp = function (__s12param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s12param0.target)) {
      switch (__s12param0.target) {
        case this.sublayerDisp.btn_appyForMembership:
          if (this.sublayerDisp.btn_appyForMembership.currentFrame == 0) {
            this.onApplyForMembership();
          } else {
            this.onJoin();
          }
      }
    }
  };
  Object.defineProperty(CastleAllianceInfoDialogOverview.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInfoDialogOverview.prototype.onApplyForMembership = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleApplyForMembershipDialog.CastleApplyForMembershipDialog, new __dep_export_CastleApplyForMembershipDialogProperties.CastleApplyForMembershipDialogProperties(this.allianceInfoVO));
  };
  CastleAllianceInfoDialogOverview.prototype.onJoin = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinOpenAllianceVO.C2SJoinOpenAllianceVO(this.allianceInfoVO.allianceId));
    this.layoutManager.hideDialog(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog);
    this.layoutManager.hideDialog(__dep_export_CastleSearchAllianceDialog.CastleSearchAllianceDialog);
  };
  Object.defineProperty(CastleAllianceInfoDialogOverview.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceInfoDialogOverview;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceInfoDialogOverview = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleApplyForMembershipDialog = require("gge-module:export_CastleApplyForMembershipDialog");
var __dep_export_CastleSearchAllianceDialog = require("gge-module:export_CastleSearchAllianceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
