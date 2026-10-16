Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCrest = require("gge-module:export_ClientConstCrest");
var __dep_export_ClientConstQuestCondition = require("gge-module:export_ClientConstQuestCondition");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_C2SChangeEmblemVO = require("gge-module:export_C2SChangeEmblemVO");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_CastleCrestSymbolDataEvent = require("gge-module:export_CastleCrestSymbolDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_DashedLine = require("gge-module:export_DashedLine");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleBuyUnlockedCrestSymbolDialogProperties = require("gge-module:export_CastleBuyUnlockedCrestSymbolDialogProperties");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = createjs.ColorFilter;
var __s0local3 = function (__s1param0) {
  function CastlePremiumMarketPlaceDialogFlag(__s3param0) {
    var __s3local0 = this;
    __s3local0._crestHasChanged = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).initBasicButtons([__s3local0.subLayerDisp.btn_reset, __s3local0.subLayerDisp.btn_save, __s3local0.subLayerDisp.btn_random, __s3local0.crestGenerator.mc_buttons.btn_backgroundtype, __s3local0.crestGenerator.mc_buttons.btn_colorBG1, __s3local0.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2, __s3local0.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1, __s3local0.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2, __s3local0.crestGenerator.mc_buttons.btn_symbolType, __s3local0.crestGenerator.mc_buttons.mc_symbolChange1.btn_symbol1, __s3local0.crestGenerator.mc_buttons.mc_symbolChange2.btn_symbol2, __s3local0.crestGenerator.mc_bgtypeTooltip.btn_type0, __s3local0.crestGenerator.mc_bgtypeTooltip.btn_type1, __s3local0.crestGenerator.mc_bgtypeTooltip.btn_type2, __s3local0.crestGenerator.mc_bgtypeTooltip.btn_type3, __s3local0.crestGenerator.mc_symbolTypeToolTip.btn_type0, __s3local0.crestGenerator.mc_symbolTypeToolTip.btn_type1, __s3local0.crestGenerator.mc_symbolTypeToolTip.btn_type2, __s3local0.crestGenerator.mc_symbolTypeToolTip.btn_type3, __s3local0.crestGenerator.mc_symbolTypeToolTip.btn_type4]);
    __s3local0.hideAllToolTips();
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastlePremiumMarketPlaceDialogFlag.BONUS_HEADER_TEXT_ID));
    __s3local0.itxt_currentBonus = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO("bonus goes here"));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePremiumMarketPlaceDialogFlag, __s1param0);
  CastlePremiumMarketPlaceDialogFlag.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.resetCrest();
    this.enableBasicButton([this.subLayerDisp.btn_reset.basicButton, this.subLayerDisp.btn_save.basicButton], this._crestHasChanged);
    if (this._bgColorMenu) {
      this.crestGenerator.mc_colorSymbolTooltip.removeChild(this._bgColorMenu);
    }
    if (this._symbolColorMenu) {
      this.crestGenerator.mc_colorSymbolTooltip.removeChild(this._symbolColorMenu);
    }
    if (this._crestSymbolMenu) {
      this.crestGenerator.mc_colorSymbolTooltip.removeChild(this._crestSymbolMenu);
    }
    this.createCrestSymbolMenu();
    this.createBGColorMenu();
    this.createSymbolColorMenu();
    this.crestGenerator.stop();
    this.crestGenerator.mc_buttons.btn_backgroundtype.gotoAndStop(this.crestVO.backgroundType + 1);
    this.crestGenerator.mc_buttons.btn_symbolType.gotoAndStop(this.crestVO.symbolPosType + 1);
    this.crestGenerator.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeValue));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestChangeFromServer));
    __dep_export_CastleModel.CastleModel.crestSymbolData.addEventListener(__dep_export_CastleCrestSymbolDataEvent.CastleCrestSymbolDataEvent.CREST_SYMBOL_DATA_UPDATED, this.bindFunction(this.onCrestSymbolDataUpdated));
    this.drawCrest();
    this.subLayerDisp.btn_random.toolTipText = CastlePremiumMarketPlaceDialogFlag.RANDOM_CREST_TOOLTIP_ID;
    this.subLayerDisp.btn_save.toolTipText = CastlePremiumMarketPlaceDialogFlag.SAVE_CREST_TOOLTIP_ID;
    this.subLayerDisp.btn_reset.toolTipText = CastlePremiumMarketPlaceDialogFlag.REVERT_CREST_TOOLTIP_ID;
    this.crestGenerator.mc_buttons.btn_backgroundtype.toolTipText = "panel_create_crest_bg";
    this.crestGenerator.mc_buttons.btn_colorBG1.toolTipText = "panel_create_crest_color";
    this.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2.toolTipText = "panel_create_crest_color";
    this.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1.toolTipText = "panel_create_crest_color";
    this.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2.toolTipText = "panel_create_crest_color";
    this.crestGenerator.mc_buttons.btn_symbolType.toolTipText = "panel_create_crest_symboltype";
    this.crestGenerator.mc_buttons.mc_symbolChange1.btn_symbol1.toolTipText = "panel_create_crest_symbol";
    this.crestGenerator.mc_buttons.mc_symbolChange2.btn_symbol2.toolTipText = "panel_create_crest_symbol";
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.onCrestSymbolDataUpdated = function (__s10param0) {
    this.createCrestSymbolMenu();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    this.checkHideBackgroundOnClick(__s12param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s12param0.target)) {
      switch (__s12param0.target) {
        case this.subLayerDisp.btn_save:
          this.bindFunction(this.sendNewCrest())();
          break;
        case this.subLayerDisp.btn_reset:
          this.resetCrest();
          break;
        case this.subLayerDisp.btn_close:
          this.hide();
      }
      switch (__s12param0.target) {
        case this.crestGenerator.mc_buttons.btn_colorBG1:
          this.showChooserTooltip(0, this.crestGenerator.mc_buttons.btn_colorBG1);
          break;
        case this.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2:
          this.showChooserTooltip(0, this.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2);
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1:
          this.showChooserTooltip(1, this.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1);
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2:
          this.showChooserTooltip(1, this.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2);
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange1.btn_symbol1:
          this.showChooserTooltip(2, this.crestGenerator.mc_buttons.mc_symbolChange1.btn_symbol1);
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange2.btn_symbol2:
          this.showChooserTooltip(2, this.crestGenerator.mc_buttons.mc_symbolChange2.btn_symbol2);
          break;
        case this.crestGenerator.mc_buttons.btn_symbolType:
          this.showSymbolTypeToolTip();
          break;
        case this.crestGenerator.mc_buttons.btn_backgroundtype:
          this.showBgTypeToolTip();
          break;
        case this.subLayerDisp.btn_random:
          this.generateRandomCrest();
          break;
        case this.crestGenerator.mc_bgtypeTooltip.btn_type0:
          this.crestVO.backgroundType = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN);
          this.crestVO.backgroundColor2 = this.crestVO.backgroundColor1;
          break;
        case this.crestGenerator.mc_bgtypeTooltip.btn_type1:
          this.crestVO.backgroundType = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_TWO_HORIZONTAL);
          break;
        case this.crestGenerator.mc_bgtypeTooltip.btn_type2:
          this.crestVO.backgroundType = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_TWO_VERTICAL);
          break;
        case this.crestGenerator.mc_bgtypeTooltip.btn_type3:
          this.crestVO.backgroundType = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_FOUR_X);
          break;
        case this.crestGenerator.mc_symbolTypeToolTip.btn_type0:
          this.crestVO.symbolPosType = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_NONE);
          break;
        case this.crestGenerator.mc_symbolTypeToolTip.btn_type1:
          this.crestVO.symbolPosType = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED);
          break;
        case this.crestGenerator.mc_symbolTypeToolTip.btn_type2:
          this.crestVO.symbolPosType = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_TWO_HORIZONTAL);
          break;
        case this.crestGenerator.mc_symbolTypeToolTip.btn_type3:
          this.crestVO.symbolPosType = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_TWO_VERTICAL);
          break;
        case this.crestGenerator.mc_symbolTypeToolTip.btn_type4:
          this.crestVO.symbolPosType = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_FOUR_X);
      }
      if (this.crestVO.backgroundColor2 == 0) {
        this.crestVO.backgroundColor2 = this.crestVO.backgroundColor1;
      }
      this.checkSymbolIsFilledIfNecessary();
      if (!!__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s12param0.target, "MovieClip") && (__s12param0.target.parent == this._symbolColorMenu || __s12param0.target.parent == this._crestSymbolMenu || __s12param0.target.parent == this._bgColorMenu)) {
        this.onClickChooserTooltip(__s12param0.target);
      }
      this.onChangeValue();
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.checkSymbolIsFilledIfNecessary = function () {
    if (this.crestVO.symbolPosType != __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_NONE) {
      this.crestVO.symbolType1 ||= __dep_export_CastleModel.CastleModel.crestSymbolData.getRandomStandardSymbol();
      this.crestVO.symbolType2 ||= __dep_export_CastleModel.CastleModel.crestSymbolData.getRandomStandardSymbol();
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.onChangeValue = function (__s22param0 = null) {
    this.drawCrest();
    this.checkHasCrestChanged();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.resetCrest = function () {
    this.crestVO = __dep_export_CastleModel.CastleModel.userData.playerCrest.clone();
    this.checkHasCrestChanged();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.drawCrest = function () {
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.crestGenerator.crest, this.crestVO, [[0, 0], [200, 200], [90, 120], [120, 80], [90, 90]]);
    this.crestGenerator.mc_buttons.btn_backgroundtype.gotoAndStop(this.crestVO.backgroundType + 1);
    this.crestGenerator.mc_buttons.btn_symbolType.gotoAndStop(this.crestVO.symbolPosType + 1);
    var __s26local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s26local0.color = this.crestVO.backgroundColor1;
    this.crestGenerator.mc_buttons.btn_colorBG1.cc.useFilters([new __s0local2(__s26local0.redMultiplier, __s26local0.greenMultiplier, __s26local0.blueMultiplier, __s26local0.alphaMultiplier, __s26local0.redOffset, __s26local0.greenOffset, __s26local0.blueOffset, __s26local0.alphaOffset)]);
    __s26local0.color = this.crestVO.backgroundColor2;
    this.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2.cc.useFilters([new __s0local2(__s26local0.redMultiplier, __s26local0.greenMultiplier, __s26local0.blueMultiplier, __s26local0.alphaMultiplier, __s26local0.redOffset, __s26local0.greenOffset, __s26local0.blueOffset, __s26local0.alphaOffset)]);
    __s26local0.color = this.crestVO.symbolColor1;
    this.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1.cc.useFilters([new __s0local2(__s26local0.redMultiplier, __s26local0.greenMultiplier, __s26local0.blueMultiplier, __s26local0.alphaMultiplier, __s26local0.redOffset, __s26local0.greenOffset, __s26local0.blueOffset, __s26local0.alphaOffset)]);
    __s26local0.color = this.crestVO.symbolColor2;
    this.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2.cc.useFilters([new __s0local2(__s26local0.redMultiplier, __s26local0.greenMultiplier, __s26local0.blueMultiplier, __s26local0.alphaMultiplier, __s26local0.redOffset, __s26local0.greenOffset, __s26local0.blueOffset, __s26local0.alphaOffset)]);
    this.crestGenerator.mc_buttons.mc_bgColor2.visible = this.crestVO.backgroundType != __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN;
    this.crestGenerator.mc_buttons.mc_symbolChange1.visible = this.crestVO.symbolPosType >= __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED;
    this.crestGenerator.mc_buttons.mc_symbolChange2.visible = this.crestVO.symbolPosType >= __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_TWO_HORIZONTAL;
    __s26local0.color = this.crestVO.backgroundColor1;
    this.crestGenerator.mc_holderLeft.cc.useFilters([new __s0local2(__s26local0.redMultiplier, __s26local0.greenMultiplier, __s26local0.blueMultiplier, __s26local0.alphaMultiplier, __s26local0.redOffset, __s26local0.greenOffset, __s26local0.blueOffset, __s26local0.alphaOffset)]);
    if (this.crestVO.backgroundType != __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN) {
      __s26local0.color = this.crestVO.backgroundColor2;
    }
    this.crestGenerator.mc_holderRight.cc.useFilters([new __s0local2(__s26local0.redMultiplier, __s26local0.greenMultiplier, __s26local0.blueMultiplier, __s26local0.alphaMultiplier, __s26local0.redOffset, __s26local0.greenOffset, __s26local0.blueOffset, __s26local0.alphaOffset)]);
    this.setCrestBonusInfo();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.sendNewCrest = function (__s29param0 = null) {
    return function () {
      if (this.crestVO.equals(__dep_export_CastleModel.CastleModel.userData.playerCrest)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_changeCrest_same")));
      } else {
        if (this.crestVO.symbolPosType == __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_NONE) {
          this.crestVO.symbolType1 = null;
          this.crestVO.symbolType2 = null;
        } else if (this.crestVO.symbolPosType == __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED) {
          this.crestVO.symbolType2 = null;
        }
        if (__dep_export_CastleModel.CastleModel.questData.foundActiveQuestWithConditionType(__dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CREATE_EMBLEM)) {
          var __s31local0 = {
            CAE: this.crestVO.getParamObject()
          };
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendMessage(__dep_export_ClientConstSF.ClientConstSF.C2S_CREATE_AVATAR, [JSON.stringify(__s31local0)]);
        }
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SChangeEmblemVO.C2SChangeEmblemVO(this.crestVO.getParamObject()));
      }
      if (__s29param0) {
        __s29param0();
      }
    };
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.checkHideBackgroundOnClick = function (__s39param0) {
    if (!__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s39param0.target, "MovieClip") || !this.crestGenerator.mc_bgtypeTooltip.contains(__s39param0.target) && !this.crestGenerator.mc_colorSymbolTooltip.contains(__s39param0.target) && !this.crestGenerator.mc_symbolTypeToolTip.contains(__s39param0.target)) {
      if (!__s39param0.target || !__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s39param0.target, "BasicButton")) {
        this.hideAllToolTips();
      }
      if (!__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s39param0.target, "BasicButton") || __s39param0.target.enabled) {
        switch (__s39param0.target) {
          case this.crestGenerator.mc_buttons.btn_colorBG1:
          case this.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2:
          case this.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1:
          case this.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2:
          case this.crestGenerator.mc_buttons.mc_symbolChange1.btn_symbol1:
          case this.crestGenerator.mc_buttons.mc_symbolChange2.btn_symbol2:
            this.hideBgTypeToolTip();
            this.hideSymbolTypeToolTip();
            break;
          case this.crestGenerator.mc_buttons.btn_symbolType:
            this.hideChooserTooltip();
            this.hideBgTypeToolTip();
            break;
          case this.crestGenerator.mc_buttons.btn_backgroundtype:
            this.hideChooserTooltip();
            this.hideSymbolTypeToolTip();
            break;
          case this.subLayerDisp.btn_random:
          case this.crestGenerator.btn_save:
            this.hideAllToolTips();
        }
      } else {
        this.hideAllToolTips();
      }
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.hideChooserTooltip = function () {
    this.crestGenerator.mc_colorSymbolTooltip.visible = false;
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.hideAllToolTips = function () {
    this.hideBgTypeToolTip();
    this.hideChooserTooltip();
    this.hideSymbolTypeToolTip();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.onClickChooserTooltip = function (__s50param0) {
    if (!(__s50param0.name.indexOf("num") < 0)) {
      var __s50local0 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s50param0.name.substring(3)));
      switch (this.crestGenerator.mc_colorSymbolTooltip.property) {
        case this.crestGenerator.mc_buttons.btn_colorBG1:
          this.crestVO.backgroundColor1 = __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_COLORS[__s50local0];
          break;
        case this.crestGenerator.mc_buttons.mc_bgColor2.btn_colorBG2:
          this.crestVO.backgroundColor2 = __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_COLORS[__s50local0];
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange1.btn_colorSymbol1:
          this.crestVO.symbolColor1 = __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_COLORS[__s50local0];
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange2.btn_colorSymbol2:
          this.crestVO.symbolColor2 = __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_COLORS[__s50local0];
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange1.btn_symbol1:
          this.handleSymbolPicked(__s50param0, "symbolType1");
          break;
        case this.crestGenerator.mc_buttons.mc_symbolChange2.btn_symbol2:
          this.handleSymbolPicked(__s50param0, "symbolType2");
      }
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.handleSymbolPicked = function (__s54param0, __s54param1) {
    if (__s54param0.symbolVO) {
      var __s54local0 = __s54param0.symbolVO;
      if (__dep_export_CastleModel.CastleModel.crestSymbolData.isSymbolBought(__s54local0)) {
        this.crestVO[__s54param1] = __s54local0;
      } else if (__dep_export_CastleModel.CastleModel.crestSymbolData.isSymbolUnlocked(__s54local0)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuyUnlockedCrestSymbolDialog.CastleBuyUnlockedCrestSymbolDialog, new __dep_export_CastleBuyUnlockedCrestSymbolDialogProperties.CastleBuyUnlockedCrestSymbolDialogProperties(__s54local0));
      }
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.showSymbolTypeToolTip = function () {
    this.crestGenerator.mc_symbolTypeToolTip.btn_type0.gotoAndStop(1);
    this.crestGenerator.mc_symbolTypeToolTip.btn_type0.mouseChildren = false;
    this.crestGenerator.mc_symbolTypeToolTip.btn_type1.gotoAndStop(2);
    this.crestGenerator.mc_symbolTypeToolTip.btn_type1.mouseChildren = false;
    this.crestGenerator.mc_symbolTypeToolTip.btn_type2.gotoAndStop(3);
    this.crestGenerator.mc_symbolTypeToolTip.btn_type2.mouseChildren = false;
    this.crestGenerator.mc_symbolTypeToolTip.btn_type3.gotoAndStop(4);
    this.crestGenerator.mc_symbolTypeToolTip.btn_type3.mouseChildren = false;
    this.crestGenerator.mc_symbolTypeToolTip.btn_type4.gotoAndStop(5);
    this.crestGenerator.mc_symbolTypeToolTip.btn_type4.mouseChildren = false;
    this.crestGenerator.mc_symbolTypeToolTip.visible = true;
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.checkHasCrestChanged = function () {
    this._crestHasChanged = !__dep_export_CastleModel.CastleModel.userData.playerCrest.equals(this.crestVO);
    this.enableBasicButton([this.subLayerDisp.btn_reset.basicButton, this.subLayerDisp.btn_save.basicButton], this._crestHasChanged);
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.hideSymbolTypeToolTip = function () {
    this.crestGenerator.mc_symbolTypeToolTip.visible = false;
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.showBgTypeToolTip = function () {
    this.crestGenerator.mc_bgtypeTooltip.btn_type0.gotoAndStop(1);
    this.crestGenerator.mc_bgtypeTooltip.btn_type1.gotoAndStop(2);
    this.crestGenerator.mc_bgtypeTooltip.btn_type2.gotoAndStop(3);
    this.crestGenerator.mc_bgtypeTooltip.btn_type3.gotoAndStop(4);
    this.crestGenerator.mc_bgtypeTooltip.visible = true;
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.hideBgTypeToolTip = function () {
    this.crestGenerator.mc_bgtypeTooltip.visible = false;
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.generateRandomCrest = function () {
    this.crestVO.createRandom();
    this.onChangeValue();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.showChooserTooltip = function (__s71param0, __s71param1) {
    this.crestGenerator.mc_colorSymbolTooltip.property = __s71param1;
    this.crestGenerator.mc_colorSymbolTooltip.y = -__s71param1.globalToLocal(new __s0local1(this.crestGenerator.x, this.crestGenerator.y)).y - this.disp.stage.stageHeight / 2 - 25;
    this._bgColorMenu.visible = false;
    this._symbolColorMenu.visible = false;
    this._crestSymbolMenu.visible = false;
    this.crestGenerator.mc_colorSymbolTooltip.removeChild(this._bgColorMenu);
    this.crestGenerator.mc_colorSymbolTooltip.removeChild(this._symbolColorMenu);
    this.crestGenerator.mc_colorSymbolTooltip.removeChild(this._crestSymbolMenu);
    switch (__s71param0) {
      case 0:
        this.createBGColorMenu();
        this.crestGenerator.mc_colorSymbolTooltip.addChild(this._bgColorMenu);
        this._bgColorMenu.x = this.crestGenerator.mc_colorSymbolTooltip.bg.x + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE + CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_WIDTH / 2;
        this._bgColorMenu.y = this.crestGenerator.mc_colorSymbolTooltip.bg.x + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE + CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_HEIGHT / 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.height = this._bgColorMenu.height + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE * 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.width = this._bgColorMenu.width + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE * 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.y = 0;
        this.crestGenerator.mc_colorSymbolTooltip.visible = true;
        this._bgColorMenu.visible = true;
        break;
      case 1:
        this.createSymbolColorMenu();
        this.crestGenerator.mc_colorSymbolTooltip.addChild(this._symbolColorMenu);
        this._symbolColorMenu.x = this.crestGenerator.mc_colorSymbolTooltip.bg.x + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE + CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_WIDTH / 2;
        this._symbolColorMenu.y = this.crestGenerator.mc_colorSymbolTooltip.bg.x + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE + CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_HEIGHT / 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.height = this._symbolColorMenu.height + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE * 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.width = this._symbolColorMenu.width + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE * 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.y = 0;
        this.crestGenerator.mc_colorSymbolTooltip.visible = true;
        this._symbolColorMenu.visible = true;
        break;
      case 2:
        this.createCrestSymbolMenu();
        this.crestGenerator.mc_colorSymbolTooltip.addChild(this._crestSymbolMenu);
        this._crestSymbolMenu.x = this.crestGenerator.mc_colorSymbolTooltip.bg.x + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE + CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH / 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.width = this._crestSymbolMenu.width + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE * 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.height = this._crestSymbolMenu.height + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE * 2;
        this.crestGenerator.mc_colorSymbolTooltip.bg.y = -this._crestSymbolMenu.height / 2;
        this._crestSymbolMenu.y = this.crestGenerator.mc_colorSymbolTooltip.bg.y + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE + CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT / 2;
        this.crestGenerator.mc_colorSymbolTooltip.visible = true;
        this._crestSymbolMenu.visible = true;
        break;
      default:
        return;
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.createCrestSymbolMenu = function () {
    var __s74local0;
    if (this._crestSymbolMenu) {
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._crestSymbolMenu);
    } else {
      this._crestSymbolMenu = new __s0local0();
    }
    var __s74local1 = 0;
    var __s74local2 = 0;
    for (var __s74local3 = 0, __s74local4 = Array.from(__dep_export_CastleModel.CastleModel.crestSymbolData.standardCrestSymbols.keys()); __s74local3 < __s74local4.length; __s74local3++) {
      var __s74local5 = __s74local4[__s74local3];
      if (__s74local5 !== undefined) {
        if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__dep_export_CastleModel.CastleModel.crestSymbolData.standardCrestSymbols.get(__s74local5), "StandardCrestSymbolVO")) {
          var __s74local6 = __dep_export_CastleModel.CastleModel.crestSymbolData.standardCrestSymbols.get(__s74local5);
          (__s74local0 = __dep_export_CrestHelper.CrestHelper.getCrestSymbolGraphic(__s74local6, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT)).name = "num" + __s74local6.id;
          __s74local0.symbolVO = __s74local6;
          __s74local0.graphics.beginFill(CastlePremiumMarketPlaceDialogFlag.SYMBOL_BACKGROUND_COLOR, CastlePremiumMarketPlaceDialogFlag.SYMBOL_BACKGROUND_ALPHA);
          __s74local0.graphics.drawRect(-CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH / 2, -CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT / 2, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT);
          __s74local0.graphics.endFill();
          this._crestSymbolMenu.addChild(__s74local0);
          __s74local0.x = __s74local2 * (CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE);
          __s74local0.y = __s74local1 * (CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE);
          __s74local0.setBounds(-CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH / 2, -CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT / 2, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT);
          __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s74local0, 1.05);
          __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(__s74local0);
          __s74local2++;
        }
        if (__s74local2 > CastlePremiumMarketPlaceDialogFlag.SYMBOL_COLUMN_COUNT - 1) {
          __s74local2 = 0;
          __s74local1++;
        }
      }
    }
    __s74local2 = 0;
    __s74local1++;
    var __s74local7 = new __dep_export_DashedLine.DashedLine(CastlePremiumMarketPlaceDialogFlag.SYMBOL_COLUMN_COUNT * (CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE) - CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE, 2, CastlePremiumMarketPlaceDialogFlag.SYMBOL_PANEL_DELIMITER_COLOR, 5, 3);
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s74local7, "DisplayObject")) {
      this._crestSymbolMenu.addChild(__s74local7);
    }
    __s74local7.x = -CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE * 2;
    __s74local7.y = __s74local1 * (CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE);
    __s74local7.alpha = CastlePremiumMarketPlaceDialogFlag.SYMBOL_PANEL_DELIMITER_ALPHA;
    __s74local1++;
    for (var __s74local8 = __dep_export_CastleModel.CastleModel.crestSymbolData.getAllPremiumSymbolIDsAsSortedArray(), __s74local9 = 0; __s74local9 < __s74local8.length; __s74local9++) {
      var __s74local10 = __dep_exact_f855840627e6e145.int(__s74local8[__s74local9]);
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__dep_export_CastleModel.CastleModel.crestSymbolData.premiumCrestSymbols.get(__s74local10), "PremiumCrestSymbolVO")) {
        var __s74local11 = __dep_export_CastleModel.CastleModel.crestSymbolData.premiumCrestSymbols.get(__s74local10);
        var __s74local12 = !__dep_export_CastleModel.CastleModel.crestSymbolData.isSymbolUnlocked(__s74local11);
        var __s74local13 = 1;
        var __s74local14 = __s74local11.toolTipText;
        if (__s74local12) {
          __s74local14 = __dep_exact_92d05af59ee2ff30.Localize.text(CastlePremiumMarketPlaceDialogFlag.UNLOCK_CREST_TOOLTIP_ID);
        } else if (!__dep_export_CastleModel.CastleModel.crestSymbolData.isSymbolBought(__s74local11)) {
          __s74local13 = 0.2;
          __s74local14 = __dep_exact_92d05af59ee2ff30.Localize.text(CastlePremiumMarketPlaceDialogFlag.BUY_CREST_TOOLTIP_ID, [__s74local11.toolTipText]);
        }
        (__s74local0 = __dep_export_CrestHelper.CrestHelper.getCrestSymbolGraphic(__s74local11, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT, __s74local12, null, __s74local13)).name = "num" + __s74local11.id;
        __s74local0.symbolVO = __s74local11;
        __s74local0.toolTipText = __s74local14;
        __s74local0.graphics.beginFill(CastlePremiumMarketPlaceDialogFlag.SYMBOL_BACKGROUND_COLOR, CastlePremiumMarketPlaceDialogFlag.SYMBOL_BACKGROUND_ALPHA);
        __s74local0.graphics.drawRect(-CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH / 2, -CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT / 2, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT);
        __s74local0.graphics.endFill();
        this._crestSymbolMenu.addChild(__s74local0);
        __s74local0.x = __s74local2 * (CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE);
        __s74local0.y = __s74local1 * (CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT + CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE);
        __s74local0.setBounds(-CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH / 2, -CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT / 2, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT, CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT);
        __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s74local0, 1.05);
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(__s74local0);
        __s74local2++;
      }
      if (__s74local2 > CastlePremiumMarketPlaceDialogFlag.SYMBOL_COLUMN_COUNT - 1) {
        __s74local2 = 0;
        __s74local1++;
      }
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.doubleCheckSaveCrest = function (__s90param0) {
    if (this._crestHasChanged) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_saveCrest_header"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_saveCrest"), this.bindFunction(this.sendNewCrest(__s90param0)), __s90param0, __s90param0));
    } else {
      __s90param0();
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.createSymbolColorMenu = function () {
    this._symbolColorMenu = new __s0local0();
    var __s94local0 = 0;
    var __s94local1 = 0;
    var __s94local2 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    for (var __s94local3 = 0; __s94local3 < __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_COLORS.length; __s94local3++) {
      var __s94local4 = new __s0local0();
      var __s94local5 = new Library.CastleInterfaceElements.btn_color1();
      __s94local4.addChild(__s94local5);
      __s94local2.color = __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_COLORS[__s94local3];
      __s94local5.cc.useFilters([new __s0local2(__s94local2.redMultiplier, __s94local2.greenMultiplier, __s94local2.blueMultiplier, __s94local2.alphaMultiplier, __s94local2.redOffset, __s94local2.greenOffset, __s94local2.blueOffset, __s94local2.alphaOffset)]);
      __s94local4.name = "num" + __s94local3;
      this._symbolColorMenu.addChild(__s94local4);
      __s94local4.x = __s94local1 * (CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_WIDTH + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE);
      __s94local4.y = __s94local0 * (CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_HEIGHT + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE);
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s94local4, 1.05);
      if (++__s94local1 > CastlePremiumMarketPlaceDialogFlag.COLOR_COLUMN_COUNT - 1) {
        __s94local1 = 0;
        __s94local0++;
      }
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.createBGColorMenu = function () {
    this._bgColorMenu = new __s0local0();
    var __s99local0 = 0;
    var __s99local1 = 0;
    var __s99local2 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    for (var __s99local3 = 0; __s99local3 < __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_COLORS.length; __s99local3++) {
      var __s99local4 = new __s0local0();
      var __s99local5 = new Library.CastleInterfaceElements.btn_color1();
      __s99local4.addChild(__s99local5);
      __s99local2.color = __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_COLORS[__s99local3];
      __s99local5.cc.useFilters([new __s0local2(__s99local2.redMultiplier, __s99local2.greenMultiplier, __s99local2.blueMultiplier, __s99local2.alphaMultiplier, __s99local2.redOffset, __s99local2.greenOffset, __s99local2.blueOffset, __s99local2.alphaOffset)]);
      __s99local4.name = "num" + __s99local3;
      this._bgColorMenu.addChild(__s99local4);
      __s99local4.x = __s99local1 * (CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_WIDTH + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE);
      __s99local4.y = __s99local0 * (CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_HEIGHT + CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE);
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s99local4, 1.05);
      if (++__s99local1 > CastlePremiumMarketPlaceDialogFlag.COLOR_COLUMN_COUNT - 1) {
        __s99local1 = 0;
        __s99local0++;
      }
    }
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.onCrestChangeFromServer = function (__s104param0) {
    this.resetCrest();
    this.layoutManager.updateGameStage();
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.setCrestBonusInfo = function () {
    var __s106local0;
    var __s106local1 = __dep_exact_92d05af59ee2ff30.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_NOEFFECT_TEXT_ID);
    switch (this.crestVO.symbolPosType) {
      case __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED:
        if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.crestVO.symbolType1, "PremiumCrestSymbolVO")) {
          __s106local0 = this.crestVO.symbolType1;
          __s106local1 = __dep_exact_92d05af59ee2ff30.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_DOUBLEEFFECT_TEXT_ID, [__dep_exact_92d05af59ee2ff30.Localize.text(__s106local0.getAdjustedTooltipText(true))]);
        }
        break;
      case __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_TWO_HORIZONTAL:
      case __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_TWO_VERTICAL:
      case __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_FOUR_X:
        if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.crestVO.symbolType1, "PremiumCrestSymbolVO") && __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.crestVO.symbolType2, "PremiumCrestSymbolVO")) {
          if (this.crestVO.symbolType1 == this.crestVO.symbolType2) {
            __s106local0 = this.crestVO.symbolType1;
            __s106local1 = __dep_exact_92d05af59ee2ff30.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_DOUBLEEFFECT_TEXT_ID, [__dep_exact_92d05af59ee2ff30.Localize.text(__s106local0.getAdjustedTooltipText(true))]);
          } else {
            __s106local0 = this.crestVO.symbolType1;
            var __s106local2 = this.crestVO.symbolType2;
            __s106local1 = __dep_exact_92d05af59ee2ff30.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_TWOEFFECT_TEXT_ID, [__s106local0.toolTipText, __s106local2.toolTipText]);
          }
        } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.crestVO.symbolType1, "PremiumCrestSymbolVO")) {
          __s106local0 = this.crestVO.symbolType1;
          __s106local1 = __dep_exact_92d05af59ee2ff30.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_ONEEFFECT_TEXT_ID, [__s106local0.toolTipText]);
        } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.crestVO.symbolType2, "PremiumCrestSymbolVO")) {
          __s106local0 = this.crestVO.symbolType2;
          __s106local1 = __dep_exact_92d05af59ee2ff30.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_ONEEFFECT_TEXT_ID, [__s106local0.toolTipText]);
        }
        break;
      default:
        __s106local1 = __dep_exact_92d05af59ee2ff30.Localize.text(CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_NOEFFECT_TEXT_ID);
    }
    this.itxt_currentBonus.textContentVO.stringValue = __s106local1;
  };
  CastlePremiumMarketPlaceDialogFlag.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.crestGenerator.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeValue));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestChangeFromServer));
    this.hideAllToolTips();
  };
  Object.defineProperty(CastlePremiumMarketPlaceDialogFlag.prototype, "crestGenerator", {
    get: function () {
      return this.subLayerDisp.crestComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketPlaceDialogFlag.prototype, "crestHasChanged", {
    get: function () {
      return this._crestHasChanged;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketPlaceDialogFlag.prototype.enableBasicButton = function (__s121param0, __s121param1) {
    for (var __s121local0 = 0; __s121local0 < __s121param0.length; __s121local0++) {
      __s121param0[__s121local0].enableButton = __s121param1;
    }
  };
  CastlePremiumMarketPlaceDialogFlag.__initialize_static_members = function () {
    CastlePremiumMarketPlaceDialogFlag.NAME = "CastlePremiumMarketPlaceDialogFlag";
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_WIDTH = 20;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_ICON_HEIGHT = 20;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_MARGIN_SIZE = 5;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_COLUMN_COUNT = 6;
    CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_WIDTH = 25;
    CastlePremiumMarketPlaceDialogFlag.COLOR_ICON_HEIGHT = 25;
    CastlePremiumMarketPlaceDialogFlag.COLOR_MARGIN_SIZE = 5;
    CastlePremiumMarketPlaceDialogFlag.COLOR_COLUMN_COUNT = 5;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_UNLOCKED_NOT_BOUGHT_ALPHA = 0.2;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_BACKGROUND_ALPHA = 0.1;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_BACKGROUND_COLOR = 0;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_PANEL_DELIMITER_ALPHA = 0.5;
    CastlePremiumMarketPlaceDialogFlag.SYMBOL_PANEL_DELIMITER_COLOR = 0;
    CastlePremiumMarketPlaceDialogFlag.BONUS_HEADER_TEXT_ID = "dialog_crestSymbol_header";
    CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_NOEFFECT_TEXT_ID = "dialog_crestSymbol_noEffect";
    CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_ONEEFFECT_TEXT_ID = "dialog_crestSymbol_oneEffect";
    CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_TWOEFFECT_TEXT_ID = "dialog_crestSymbol_twoEffect";
    CastlePremiumMarketPlaceDialogFlag.BONUS_COPY_DOUBLEEFFECT_TEXT_ID = "dialog_crestSymbol_doubleEffect";
    CastlePremiumMarketPlaceDialogFlag.RANDOM_CREST_TOOLTIP_ID = "dialog_createAccount_random";
    CastlePremiumMarketPlaceDialogFlag.REVERT_CREST_TOOLTIP_ID = "reset_crest";
    CastlePremiumMarketPlaceDialogFlag.SAVE_CREST_TOOLTIP_ID = "save_crest";
    CastlePremiumMarketPlaceDialogFlag.UNLOCK_CREST_TOOLTIP_ID = "panel_crestSymbol_collectMore";
    CastlePremiumMarketPlaceDialogFlag.BUY_CREST_TOOLTIP_ID = "panel_crestSymbol_buy";
  };
  return CastlePremiumMarketPlaceDialogFlag;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastlePremiumMarketPlaceDialogFlag = __s0local3;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_CastleBuyUnlockedCrestSymbolDialog = require("gge-module:export_CastleBuyUnlockedCrestSymbolDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local3, "ICollectableRendererList", "ISublayer");
__s0local3.__initialize_static_members();
