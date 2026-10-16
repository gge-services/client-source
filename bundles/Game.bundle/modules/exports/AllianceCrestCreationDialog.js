Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGetAllianceInfoVO = require("gge-module:export_C2SGetAllianceInfoVO");
var __dep_export_C2SSetAllianceEmblemVO = require("gge-module:export_C2SSetAllianceEmblemVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_EventIconHelper = require("gge-module:export_EventIconHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceCrestVO = require("gge-module:export_AllianceCrestVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_AllianceCrestCreation_Color_ItemVE = require("gge-module:export_AllianceCrestCreation_Color_ItemVE");
var __dep_export_AllianceCrestCreation_FreeLayout_ItemVE = require("gge-module:export_AllianceCrestCreation_FreeLayout_ItemVE");
var __dep_export_AllianceCrestCreation_PremiumLayout_ItemVE = require("gge-module:export_AllianceCrestCreation_PremiumLayout_ItemVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AllianceCrestCreationDialog() {
    var __s3local0 = this;
    __s3local0.selectedColorIndex = 0;
    __s3local0.selectionLayoutItems = [];
    __s3local0.selectionColorItems = [];
    __s3local0.defaultChestPos = new __s0local0(119, 6);
    __s3local0.defaultFallbackPos = new __s0local0(240, 128);
    __s3local0.freeChestPos = new __s0local0(253, 6);
    __s3local0.freeFallbackPos = new __s0local0(375, 128);
    __s3local0.onShowRunningTemporaryLayouts = 0;
    __s3local0.currentColorIDs = [];
    __s3local0._listStartY = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, AllianceCrestCreationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceCrestCreationDialog, __s1param0);
  AllianceCrestCreationDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._listStartY = this.dialogDisp.mc_selection_layout.mc_list_big.mc_items.y;
  };
  AllianceCrestCreationDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdate));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_reset, this.dialogDisp.btn_random, this.dialogDisp.btn_layout, this.dialogDisp.btn_color0, this.dialogDisp.btn_color1, this.dialogDisp.btn_color2]);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_event, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_CoA_title"))).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_event.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("panel_action_event")));
    this.dialogDisp.mc_copy1.visible = this.dialogDisp.mc_copy2.visible = false;
    this.dialogDisp.mc_freeCrest.visible = false;
    this.currentCrest = new __dep_export_AllianceCrestVO.AllianceCrestVO();
    this.currentCrest.cloneFromVO(this.dialogProperties.allianceVO.allianceCrestVO);
    this.currentColorIDs = this.currentCrest.colorIDs.slice(0);
    this.dialogDisp.btn_reset.toolTipText = "dialog_CoA_tooltip_reset";
    this.dialogDisp.btn_random.toolTipText = "dialog_CoA_tooltip_randomize";
    this.resetSelectionButtonStates();
    this.dialogDisp.btn_layout.gotoAndStop(2);
    this.openLayoutSelection();
    this.updateDialog();
    this.onShowRunningTemporaryLayouts = this.currentRunningTemporaryLayouts;
    this.onShowCrest = new __dep_export_AllianceCrestVO.AllianceCrestVO();
    this.onShowCrest.cloneFromVO(this.dialogProperties.allianceVO.allianceCrestVO);
  };
  AllianceCrestCreationDialog.prototype.updateDialog = function () {
    this.dialogDisp.mc_copy2.visible = this.currentCrest.layoutVO.maxDuration > 0 && this.currentCrest.layoutVO.remainingSeconds <= 0;
    this.dialogDisp.mc_copy1.visible = this.currentCrest.layoutVO.maxDuration > 0 && this.currentCrest.layoutVO.remainingSeconds > 0;
    var __s9local0 = !this.dialogDisp.mc_copy1.visible && !this.dialogDisp.mc_copy2.visible;
    this.dialogDisp.mc_crest.x = __s9local0 ? this.freeChestPos.x : this.defaultChestPos.x;
    this.dialogDisp.mc_crest.y = __s9local0 ? this.freeChestPos.y : this.defaultChestPos.y;
    this.dialogDisp.mc_freeCrest.x = __s9local0 ? this.freeFallbackPos.x : this.defaultFallbackPos.x;
    this.dialogDisp.mc_freeCrest.y = __s9local0 ? this.freeFallbackPos.y : this.defaultFallbackPos.y;
    var __s9local1 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("allianceCoat_Layout_name_" + this.currentCrest.layoutVO.allianceCoatLayoutID);
    var __s9local2 = "";
    if (this.currentCrest.layoutVO.effects.length > 0) {
      for (var __s9local3 = 0, __s9local4 = this.currentCrest.layoutVO.effects; __s9local3 < __s9local4.length; __s9local3++) {
        var __s9local5 = __s9local4[__s9local3];
        if (__s9local2.length > 0) {
          __s9local2 += "\n";
        }
        __s9local2 += __dep_exact_92d05af59ee2ff30.Localize.text("equip_effect_description_" + __s9local5.effect.name, __s9local5.effectValue.textReplacements);
      }
    }
    var __s9local6 = __dep_exact_92d05af59ee2ff30.Localize.text("allianceCoat_Layout_desc", [__s9local2]);
    __s9local6 += "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_CoALayoutDuration_desc", [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getFullTimeString(this.currentCrest.layoutVO.maxDuration)]);
    if (this.currentCrest.layoutVO.eventID > 0 && this.currentCrest.layoutVO.remainingSeconds <= 0) {
      __s9local6 += "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_CoALayoutObtainable_desc", [__dep_exact_92d05af59ee2ff30.Localize.text("event_title_" + this.currentCrest.layoutVO.eventID)]);
    }
    var __s9local7 = new __dep_exact_92d05af59ee2ff30.TextVO(__s9local6);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_copy1.mc_header.txt_copy, __s9local1).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_copy1.txt_copy, __s9local7).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_copy2.mc_header.txt_copy, __s9local1).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_copy2.txt_copy, __s9local7).autoFitToBounds = true;
    if (this.currentCrest.layoutVO.eventID > 0) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_copy1.mc_header.mc_icon);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_copy2.mc_header.mc_icon);
      if (this.dialogDisp.mc_copy1.visible) {
        this.dialogDisp.mc_copy1.mc_header.mc_icon.addChild(__dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this.currentCrest.layoutVO.eventID, new __s0local0(35, 35)));
      }
      if (this.dialogDisp.mc_copy2.visible) {
        this.dialogDisp.mc_copy2.mc_header.mc_icon.addChild(__dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this.currentCrest.layoutVO.eventID, new __s0local0(35, 35)));
      }
    }
    this.dialogDisp.btn_color1.visible = this.currentCrest.layoutVO.noofColors > 1;
    this.dialogDisp.btn_color2.visible = this.currentCrest.layoutVO.noofColors > 2;
    for (var __s9local8 = 0, __s9local9 = this.selectionLayoutItems; __s9local8 < __s9local9.length; __s9local8++) {
      var __s9local10 = __s9local9[__s9local8];
      __s9local10.setSelected(__s9local10.layoutID == this.currentCrest.layoutID);
      __s9local10.activated = this.dialogProperties.allianceVO.allianceCrestVO.layoutID == __s9local10.layoutID;
    }
    this.colorizeMC(this.dialogDisp.btn_color0.mc_icon.mc_color, this.currentCrest.colors[0]);
    this.colorizeMC(this.dialogDisp.btn_color1.mc_icon.mc_color, this.currentCrest.colors[1]);
    this.colorizeMC(this.dialogDisp.btn_color2.mc_icon.mc_color, this.currentCrest.colors[2]);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.btn_layout.mc_icon_normal);
    this.dialogDisp.btn_layout.mc_icon_premium.visible = this.currentCrest.layoutVO.maxDuration > 0;
    this.dialogDisp.btn_layout.mc_icon_normal.visible = this.currentCrest.layoutVO.maxDuration <= 0;
    var __s9local11 = "Collectable_AllianceLayout_" + this.currentCrest.layoutVO.allianceCoatLayoutID;
    var __s9local12 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s9local11, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s9local11));
    __s9local12.doWhenLoaded(this.bindFunction(this.onLayoutDisplayLoaded));
    this.dialogDisp.btn_layout.mc_icon_normal.addChild(__s9local12);
    __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.mc_crest, this.currentCrest, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.CREST_CEATION_BIG, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST);
    this.dialogDisp.mc_freeCrest.visible = !!this.dialogProperties.allianceVO.fallbackCrestVO;
    this.dialogDisp.mc_freeCrest.mouseChildren = false;
    this.dialogDisp.mc_freeCrest.toolTipText = "dialog_CoA_tooltip_autoEquip";
    if (this.dialogDisp.mc_freeCrest.visible) {
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.mc_freeCrest.mc_crest, this.dialogProperties.allianceVO.fallbackCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.CREST_CEATION_SMALL, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
    }
    var __s9local13;
    var __s9local14 = this.currentCrest.layoutVO.remainingSeconds > 0 || this.currentCrest.layoutVO.maxDuration <= 0;
    var __s9local15 = __dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_EMBLEM);
    var __s9local16 = this.currentCrest.isClonedAEVOChanged(this.dialogProperties.allianceVO.allianceCrestVO);
    var __s9local17 = __s9local14 && __s9local15 && __s9local16;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, __s9local17);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_reset, __s9local16);
    this.dialogDisp.btn_ok.toolTipText = "dialog_CoA_tooltip_Save";
    if (!__s9local14) {
      this.dialogDisp.btn_ok.toolTipText = "dialog_CoA_tooltip_LayoutLocked";
    }
    if (!__s9local16) {
      this.dialogDisp.btn_ok.toolTipText = "dialog_CoA_tooltip_NoChanges";
    }
    if (!__s9local15) {
      this.dialogDisp.btn_ok.toolTipText = "dialog_CoA_tooltip_SaveDenied";
    }
    this.onTimer();
    if (this.currentCrest.layoutVO.eventID > 0) {
      __s9local13 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.currentCrest.layoutVO.eventID);
    }
    this.dialogDisp.btn_event.visible = this.currentCrest.layoutVO.remainingSeconds <= 0 && !!__s9local13;
  };
  AllianceCrestCreationDialog.prototype.onLayoutDisplayLoaded = function (__s26param0) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleDownToFit(__s26param0, 21, 22);
  };
  AllianceCrestCreationDialog.prototype.onTimer = function (__s28param0 = null) {
    if (this.onShowRunningTemporaryLayouts != this.currentRunningTemporaryLayouts) {
      __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceInfoVO.C2SGetAllianceInfoVO(this.dialogProperties.allianceVO.allianceId));
      this.onShowRunningTemporaryLayouts = this.currentRunningTemporaryLayouts;
      return;
    }
    if (!!this.currentCrest.layoutVO && !(this.currentCrest.layoutVO.remainingSeconds <= 0)) {
      this._txt_Timer ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_copy1.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
      this._txt_Timer.text = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this.currentCrest.layoutVO.remainingSeconds);
    }
  };
  AllianceCrestCreationDialog.prototype.doSave = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetAllianceEmblemVO.C2SSetAllianceEmblemVO(this.currentCrest.getParamObject()));
    this.hide();
  };
  AllianceCrestCreationDialog.prototype.hideLoaded = function (__s34param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s34param0);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdate));
    for (var __s34local0 = 0, __s34local1 = this.selectionLayoutItems; __s34local0 < __s34local1.length; __s34local0++) {
      __s34local1[__s34local0].destroy();
    }
    for (var __s34local2 = 0, __s34local3 = this.selectionColorItems; __s34local2 < __s34local3.length; __s34local2++) {
      __s34local3[__s34local2].destroy();
    }
    this.selectionColorItems = [];
    this.selectionLayoutItems.forEach(function (__s40param0) {
      return __s40param0.destroy();
    });
    this.selectionLayoutItems = [];
    if (this._scrollComponent) {
      this._scrollComponent.hide();
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
      this._scrollComponent.destroy();
      this._scrollComponent = null;
    }
  };
  AllianceCrestCreationDialog.prototype.onClick = function (__s43param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s43param0.target)) {
      switch (__s43param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_reset:
          this.currentCrest.cloneFromVO(this.dialogProperties.allianceVO.allianceCrestVO);
          this.updateDialog();
          break;
        case this.dialogDisp.btn_random:
          this.currentCrest.randomize();
          this.currentColorIDs = this.currentCrest.colorIDs.slice(0);
          this.updateDialog();
          break;
        case this.dialogDisp.btn_ok:
          this.doSave();
          break;
        case this.dialogDisp.btn_layout:
          this.resetSelectionButtonStates();
          this.dialogDisp.btn_layout.gotoAndStop(2);
          this.openLayoutSelection();
          break;
        case this.dialogDisp.btn_color0:
          this.resetSelectionButtonStates();
          this.dialogDisp.btn_color0.gotoAndStop(2);
          this.openColorSelection(0);
          break;
        case this.dialogDisp.btn_color1:
          this.resetSelectionButtonStates();
          this.dialogDisp.btn_color1.gotoAndStop(2);
          this.openColorSelection(1);
          break;
        case this.dialogDisp.btn_color2:
          this.resetSelectionButtonStates();
          this.dialogDisp.btn_color2.gotoAndStop(2);
          this.openColorSelection(2);
          break;
        case this.dialogDisp.btn_event:
          var __s43local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.currentCrest.layoutVO.eventID);
          if (__s43local0) {
            __s43local0.openDialog();
            this.hide();
          }
      }
    }
  };
  AllianceCrestCreationDialog.prototype.resetSelectionButtonStates = function () {
    this.dialogDisp.btn_layout.gotoAndStop(1);
    this.dialogDisp.btn_color0.gotoAndStop(1);
    this.dialogDisp.btn_color1.gotoAndStop(1);
    this.dialogDisp.btn_color2.gotoAndStop(1);
  };
  AllianceCrestCreationDialog.prototype.openLayoutSelection = function () {
    this.dialogDisp.mc_selection_layout.visible = true;
    this.dialogDisp.mc_selection_color.visible = false;
    if (!(this.selectionLayoutItems.length > 0)) {
      var __s50local0 = this.dialogDisp.mc_selection_layout;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s50local0.mc_list_small);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s50local0.mc_list_big.mc_items);
      var __s50local1;
      for (var __s50local2 = __dep_export_CastleModel.CastleModel.allianceCrestData.getFreeLayouts(), __s50local3 = 0; __s50local3 < __s50local2.length; __s50local3++) {
        var __s50local4 = __s50local2[__s50local3];
        (__s50local1 = new __dep_export_AllianceCrestCreation_FreeLayout_ItemVE.AllianceCrestCreation_FreeLayout_ItemVE(__s50local4)).addOnClick(this.bindFunction(this.onLayoutItemClick));
        this.selectionLayoutItems.push(__s50local1);
        __s50local0.mc_list_small.addChild(__s50local1);
        __s50local1.x = __s50local3 % AllianceCrestCreationDialog.MAX_SMALL_LAYOUTS_ICONS_IN_ROW * 26;
        __s50local1.y = Math.floor(__s50local3 / AllianceCrestCreationDialog.MAX_SMALL_LAYOUTS_ICONS_IN_ROW) * 26;
      }
      var __s50local5 = __dep_export_CastleModel.CastleModel.allianceCrestData.getPremiumLayouts();
      for (__s50local3 = 0; __s50local3 < __s50local5.length; __s50local3++) {
        __s50local4 = __s50local5[__s50local3];
        (__s50local1 = new __dep_export_AllianceCrestCreation_PremiumLayout_ItemVE.AllianceCrestCreation_PremiumLayout_ItemVE(__s50local4)).addOnClick(this.bindFunction(this.onLayoutItemClick));
        this.selectionLayoutItems.push(__s50local1);
        __s50local0.mc_list_big.mc_items.addChild(__s50local1);
        __s50local1.x = __s50local3 % AllianceCrestCreationDialog.MAX_BIG_LAYOUTS_ICONS_IN_ROW * 52;
        __s50local1.y = Math.floor(__s50local3 / AllianceCrestCreationDialog.MAX_BIG_LAYOUTS_ICONS_IN_ROW) * 50;
      }
      this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s50local0.mc_list_big.mc_slider).addMouseWheelElements([__s50local0]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(false, __s50local0.mc_list_big.mc_mask.height, false));
      var __s50local6 = Math.ceil(__s50local5.length / AllianceCrestCreationDialog.MAX_BIG_LAYOUTS_ICONS_IN_ROW) * 50;
      this._scrollComponent.init(0, __s50local6 - __s50local0.mc_list_big.mc_mask.height, __s50local6 / 100, __s50local6 / 100);
      this._scrollComponent.scrollToValue(0);
      this._scrollComponent.setVisibility(__s50local6 > __s50local0.mc_list_big.mc_mask.height);
      this._scrollComponent.enableComponent(__s50local6 > __s50local0.mc_list_big.mc_mask.height);
      this._scrollComponent.show();
      this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    }
  };
  AllianceCrestCreationDialog.prototype.onScroll = function () {
    this.dialogDisp.mc_selection_layout.mc_list_big.mc_items.y = this._listStartY - this._scrollComponent.currentValue;
  };
  AllianceCrestCreationDialog.prototype.openColorSelection = function (__s59param0) {
    this.dialogDisp.mc_selection_color.visible = true;
    this.dialogDisp.mc_selection_layout.visible = false;
    this.dialogDisp.mc_selection_color.mc_colorItems.visible = true;
    this.selectedColorIndex = __s59param0;
    this.dialogDisp.mc_selection_color.y = this.dialogDisp.btn_color0.height * __s59param0 - 150;
    if (this.selectionColorItems.length > 0) {
      this.updateSelectionBG();
    } else {
      var __s59local0 = this.dialogDisp.mc_selection_color.mc_colorItems;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s59local0);
      for (var __s59local1 = __dep_export_CastleModel.CastleModel.allianceCrestData.getAllColors(), __s59local2 = 0; __s59local2 < __s59local1.length; __s59local2++) {
        var __s59local3 = __s59local1[__s59local2];
        var __s59local4 = new __dep_export_AllianceCrestCreation_Color_ItemVE.AllianceCrestCreation_Color_ItemVE(__s59local3);
        __s59local0.addChild(__s59local4);
        __s59local4.x = __s59local2 % AllianceCrestCreationDialog.MAX_COLOR_ICONS_IN_ROW * 23;
        __s59local4.y = Math.floor(__s59local2 / AllianceCrestCreationDialog.MAX_COLOR_ICONS_IN_ROW) * 24;
        __s59local4.addOnClick(this.bindFunction(this.onColorItemClick));
        this.selectionColorItems.push(__s59local4);
      }
      this.updateSelectionBG();
    }
  };
  AllianceCrestCreationDialog.prototype.onLayoutItemClick = function (__s65param0) {
    this.currentCrest.resetColors();
    for (var __s65local0 = 0; __s65local0 < __s65param0.noofColors; __s65local0++) {
      if (this.currentColorIDs[__s65local0]) {
        this.currentCrest.setColorAtIndex(this.currentColorIDs[__s65local0], __s65local0);
      } else {
        this.currentCrest.setColorAtIndex(__dep_export_CastleModel.CastleModel.allianceCrestData.getRandomColor().allianceCoatColorID, __s65local0);
        this.currentColorIDs[__s65local0] = this.currentCrest.colors[__s65local0].allianceCoatColorID;
      }
    }
    this.currentCrest.layoutID = __s65param0.allianceCoatLayoutID;
    this.updateDialog();
  };
  AllianceCrestCreationDialog.prototype.onColorItemClick = function (__s71param0) {
    this.currentCrest.setColorAtIndex(__s71param0.allianceCoatColorID, this.selectedColorIndex);
    this.currentColorIDs[this.selectedColorIndex] = __s71param0.allianceCoatColorID;
    this.updateDialog();
  };
  AllianceCrestCreationDialog.prototype.updateSelectionBG = function () {
    if (this.dialogDisp.mc_selection_color.mc_colorItems.visible) {
      this.dialogDisp.mc_selection_color.mc_bg.height = this.dialogDisp.mc_selection_color.mc_colorItems.height + 20;
    }
  };
  AllianceCrestCreationDialog.prototype.colorizeMC = function (__s76param0, __s76param1) {
    if (__s76param1) {
      var __s76local0 = new createjs.ColorTransform();
      __s76local0.color = __s76param1.color;
      __s76param0.useFilters([new createjs.ColorFilter(__s76local0.redMultiplier, __s76local0.greenMultiplier, __s76local0.blueMultiplier, __s76local0.alphaMultiplier, __s76local0.redOffset, __s76local0.greenOffset, __s76local0.blueOffset, __s76local0.alphaOffset)]);
    }
  };
  Object.defineProperty(AllianceCrestCreationDialog.prototype, "currentRunningTemporaryLayouts", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.numberOfActiveTemporaryLayouts();
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestCreationDialog.prototype.onMyAllianceUpdate = function (__s81param0) {
    if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
      var __s81local0 = !this.currentCrest.isClonedAEVOChanged(this.onShowCrest);
      this.dialogProperties.allianceVO = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
      if (__s81local0) {
        this.currentCrest.cloneFromVO(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceCrestVO);
        this.onShowCrest.cloneFromVO(this.currentCrest);
      }
      this.updateDialog();
    } else {
      this.hide();
    }
  };
  Object.defineProperty(AllianceCrestCreationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestCreationDialog.__initialize_static_members = function () {
    AllianceCrestCreationDialog.NAME = "AllianceCrestCreation1";
  };
  AllianceCrestCreationDialog.MAX_COLOR_ICONS_IN_ROW = 3;
  AllianceCrestCreationDialog.MAX_SMALL_LAYOUTS_ICONS_IN_ROW = 4;
  AllianceCrestCreationDialog.MAX_BIG_LAYOUTS_ICONS_IN_ROW = 2;
  return AllianceCrestCreationDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AllianceCrestCreationDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
