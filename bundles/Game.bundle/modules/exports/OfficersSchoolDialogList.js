Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SGetTrainingProgramInfoVO = require("gge-module:export_C2SGetTrainingProgramInfoVO");
var __dep_export_C2SProlongTrainingProgramVO = require("gge-module:export_C2SProlongTrainingProgramVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_OfficersSchoolDataEvent = require("gge-module:export_OfficersSchoolDataEvent");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_EventIconHelper = require("gge-module:export_EventIconHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_ModernCostConfirmationDialogProperties = require("gge-module:export_ModernCostConfirmationDialogProperties");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function OfficersSchoolDialogList(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.popupMC = __s3local0.subLayerDisp.mc_overlay;
    __s3local0.popupMC.visible = false;
    __s3local0.initBasicButtons([__s3local0.subLayerDisp.mc_activeEffect.mc_unit0.btn_info, __s3local0.subLayerDisp.mc_activeEffect.mc_unit1.btn_info]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.subLayerDisp.btn_reroll, __s3local0.popupMC.btn_left, __s3local0.popupMC.btn_right, __s3local0.popupMC.btn_close, __s3local0.subLayerDisp.mc_activeEffect.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    var __s3local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_OfficersSchoolEffectItem.OfficersSchoolEffectItem, "OfficersSchoolListItem", __dep_export_OfficersSchoolDialog.OfficersSchoolDialog.NAME);
    __s3local1.itemPaddingY = 2;
    __s3local1.useSmoothScroll = true;
    __s3local0._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s3local0.subLayerDisp.mc_list).addMaskMc(__s3local0.subLayerDisp.mc_mask).addItemContainerMc(__s3local0.subLayerDisp.mc_list).addSliderMc(__s3local0.subLayerDisp.mc_slider), __s3local1);
    __s3local0._scrollList.scrollComponent.scrollVO.addMouseWheelElements([__s3local0.disp]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OfficersSchoolDialogList, __s1param0);
  OfficersSchoolDialogList.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    __dep_export_CastleModel.CastleModel.officerSchoolData.addEventListener(__dep_export_OfficersSchoolDataEvent.OfficersSchoolDataEvent.DATA_UPDATED, this.bindFunction(this.updateData));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title0, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_overview_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_selectableEffect_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_reroll.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_reroll_button")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy0, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_currentlyActive_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_empty.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_trainingProgram_noProgram_desc"));
    this.textFieldManager.registerTextField(this.popupMC.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_trainingProgram_overlay_desc")).autoFitToBounds = true;
    this.remTimeTF = this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("resttime", [" "]));
    this.textFieldManager.registerTextField(this.popupMC.btn_left.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_overlay_freeRoll_Button")));
    this.textFieldManager.registerTextField(this.popupMC.btn_right.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_overlay_premiumRoll_Button")));
    this.popupMC.mc_free.toolTipText = "dialog_trainingProgram_overlay_freeRoll_tooltip";
    this.popupMC.mc_free.mouseChildren = false;
    __dep_exact_9e901e8e2483a22f_2.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetTrainingProgramInfoVO.C2SGetTrainingProgramInfoVO());
    this._scrollList.onShow();
  };
  OfficersSchoolDialogList.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._scrollList.onHide();
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    __dep_export_CastleModel.CastleModel.officerSchoolData.removeEventListener(__dep_export_OfficersSchoolDataEvent.OfficersSchoolDataEvent.DATA_UPDATED, this.bindFunction(this.updateData));
  };
  OfficersSchoolDialogList.prototype.updateData = function (__s9param0 = null) {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(" "));
    this.onTimerTick();
    this.updateActiveEffect();
    this.updateItems();
  };
  OfficersSchoolDialogList.prototype.updateItems = function () {
    var __s11local0 = [];
    for (var __s11local1 = 0; __s11local1 < __dep_export_CastleModel.CastleModel.officerSchoolData.availableEffectsList.length; __s11local1++) {
      var __s11local2 = {
        vo: __dep_export_CastleModel.CastleModel.officerSchoolData.availableEffectsList[__s11local1],
        pos: __s11local1
      };
      __s11local0.push(__s11local2);
    }
    this._scrollList.updateWithNewData(__s11local0);
  };
  OfficersSchoolDialogList.prototype.updateActiveEffect = function () {
    if (this.activeEffect) {
      var __s15local0 = this.subLayerDisp.mc_activeEffect;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s15local0.mc_event);
      __s15local0.mc_event.addChild(__dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this.activeEffect.eventID, new __s0local0(70, 70)));
      __s15local0.mc_event.toolTipText = "event_title_" + this.activeEffect.eventID;
      __s15local0.mc_event.mouseChildren = false;
      for (var __s15local1 = 0; __s15local1 < 2; __s15local1++) {
        var __s15local2 = __s15local0["mc_unit" + __s15local1];
        if (this.activeEffect.wodIDs.length >= __s15local1 + 1) {
          __s15local2.visible = true;
          __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this.activeEffect.wodIDs[__s15local1]), __s15local2.mc_icon, 78, 78, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1]);
          __s15local2.mc_icon.mouseChildren = false;
          __s15local2.mc_icon.toolTipText = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this.activeEffect.wodIDs[__s15local1]).getNameString();
        } else {
          __s15local2.visible = false;
        }
      }
      this.textFieldManager.registerTextField(__s15local0.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_trainingProgram_effect_" + this.activeEffect.effectVO.name, [this.activeEffect.bonusVO.strength]));
      this.textFieldManager.registerTextField(__s15local0.mc_cost.txt_cost, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.c2ProlongCosts.amount));
      this.setCollItem(__s15local0.mc_cost.mc_icon, this.c2ProlongCosts);
      this.textFieldManager.registerTextField(__s15local0.btn_ok.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_prolongEffect_button")));
    }
  };
  OfficersSchoolDialogList.prototype.setCollItem = function (__s22param0, __s22param1) {
    var __s22local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(30, 30));
    __s22local0.tooltip.useAmount = false;
    var __s22local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips();
    __s22local1.addIconMc(__s22param0);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s22local1, __s22param1, __s22local0);
  };
  Object.defineProperty(OfficersSchoolDialogList.prototype, "c2ProlongCosts", {
    get: function () {
      return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.C2, __dep_export_CastleModel.CastleModel.officerSchoolData.getC2ProlongCosts());
    },
    enumerable: true,
    configurable: true
  });
  OfficersSchoolDialogList.prototype.onTimerTick = function (__s26param0 = null) {
    this.remTimeTF.visible = this.isEffectActive;
    this.subLayerDisp.mc_empty.visible = !this.isEffectActive;
    this.remTime1TF ||= this.textFieldManager.registerTextField(this.subLayerDisp.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(" "));
    this.remTime1TF.visible = this.isEffectActive;
    if (this.isEffectActive) {
      this.remTime1TF.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.activeEffect.remainingTimeInSeconds, __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY, 1);
    }
  };
  OfficersSchoolDialogList.prototype.onClick = function (__s29param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s29param0.target)) {
      __s1param0.prototype.onClick.call(this, __s29param0);
      switch (__s29param0.target) {
        case this.subLayerDisp.btn_reroll:
          this.showPopup();
          break;
        case this.popupMC.btn_close:
          this.popupMC.visible = false;
          break;
        case this.popupMC.btn_left:
          this.layoutManager.showDialog(__dep_export_ModernCostConfirmationDialog.ModernCostConfirmationDialog, new __dep_export_ModernCostConfirmationDialogProperties.ModernCostConfirmationDialogProperties("dialog_trainingProgram_reroll_header", __dep_exact_92d05af59ee2ff30_3.Localize.text("dialog_trainingProgram_reroll_desc"), this.softRerollCosts, this.bindFunction(this.onConfirmSoftReroll)));
          break;
        case this.popupMC.btn_right:
          this.layoutManager.showDialog(__dep_export_ModernCostConfirmationDialog.ModernCostConfirmationDialog, new __dep_export_ModernCostConfirmationDialogProperties.ModernCostConfirmationDialogProperties("dialog_trainingProgram_premiumReroll_header", __dep_exact_92d05af59ee2ff30_3.Localize.text("dialog_trainingProgram_premiumReroll_desc"), this.hardRerollCosts, this.bindFunction(this.onConfirmHardReroll)));
          break;
        case this.subLayerDisp.mc_activeEffect.mc_unit0.btn_info:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(new __dep_export_CollectableItemUnitVO.CollectableItemUnitVO(this.activeEffect.wodIDs[0]).unitVO));
          break;
        case this.subLayerDisp.mc_activeEffect.mc_unit1.btn_info:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(new __dep_export_CollectableItemUnitVO.CollectableItemUnitVO(this.activeEffect.wodIDs[1]).unitVO));
          break;
        case this.subLayerDisp.mc_activeEffect.btn_ok:
          this.layoutManager.showDialog(__dep_export_ModernCostConfirmationDialog.ModernCostConfirmationDialog, new __dep_export_ModernCostConfirmationDialogProperties.ModernCostConfirmationDialogProperties("dialog_trainingProgram_prolongProgram_header", __dep_exact_92d05af59ee2ff30_3.Localize.text(this.activeEffect.prolongDurationInHours <= 1 ? "dialog_trainingProgram_prolongProgram_desc_singular" : "dialog_trainingProgram_prolongProgram_desc", [this.activeEffect.prolongDurationInHours]), this.c2ProlongCosts, this.bindFunction(this.onBuyProlong)));
      }
    }
  };
  OfficersSchoolDialogList.prototype.onConfirmSoftReroll = function (__s33param0 = null) {
    this.popupMC.visible = false;
    __dep_export_CastleModel.CastleModel.officerSchoolData.sendReroll(false);
  };
  OfficersSchoolDialogList.prototype.onConfirmHardReroll = function (__s35param0 = null) {
    this.popupMC.visible = false;
    __dep_export_CastleModel.CastleModel.officerSchoolData.sendReroll(true);
  };
  OfficersSchoolDialogList.prototype.onBuyProlong = function (__s37param0 = null) {
    __dep_exact_9e901e8e2483a22f_2.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SProlongTrainingProgramVO.C2SProlongTrainingProgramVO());
  };
  Object.defineProperty(OfficersSchoolDialogList.prototype, "isEffectActive", {
    get: function () {
      return !!this.activeEffect && this.activeEffect.remainingTimeInSeconds > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "activeEffect", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.officerSchoolData.activeEffectVO;
    },
    enumerable: true,
    configurable: true
  });
  OfficersSchoolDialogList.prototype.showPopup = function () {
    this.popupMC.visible = true;
    this.textFieldManager.registerTextField(this.popupMC.mc_free.txt_free1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.availableFreeSoftRerolls, this.freeSoftRerolls]));
    this.popupMC.mc_free.visible = this.availableFreeSoftRerolls > 0;
    this.popupMC.mc_cost0.visible = this.availableFreeSoftRerolls <= 0;
    if (this.popupMC.mc_cost0.visible && __dep_export_CastleModel.CastleModel.officerSchoolData.dailyCurrency >= 1) {
      var __s43local0 = this.reSoftCostVO.getEventCostsAsCollectableVOByID(__dep_export_CastleModel.CastleModel.officerSchoolData.dailyCurrency);
      this.setCollItem(this.popupMC.mc_cost0.mc_icon, __s43local0);
      this.textFieldManager.registerTextField(this.popupMC.mc_cost0.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s43local0.amount));
    }
    this.setCollItem(this.popupMC.mc_cost1.mc_icon, this.hardRerollCosts);
    this.textFieldManager.registerTextField(this.popupMC.mc_cost1.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.hardRerollCosts.amount));
  };
  Object.defineProperty(OfficersSchoolDialogList.prototype, "freeSoftRerolls", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.rerollCostData.getSoftCurrencyFreeRerollCountByType(__dep_export_CastleRerollCostData.CastleRerollCostData.REROLL_TYPE_OFFICERS_SCHOOL);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "rerollCountSoft", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.officerSchoolData.rerollCountSoftCurrency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "rerollCountHard", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.officerSchoolData.rerollCountHardCurrency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "availableFreeSoftRerolls", {
    get: function () {
      return this.freeSoftRerolls - this.rerollCountSoft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "reSoftCostVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.rerollCostData.getRerollCostsByTypeAndCount(__dep_export_CastleRerollCostData.CastleRerollCostData.REROLL_TYPE_OFFICERS_SCHOOL, this.rerollCountSoft + 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "reHardCostVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.rerollCostData.getRerollCostsByTypeAndCount(__dep_export_CastleRerollCostData.CastleRerollCostData.REROLL_TYPE_OFFICERS_SCHOOL, this.rerollCountHard + 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "softRerollCosts", {
    get: function () {
      var __s58local0 = this.reSoftCostVO.getEventCostsAsCollectableVOByID(__dep_export_CastleModel.CastleModel.officerSchoolData.dailyCurrency);
      __s58local0 ||= new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_CastleModel.CastleModel.officerSchoolData.dailyCurrency, 0);
      if (this.availableFreeSoftRerolls > 0) {
        __s58local0.amount = 0;
      }
      return __s58local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "hardRerollCosts", {
    get: function () {
      return new __dep_export_CollectableItemC2VO.CollectableItemC2VO(this.reHardCostVO.c2Cost);
    },
    enumerable: true,
    configurable: true
  });
  return OfficersSchoolDialogList;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.OfficersSchoolDialogList = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableItemUnitVO = require("gge-module:export_CollectableItemUnitVO");
var __dep_export_CastleRerollCostData = require("gge-module:export_CastleRerollCostData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_ModernCostConfirmationDialog = require("gge-module:export_ModernCostConfirmationDialog");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_OfficersSchoolDialog = require("gge-module:export_OfficersSchoolDialog");
var __dep_export_OfficersSchoolEffectItem = require("gge-module:export_OfficersSchoolEffectItem");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
