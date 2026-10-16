Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_DonationEventTrackingEvent = require("gge-module:export_DonationEventTrackingEvent");
var __dep_export_C2SGetDonationPointTypeVO = require("gge-module:export_C2SGetDonationPointTypeVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ClickFeedbackButtonHoverTabButton = require("gge-module:export_ClickFeedbackButtonHoverTabButton");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __dep_export_CastleStandardYesNoDialogProperties = require("gge-module:export_CastleStandardYesNoDialogProperties");
var __dep_export_ModernYesNoBlueDialog = require("gge-module:export_ModernYesNoBlueDialog");
var __dep_export_DonationEventDialogDonate = require("gge-module:export_DonationEventDialogDonate");
var __dep_export_DonationEventDialogRanking = require("gge-module:export_DonationEventDialogRanking");
var __s0local0 = function (__s1param0) {
  function DonationEventDialog() {
    return __s1param0.call(this, DonationEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DonationEventDialog, __s1param0);
  DonationEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_shop], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    for (var __s5local0 = 0; __s5local0 < DonationEventDialog.NUM_MAX_TABS; __s5local0++) {
      __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp["tab_" + __s5local0], 1, __dep_export_ClickFeedbackButtonHoverTabButton.ClickFeedbackButtonHoverTabButton);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tenthAnniversary_timer"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_speechBubble.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_mainDonationEvent_architect")).autoFitToBounds = true;
    this.dialogDisp.mc_char.mc_selected.visible = false;
    this.dialogDisp.mc_char.mouseChildren = false;
    this.dialogDisp.mc_char.actLikeButton = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_shop.toolTipText = "eventBuilding_apprenticeSmith";
  };
  DonationEventDialog.prototype.showLoaded = function (__s9param0) {
    var __s9local0 = this;
    if (__s9param0 === undefined) {
      __s9param0 = null;
    }
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    if (this.eventVO) {
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRemoveEvent));
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
      for (var __s9local1 = 0; __s9local1 < DonationEventDialog.NUM_MAX_TABS; __s9local1++) {
        this.dialogDisp["tab_" + __s9local1].visible = false;
        this.dialogDisp["tab_" + __s9local1].mc_ranking_1.visible = false;
        this.dialogDisp["tab_" + __s9local1].mc_ranking_2.visible = false;
        this.dialogDisp["tab_" + __s9local1].mc_bubble1.visible = false;
        this.dialogDisp["tab_" + __s9local1].mc_bubble2.visible = false;
      }
      this._subLayer = new Map();
      var __s9local2 = 0;
      this.tab_types = [];
      this.eventVO.settingVO.pointTypeVOs.forEach(function (__s15param0) {
        __s9local0._subLayer.set(__s15param0.name, new __dep_export_DonationEventDialogDonate.DonationEventDialogDonate(__s9local0.dialogDisp.sublayer_type));
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s9local0.dialogDisp["tab_" + __s9local2].mc_icon_1);
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s9local0.dialogDisp["tab_" + __s9local2].mc_icon_2);
        __s9local0.dialogDisp["tab_" + __s9local2].mc_icon_1.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("DonationIcon_" + __s15param0.name, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(DonationEventDialog.NAME)));
        __s9local0.dialogDisp["tab_" + __s9local2].mc_icon_2.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("DonationIcon_" + __s15param0.name, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(DonationEventDialog.NAME)));
        __s9local0.tab_types.push(__s15param0);
        __s9local0.dialogDisp["tab_" + __s9local2].visible = true;
        __s9local0.dialogDisp["tab_" + __s9local2].toolTipText = "dialog_mainDonationEvent_tooltip_" + __s15param0.name;
        __s9local2++;
      });
      this._subLayer.set(DonationEventDialog.TAB_RANKING, new __dep_export_DonationEventDialogRanking.DonationEventDialogRanking(this.dialogDisp.sublayer_ranking));
      this.dialogDisp["tab_" + __s9local2].mc_ranking_1.visible = true;
      this.dialogDisp["tab_" + __s9local2].mc_ranking_2.visible = true;
      this.dialogDisp["tab_" + __s9local2].visible = true;
      this.dialogDisp["tab_" + __s9local2].toolTipText = "ranking";
      __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDonationPointTypeVO.C2SGetDonationPointTypeVO());
      this.changeCategory(this.eventVO.settingVO.pointTypeVOs[0].name);
      this.dialogDisp.mc_speechBubble.visible = false;
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_DONATION_EVENT, [__dep_export_DonationEventTrackingEvent.DonationEventTrackingEvent.OPENED_DONATION_MAIN_DIALOG]);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_shop, !!this.apprenticeSmithEventVO);
    } else {
      this.hide();
    }
  };
  DonationEventDialog.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __s1param0.prototype.hide.call(this);
  };
  DonationEventDialog.prototype.onClick = function (__s20param0) {
    if (__s20param0.target != this.dialogDisp.mc_char && this.dialogDisp.mc_speechBubble.visible) {
      this.dialogDisp.mc_speechBubble.visible = false;
      this.dialogDisp.mc_char.mc_selected.visible = false;
    }
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target)) {
      __s1param0.prototype.onClick.call(this, __s20param0);
      switch (__s20param0.target) {
        case this.dialogDisp.btn_close:
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._currentSublayer, "DonationEventDialogDonate") && this._currentSublayer.selectedPoints() > 0) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_ModernYesNoBlueDialog.ModernYesNoBlueDialog, new __dep_export_CastleStandardYesNoDialogProperties.CastleStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("attention"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_donationEvent_maxWarning", [this._currentSublayer.selectedPoints()]), this.bindFunction(this.hide)));
            return;
          }
          this.hide();
          break;
        case this.dialogDisp.tab_0:
        case this.dialogDisp.tab_1:
        case this.dialogDisp.tab_2:
        case this.dialogDisp.tab_3:
          var __s20local0 = parseInt(__s20param0.target.name.charAt(4));
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._currentSublayer, "DonationEventDialogDonate") && this._currentSublayer.selectedPoints() > 0) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_ModernYesNoBlueDialog.ModernYesNoBlueDialog, new __dep_export_CastleStandardYesNoDialogProperties.CastleStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("attention"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_donationEvent_maxWarning", [this._currentSublayer.selectedPoints()]), this.bindFunction(this.switchTabCheck), null, null, "", "", [__s20local0]));
            return;
          }
          this.switchTabCheck([__s20local0]);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mainDonationEvent_helpPopup"));
          break;
        case this.dialogDisp.btn_shop:
          this.apprenticeSmithEventVO.openMerchantDialog(true, this.getCurrencyPackageID());
      }
    }
  };
  DonationEventDialog.prototype.onMouseOver = function (__s27param0) {
    __s1param0.prototype.onMouseOver.call(this, __s27param0);
    if (__s27param0.target == this.dialogDisp.mc_char) {
      this.dialogDisp.mc_speechBubble.visible = !this.dialogDisp.mc_speechBubble.visible;
      this.dialogDisp.mc_char.mc_selected.visible = this.dialogDisp.mc_speechBubble.visible;
    }
  };
  DonationEventDialog.prototype.onMouseOut = function (__s30param0) {
    __s1param0.prototype.onMouseOut.call(this, __s30param0);
    if (__s30param0.target == this.dialogDisp.mc_char) {
      this.dialogDisp.mc_speechBubble.visible = false;
      this.dialogDisp.mc_char.mc_selected.visible = false;
    }
  };
  DonationEventDialog.prototype.getCurrencyPackageID = function () {
    var __s33local0 = this.apprenticeSmithEventVO;
    if (__s33local0) {
      var __s33local1 = __s33local0.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType);
      var __s33local2 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_IMPERIAL_PATRONAGE_CHARTER);
      if ((__s33local1 = __s33local1.filter(function (__s36param0) {
        return __s36param0.firstReward.isCombineAbleWith(__s33local2);
      })).length > 0) {
        return __s33local1[0].packageID;
      }
    }
    return -1;
  };
  DonationEventDialog.prototype.switchTabCheck = function (__s39param0) {
    if (__s39param0[0] < this.typesAmount) {
      this.changeCategory(this.tab_types[__s39param0[0]].name);
    } else {
      this.changeCategory(DonationEventDialog.TAB_RANKING);
    }
  };
  DonationEventDialog.prototype.changeCategory = function (__s43param0) {
    if (this._currentCategory != __s43param0) {
      __s1param0.prototype.changeCategory.call(this, __s43param0);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this.tab_types.find(function (__s46param0) {
        return __s46param0.name == __s43param0;
      })]);
      for (var __s43local0 = 0; __s43local0 < DonationEventDialog.NUM_MAX_TABS; __s43local0++) {
        if (__s43local0 < this.tab_types.length && this._currentCategory == this.tab_types[__s43local0].name || __s43local0 == this.tab_types.length && this._currentCategory == DonationEventDialog.TAB_RANKING) {
          __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this.dialogDisp["tab_" + __s43local0]).selected();
        } else {
          __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this.dialogDisp["tab_" + __s43local0]).deselected();
        }
      }
    }
  };
  DonationEventDialog.prototype.onTimer = function (__s52param0 = null) {
    if (this.eventVO) {
      var __s52local0 = this.eventVO.remainingEventTimeInSeconds;
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_time, __s52local0);
    }
  };
  DonationEventDialog.prototype.onRemoveEvent = function (__s55param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_shop, !!this.apprenticeSmithEventVO);
    if (__s55param0.specialEventVO && __s55param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_DONATION) {
      this.hide();
    }
  };
  DonationEventDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s58local0 = 1;
      if (this.disp.stage.stageHeight < __s58local0 * 600) {
        __s58local0 = this.disp.stage.stageHeight / 600;
      }
      __s58local0 = Math.min(__s58local0, 1);
      this.disp.x = this.disp.stage.stageWidth * 0.5;
      this.disp.y = this.disp.stage.stageHeight * 0.5;
      this.disp.scaleX = this.disp.scaleY = __s58local0;
      this.disp.x = this.disp.x | 0;
      this.disp.y = this.disp.y | 0;
      this.dialogDisp.mc_speechBubble.x = Math.max(-570, -this.disp.stage.stageWidth / 2 + 160);
      this.dialogDisp.mc_char.x = Math.max(-570, -this.disp.stage.stageWidth / 2 + 157);
      this.dialogDisp.mc_char.visible = this.disp.stage.stageWidth >= 1350;
      this.dialogDisp.mc_char.mc_selected.visible &= this.dialogDisp.mc_speechBubble.visible &= this.dialogDisp.mc_char.visible;
    }
  };
  Object.defineProperty(DonationEventDialog.prototype, "typesAmount", {
    get: function () {
      return this.eventVO.settingVO.pointTypeVOs.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_DONATION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialog.prototype, "apprenticeSmithEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR);
    },
    enumerable: true,
    configurable: true
  });
  DonationEventDialog.NAME = "DonationEventMain_1";
  DonationEventDialog.TAB_RANKING = "ranking";
  DonationEventDialog.NUM_MAX_TABS = 3;
  return DonationEventDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.DonationEventDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
