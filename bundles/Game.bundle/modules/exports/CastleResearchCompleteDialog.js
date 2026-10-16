Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleResearchDialogProperties = require("gge-module:export_CastleResearchDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleResearchCompleteDialog() {
    return __s1param0.call(this, CastleResearchCompleteDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResearchCompleteDialog, __s1param0);
  CastleResearchCompleteDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_researchTower_completePopup_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_researchTower_completePopup_jumpTo")));
  };
  CastleResearchCompleteDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = this.dialogProperties.researchVO;
    __dep_export_ResearchIconHelper.ResearchIconHelper.addResearchIcon(__s7local0.groupVO, this.dialogDisp.mc_icon);
    this.updateColorOfDisp(this.dialogDisp.content_research_tower_skill_color);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local0.descriptionTextId, __s7local0.descriptionTextReplacements));
    this.dialogDisp.mc_icon.mouseChildren = false;
    this.dialogDisp.mc_icon.toolTipText = __s7local0.groupVO.toolTip;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_level.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s7local0.level, __s7local0.groupVO.maxLevel]));
  };
  CastleResearchCompleteDialog.prototype.onClick = function (__s9param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      switch (__s9param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onClickShowButton();
          this.hide();
      }
    }
  };
  CastleResearchCompleteDialog.prototype.updateColorOfDisp = function (__s13param0) {
    var __s13local0;
    var __s13local1 = this.dialogProperties.researchVO;
    __s13local0 = !__s13local1.groupVO || this.isLocked ? __dep_export_ResearchTreeItem.ResearchTreeItem.LOCKED : __s13local1.groupVO.isFullyResearched ? __dep_export_ResearchTreeItem.ResearchTreeItem.GREEN : __s13local1.groupVO.currentLevel == 0 ? __dep_export_ResearchTreeItem.ResearchTreeItem.NORMAL : __dep_export_ResearchTreeItem.ResearchTreeItem.YELLOW;
    __s13param0.useFilters([new createjs.ColorFilter(__s13local0.redMultiplier, __s13local0.greenMultiplier, __s13local0.blueMultiplier, __s13local0.alphaMultiplier, __s13local0.redOffset, __s13local0.greenOffset, __s13local0.blueOffset, __s13local0.alphaOffset)]);
  };
  CastleResearchCompleteDialog.prototype.onClickShowButton = function () {
    if (__dep_export_CastleModel.CastleModel.researchData.isResearchTowerBuilt) {
      this.jumpToResearch();
    } else if (this.layoutManager.isInMyCastle && __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyMainCastle && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID) {
      this.onJoinMainCastle(null);
    } else {
      this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle().objectId, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID));
    }
  };
  CastleResearchCompleteDialog.prototype.onJoinMainCastle = function (__s20param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
    if (castAs(__dep_export_Iso.Iso.renderer.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.RESEARCH_TOWER), "ABasicBuildingVE")) {
      this.jumpToResearch();
    }
  };
  CastleResearchCompleteDialog.prototype.jumpToResearch = function () {
    var __s23local0 = this.findNextResearch();
    var __s23local1 = this.layoutManager.getDialog(__dep_export_CastleResearchDialog.CastleResearchDialog);
    if (__s23local1 && __s23local1.isVisible()) {
      __s23local1.openNextResearch(__s23local0, this.dialogProperties.researchVO);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleResearchDialog.CastleResearchDialog, new __dep_export_CastleResearchDialogProperties.CastleResearchDialogProperties(__s23local0, this.dialogProperties.researchVO));
    }
  };
  CastleResearchCompleteDialog.prototype.findNextResearch = function () {
    if (this.dialogProperties.researchVO.level < this.dialogProperties.researchVO.groupVO.maxLevel) {
      return this.dialogProperties.researchVO.groupVO.getResearchByLevel(this.dialogProperties.researchVO.level + 1);
    }
    if (this.dialogProperties.researchVO.nextResearch) {
      return this.dialogProperties.researchVO.nextResearch;
    }
    var __s27local0;
    var __s27local1 = Array.from(__dep_export_CastleModel.CastleModel.researchData.groupVOs.values());
    for (var __s27local2 = 0, __s27local3 = __s27local1; __s27local2 < __s27local3.length; __s27local2++) {
      if ((__s27local6 = __s27local3[__s27local2]) !== undefined && (__s27local0 = __s27local6).tabId == this.dialogProperties.researchVO.groupVO.tabId && __s27local0.isResearchable) {
        return __s27local0.topResearch;
      }
    }
    for (var __s27local4 = 0, __s27local5 = __s27local1; __s27local4 < __s27local5.length; __s27local4++) {
      var __s27local6;
      if ((__s27local6 = __s27local5[__s27local4]) !== undefined && (__s27local0 = __s27local6).tabId != this.dialogProperties.researchVO.groupVO.tabId && __s27local0.isResearchable) {
        return __s27local0.topResearch;
      }
    }
  };
  Object.defineProperty(CastleResearchCompleteDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchCompleteDialog.NAME = "ModernResearchComplete";
  return CastleResearchCompleteDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleResearchCompleteDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ResearchIconHelper = require("gge-module:export_ResearchIconHelper");
var __dep_export_CastleResearchDialog = require("gge-module:export_CastleResearchDialog");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ResearchTreeItem = require("gge-module:export_ResearchTreeItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
