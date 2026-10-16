Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function ResearchPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResearchPanelButton, __s1param0);
  ResearchPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  ResearchPanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
    __s1param0.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(ResearchPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Research;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  ResearchPanelButton.prototype.isButtonEnabled = function () {
    if (__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      return false;
    }
    var __s13local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__dep_export_ClientConstCastle.ClientConstCastle.WID_RESEARCH_TOWER, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __s13local0.requiredLevel;
  };
  ResearchPanelButton.prototype.getButtonTooltip = function () {
    var __s16local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__dep_export_ClientConstCastle.ClientConstCastle.WID_RESEARCH_TOWER, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
    if (this.isButtonEnabled()) {
      return "research";
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("research") + ": " + __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED, [__s16local0.requiredLevel]);
    }
  };
  ResearchPanelButton.prototype.onButtonClicked = function () {
    if (__dep_export_CastleModel.CastleModel.researchData.isResearchTowerBuilt) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleResearchDialog.CastleResearchDialog);
    } else if (__dep_export_CastleComponent.CastleComponent.layoutManager.isInMyCastle && __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyMainCastle && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID) {
      this.onJoinMainCastle(null);
    } else {
      __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle().objectId, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID));
    }
  };
  ResearchPanelButton.prototype.onJoinMainCastle = function (__s25param0) {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
    var __s25local0 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_Iso.Iso.renderer.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.RESEARCH_TOWER), "ABasicBuildingVE");
    if (__s25local0) {
      __dep_export_Iso.Iso.renderer.camera.scrollToGridPos(__s25local0.vo.pos);
      __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(__s25local0);
    } else {
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var __s25local1 = __dep_export_CastleComponent.CastleComponent.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel);
      var __s25local2 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.RESEARCH_BUILDING_WOD_LEVEL1);
      if (!__s25local1.centerAndHighlightBuildingInShop(__s25local2)) {
        __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_warningTitle"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_warning")));
      }
    }
  };
  return ResearchPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.ResearchPanelButton = __s0local0;
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleResearchDialog = require("gge-module:export_CastleResearchDialog");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
