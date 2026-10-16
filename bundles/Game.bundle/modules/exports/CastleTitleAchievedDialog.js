Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_C2SSelectTitleVO = require("gge-module:export_C2SSelectTitleVO");
var __dep_export_CastleTitleDataEvent = require("gge-module:export_CastleTitleDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleTitleMainDialogProperties = require("gge-module:export_CastleTitleMainDialogProperties");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleTitleAchievedDialog() {
    var __s3local0 = this;
    __s3local0.titleInfoOrignalY = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleTitleAchievedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleAchievedDialog, __s1param0);
  CastleTitleAchievedDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_titleUp_reachedNewTitle"));
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.mc_titleSelection.btn_titleSelection, this.dialogDisp.mc_titleSelection.btn_titles]);
    this.dialogDisp.mc_titleSelection.btn_titleSelection.mouseChildren = false;
    this.dialogDisp.mc_titleSelection.btn_titles.mouseChildren = false;
    this.titleInfoOrignalY = this.dialogDisp.mc_titleInfo.y;
    this.titleRewardComponent = new __dep_export_CastleTitleRewardComponent.CastleTitleRewardComponent(this.dialogDisp.mc_titleInfo.mc_titleReward);
    this.dispBounds = this.dialogDisp.crest.getBounds();
  };
  CastleTitleAchievedDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.crest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    this.setTitleInfo();
    this.setLayout();
    if (this.dialogDisp.mc_titleSelection.visible) {
      this.setTitleSelection();
    }
    __dep_export_CastleModel.CastleModel.titleData.addEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitlesUpdate));
    this.dialogDisp.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.loop));
  };
  CastleTitleAchievedDialog.prototype.loop = function (__s10param0) {
    this.dialogDisp.kreis.rotation += 4;
    this.dialogDisp.kreis.alpha += 0.03;
  };
  CastleTitleAchievedDialog.prototype.onTitlesUpdate = function (__s12param0) {
    this.setTitleSelection();
  };
  CastleTitleAchievedDialog.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    if (this.titleRewardComponent) {
      this.titleRewardComponent.destroy();
    }
  };
  CastleTitleAchievedDialog.prototype.setLayout = function () {
    if (this.titleData.getUsersTitleVectorFromSystem(__dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE).length == 0 && this.titleData.getUsersTitleVectorFromSystem(__dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE).length == 0) {
      this.dialogDisp.mc_titleInfo.y = this.titleInfoOrignalY - CastleTitleAchievedDialog.REORDER_OFFSET;
      this.dialogDisp.mc_titleSelection.visible = false;
    } else {
      this.dialogDisp.mc_titleInfo.y = this.titleInfoOrignalY;
      this.dialogDisp.mc_titleSelection.visible = true;
    }
  };
  CastleTitleAchievedDialog.prototype.setTitleInfo = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_titleInfo.txt_titleSystem, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getTitleSystemTextID(this.dialogProperties.title.titleSystem, false)));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_titleInfo.txt_titleCurrent, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.title.textID));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_titleInfo.txt_rewardHeader, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("reward"));
    __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.setTitleSystemIcon(this.dialogDisp.mc_titleInfo.icon_system_left, this.dialogProperties.title.titleSystem, CastleTitleAchievedDialog.SYSTEM_ICON_DIMENSION_HEADER);
    __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.setTitleSystemIcon(this.dialogDisp.mc_titleInfo.icon_system_right, this.dialogProperties.title.titleSystem, CastleTitleAchievedDialog.SYSTEM_ICON_DIMENSION_HEADER);
    this.titleRewardComponent.show(this.dialogProperties.title, this.dialogProperties.alreadyAchieved);
  };
  CastleTitleAchievedDialog.prototype.setTitleSelection = function () {
    var __s23local0 = this.dialogProperties.title.titleSystem == this.titleData.getSelectedTitleSystem(this.dialogProperties.title.displayType);
    var __s23local1 = __s23local0 ? "dialog_titleUp_displayTitle_unavailable" : "dialog_titleUp_displayTitle";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_titleSelection.btn_titleSelection.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s23local1));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_titleSelection.btn_titleSelection, !__s23local0);
    __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.setTitleSystemIcon(this.dialogDisp.mc_titleSelection.btn_titles.icon_system, this.dialogProperties.title.titleSystem, CastleTitleAchievedDialog.SYSTEM_ICON_DIMENSION_BUTTON);
    this.dialogDisp.mc_titleSelection.btn_titles.toolTipText = __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getTitleSystemTextID(this.dialogProperties.title.titleSystem);
  };
  CastleTitleAchievedDialog.prototype.onClick = function (__s25param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s25param0.target)) {
      switch (__s25param0.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.mc_titleSelection.btn_titleSelection:
          this.sendSelectTitleCommand();
          break;
        case this.dialogDisp.mc_titleSelection.btn_titles:
          this.openTitleDialog();
      }
    }
  };
  CastleTitleAchievedDialog.prototype.hideLoaded = function (__s29param0 = null) {
    this.dialogDisp.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.loop));
    __s1param0.prototype.hideLoaded.call(this, __s29param0);
    __dep_export_CastleModel.CastleModel.titleData.removeEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitlesUpdate));
  };
  CastleTitleAchievedDialog.prototype.openTitleDialog = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleTitleMainDialog.CastleTitleMainDialog, new __dep_export_CastleTitleMainDialogProperties.CastleTitleMainDialogProperties(this.dialogProperties.title.titleSystem));
  };
  CastleTitleAchievedDialog.prototype.sendSelectTitleCommand = function () {
    if (this.dialogProperties.title.displayType == __dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_PREFIX) {
      var __s33local0 = this.titleData.getSelectedTitleByDisplayType(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_SUFFIX).titleSystem;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSelectTitleVO.C2SSelectTitleVO(this.dialogProperties.title.titleSystem, __s33local0));
    } else {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSelectTitleVO.C2SSelectTitleVO(this.titleData.getSelectedTitleByDisplayType(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_PREFIX).titleSystem, this.dialogProperties.title.titleSystem));
    }
  };
  Object.defineProperty(CastleTitleAchievedDialog.prototype, "titleData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.titleData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleAchievedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleAchievedDialog.__initialize_static_members = function () {
    CastleTitleAchievedDialog.NAME = "CastleTitleAchieved";
    CastleTitleAchievedDialog.SYSTEM_ICON_DIMENSION_HEADER = new __s0local1(30, 28.85);
    CastleTitleAchievedDialog.SYSTEM_ICON_DIMENSION_BUTTON = new __s0local1(34, 32.85);
  };
  CastleTitleAchievedDialog.REORDER_OFFSET = -30;
  return CastleTitleAchievedDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTitleAchievedDialog = __s0local2;
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleTitleMainDialog = require("gge-module:export_CastleTitleMainDialog");
var __dep_export_CastleTitleRewardComponent = require("gge-module:export_CastleTitleRewardComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
