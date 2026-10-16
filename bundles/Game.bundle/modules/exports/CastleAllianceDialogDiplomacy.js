Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SSetAutoWar = require("gge-module:export_C2SSetAutoWar");
var __dep_export_C2SAllianceChangeDiplomacyVO = require("gge-module:export_C2SAllianceChangeDiplomacyVO");
var __dep_export_C2SGetAllianceInfoVO = require("gge-module:export_C2SGetAllianceInfoVO");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_ModernYesNoDialog = require("gge-module:export_ModernYesNoDialog");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_CastleAllianceRequestDiplomacyDialogProperties = require("gge-module:export_CastleAllianceRequestDiplomacyDialogProperties");
var __dep_export_CastleSuggestPeaceDialogProperties = require("gge-module:export_CastleSuggestPeaceDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleAllianceDialogDiplomacy(__s3param0) {
    var __s3local0 = this;
    __s3local0.startIndexPact = 0;
    __s3local0.startIndexNoAttack = 0;
    __s3local0.startIndexWar = 0;
    __s3local0.autoWarPressed = false;
    __s3local0._lastRequestedAllianceInfo = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).subLayerDisp.mc_inWar.toolTipText = "dialog_alliance_inWarList";
    __s3local0.subLayerDisp.mc_inWar.actLikeButton = true;
    __s3local0.subLayerDisp.mc_noAttack.toolTipText = "dialog_alliance_noAttackList";
    __s3local0.subLayerDisp.mc_noAttack.actLikeButton = true;
    __s3local0.subLayerDisp.mc_pact.toolTipText = "dialog_alliance_pactList";
    __s3local0.subLayerDisp.mc_pact.actLikeButton = true;
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_diplomacyCopy"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_aw_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_allianceDiplomacy_autoWar"));
    __s3local0.setAutoWarCheckBoxVisability();
    __dep_export_ButtonHelper.ButtonHelper.initCheckBox(__s3local0.subLayerDisp.aw_checkbox);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.mc_PactList.btn_up, __s3local0.subLayerDisp.mc_NoAttackList.btn_up, __s3local0.subLayerDisp.mc_WarList.btn_up, __s3local0.subLayerDisp.mc_PactList.btn_down, __s3local0.subLayerDisp.mc_NoAttackList.btn_down, __s3local0.subLayerDisp.mc_WarList.btn_down]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogDiplomacy, __s1param0);
  CastleAllianceDialogDiplomacy.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.addListeners();
    this.setAutoWarCheckBoxVisability();
    this.fillAllStatusLists();
  };
  CastleAllianceDialogDiplomacy.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.removeListeners();
  };
  CastleAllianceDialogDiplomacy.prototype.addListeners = function () {
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_ACTIONLIST_UPDATED, this.bindFunction(this.onActionListUpdate));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_AUTO_WAR_UPDATED, this.bindFunction(this.onAutoWarUpdate));
    this.subLayerDisp.mc_PactList.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.pactMouseWheelHandler));
    this.subLayerDisp.mc_NoAttackList.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.noAttackMouseWheelHandler));
    this.subLayerDisp.mc_WarList.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.warListMouseWheelHandler));
  };
  CastleAllianceDialogDiplomacy.prototype.removeListeners = function () {
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_ACTIONLIST_UPDATED, this.bindFunction(this.onActionListUpdate));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_AUTO_WAR_UPDATED, this.bindFunction(this.onAutoWarUpdate));
    this.subLayerDisp.mc_PactList.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.pactMouseWheelHandler));
    this.subLayerDisp.mc_NoAttackList.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.noAttackMouseWheelHandler));
    this.subLayerDisp.mc_WarList.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.warListMouseWheelHandler));
  };
  CastleAllianceDialogDiplomacy.prototype.onAutoWarUpdate = function (__s13param0) {
    this.setAutoWarCheckBoxVisability();
  };
  CastleAllianceDialogDiplomacy.prototype.setAutoWarCheckBox = function () {
    if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.autoWarOn) {
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.subLayerDisp.aw_checkbox, true);
      this.subLayerDisp.aw_checkbox.toolTipText = "dialog_allianceDiplomacy_autoWar_active_tooltip";
      this.autoWarPressed = true;
    } else {
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.subLayerDisp.aw_checkbox, false);
      this.subLayerDisp.aw_checkbox.toolTipText = "dialog_allianceDiplomacy_autoWar_inactive_tooltip";
      this.autoWarPressed = false;
    }
  };
  CastleAllianceDialogDiplomacy.prototype.sendAutoWarUpdate = function () {
    var __s19local0 = 0;
    __s19local0 = this.autoWarPressed ? 0 : 1;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetAutoWar.C2SSetAutoWar(__s19local0));
  };
  CastleAllianceDialogDiplomacy.prototype.onActionListUpdate = function (__s21param0) {
    this.fillAllStatusLists();
  };
  CastleAllianceDialogDiplomacy.prototype.setAutoWarCheckBoxVisability = function () {
    var __s23local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.allianceRank);
    if (__s23local0 == __dep_exact_26a421b704832cff.AllianceConst.RANK_LEADER || __s23local0 == __dep_exact_26a421b704832cff.AllianceConst.RANK_COLEADER) {
      this.subLayerDisp.aw_checkbox.visible = true;
      this.subLayerDisp.txt_aw_desc.visible = true;
      this.setAutoWarCheckBox();
    } else {
      this.subLayerDisp.aw_checkbox.visible = false;
      this.subLayerDisp.txt_aw_desc.visible = false;
    }
  };
  CastleAllianceDialogDiplomacy.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_allianceDiplomacy"));
  };
  CastleAllianceDialogDiplomacy.prototype.fillStatusList = function (__s29param0, __s29param1) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s29param0.mc_holder);
    var __s29local0 = this.getStatusList(__s29param1);
    var __s29local1 = 0;
    switch (__s29param1) {
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED:
        this.startIndexPact = __dep_exact_f855840627e6e145.int(__s29local1 = __dep_exact_f855840627e6e145.int(this.getCorrectIndex(__s29local0.length, __s29param1)));
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        __s29local0 = __s29local0.concat(this.getStatusList(__dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL));
        this.startIndexNoAttack = __dep_exact_f855840627e6e145.int(__s29local1 = __dep_exact_f855840627e6e145.int(this.getCorrectIndex(__s29local0.length, __s29param1)));
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR:
        this.startIndexWar = __dep_exact_f855840627e6e145.int(__s29local1 = __dep_exact_f855840627e6e145.int(this.getCorrectIndex(__s29local0.length, __s29param1)));
    }
    this.fillList(__s29local1, __s29local0, __s29param0.mc_holder);
    __s29param0.btn_up.visible = __s29local1 > 0;
    __s29param0.btn_down.visible = __s29local1 < __s29local0.length - CastleAllianceDialogDiplomacy.MAX_ITEMS_IN_ONE_LIST;
  };
  CastleAllianceDialogDiplomacy.prototype.fillAllStatusLists = function () {
    this.fillStatusList(this.subLayerDisp.mc_WarList, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR);
    this.fillStatusList(this.subLayerDisp.mc_NoAttackList, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED);
    this.fillStatusList(this.subLayerDisp.mc_PactList, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED);
  };
  CastleAllianceDialogDiplomacy.prototype.getStatusList = function (__s34param0) {
    return this.allianceInfoVO.getStatusListByStatus(__s34param0);
  };
  CastleAllianceDialogDiplomacy.prototype.getCorrectIndex = function (__s36param0, __s36param1) {
    var __s36local0 = 0;
    switch (__s36param1) {
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED:
        __s36local0 = this.startIndexPact;
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        __s36local0 = this.startIndexNoAttack;
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR:
        __s36local0 = this.startIndexWar;
    }
    return __dep_exact_f855840627e6e145.int(Math.max(Math.min(__s36local0, __s36param0 - CastleAllianceDialogDiplomacy.MAX_ITEMS_IN_ONE_LIST), 0));
  };
  CastleAllianceDialogDiplomacy.prototype.fillList = function (__s39param0, __s39param1, __s39param2) {
    var __s39local0 = 0;
    var __s39local1 = __dep_exact_81dacdf05bd32292_2.getDefinitionByName("CastleAllianceDiplomacyItem");
    var __s39local2 = __dep_exact_81dacdf05bd32292_2.getDefinitionByName("Btn_WatchAlliance");
    for (var __s39local3 = __s39param0; __s39local3 < Math.min(__s39param1.length, __s39param0 + CastleAllianceDialogDiplomacy.MAX_ITEMS_IN_ONE_LIST); __s39local3++) {
      var __s39local4 = __s39param1[__s39local3];
      var __s39local5 = new __s39local1();
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s39local5);
      if (__s39local5.itxt_value) {
        __s39local5.itxt_value.textContentVO.textId = __s39local4.allianceName;
      } else {
        __s39local5.itxt_value = this.textFieldManager.registerTextField(__s39local5.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s39local4.allianceName), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
        __s39local5.itxt_value.autoFitToBounds = true;
      }
      __s39local5.properties = __s39local4;
      __s39local5.toolTipText = "dialog_alliance_diplomacyStatus_info";
      __s39local5.y = __s39local0 * 22 + __s39local0 * CastleAllianceDialogDiplomacy.ITEM_SPACE;
      __s39param2.addChild(__s39local5);
      if (__s39local4.allianceStatusConfirmed == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REQUEST) {
        __s39local5.gotoAndStop(2);
        var __s39local6 = new __s39local2();
        __s39local6.x = CastleAllianceDialogDiplomacy.BUTTON_X;
        __s39local6.y = __s39local5.y + 11;
        __s39local6.properties = __s39local4;
        __s39local6.toolTipText = "dialog_alliance_newDiplomacyRequest";
        __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s39local6);
        __s39param2.addChild(__s39local6);
      } else {
        var __s39local7 = new __dep_exact_81dacdf05bd32292.ColorTransform();
        switch (__s39local4.allianceStatus) {
          case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR:
            __s39local7.color = __dep_export_ClientConstColor.ClientConstColor.ALLIANCE_DIPLOMACY_WAR;
            __s39local5.itxt_value.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
            break;
          case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED:
            __s39local7.color = __dep_export_ClientConstColor.ClientConstColor.ALLIANCE_DIPLOMACY_SOFTALLIED;
            break;
          case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED:
            __s39local7.color = __dep_export_ClientConstColor.ClientConstColor.ALLIANCE_DIPLOMACY_ALLIED;
        }
        __s39local5.cc.useFilters([new createjs.ColorFilter(__s39local7.redMultiplier, __s39local7.greenMultiplier, __s39local7.blueMultiplier, __s39local7.alphaMultiplier, __s39local7.redOffset, __s39local7.greenOffset, __s39local7.blueOffset, __s39local7.alphaOffset)]);
      }
      __s39local0++;
    }
  };
  CastleAllianceDialogDiplomacy.prototype.onMouseUp = function (__s48param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s48param0.target)) {
      if (this.isDiplomacyItem(__s48param0.target)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(__s48param0.target.properties.allianceID, __s48param0.target.properties.allianceName, __s48param0.target.properties.allianceStatus, __s48param0.target.properties.allianceStatusConfirmed, __dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog.CAT_DIPLOMACY), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
      if (this.isButtonWatchAlliance(__s48param0.target)) {
        if (__s48param0.target.properties.allianceStatus == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED) {
          var __s48local0 = __dep_export_CastleModel.CastleModel.allianceData.getAllianceInfoVOByID(__s48param0.target.properties.allianceID);
          if (__s48local0 && __s48local0.isInPeaceNegociations) {
            this.showPeaceOffer(__s48local0);
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceRequestDiplomacyDialog.CastleAllianceRequestDiplomacyDialog, new __dep_export_CastleAllianceRequestDiplomacyDialogProperties.CastleAllianceRequestDiplomacyDialogProperties(__s48param0.target.properties.allianceID, __s48param0.target.properties.allianceStatus));
          }
        } else if (__s48param0.target.properties.allianceStatus == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceRequestDiplomacyDialog.CastleAllianceRequestDiplomacyDialog, new __dep_export_CastleAllianceRequestDiplomacyDialogProperties.CastleAllianceRequestDiplomacyDialogProperties(__s48param0.target.properties.allianceID, __s48param0.target.properties.allianceStatus));
        } else {
          __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
          __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceInfoVO.C2SGetAllianceInfoVO(__s48param0.target.properties.allianceID));
          this._lastRequestedAllianceInfo = __dep_exact_f855840627e6e145.int(__s48param0.target.properties.allianceID);
        }
      }
      switch (__s48param0.target) {
        case this.subLayerDisp.mc_PactList.btn_up:
          this.startIndexPact--;
          this.fillStatusList(this.subLayerDisp.mc_PactList, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED);
          break;
        case this.subLayerDisp.mc_PactList.btn_down:
          this.startIndexPact++;
          this.fillStatusList(this.subLayerDisp.mc_PactList, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED);
          break;
        case this.subLayerDisp.mc_NoAttackList.btn_up:
          this.startIndexNoAttack--;
          this.fillStatusList(this.subLayerDisp.mc_NoAttackList, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED);
          break;
        case this.subLayerDisp.mc_NoAttackList.btn_down:
          this.startIndexNoAttack++;
          this.fillStatusList(this.subLayerDisp.mc_NoAttackList, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED);
          break;
        case this.subLayerDisp.mc_WarList.btn_up:
          this.startIndexWar--;
          this.fillStatusList(this.subLayerDisp.mc_WarList, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR);
          break;
        case this.subLayerDisp.mc_WarList.btn_down:
          this.startIndexWar++;
          this.fillStatusList(this.subLayerDisp.mc_WarList, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR);
          break;
        case this.subLayerDisp.mc_inWar:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_inWarList"), __dep_exact_92d05af59ee2ff30.Localize.text("help_inWar"));
          break;
        case this.subLayerDisp.mc_noAttack:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_noAttackList"), __dep_exact_92d05af59ee2ff30.Localize.text("help_noAttack"));
          break;
        case this.subLayerDisp.mc_pact:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_pactList"), __dep_exact_92d05af59ee2ff30.Localize.text("help_pact"));
          break;
        case this.subLayerDisp.aw_checkbox:
          this.sendAutoWarUpdate();
      }
    }
  };
  CastleAllianceDialogDiplomacy.prototype.isButtonWatchAlliance = function (__s59param0) {
    return __dep_export_ButtonHelper.ButtonHelper.hasBasicButton(__s59param0) && __s59param0.toolTipText == "dialog_alliance_newDiplomacyRequest";
  };
  CastleAllianceDialogDiplomacy.prototype.isDiplomacyItem = function (__s61param0) {
    return __dep_export_ButtonHelper.ButtonHelper.hasBasicButton(__s61param0) && __s61param0.toolTipText == "dialog_alliance_diplomacyStatus_info";
  };
  CastleAllianceDialogDiplomacy.prototype.onAllianceDataUpdated = function (__s63param0) {
    if (__s63param0.allianceInfoVO) {
      if (__s63param0.allianceInfoVO.allianceId == this._lastRequestedAllianceInfo) {
        __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
        __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
        if (__s63param0.allianceInfoVO.isInPeaceNegociations) {
          this.showPeaceOffer(__s63param0.allianceInfoVO);
        }
      }
    } else {
      __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
      __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceInfoVO.C2SGetAllianceInfoVO(__dep_export_CastleModel.CastleModel.userData.allianceID));
    }
  };
  CastleAllianceDialogDiplomacy.prototype.showPeaceOffer = function (__s69param0) {
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.isCrossplay()) {
      var __s69local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_allianceDiplomacy_peaceOffer_copy", [__s69param0.allianceName]);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernYesNoDialog.ModernYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties("attention", __s69local0, function () {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeDiplomacyVO.C2SAllianceChangeDiplomacyVO(__s69param0.allianceId, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL));
      }));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleReceivedPeaceOfferDialog.CastleReceivedPeaceOfferDialog, new __dep_export_CastleSuggestPeaceDialogProperties.CastleSuggestPeaceDialogProperties(__s69param0.peaceOfferVO));
    }
  };
  Object.defineProperty(CastleAllianceDialogDiplomacy.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogDiplomacy.prototype.warListMouseWheelHandler = function (__s77param0) {
    this.startIndexWar += __dep_exact_f855840627e6e145.int(this.scrollList(__s77param0));
    this.fillStatusList(this.subLayerDisp.mc_WarList, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR);
  };
  CastleAllianceDialogDiplomacy.prototype.noAttackMouseWheelHandler = function (__s79param0) {
    this.startIndexNoAttack += __dep_exact_f855840627e6e145.int(this.scrollList(__s79param0));
    this.fillStatusList(this.subLayerDisp.mc_NoAttackList, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED);
  };
  CastleAllianceDialogDiplomacy.prototype.pactMouseWheelHandler = function (__s81param0) {
    this.startIndexPact += __dep_exact_f855840627e6e145.int(this.scrollList(__s81param0));
    this.fillStatusList(this.subLayerDisp.mc_PactList, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED);
  };
  CastleAllianceDialogDiplomacy.prototype.scrollList = function (__s83param0) {
    var __s83local0 = 0;
    if (__s83param0.delta < 0) {
      __s83local0 = -1;
    } else if (__s83param0.delta > 0) {
      __s83local0 = 1;
    }
    return __s83local0;
  };
  CastleAllianceDialogDiplomacy.__initialize_static_members = function () {
    CastleAllianceDialogDiplomacy.ITEM_SPACE = 5;
    CastleAllianceDialogDiplomacy.MAX_ITEMS_IN_ONE_LIST = 9;
    CastleAllianceDialogDiplomacy.BUTTON_X = 60;
  };
  return CastleAllianceDialogDiplomacy;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceDialogDiplomacy = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleAllianceRequestDiplomacyDialog = require("gge-module:export_CastleAllianceRequestDiplomacyDialog");
var __dep_export_CastleReceivedPeaceOfferDialog = require("gge-module:export_CastleReceivedPeaceOfferDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
__s0local1.__initialize_static_members();
