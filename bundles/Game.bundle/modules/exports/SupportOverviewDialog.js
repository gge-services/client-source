Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SCancelMovementVO = require("gge-module:export_C2SCancelMovementVO");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function SupportOverviewDialog() {
    var __s3local0 = this;
    __s3local0.unitListDefaultY = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, SupportOverviewDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SupportOverviewDialog, __s1param0);
  SupportOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_supportOverview_header"))));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addMouseWheelElements([this.dialogDisp]).addVisualElements([this.dialogDisp.mc_slider]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true), true);
    this.dialogDisp.mc_unitList.mask = this.dialogDisp.mc_mask;
    this.unitListDefaultY = __dep_exact_f855840627e6e145.int(this.dialogDisp.mc_unitList.y);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_retreat], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  SupportOverviewDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateTextIDs();
    this.getSupportMovements();
    this.showSourceCastle();
    this.showTargetCastle();
    this.updateCrests();
    this.updateTroopInfo();
    this.fillTroopList();
    this.updateSkin();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  SupportOverviewDialog.prototype.updateTextIDs = function () {
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.dialogProperties.mapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_troopsHeader, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_beyondTheHorizon_AllianceTower_supportOverview_YourTroops_header"))));
      this.dialogDisp.btn_retreat.toolTipText = "dialog_beyondTheHorizon_AllianceTower_supportOverview_YourTroopsRetreat_tooltip";
      this.dialogDisp.icon_unitCount.toolTipText = "dialog_beyondTheHorizon_AllianceTower_supportOverview_YourTroopsAtTower_tooltip";
      this.dialogDisp.icon_foodConsumption.toolTipText = "dialog_beyondTheHorizon_AllianceTower_supportOverview_YourTroopsFoodConsumption_tooltip";
      this.dialogDisp.icon_meadConsumption.toolTipText = "meadwastage";
      this.dialogDisp.icon_beefConsumption.toolTipText = "beefwastage";
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_troopsHeader, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_supportOverview_defendingTroop_header"))));
      this.dialogDisp.btn_retreat.toolTipText = "dialog_supportOverview_retreat_tooltip";
      this.dialogDisp.icon_unitCount.toolTipText = "dialog_supportOverview_troops_tooltip";
      this.dialogDisp.icon_foodConsumption.toolTipText = "dialog_supportOverview_food_tooltip";
      this.dialogDisp.icon_meadConsumption.toolTipText = "meadwastage";
      this.dialogDisp.icon_beefConsumption.toolTipText = "beefwastage";
    }
  };
  SupportOverviewDialog.prototype.hideLoaded = function (__s13param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s13param0);
    this.supportMovements = null;
    this.scrollComponent.hide();
    this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    this.dialogDisp.mc_unitList.y = this.unitListDefaultY;
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  SupportOverviewDialog.prototype.getSupportMovements = function () {
    this.supportMovements = [];
    for (var __s15local0 = 0, __s15local1 = Array.from(__dep_export_CastleModel.CastleModel.armyData.mapMovements.values()); __s15local0 < __s15local1.length; __s15local0++) {
      var __s15local2 = __s15local1[__s15local0];
      if (__s15local2 !== undefined && __s15local2.isMyMovement && __s15local2.targetArea.absAreaPos.equals(this.dialogProperties.mapObjectVO.absAreaPos) && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s15local2, "SupportDefenceMapmovementVO")) {
        this.supportMovements.push(__s15local2);
      }
    }
    this.dialogDisp.btn_retreat.visible = this.supportMovements.length > 0;
  };
  SupportOverviewDialog.prototype.showSourceCastle = function () {
    var __s20local0;
    __s20local0 = this.supportMovements.length <= 0 ? __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(0) : this.supportMovements[0].sourceArea;
    this.itxtNameSourceCastle = this.textFieldManager.registerTextField(this.dialogDisp.info_sourceCastle.txt_castleName, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxtNameSourceCastle.autoFitToBounds = true;
    this.itxtNameSourceCastle.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxtNameSourceCastle.textContentVO.stringValue = __s20local0.areaNameString;
    this.itxtNameSourceCastle.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.icon_sourceCastle);
    this.dialogDisp.icon_sourceCastle.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s20local0, SupportOverviewDialog.CASTLE_SIZE, true, false, false, "", null));
  };
  SupportOverviewDialog.prototype.showTargetCastle = function () {
    this.itxtNameTargetCastle = this.textFieldManager.registerTextField(this.dialogDisp.info_targetCastle.txt_castleName, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxtNameTargetCastle.autoFitToBounds = true;
    this.itxtNameTargetCastle.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxtNameTargetCastle.textContentVO.stringValue = this.dialogProperties.mapObjectVO.areaNameString;
    this.itxtNameTargetCastle.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.icon_targetCastle);
    this.dialogDisp.icon_targetCastle.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.mapObjectVO, SupportOverviewDialog.CASTLE_SIZE, true, false, false, "", null));
  };
  SupportOverviewDialog.prototype.updateCrests = function () {
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest_source, __dep_export_CastleModel.CastleModel.userData.playerCrest, null, true);
    if (this.dialogProperties.mapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      this.dialogDisp.mc_crest_target.visible = true;
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest_target, __dep_export_CastleModel.CastleModel.userData.playerCrest, null, true);
      if (this._allianceCrestContainer) {
        this._allianceCrestContainer.visible = false;
      }
    } else {
      this.dialogDisp.mc_crest_target.visible = false;
      if (!this._allianceCrestContainer) {
        this._allianceCrestContainer = new __s0local0();
        this._allianceCrestContainer.x = this.dialogDisp.mc_crest_target.x;
        this._allianceCrestContainer.y = this.dialogDisp.mc_crest_target.y;
        this.dialogDisp.addChild(this._allianceCrestContainer);
      }
      this._allianceCrestContainer.visible = true;
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this._allianceCrestContainer, this.dialogProperties.mapObjectVO.ownerInfo.allianceCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.S, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
    }
  };
  SupportOverviewDialog.prototype.updateTroopInfo = function () {
    var __s30local0 = 0;
    var __s30local1 = 0;
    var __s30local2 = 0;
    var __s30local3 = 0;
    if (this.supportMovements != null) {
      for (var __s30local4 = 0, __s30local5 = this.supportMovements; __s30local4 < __s30local5.length; __s30local4++) {
        var __s30local6 = __s30local5[__s30local4];
        if (__s30local6 !== undefined) {
          __s30local0 += __dep_exact_f855840627e6e145.int(__s30local6.armySize);
          __s30local1 += __dep_exact_f855840627e6e145.int(__s30local6.foodSupply);
          __s30local2 += __dep_exact_f855840627e6e145.int(__s30local6.meadSupply);
          __s30local3 += __dep_exact_f855840627e6e145.int(__s30local6.beefSupply);
        }
      }
    }
    if (this.dialogProperties.capacity > -1) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_unitCount, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s30local0, this.dialogProperties.capacity]));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_unitCount, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s30local0));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_foodConsumption, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s30local1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_meadConsumption, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s30local2)).visible = __s30local2 > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_beefConsumption, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s30local3)).visible = __s30local3 > 0;
    this.dialogDisp.icon_meadConsumption.visible = __s30local2 > 0;
    this.dialogDisp.icon_beefConsumption.visible = __s30local3 > 0;
  };
  SupportOverviewDialog.prototype.fillTroopList = function () {
    this.destroyCollectableRenderList();
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_unitList);
    var __s38local0 = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    if (this.supportMovements != null) {
      for (var __s38local1 = 0, __s38local2 = this.supportMovements; __s38local1 < __s38local2.length; __s38local1++) {
        var __s38local3 = __s38local2[__s38local1];
        if (__s38local3 !== undefined) {
          var __s38local4 = __s38local3.inventory.getSoldiers();
          if (__s38local4 != null) {
            for (var __s38local5 = 0, __s38local6 = __s38local4; __s38local5 < __s38local6.length; __s38local5++) {
              var __s38local7 = __s38local6[__s38local5];
              if (__s38local7 !== undefined) {
                __s38local0.addUnit(__s38local7.wodId, __s38local7.inventoryAmount);
              }
            }
          }
        }
      }
    }
    var __s38local8 = __s38local0.getSoldiers();
    __s38local8.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    var __s38local9;
    var __s38local10;
    var __s38local11;
    var __s38local12 = __dep_exact_81dacdf05bd32292_1.getDefinitionByName("DaimyoSupportOverviewItemMC");
    for (var __s38local13 = 0; __s38local13 < __s38local8.length; __s38local13++) {
      var __s38local14 = new __s38local12();
      __s38local14.y = Math.floor(__s38local13 / SupportOverviewDialog.UNITS_PER_ROW) * (SupportOverviewDialog.UNIT_GAP + SupportOverviewDialog.UNIT_ITEM_SIZE.y);
      __s38local14.x = __s38local13 % SupportOverviewDialog.UNITS_PER_ROW * (SupportOverviewDialog.UNIT_GAP + SupportOverviewDialog.UNIT_ITEM_SIZE.x);
      this.dialogDisp.mc_unitList.addChild(__s38local14);
      __s38local9 = __s38local8[__s38local13];
      (__s38local10 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s38local14.mc_item)).addIconMc(__s38local14.mc_item.mc_icon);
      __s38local10.addInfoBtn(__s38local14.btn_info);
      __s38local11 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.UNITS, __s38local9.inventoryAmount, __s38local9.wodId);
      var __s38local15 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, SupportOverviewDialog.UNIT_SIZE);
      __s38local15.tooltip.useAmount = false;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, __s38local10, __s38local11, __s38local15);
    }
    var __s38local16 = __dep_exact_f855840627e6e145.int(Math.max(0, this.dialogDisp.mc_unitList.height - this.dialogDisp.mc_mask.height + SupportOverviewDialog.UNIT_GAP * 2));
    this.scrollComponent.init(0, __s38local16, SupportOverviewDialog.SCROLL_STEP, SupportOverviewDialog.SCROLL_STEP);
    this.scrollComponent.strategy.visibleValue = this.dialogDisp.mc_mask.height;
    this.scrollComponent.setVisibility(__s38local16 > 0);
    this.scrollComponent.show();
  };
  SupportOverviewDialog.prototype.updateSkin = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_bgSkin);
    var __s50local0 = SupportOverviewDialog.DEFAUL_SKIN_NAME;
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer && __dep_export_SpecialServerHelper.SpecialServerHelper.skinName) {
      __s50local0 += "_" + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    }
    var __s50local1 = __dep_exact_81dacdf05bd32292_1.getDefinitionByName(__s50local0);
    __s50local1 ||= __dep_exact_81dacdf05bd32292_1.getDefinitionByName(SupportOverviewDialog.DEFAUL_SKIN_NAME);
    var __s50local2 = new __s50local1();
    this.dialogDisp.mc_bgSkin.addChild(__s50local2);
  };
  SupportOverviewDialog.prototype.onScroll = function () {
    this.dialogDisp.mc_unitList.y = this.unitListDefaultY - this.scrollComponent.currentValue;
  };
  SupportOverviewDialog.prototype.onEventEnd = function (__s55param0) {
    if (__s55param0.specialEventVO.eventId == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION) {
      this.hide();
    }
  };
  SupportOverviewDialog.prototype.onClick = function (__s58param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s58param0.target)) {
      switch (__s58param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.dialogProperties.mapObjectVO, "ABGAllianceTowerMapobjectVO")) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_beyondTheHorizon_AllianceTower_supportOverview"));
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_supportOverview"));
          }
          break;
        case this.dialogDisp.btn_retreat:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_moveOverview_sendHome"), __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_retreatYesNo_copy"), this.bindFunction(this.onClickRetreat)));
      }
      __s1param0.prototype.onClick.call(this, __s58param0);
    }
  };
  SupportOverviewDialog.prototype.onClickRetreat = function (__s64param0) {
    if (this.supportMovements != null) {
      for (var __s64local0 = 0, __s64local1 = this.supportMovements; __s64local0 < __s64local1.length; __s64local0++) {
        var __s64local2 = __s64local1[__s64local0];
        if (__s64local2 !== undefined) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCancelMovementVO.C2SCancelMovementVO(__s64local2.objectId));
        }
      }
    }
    this.hide();
  };
  Object.defineProperty(SupportOverviewDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SupportOverviewDialog.__initialize_static_members = function () {
    SupportOverviewDialog.CASTLE_SIZE = new __s0local1(80, 70);
    SupportOverviewDialog.UNIT_SIZE = new __s0local1(64, 62);
    SupportOverviewDialog.UNIT_ITEM_SIZE = new __s0local1(72, 71);
  };
  SupportOverviewDialog.NAME = "SupportOverview_N";
  SupportOverviewDialog.UNITS_PER_ROW = 6;
  SupportOverviewDialog.UNIT_GAP = 20;
  SupportOverviewDialog.SCROLL_STEP = 46;
  SupportOverviewDialog.DEFAUL_SKIN_NAME = "SupportOverviewBG";
  return SupportOverviewDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SupportOverviewDialog = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
__s0local2.__initialize_static_members();
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
