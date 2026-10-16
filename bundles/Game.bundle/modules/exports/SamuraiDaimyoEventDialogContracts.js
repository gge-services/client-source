Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SamuraiDaimyoDataXml = require("gge-module:export_SamuraiDaimyoDataXml");
var __dep_export_SamuraiDaimyoEvent = require("gge-module:export_SamuraiDaimyoEvent");
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_SimpleProgressBarComponent = require("gge-module:export_SimpleProgressBarComponent");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function SamuraiDaimyoEventDialogContracts(__s3param0) {
    var __s3local0 = this;
    __s3local0._receivedContractData = false;
    __s3local0._receivedAreaData = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoEventDialogContracts, __s1param0);
  SamuraiDaimyoEventDialogContracts.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.subLayerDisp.mc_questInfo.btn_showMe, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("allianceContracts"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_questInfo.txt_rewardsTitle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rewards"))).autoFitToBounds = true;
    this.subLayerDisp.mc_questInfo.btn_showMe.toolTipText = "dialog_questInfo_showMe";
    this._selection = new __dep_export_SamuraiDaimyoEventDialogContractsSelection.SamuraiDaimyoEventDialogContractsSelection(this.subLayerDisp.mc_questList, new __dep_export_AccordionComponentProperties.AccordionComponentProperties(__dep_export_AccordionComponentProperties.AccordionComponentProperties.SCROLL_DURATION, 48, true, true, __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical));
    this._rewards = new __dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent(this.subLayerDisp.mc_questInfo, true, false);
  };
  SamuraiDaimyoEventDialogContracts.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this.controller.addEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_CONTRACTS_UPDATED, this.bindFunction(this.onContractsUpdated));
    this.controller.addEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_AREAS_UPDATED, this.bindFunction(this.onAreasUpdated));
    this._selection.onSelection.add(this.bindFunction(this.onContractSelection));
    this._selection.show();
    this._receivedContractData = false;
    this._receivedAreaData = false;
    __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.requestGDC();
    __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.requestGDA();
  };
  SamuraiDaimyoEventDialogContracts.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_CONTRACTS_UPDATED, this.bindFunction(this.onContractsUpdated));
    this.controller.removeEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_AREAS_UPDATED, this.bindFunction(this.onAreasUpdated));
    this._selection.onSelection.remove(this.bindFunction(this.onContractSelection));
    this._selection.hide();
    __s1param0.prototype.hide.call(this);
  };
  SamuraiDaimyoEventDialogContracts.prototype.updateContractSelection = function () {
    if (this._receivedAreaData && this._receivedContractData) {
      this._selection.clear();
      var __s11local0 = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 6, 0, 0), true, 0.2, 0.2);
      this._selection.addItem(new __dep_export_SamuraiDaimyoEventDialogContractsCategory.SamuraiDaimyoEventDialogContractsCategory(__dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, __s11local0));
      this._selection.addItem(new __dep_export_SamuraiDaimyoEventDialogContractsCategory.SamuraiDaimyoEventDialogContractsCategory(__dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_TOWNSHIP, __s11local0));
      for (var __s11local1 = 0, __s11local2 = this._selection.items; __s11local1 < __s11local2.length; __s11local1++) {
        var __s11local3 = __s11local2[__s11local1];
        if (__s11local3 !== undefined) {
          __s11local3.onShow();
        }
      }
      this._selection.onItemChangeComplete();
      this._selection.reselectPreviousContract();
    }
  };
  SamuraiDaimyoEventDialogContracts.prototype.updateContractInfo = function () {
    var __s17local0 = this.subLayerDisp.mc_questInfo;
    var __s17local1 = this._selection.getSelectedContract();
    var __s17local2 = __s17local1.getXmlContractVO();
    var __s17local3 = __dep_exact_f855840627e6e145.int(__s17local1.progressVO.points);
    var __s17local4 = __s17local2.shogunPoints;
    this.textFieldManager.registerTextField(__s17local0.txt_name, __s17local1.getNameTextVO()).autoFitToBounds = true;
    this.textFieldManager.registerTextField(__s17local0.txt_rank, __s17local1.getRankTextVO()).autoFitToBounds = true;
    this.textFieldManager.registerTextField(__s17local0.txt_desc, __s17local1.getDescriptionTextVO());
    this.textFieldManager.registerTextField(__s17local0.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("contracts_condition_score", [__s17local4 - __s17local3])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(__s17local0.mc_progress.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("numbersXY", [__s17local3, __s17local4])).autoFitToBounds = true;
    new __dep_export_SimpleProgressBarComponent.SimpleProgressBarComponent(__s17local0.mc_progress, 310).setProgressByPercent(__s17local3 / __s17local4);
    var __s17local5 = new __dep_export_CollectableList.CollectableList();
    __s17local5.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.WAR_EFFORT_POINTS, __s17local2.warEffortPoints));
    this._rewards.updateWithNewData(__s17local5);
  };
  SamuraiDaimyoEventDialogContracts.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    switch (__s19param0.target) {
      case this.subLayerDisp.mc_questInfo.btn_showMe:
        this.onShowMeButtonClicked();
    }
  };
  SamuraiDaimyoEventDialogContracts.prototype.onShowMeButtonClicked = function () {
    var __s22local0 = this._selection.getSelectedContract();
    var __s22local1 = __s22local0.getXmlContractVO();
    var __s22local2 = __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.getArea(__s22local0.contractType, __s22local1.rank);
    var __s22local3 = new __dep_export_DaimyoCastleMapObjectVO.DaimyoCastleMapObjectVO();
    __s22local3.parseAreaInfo([__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_CASTLE, __s22local2.x, __s22local2.y]);
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __s22local3);
  };
  SamuraiDaimyoEventDialogContracts.prototype.onContractsUpdated = function (__s24param0) {
    this._receivedContractData = true;
    this.updateContractSelection();
  };
  SamuraiDaimyoEventDialogContracts.prototype.onContractSelection = function () {
    this.updateContractInfo();
  };
  SamuraiDaimyoEventDialogContracts.prototype.onAreasUpdated = function (__s28param0) {
    this._receivedAreaData = true;
    this.updateContractSelection();
  };
  return SamuraiDaimyoEventDialogContracts;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.SamuraiDaimyoEventDialogContracts = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_DaimyoCastleMapObjectVO = require("gge-module:export_DaimyoCastleMapObjectVO");
var __dep_export_SeasonLeagueSimpleRewardsComponent = require("gge-module:export_SeasonLeagueSimpleRewardsComponent");
var __dep_export_SamuraiDaimyoEventDialogContractsCategory = require("gge-module:export_SamuraiDaimyoEventDialogContractsCategory");
var __dep_export_SamuraiDaimyoEventDialogContractsSelection = require("gge-module:export_SamuraiDaimyoEventDialogContractsSelection");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
